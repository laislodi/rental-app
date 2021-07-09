import React from 'react';
import {useParams} from 'react-router';
import {useQueryGetApartment} from '../../queries/useQueryGetApartment';


const ApartmentPage: React.FC = () => {

  const { number } = useParams<{ number: string}>();
  const { loadingApartment, apartment } = useQueryGetApartment(number);

  if (loadingApartment) return <h1>Loading...</h1>
  if (!apartment) return <h1>NO APARTMENT...</h1>

  return (
    <div className="container py-4">
      <h3>Unidade {number}</h3>
      <div className="apartment-photo-album">
        {
          apartment.images ?
            <div className='row'>
              <div className='col-8'>
                <img key={apartment.images[0].id} src={apartment.images[0].url}
                     alt={'apartment-' + apartment.number}/>
              </div>
              <div className='col-4'>
                <div className='row'>
                  {
                    apartment.images.map((image) => (
                      <div className='col-6 p-1'>
                        <img key={image.id} src={image.url}
                             alt={'apartment-' + apartment.number}/>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
        : null
        }
        <div className='row'>
          <div className="col-8 ">
            <p className="p-2 apartment-description">{apartment.description}</p>
          </div>
          <div className='col-4'>
            <h4 className='py-2'>Especificações</h4>
            <p className="p-2">Here goes all of the specifications about the apartment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentPage