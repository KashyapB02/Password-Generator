import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCyFwLY1Ft1kuRc0kkTIDR7FjuZnpmxZrc",
    authDomain: "javascript-password-generator.firebaseapp.com",
    projectId: "javascript-password-generator",
    storageBucket: "javascript-password-generator.appspot.com",
    messagingSenderId: "794761088407",
    appId: "1:794761088407:web:a824725f1f3642333b88d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;