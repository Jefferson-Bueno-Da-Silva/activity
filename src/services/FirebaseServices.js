import firebase from '../configs/firebaseConfigs';

export default class firebaseServices {
  async creatTodo(title){
    const index = await this.getTodos("/0/cards");
    const todoRef = firebase.database().ref(`todos/0/cards/${index.length}`);
    todoRef.update({
      content: title,
      id: index.length + 1,
      labels: [
        "#54e1f7"
      ],
      user: "https://avatars.githubusercontent.com/u/62211295"
    });
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
}