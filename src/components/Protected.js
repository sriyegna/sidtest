import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import instance from '../utils/axios';

function Protected() {
    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        instance.get("/protected", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
            navigate('/login')
        })
    }, [])
    
    return (
        <div>
            <h1>Protected</h1>
        </div>
    )
}

export default Protected
