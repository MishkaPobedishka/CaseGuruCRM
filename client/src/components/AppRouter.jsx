import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { LOGIN_ROUTE, STAFF_ROUTE } from '../utils/const';
import auth from '../store/auth';


const AppRouter = observer( () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        if (localStorage.getItem('token')) {
            await auth.checkAuth();
        }
    }, []);

    return auth.isAuth ?
    (
        <Routes>
            {
                privateRoutes.map(({path, Component}) =>
                    <Route key = {path} path = {path} element = {<Component/>} exact = {true} />
                )
            }
            <Route path = '*' element = {<Navigate to = {STAFF_ROUTE}/>}/>
        </Routes>
    )
    :
    (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key = {path} path = {path} element = {<Component/>} exact = {true} />
                )
            }
            <Route path = '*' element = {<Navigate to = {LOGIN_ROUTE}/>}/>
        </Routes>
    )
});

export default AppRouter;