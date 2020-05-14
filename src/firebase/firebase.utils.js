import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyArlnig4Za7AmMiksfZlHfroRHEiwtCNfE",
	authDomain: "ecommercedb-e1bd8.firebaseapp.com",
	databaseURL: "https://ecommercedb-e1bd8.firebaseio.com",
	projectId: "ecommercedb-e1bd8",
	storageBucket: "ecommercedb-e1bd8.appspot.com",
	messagingSenderId: "1078543857278",
	appId: "1:1078543857278:web:a761e2b61b914c11804a2f",
	measurementId: "G-QJBQ6H9DXX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
