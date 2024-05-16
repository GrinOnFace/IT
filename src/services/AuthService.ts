import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/AuthResponse";

export default class AuthService {
    static async login(email:string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('dcdb9bfa3ca4.vps.myjino.ru:49319/api/auth/sign-in', { email, password })
    } 

    static async registration(email:string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/auth/sign-up', { email, password })
    } 

    static async logout(email:string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/api/users/sign-out')
    } 
}