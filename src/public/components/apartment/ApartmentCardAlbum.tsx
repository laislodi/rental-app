import React from 'react';
import { Apartment } from '../../graphql/queries/useQueryHighlightedApartments'
import ApartmentCard from './ApartmentCard';

function ApartmentCardAlbum(props: {apartmentCards: Apartment[]}) {
  return (
    <div className="py-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {
            props.apartmentCards.map((apartmentCard, index) => {
              return <ApartmentCard
                key={index}
                id={apartmentCard.id}
                number={apartmentCard.number}
                images={apartmentCard.images}
                description={apartmentCard.description}

              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ApartmentCardAlbum;
