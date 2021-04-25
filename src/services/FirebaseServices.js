import firebase from '../configs/firebaseConfigs';

export default class firebaseServices {
  // CREATE:
  async creatTodo(data){
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

  saveLogs( email, uid, card, fromName, toName ){
    const todoRef = firebase.database().ref(`logs/`);
    let json = JSON.parse(JSON.stringify(card));

    todoRef.push({
      card : json,
      email,
      fromName,
      toName,
      uid
    });
  }
  // UPDATE :

  async updateTodo( listIndex , data ){
    const {description, title, index, user} = data
    const todoRef = firebase.database().ref(`todos/${listIndex}/cards/${index}`);

    todoRef.update({
      title: title,
      content: description,
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

  // GET :
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

  // Listener
  onTodos(){
    var starCountRef = firebase.database().ref(`todos`);
    return starCountRef;
  }

}