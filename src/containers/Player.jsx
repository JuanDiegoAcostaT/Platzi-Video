/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions/index';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {

  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  //SE COLOCA EL ARRAY AL FINAL DEL useEffectPORQUE SI LO DEJAMOS VACIO PUEDE QUE SE GENERE UN LOOP INFIINITO YESO NO LO QUEREMOS, ENTONCES SE PONE EL [] arreglo PARA QUE CARGUE APENAS LA APGINA APAREZCA Y NADA MAS

  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  // eslint-disable-next-line react/destructuring-assignment
  const hasPlaying = Object.keys(props.playing).length > 0;
  //Object.keys ES PARA SABER CUANTOS ELEMENTOS TIENE ESE OBJETO

  const handleBack = () => {
    props.history.goBack();
  };

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='Video/mp4' />
      </video>
      <div className='Player-back'>
        <button onClick={handleBack} type='button'>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    // <Redirect to='/404/' />
    <NotFound />
  );

};

// export default Player;

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
