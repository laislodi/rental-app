import { gql, useQuery } from '@apollo/client';
import {defaultTo} from 'lodash';

type ApartmentImage = {
  id: number,
  url: string,
  favorite: boolean,
}

export type availableApartmentsType = {
  id: string,
  number: string,
  description: string,
  available: boolean,
  highlighted: boolean,
  images: ApartmentImage[],
  coverImages: ApartmentImage[],
}

const AVAILABLE_APARTMENTS = gql`
  query AvailableApartments {
    availableApartments (highlighted: false){
      id
      number
      description
      available
      highlighted
      images {
        id
        url
        favorite
      }
      coverImages {
        id
        url
        favorite
      }
    }
  }
`;

export const useQueryAvailableApartments = () => {
  const { loading, data: queryData } = useQuery<{ availableApartments: availableApartmentsType[] }>(AVAILABLE_APARTMENTS);

  const data = defaultTo(queryData?.availableApartments, [])
  return { loadingAvailableApartments: loading, highlightedAvailableApartments: data };
}
