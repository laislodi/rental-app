import React from 'react';
import {useParams} from 'react-router';
import {useQueryGetApartment} from '../../queries/useQueryGetApartment';


const ApartmentPage: React.FC = () => {

  const { number } = useParams<{ number: string}>();
  const { loadingApartment, apartment } = useQueryGetApartment(number);

  if (loadingApartment) return <h1>Loading...</h1>
  if (!apartment) return <h1>NO APARTMENT...</h1>

  return (
    <div>
      <h1>Unidade {number}</h1>
      <h2>{apartment.description}</h2>
      {
        apartment.images && apartment.images.length > 0
        ? apartment.images.map((image) =>
          <img key={image.id} src={image.url}
               alt={'apartment-' + apartment.number} />
          )
        : null
      }
    </div>
  );
}

export default ApartmentPage