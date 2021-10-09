import React from 'react';
import ApartmentCardAlbum from './ApartmentCardAlbum';
import { Apartment } from '../../graphql/queries/useQueryHighlightedApartments';

const ApartmentList: React.FC<{ album: Apartment[] }> = (props : { album: Apartment[] } ) => {
  return (
    <div className="pt-5">
      <h1>Nossas Unidades</h1>
      <ApartmentCardAlbum apartmentCards={props.album}/>
    </div>
  );
}

export default ApartmentList;
