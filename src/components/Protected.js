import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import instance from '../utils/axios';

function Protected() {
    let navigate = useNavigate()

    useEffect(() => {
        //store token in cookies
        const token = localStorage.getItem('token');
        console.log(token)
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
