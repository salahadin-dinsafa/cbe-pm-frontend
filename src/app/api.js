import axios from 'axios';

import { setUser, setAvatar } from '../features/profileSlice';
import { setIsLogged } from '../features/loginSlice';
import { addDistricts } from '../features/districtSlice';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

const getImage = (dispatch) => {
    api.get('/users/image', {
        responseType: 'blob'
    })
        .then(response => {
            const newBlob = new Blob([response.data], { type: response.data.type })
            const objectUrl = URL.createObjectURL(newBlob);
            dispatch(setAvatar(objectUrl))
        })
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
            getImage(dispatch);
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
        }).catch((err) => {
            setLoading(false);
            setError(err.message);
        })
    setLoading(false)
}

export const login = (props) => {
    const {
        loginUser,
        dispatch,
        setLoading,
        setError
    } = props;
    setLoading(true);
    api.post('/auth/login', {
        ...loginUser
    }).then(response => {
        console.log(response);
        localStorage.setItem('token', response.data);
        getProfile(dispatch, setLoading)
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
        console.log(response);
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
    const { setError, date, performances } = props;
    api.post('/performance', {
        date,
        performances
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            let error =
                typeof err.response.data.error === 'string'
                    ? [err.response.data.error] : err.response.data.error;

            setError(error)
        })
}

export default api;