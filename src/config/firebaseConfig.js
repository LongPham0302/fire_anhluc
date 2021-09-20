import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import firebaseConfig from './firebase';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// const tasksRef = database.ref('task');
// tasksRef.push({
//         title: 'tieu de',
//         name: 'abcd'
//     })
// database.ref("task").set({
//     username: 'name',
//     email: 'email',
//     profile_picture: 'anh01'
// })
export default database;