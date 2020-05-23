// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({

  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({

  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({

  type: 'LOGIN_REQUEST',
  payload,
});

export const logOutRequest = (payload) => ({

  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({

  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({

  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const getVideos = (payload) => ({
  type: 'GET_VIDEOS',
  payload,
});

export const isSearching = (payload) => ({
  type: 'IS_SEARCHING',
  payload,
});
