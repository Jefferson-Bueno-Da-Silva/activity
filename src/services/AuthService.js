import firebase from '../configs/firebaseConfigs';

export default class AuthServices {
  constructor(){
    this.auth = firebase.auth();
  }
  singOut(){
    this.auth.singOut();
    return;
  }
}