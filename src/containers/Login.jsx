/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react' ;
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss';
import { loginRequest } from '../actions';
import Header from '../components/Header';

const Login = (props) => {

  const [form, setValues] = useState(
    {
      email: '',
    },
  );

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form
            onSubmit={handleSubmit}
            className='login__container--form'
          >
            <input
              className='input'
              type='text'
              placeholder='Correo'
              name='email'
              onChange={handleInput}
            />
            <input
              className='input'
              type='password'
              placeholder='Contraseña'
              name='password'
              onChange={handleInput}
            />
            <button type='submit' className='button'>Iniciar Sesion</button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <Link to='/'>Olvidé mi contraseña</Link>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} />
              {' '}
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} />
              {' '}
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            {' '}
            {/* //DE LA FORMA DE ARRIBA ES QUE SE GENERA UN ESPACIO EN JSX COMO EN HTML */}
            <Link to='/register'>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  email: PropTypes.string,
};

// export default Login;

const mapDispatchToProps = {
  loginRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(Login));

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, withRouter } from 'react-router-dom';
// import { loginRequest } from '../actions';
// import '../assets/styles/components/LoginForm.scss';

// const LoginForm = (props) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [form, setValues] = useState({
//     email: '',
//   });

//   const { history } = props;

//   const handleInput = (event) => {
//     setValues({
//       ...form,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.loginRequest(form);
//     history.push('/');
//   };

//   return (
//     <div className='login-section__form-container'>
//       <div className='login-section__form'>
//         <h1 className='form__title'>Inicia sesión</h1>
//         <form onSubmit={handleSubmit}>
//           <input aria-label='Campo de usuario para iniciar sesión' className='input__text' type='text' id='user' name='email' placeholder='Usuario o email' onChange={handleInput} />
//           <input aria-label='Campo de contraseña secreta para iniciar sesión' className='input__text' type='password' id='pass' name='pass' placeholder='Contraseña' onChange={handleInput} />
//           <label className={isChecked ? 'input__check--label label-checked' : 'input__check--label input__check--label-before'} htmlFor='remember'>
//             <inputonClick={() => setIsChecked(!isChecked)} className='input__check' type='checkbox' name='remember' id='remember' />
//             Recordar sesión
//           </label>
//           <button className='main-btn form-submit' type='submit'>Iniciar sesión</button>
//         </form>

//         <div className='remember-password__container'>
//           <Link className='remember-password__btn' to='/'>¿Haz olvidado tu contraseña?</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapDispatchToProps = {
//   loginRequest,
// };

// export default withRouter(connect(null, mapDispatchToProps)(LoginForm));

