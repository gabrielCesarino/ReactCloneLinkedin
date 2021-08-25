import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0XWOXXmkFMT1wjVGIlTZE8glXWQO8RCI",
    authDomain: "linkedin-clone-b2fc0.firebaseapp.com",
    projectId: "linkedin-clone-b2fc0",
    storageBucket: "linkedin-clone-b2fc0.appspot.com",
    messagingSenderId: "758243105512",
    appId: "1:758243105512:web:83431d9dc14e443676075d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};