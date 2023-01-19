import React, {useState} from 'react';
import './card.css';
import Circle from "../UI/Circle";
import img from '../../img/Photo.png'
import CardHeader from "./CardHeader";
import CardGift from "./CardGift";



const Card = ({props}) => {
  const [active, setActive] = useState(false)
  const [mouse, setMouse] = useState(false)

  function activeMouseHandler() {
    if (active){
      setMouse(state => !state);
    }
  }
  function noActiveMouseHandler() {
    if (active){
      setMouse(state => !state);
    }
  }
  function activeHandler() {
    setActive(prev => !prev);
  }

  return (
      <div className='card__container'>
        {props.disabled
            ?
            <div>
              <div className='card__border__disabled'>
                <div className='card__disabled'>
                  <div className='card__header__disabled'>
                    Сказочное заморское явство
                  </div>
                  <CardHeader props={props}/>
                  <CardGift props={props}/>
                  <img src={img} alt="cat"/>
                  <Circle props={props} state={active}/>
                </div>
                <div className="description__disabled">{`Печалька, ${props.header} закончился.`}</div>
              </div>
              <div className="description__disabled">{`Печалька, ${props.header} закончился.`}</div>
            </div>
            :
            <div>
              <div  className={`card__border ${active ? 'card__border__red' : 'card__border'}`}
                    onClick={activeHandler}>
                <div className='card'
                     onMouseLeave={activeMouseHandler}
                     onMouseEnter={noActiveMouseHandler}
                     >
                  <div
                      className={`card__header ${mouse ? 'card__header__red' : 'card__header'}`}>
                    {`${mouse ? 'Котэ неодобряет?': 'Сказочное заморское явство'}`}
                  </div>
                  <CardHeader props={props}/>
                  <CardGift props={props}/>
                  <img src={img} alt="cat"/>
                  <Circle props={props} state={active}/>
                </div>
              </div>
              {active
                  ?
                  <div
                      className="description">{props.description}
                  </div>
                  :
                  <div className="description">Чего сидишь? Порадуй котэ,
                    <button
                        className='card__button' onClick={activeHandler}>купи
                    </button>.
                  </div>
              }
            </div>
        }
      </div>
  );
};

export default Card;