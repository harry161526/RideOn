import FireBase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMssUqMho8jf_MaSK1ykby35PE87xMTL4",
    authDomain: "rideon-77eab.firebaseapp.com",
    projectId: "rideon-77eab",
    storageBucket: "rideon-77eab.appspot.com",
    messagingSenderId: "468341126473",
    appId: "1:468341126473:web:92e263d81e0a8607a85698"
  };

  const firebase = FireBase.initializeApp(firebaseConfig);

  export const storage = firebase.storage();