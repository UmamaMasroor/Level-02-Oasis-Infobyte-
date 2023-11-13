import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAO2nfLDU7Fk8YIZ4iSkbDY9rmC4642WNE",
    authDomain: "oasis-infobyte.firebaseapp.com",
    projectId: "oasis-infobyte",
    storageBucket: "oasis-infobyte.appspot.com",
    messagingSenderId: "831319508518",
    appId: "1:831319508518:web:fa3b6b2805c0315069c8e7",
    measurementId: "G-WXGKXCM7KF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// login

let logbtn = document.querySelector('#lbtn')
logbtn.addEventListener('click',()=>{

let email = document.querySelector('#lemail')
let password = document.querySelector('#lpassword')

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     console.log(user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('login error',errorCode);
      console.log('login error message',errorMessage);
    });
})
