/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import Footer from '../components/Footer';
// import useInitialState from '../hooks/useInitialState';
//DEJAMOS DE LLAMAR A LA API PORQUE LA TENEMOS EN EL INDEX DE RAIZ Y ESTAMOS USANDO REDUX
import '../assets/styles/App.scss';
import VideoNotFound from './VideoNotFound';
// import NotFound from './NotFound';
// import { isSearching } from '../actions';

// const API = 'http://localhost:3000/initialState';
//DEJAMOS DE LLAMAR A LA API PORQUE LA TENEMOS EN EL INDEX DE RAIZ Y ESTAMOS USANDO REDUX

const Home = ({ isSearching, searching, myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  //SE QUITA POR LO MISMO DE ARRIBA
  if (isSearching) {
    return searching.length > 0 ? (
      <>
        <Header />
        <Search isHome />
        <Categories title='Búsqueda'>
          <Carousel>
            {searching.map((item) => (
              <CarouselItem key={item.id} {...item} isMyList={true} />
            ))}
          </Carousel>
        </Categories>
      </>
    ) : (
      <>
        <Header />
        <Search isHome />
        <Categories title='Búsqueda'>
          <VideoNotFound />
        </Categories>
      </>
    );
  }

  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                // isList={true} LO MISMO DE ABAJO
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      ;

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Los mas vistos'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

    </>
  );
};

// export default Home;

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
    searching: state.searching,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default connect(mapStateToProps, null)(Home);
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);
