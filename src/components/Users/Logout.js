import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../service/authService';

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout()
            .then(() => {
                navigate('/');
            });
    });

    return null;
}