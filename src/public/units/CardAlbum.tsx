import React from 'react';
import {ApartmentCardType} from './types/types';
import ApartmentCard from './ApartmentCard';

function CardAlbum(props: {cards: ApartmentCardType[]}) {
  return (
    <div className="py-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {
            props.cards.map((apartmentCard, index) => {
              return <ApartmentCard
                key={index}
                imageUrl={apartmentCard.imageUrl}
                apartmentNumber={apartmentCard.apartmentNumber}
                text={apartmentCard.text} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default CardAlbum;
