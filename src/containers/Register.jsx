import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import '../assets/styles/Register.scss';
import PropTypes from 'prop-types';
import { registerRequest } from '../actions/index';
import Header from '../components/Header';

const Register = (props) => {

  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
    //ESTO ES UNA OPCION DE REACT ROUTER QUE NOS LLEVA A UNA RUTA EN ELE HISTORIAL DE EL ARCHIVO QUE HACE RENDER EN LA APLICACION (EN ESTE CASO).
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form onSubmit={handleSubmit} className='register__container--form'>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='name'
              onChange={handleInput}
            />
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
            <button type='submit' className='button'>Registrarme</button>
          </form>
          <Link to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

Register.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  email: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  password: PropTypes.string,

};

// export default Register;

const mapDispatchToProps = {
  registerRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(Register));

