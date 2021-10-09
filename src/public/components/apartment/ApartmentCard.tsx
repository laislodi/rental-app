import React from 'react';
import { NavLink } from "react-router-dom";
import { ApartmentImage } from '../../graphql/queries/useQueryHighlightedApartments'

type ApartmentCardProps = {
  id: string,
  description: string,
  number: string,
  images: ApartmentImage[]
}

function ApartmentCard({id, description, number, images}: ApartmentCardProps) {
  return (
    <div id={id} className="col py-2">
      <div className="card">
        { images && images[0]
          ? <NavLink exact={true} activeClassName='active' to={'/apartamento/' + number }>
              <img alt='' src={images[0].url} className="card-img-top"/>
            </NavLink>
          : <img alt='' src='../../../common/assets/images/img_not_available.png' className="card-img-top"/>
        }
        <div className="card-body">
          <NavLink exact={true} activeClassName='active' to={'/apartamento/' + number }>
            <h5 className="card-title">Apartamento {number}</h5>
          </NavLink>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;