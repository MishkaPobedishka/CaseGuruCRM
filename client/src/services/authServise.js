import api from '../http/api';

export default class AuthService {
    static async login(email, password) {
        return await api.post('/login', {email, password})
    }

    static async logout() {
        return api.post('logout')
    }
}