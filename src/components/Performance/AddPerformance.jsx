'use client'

import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import AddPerformanceCard from './AddPerformanceCard';


const AddPerformance = () => {
    const [file, setFile] = useState([]);
    const [error, setError] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess)
            navigate('/', { replace: true })
    }, [isSuccess])

    return <AddPerformanceCard
        navigate={navigate}
        error={error}
        setError={setError}
        setIsSuccess={setIsSuccess}
        file={file}
        setFile={setFile}
        loading={loading}
        setLoading={setLoading} />
}

export default AddPerformance