import React from 'react';
import { useParams } from 'react-router';
import { useQueryGetApartmentByNumber } from '../../graphql/queries/useQueryGetApartmentByNumber';
import imageNotFound from "../../../common/assets/images/image-not-found.png";
import Loading from "../../../common/components/loading/Loading";


const ApartmentPage: React.FC = () => {

  const { apartmentNumber } = useParams<{ apartmentNumber: string}>();
  const { loadingApartment, apartment } = useQueryGetApartmentByNumber(apartmentNumber);

  if (loadingApartment) return <Loading />
  if (!apartment) return <Loading />

  return (
    <div className="container py-4">
      <h3>Unidade {apartmentNumber}</h3>
      <div className="apartment-photo-album">
        {
          <div className='row'>
            <div className='col-8'>
              {apartment.coverImages.length > 0 ?
                <img key={apartment.coverImages[0].id} src={apartment.coverImages[0].url}
                   alt={'apartment ' + apartment.number}/>
                : <img key={0} src={imageNotFound}
                   alt={'Image not found'}/>
              }
            </div>
            <div className='col-4'>
              <div className='row'>
                {
                  apartment.images.map((image, index) => (
                    <div key={index} className='col-6 p-1'>
                      <img key={image.id} src={image.url}
                           alt={'apartment-' + apartment.number}/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
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