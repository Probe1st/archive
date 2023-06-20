import {
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
} from "firebase/auth";
import auth from "./firebase";

function ButtonSignIn() {
  return (
    <button
      onClick={() => {
        let email = document.querySelector("[placeholder='email']").value;
        let password = document.querySelector("[placeholder='password']").value;
        signInWithEmailAndPassword(auth, email, password).catch((err) => {
          console.log(err.code);
          console.log(err.message);
        });
      }}
    >
      Sign in
    </button>
  );
}

function ButtonSignOut() {
  return (
    <button onClick={() => signOut(auth, new EmailAuthProvider())}>
      Sign out
    </button>
  );
}

function ButtonLoadContent(props) {
  let loadFn = props['data-loadFn']; 
  return (
    <button onClick={loadFn}>Загрузить контент</button>
  );
}

export { ButtonSignOut, ButtonSignIn, ButtonLoadContent };
