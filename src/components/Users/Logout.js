import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import * as authService from '../../service/authService';

export const Logout = () => {
    const navigate = useNavigate();
    //const { auth } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                navigate('/');
            });
    });

    return null;
}