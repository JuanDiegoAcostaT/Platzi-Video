// import React from 'react';
import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = (email).trim().toLowerCase();
  //trim() ES PARA QUITAR LOS ESPACIOS ENTRE LETRAS
  const hash = md5(formattedEmail, { encoding: 'binary' });
  //encodin: 'binary' ES PARA QUE LA APLICACION PUEDA LEER EL @ DE LOS CORREOS
  return (
    `${base}${hash}`
  );
};

export default gravatar;
