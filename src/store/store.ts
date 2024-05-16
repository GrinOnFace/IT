import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

class AppStore {
  isAuth = false
  // isReg = false

  constructor() {
      makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
      this.isAuth = bool
  }

  // setReg(bool: boolean) {
  //     this.isReg = bool
  // }

  async login(email: string, password: string) {
      try {
          const response = await AuthService.login(email, password)
          console.log(response)
          localStorage.setItem('token', response.data.accessToken)
          this.setAuth(true)
      } catch (e) {
          console.log(e.response?.data?.message)
          alert('Ошибка авторизации')
      }
  }

  async registration(email: string, password: string) {
      try {
          const response = await AuthService.registration(email, password)
          console.log(response)
          localStorage.setItem('token', response.data.accessToken)
          this.setAuth(true)
      } catch (e) {
          alert("Ошибка регистрации")
          console.log(e.response?.data?.message)
      }
  }

  async logout(email: string, password: string) {
      try {
        const response = await AuthService.logout(email, password)
        console.log(response)
        localStorage.removeItem('token')
        this.setAuth(false)
      } catch (e) {
          console.log(e.response?.data?.message)
      }
  }
}

const store = new AppStore();

export default store;
