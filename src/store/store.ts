import { makeAutoObservable } from "mobx";

class AppStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

const store = new AppStore();

export default store;
