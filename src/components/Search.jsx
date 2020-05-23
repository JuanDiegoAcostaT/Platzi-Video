/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import { getVideos, isSearching } from '../actions';

const Search = (props) => {

  const { isHome } = props;

  const inputStyle = classNames('input', {
    isHome,
  });

  // const { title } = props;

  const handleChance = (event) => {
    if (event.target.value === '') {
      props.isSearching(false);
    } else {
      props.isSearching(true);
      props.getVideos(event.target.value);
    }
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type='text'
        className={inputStyle}
        onChange={handleChance}
      />
      {/* <button type='submit'>Buscar..</button>
      </form> */}
    </section>
  );
};

// export default Search;

const mapDispatchToProps = {
  getVideos,
  isSearching,
};

export default withRouter(connect(null, mapDispatchToProps)(Search));
