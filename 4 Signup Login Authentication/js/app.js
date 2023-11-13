import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

// signup
let button = document.querySelector('#sbtn')
button.addEventListener('click', () => {

let getemail = document.querySelector('#semail')
let getpass = document.querySelector('#spassword')


    createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error code is', errorCode)
            console.log('error message is', errorMessage);;
        });
})

// signup end


