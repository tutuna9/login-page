import {useState} from 'react'
import Login from './components/Login';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [isLogin, setIsLogin] = useState(false)
  const [showErrorUser, setShowErrorUser] = useState("");
  const [showErrorPwd, setShowErrorPwd] = useState("");
  

  // const hasNumber = (str) => {
  //   return /\d/.test(str);
  // }

  // const hasLowerCase = (str) => {
  //   return str.toUpperCase() !== str;
  // }

  // const hasUpperCase = (str) => {
  //   return str.toLowerCase() !== str;
  // }

  // function validatePassword(text) {
  //   if (text.length < 8) return <p>Password should be 8 or more characters</p>
  //   if (!hasLowerCase(text) || !hasUpperCase(text)) return <p>Password should contains minimum 1 character for both uppercase and lowercase letter</p>
  //   if (!hasNumber(text)) return <p>Password should contains minimum 1 digit of numeric value</p>
  //   return "";
  // }

  // function validateEmail(email) {
  //   return EmailValidator.validate(email);
  // }

  // function validateForm() {
  //   const emailValidateResult = validateEmail(formData.email)

  //   // if (!emailValidateResult) {
  //   //   setShowErrorEmail("Please enter valid email address");
  //   // } else {
  //   //   setShowErrorEmail(false);
  //   // }
  //   if (!emailValidateResult) {
  //     setShowErrorEmail("Please enter valid email address");
  //   } else {
  //     setShowErrorEmail(false);
  //   }

  //   const pwdValidateError = validatePassword(formData.password)

  //   // if (pwdValidateError) {
  //   //   setShowErrorPwd(pwdValidateError);
  //   // } else {
  //   //   setShowErrorPwd(false);
  //   // }
  //   if (pwdValidateError) {
  //     setShowErrorPwd(pwdValidateError);
  //   } else {
  //     setShowErrorPwd(false);
  //   }

  //   return (emailValidateResult && !pwdValidateError)
  // }
  const username1 = "user1"
  const password1 = "pass1"

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
  }

  function handleSubmitLogin(event) {
    event.preventDefault()
    if (formData.username !== username1) {
      setShowErrorUser(<p>Invalid Username</p>)
    } else {
      setShowErrorUser("")
    }
    if (formData.password !== password1) {
      setShowErrorPwd(<p>Invalid Password</p>)
    } else {
      setShowErrorPwd("")
    }
    if (formData.username === username1 && formData.password === password1) {
      setShowErrorUser("")
      setShowErrorPwd("")
      setIsLogin(true)
    }
  }

  function handleClickReturn(event) {
    event.preventDefault()
    setIsLogin(false)
  }

  return (
    <div className="App">
      {isLogin ?
      <Welcome
      username={formData.username}
      handleClickReturn={handleClickReturn}
      /> :
      <Login
        username={formData.username}
        password={formData.password}
        isLogin={isLogin}
        usernameData={username1}
        passwordData={password1}
        showErrorUser={showErrorUser}
        showErrorPwd={showErrorPwd}
        handleChange={handleChange}
        handleSubmit={handleSubmitLogin}
      />
      }
      
    </div>
  );
}

export default App;
