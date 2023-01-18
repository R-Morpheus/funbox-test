import React from 'react';
import './cardHeader.css'

const CardHeader = ({props}) => {
  return (
      <div className='header__container'>
        {props.disabled
            ?
            <h1 className='h1__disabled'>Нямушка
              <h2>{props.header}</h2>
            </h1>
            :
            <h1>Нямушка
              <h2>{props.header}</h2>
            </h1>
        }
      </div>
  );
};

export default CardHeader;