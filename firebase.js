import {initializeApp} from "firebase/app";  // This Import Is Very Neccesroy 


// Give This Data From Firebase 
const firebaseConfig = {
    apiKey: "AIzaSyAh9l9-EfERZ4PkplKf7MVxPe5_mR0i56s",
    authDomain: "post-job-3d44e.firebaseapp.com",
    projectId: "post-job-3d44e",
    storageBucket: "post-job-3d44e.firebasestorage.app",
    messagingSenderId: "1043918250461",
    appId: "1:1043918250461:web:8ba01716c00f8d5010d634",
    databaseURL: "https://post-job-3d44e-default-rtdb.firebaseio.com/",
  };

  // Make Sure To export THis 
export const app = initializeApp(firebaseConfig)