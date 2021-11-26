import axios from "axios";
import { useEffect, useState } from "react";
import "./signUp.css";

const SignUp = () => {
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userMail, setUserMail] = useState("");
  const [mailToCheck, setMailToCheck] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMail, setErrorMail] = useState(false);

  useEffect(() => {
    if (mailToCheck) {
      const url = `https://apiliveup.herokuapp.com/users/?mail=${mailToCheck}`;
      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => {
          if (data.find((el) => el.mail === mailToCheck)) {
            setErrorMail(true);
          } else {
            setErrorMail(false);
            setUserMail(mailToCheck);
          }
        });
    }
  }, [mailToCheck]);

  const handleAddUser = () => {
    if (!errorMail) {
      axios.post("https://apiliveup.herokuapp.com/users", {
        firstname: userFirstname,
        lastname: userLastname,
        mail: userMail,
        password: userPassword,
      });
    }
  };

  const checkedPassword = () => {
    if (firstPassword === confirmPassword && firstPassword !== "") {
      setUserPassword(firstPassword);
      handleAddUser();
    } else {
      setErrorPassword(true);
      setFirstPassword("");
      setConfirmPassword("");
    }
  };

  // const resetData = () => {
  //   setUserFirstname("");
  //   setUserLastname("");
  //   setMailToCheck("");
  //   setFirstPassword("");
  //   setConfirmPassword("");
  //   setUserPassword("");
  // };

  return (
    <div className="container-sign-up">
      <div className="sign-up">
        <div className="title-sign-up space">
          <h2>Inscris-toi</h2>
        </div>
        <div className="name space">
          <input
            type="text"
            placeholder="Prénom"
            onChange={(e) => setUserFirstname(e.target.value)}
            value={userFirstname}
          />
          <input
            type="text"
            placeholder="Nom"
            onChange={(e) => setUserLastname(e.target.value)}
            value={userLastname}
          />
        </div>
        <div className={`mail space width-input ${errorMail && "borderRed"}`}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setMailToCheck(e.target.value)}
            value={mailToCheck}
          />
          {errorMail && <p>Cette adresse mail a déjà été utilisée</p>}
        </div>
        <div
          className={`password space width-input ${
            errorPassword && "borderRed"
          }`}
        >
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            onChange={(e) => setFirstPassword(e.target.value)}
            value={firstPassword}
          />
        </div>
        <div
          className={`confirm-password width-input space ${
            errorPassword && "borderRed"
          }`}
        >
          <input
            type="password"
            placeholder="Confirmez votre mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {errorPassword && (
            <p>Le mot de passe est différent que le précédent</p>
          )}
        </div>
        <div className="btn-sign-up">
          <button
            type="button"
            onClick={() => {
              checkedPassword();
              // resetData();
            }}
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
