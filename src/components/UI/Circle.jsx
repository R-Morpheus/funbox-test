import React from 'react';
import './circle.css'

const Circle = ({props, state}) => {
  return (
      <div>
        {
          props.disabled
              ?
              <div className='circle__disabled' >
                <div>
                  <p className='circle__description'>{props.weight}</p>
                  <p className='circle__description__kg'>КГ</p>
                </div>
              </div>
              :
              <div className={`circle ${state ? 'circle__red' : 'circle'}`} >
                <div>
                  <p className='circle__description'>{props.weight}</p>
                  <p className='circle__description__kg'>КГ</p>
                </div>
              </div>
        }
      </div>
  );
};

export default Circle;