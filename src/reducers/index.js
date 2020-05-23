// eslint-disable-next-line import/prefer-default-export
export const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
        //SI POR X O Y RAZÓN NO SE PUEDE DEVOLVER O IGUALAR EL ELEMENTO SE DEVUELVE UN ARREGLO O ARRAY VACIO [].
        //Number ES UNA PROPIEDAD DE JAVASCRIPT QUE NOS AYUDA A CONVERTIR CUALQUIER TIPO DE DATO EN UN NUMERO, EN ESTE CASO (UN STRING), POR OTRO LADO find() NOS AYUDA A FILTRAR Y ENCONTRAR EL ID DEL DATOQUE ESTAMOS SOLICITANDO Y HACER TODO EL PROCESO QUE AHÍ SE PRESENTA.
        // SE COLOCAN LOS || PARA DARLE OTRA OPCION DE LA LOGICA, EN ESTE CASO , LLEVA A BUSCAR EL ID DEL DATO EN ORIGINALS, NO COMO ANTES QUE ESTABA EN TRENDS.
        //SE COLOCAN LOS === IGUALES PARA DEJAR EN CLARO QUE EL ID SE TIENE QUE IGUALAR AL action.payload
      };
    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching: action.payload,
      };

    case 'GET_VIDEOS':
      return {
        ...state,
        searching: state.trends
          .concat(state.originals)
          .filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
    default: {
      return state;
    }
  }

};

