import React, { useState } from 'react';

const SimpleForm = () => {

  const [isShow, handleShow] = useState(false);
  const [login, handleLogin] = useState('');
  const [password, handlePassword] = useState('');
  const [passConf, handlePassConf] = useState('');
  const [isLogined, handleIsLogined] = useState(false);

  const showForm = () => {
    handleShow(isShow = !isShow);
  }

  const loginHandle = (e) => {
    handleLogin(login = e.target.value)
  }
  const passwordHandle = (e) => {
    handlePassword(password = e.target.value)
  }
  const passConfHandle = (e) => {
    handlePassConf(passConf = e.target.value)
  }

  const confirmForm = (e) => {
    e.preventDefault();
    if (password !== '' && password === passConf) {
      handleIsLogined(isLogined = true);
      handleShow(isShow = false);
    } else {
      alert('oh no!!! you forgot password? Try again :)')
    }
  }
  const logoutHandle = () => {
    handleIsLogined(isLogined = false);
    handleLogin(login = ' ');
    handlePassword(password = ' ');
    handlePassConf(passConf = ' ');
  }

  return (
    <div>
      <h2>{isLogined?`hi, ${login}, have a nice day!`:"Do you wanna to tell me who are you? :)" }{!isLogined && <button type='button' onClick={showForm}>Of couse, bro:)</button>}{isLogined && <button type='button' onClick={logoutHandle}>go away</button>}</h2>
      {isShow && <form className='login-form' onSubmit={confirmForm}>
        <label>Login:<input type='text' onChange={loginHandle} /></label>
        <label>Password:<input type='password' onChange={passwordHandle} /></label>
        <label>Password confirm:<input type='password' onChange={passConfHandle} /></label>
        <button>submit</button>
      </form>}
    </div>
  )
}

export default SimpleForm;