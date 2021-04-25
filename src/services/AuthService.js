import firebase from '../configs/firebaseConfigs';

export default class AuthServices {
  singOut(){
    firebase.auth().signOut();
    return;
  }
  async singIn(email, senha){
    await firebase.auth().signInWithEmailAndPassword(email.value, senha.value);
    return;
  }
}