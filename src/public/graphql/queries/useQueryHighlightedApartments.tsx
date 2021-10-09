import { gql, useQuery } from '@apollo/client';
import { defaultTo } from 'lodash';


export type ApartmentImage = {
  id: number,
  url: string,
  favorite: boolean,
}

export type Apartment = {
  id: string,
  number: string,
  description: string,
  available: boolean,
  highlighted: boolean,
  images: ApartmentImage[],
  coverImages: ApartmentImage[],
}

const GET_HIGHLIGHTED_APARTMENTS = gql`
  query AvailableApartments {
  availableApartments (highlighted: true){
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
    }
  }
}
`;

export const useQueryHighlightedApartments = () => {
  const { loading, data: queryData } = useQuery<{ availableApartments: Apartment[] }>(GET_HIGHLIGHTED_APARTMENTS, {
    variables: {
      highlighted: true
    }
  });
  const data = defaultTo(queryData?.availableApartments, [])
  return { loadingHighlightedApartments: loading, highlightedApartments: data };
}
