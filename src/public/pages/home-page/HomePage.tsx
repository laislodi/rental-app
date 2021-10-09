import React from "react";
import ApartmentList from "../../components/apartment/ApartmentList";
import { useQueryHighlightedApartments } from "../../graphql/queries/useQueryHighlightedApartments";
import Banner from "./components/Banner";
import Loading from "../../../common/components/loading/Loading";

const HomePage : React.FC = () => {

  const { loadingHighlightedApartments, highlightedApartments } = useQueryHighlightedApartments();

  return (
    <>
      <Banner />
      {
        loadingHighlightedApartments ?
          <Loading /> :
          <ApartmentList album={highlightedApartments} />
      }
    </>
  )
};

export default HomePage;
