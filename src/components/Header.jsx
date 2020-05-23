import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logOutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
// eslint-disable-next-line import/named

const Header = (props) => {

  // const { user = {} } = props;
  // //DE ESTA FORMA SOLO USAMOS user EN LUGAR de props.user
  // const hasUser = Object.Keys(user).length > 0;
  // //AQUI ESTAMOS HACIENDO UNA VALIDACION PARA UN OBJETO, POR Object.keys, Y USAMOS EL length PARA DETERMINAR SI HAY O NO ELEMENTOS , osea > 0.

  //TODO LO DE ACA ABAJO ES LA MISMA VALIDACION DE ARRIBA PERO COMO USER NO LO TOMAMA COMO UN OBJETO TOCO CREARLA
  const isNullOrUndefined = (value) => value === null || typeof value === 'undefined' ;

  const { user, isLogin, isRegister } = props;

  const hasUser = isNullOrUndefined() && Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logOutRequest({});
    //MANDAMOS UN OBJETO VACIO APRA REINICIAR EL ESTADO DEL USUAIRO
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>

          {hasUser ? (
            <img
              src={gravatar(user.email)}
              alt={user.email}
            />

          ) : (
            <img
              src={userIcon}
              alt='User Icon'
            />

          // eslint-disable-next-line react/jsx-one-expression-per-line
          )}
          {/* <p>Perfil</p> */}

          {hasUser ? (
            <li className='userName'>
              {user.name}
            </li>

          ) : (

            null
          )}
          {/* // eslint-disable-next-line react/jsx-one-expression-per-line */}

          {hasUser ? (
            <li><Link to='/login' onClick={handleLogOut}>Cerrar Sesión</Link></li>

          ) : (
            <li><Link to='/login'>Iniciar Sesión</Link></li>

          )}

        </div>
        <ul />
      </div>
    </header>
  );
};

Header.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  email: PropTypes.string,
  user: PropTypes.object,
};

// export default Header;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logOutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

