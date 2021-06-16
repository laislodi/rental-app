import React from 'react';
import CardAlbum from './CardAlbum';
import {album_mock} from './types/types';

function Units(props : { id: string }) {
  return (
    <div className="py-5" id={props.id}>
      <h1>Nossas Unidades</h1>
      <CardAlbum cards={album_mock}/>
    </div>
  );
}

export default Units;
