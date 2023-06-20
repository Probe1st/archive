import { onAuthStateChanged } from "firebase/auth";
import { ButtonSignIn, ButtonSignOut } from "./Buttons";
import auth from "./firebase";

export default function Login() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setTimeout(() => {
        window.location.href = "admin";
      }, 700);
    }
  });

  return (
    <>
      {/* карточка входа */}
      <div className="flex flex-col p-5 my-auto border border-black">
        <div className="flex flex-col space-y-5">
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
        </div>

        <div className="flex flex-row p-5">
          <ButtonSignIn />

          <ButtonSignOut />
        </div>
      </div>
    </>
  );
}
