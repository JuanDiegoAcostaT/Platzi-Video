import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import item1 from '../assets/static/play-icon.png';
import item2 from '../assets/static/plus-icon.png';
import item3 from '../assets/static/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76 (1).png';
import { setFavorite, deleteFavorite } from '../actions';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  //ESTO DE ACA ARRIBA ES OTRA FROMA PARA TRAER LAS PROPIEDADES DE LA API

  const handleSetFavorite = (itemId) => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (

    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={item1}
              alt='Play Icon'
            />
          </Link>

          { isList ? (
            <img
              onClick={() => handleDeleteFavorite(id)}
              className='carousel-item__details--img'
              src={item3}
              alt='Delete Icon'
            />

          ) : (
            <img
              onClick={handleSetFavorite}
              className='carousel-item__details--img'
              src={item2}
              alt='Plus Icon'
            />
          )}

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>

  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

// export default CarouselItem;

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

