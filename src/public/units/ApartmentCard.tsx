import React from 'react';
import { ApartmentCardType } from './types/types'

function ApartmentCard(props: ApartmentCardType) {
  return (
    <div className="col py-2">
      <div className="card">
        <img src={props.imageUrl} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">Apartamento {props.apartmentNumber}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;