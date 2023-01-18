import React from 'react';
import './cardGift.css'
const CardGift = ({props}) => {
  return (
      <div>
        {props.disabled
            ?
            <div className='gift__container__disabled'>
              <div className="gift__description__disabled">{props.giftPortion}</div>
              <div className="gift__description__disabled">{props.giftMouse}</div>
            </div>
            :
            <div className='gift__container'>
              <div className="gift__description">{props.giftPortion}</div>
              <div className="gift__description">{props.giftMouse}</div>
            </div>
        }
      </div>
  );
};

export default CardGift;