import React from "react";
import ApartmentList from "../../components/apartment/ApartmentList";
import { useQueryAvailableApartments } from "../../graphql/queries/useQueryAvailableApartments";


const AvailableApartments : React.FC = () => {

  const { loadingAvailableApartments, availableApartments } = useQueryAvailableApartments();

  if ( loadingAvailableApartments ) {
    return <div>Loading...</div>
  }

  return (
    <ApartmentList album={availableApartments}/>
  )
}

export default AvailableApartments;