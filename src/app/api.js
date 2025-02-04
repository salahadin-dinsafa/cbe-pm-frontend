import axios from 'axios';
import moment from 'moment';

import { setUser, setAvatar } from '../features/profileSlice';
import { setIsLogged } from '../features/loginSlice';
import { addDistricts } from '../features/districtSlice';
import { addTerminals } from '../features/terminalSlice';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export const getImage = (dispatch) => {
    api.get('/users/image', {
        responseType: 'blob'
    })
        .then(response => {
            const newBlob = new Blob([response.data], { type: response.data.type })
            const objectUrl = URL.createObjectURL(newBlob);
            dispatch(setAvatar(objectUrl))
        }).catch(_err => { })
}

export const getProfile = (dispatch, setLoading) => {
    setLoading(true);
    api.get('/users/profile')
        .then(response => {
            setLoading(false);
            dispatch(setIsLogged(true))
            dispatch(setUser({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                phoneNumber: response.data.phoneNumber,
                district: response.data.district
                    ? response.data.district.name : response.data.managerDistrict
                        ? response.data.managerDistrict.name : null,
                role: response.data.role
            }))
        }).catch(_err => {
            setLoading(false);
            dispatch(setIsLogged(false));
        })
    setLoading(false);
}

export const getDistricts = ({ setLoading, setError, dispatch }) => {
    setLoading(true);
    api.get('/district')
        .then(response => {
            setLoading(false);
            dispatch(addDistricts(response.data));
            setError('')
        }).catch((err) => {
            setLoading(false);
            setError(err.message);
        })
    setLoading(false)
}

export const login = (props) => {
    const { loginUser, dispatch, setLoading, setError, setIsSuccess } = props;

    setLoading(true);
    api.post('/auth/login', {
        ...loginUser
    }).then(response => {
        setIsSuccess(true)
        dispatch(setIsLogged(true))
        localStorage.setItem('token', response.data);
        setLoading(false);
        setError([])
    }).catch(err => {
        dispatch(setIsLogged(false));
        let error =
            typeof err.response.data.error === 'string'
                ? [err.response.data.error] : err.response.data.error;

        setError(error)
        setLoading(false);
    })

}

export const UpdateUser = (props) => {
    const { updateUser, handleUpdateClick, navigatar, setError, setPhoneNumber, dispatch } = props;
    api.patch('/users/profile', {
        ...updateUser
    }).then(response => {
        dispatch(setUser({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            phoneNumber: response.data.phoneNumber,
            district: response.data.district
                ? response.data.district.name : response.data.managerDistrict
                    ? response.data.managerDistrict.name : null,
            role: response.data.role
        }))
        handleUpdateClick();
        setError([])
        navigatar(`/profile`)
    }).catch(err => {
        let error =
            typeof err.response.data.error === 'string'
                ? [err.response.data.error] : err.response.data.error;
        setError(error);
        setPhoneNumber();
    })
}

export const addPerformance = (props) => {
    const { setError, date, performances, setIsSuccess, average, setLoading } = props;
    setLoading(true);
    api.post('/performance', {
        date,
        average,
        performances
    }).then(_response => {
        setIsSuccess(true);
        setError([]);
        setLoading(false);
    }).catch(err => {
        let error =
            typeof err.response.data.error === 'string'
                ? [err.response.data.error] : err.response.data.error;
        setError(error)
        setLoading(false);
    })
}

export const addUser = (props) => {
    const { firstName, lastName, phoneNumber, selectedRole, role,
        setLoading, setError, setIsSuccess, district } = props;
    setLoading(true);
    setIsSuccess(false);
    if (role === 'ADMIN') {
        api.post('/admin/addmg',
            {
                firstName,
                lastName,
                phoneNumber,
                district
            }
        ).then(_response => {
            setLoading(false);
            setIsSuccess(true);
            setError([])
        }).catch(err => {
            setLoading(false)
            setIsSuccess(false);
            let error =
                typeof err.response.data.error === 'string'
                    ? [err.response.data.error] : err.response.data.error;

            setError(error)
        })
    } else {
        api.post('/mg/addStaff',
            {
                firstName,
                lastName,
                phoneNumber,
                role: selectedRole
            }
        ).then(_response => {
            setLoading(false);
            setIsSuccess(true);
            setError([])
        }).catch(err => {
            setLoading(false)
            setIsSuccess(false);
            let error =
                typeof err.response.data.error === 'string'
                    ? [err.response.data.error] : err.response.data.error;

            setError(error)
        })
    }
}

export const getOneTerminalPerformances = (props) => {
    const { terminalID, setLoading, setError, setPerformances, setAverage } = props;
    api.get(`/performance/${terminalID}`)
        .then(response => {
            const performances = response.data.map(performance => {
                return {
                    ...performance,
                    date: `${new Date(performance.date).getUTCDate()}-${new Date(performance.date).getUTCMonth() + 1}-${new Date(performance.date).getUTCFullYear()}`
                }
            })
            setPerformances(performances)
            let sum = 0;
            performances.map(performance => {
                sum += performance.inService;
            })

            setAverage([
                {
                    average: Math.floor(sum / performances.length),
                    name: 'Average performance'
                },
                {
                    average: Math.floor(100 - (sum / performances.length)),
                    name: 'Left performance'
                },

            ])
            setLoading(false);
            setError([])
        })
        .catch(err => {
            let error =
                typeof err.response.data.error === 'string'
                    ? [err.response.data.error] : err.response.data.error;
            setLoading(false);
            setError(error)
            console.log(err);
        })
}

export const getPerformanceList = (props) => {
    const { setLoading, setError, dispatch, date, district, searchValue } = props;

    const newDate = moment(date).utcOffset(0, true);
    newDate.hours(0)
    newDate.minutes(0)
    newDate.seconds(0);
    newDate.milliseconds(0);

    setLoading(true);
    api.get(`/performance?district=${district}&${date ? `date=${newDate.toISOString()}` : ''}`, {
    }).then(response => {
        response.data.sort((a, b) => {
            return b.inService - a.inService
        })
        if (response.data.length > 0 && searchValue) {
            response.data = response.data.filter(performance => {
                if (performance.terminalID.includes(searchValue) || performance.name.includes(searchValue))
                    return performance;
            })
        }
        dispatch(addTerminals(response.data));
        setLoading(false);
        setError([])
    }).catch(err => {
        setLoading(false)
        let error =
            typeof err.response.data.error === 'string'
                ? [err.response.data.error] : err.response.data.error;

        setError(error)
    })
}

export default api;