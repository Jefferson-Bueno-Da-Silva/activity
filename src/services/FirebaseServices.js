import firebase from '../configs/firebaseConfigs';

export default class firebaseServices {
  async creatTodo(data, users){
    const {description, title, user} = data
    const index = await this.getTodos("/0/cards");
    const indexUsers = index ? index.length : 0;
    const todoRef = firebase.database().ref(`todos/0/cards/${indexUsers}`);

    todoRef.update({
      title: title,
      content: description,
      id: (indexUsers + 1),
      user: user
    });
  }

  updateOrder( data ){
    let todoRef = firebase.database().ref("todos");
    data.map( (value) => {
      return JSON.parse( JSON.stringify(value ) )
    } )
    todoRef.set( data );
  }

  async getTodos(ref) {
    const todoRef = firebase.database().ref(`todos${ref}`);
    return (
      await todoRef.get().then( (snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val()
        }
      } )
    );
  }
  
  onTodos(){
    var starCountRef = firebase.database().ref(`todos`);
    return starCountRef;
  }

  async getUsers(){
    const todoRef = firebase.database().ref(`users`);
    return (
      await todoRef.get().then( (snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val()
        }
      } )
    );
  }
}