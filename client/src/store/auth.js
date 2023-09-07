import {makeAutoObservable} from 'mobx';
import AuthService from '../services/authServise';
import axios from 'axios';
import {API_URL} from "../http/api";

class Auth{
    
    user = {};
    email = '';
    password = '';
    authError = '';
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user) {
        this.user = user;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setAuthError(error) {
        this.authError = error;
    }

    async login () {
        try {
            const response = await AuthService.login(this.email, this.password);
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);
            this.setAuth(true);
        } catch (e) {
            this.setAuthError(e.response?.data?.message);
        } finally {
            
        }
    }

    async logout () {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setUser({});
            this.setAuth(false);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials:true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

}

export default new Auth();