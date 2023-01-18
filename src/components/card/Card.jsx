import React, {useState} from 'react';
import './card.css';
import Circle from "../UI/Circle";
import img from '../../img/Photo.png'
import CardHeader from "./CardHeader";
import CardGift from "./CardGift";



const Card = ({props}) => {
  const [active, setActive] = useState(false)


  function activeHandler() {
    setActive(prev => !prev);
  }

  return (
      <div className='card__container'>
        {props.disabled
            ?
            <div className='card__border__disabled'>
              <div className='card__disabled'>
                <div className='card__header__disabled'>Сказочное заморское явство</div>
                <CardHeader props={props}/>
                <CardGift props={props}/>
                <img src={img} alt="cat"/>
                <Circle props={props} state={active}/>
              </div>
            </div>
            :
            <div  className={`card__border ${active ? 'card__border__red' : 'card__border'}`} onClick={activeHandler}>
              <div className='card'>
                <div className='card__header'>Сказочное заморское явство</div>
                <CardHeader props={props}/>
                <CardGift props={props}/>
                <img src={img} alt="cat"/>
                <Circle props={props} state={active}/>
              </div>
            </div>
        }
        {props.disabled
            ?
            <div className="description__disabled">{`Печалька, ${props.header} закончился.`}</div>
            :
            <div className="description">Чего сидишь? Порадуй котэ, <a href="https://funbox.ru/">купи</a>.</div>
        }
      </div>
  );
};

export default Card;