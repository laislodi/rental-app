import React from 'react';
import ApartmentCardAlbum from './ApartmentCardAlbum';
import {highlightedApartments} from '../../queries/useQueryHighlightedApartments';

type UnitsProps = {
  id: string,
  album: highlightedApartments[]
}

const Units: React.FC<UnitsProps> = ({id, album} : UnitsProps ) => {
  return (
    <div className="pt-5" id={id}>
      <h1>Nossas Unidades</h1>
      <ApartmentCardAlbum apartmentCards={album}/>
    </div>
  );
}

export default Units;
