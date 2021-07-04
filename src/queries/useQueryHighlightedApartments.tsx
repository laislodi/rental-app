import { gql, useQuery } from '@apollo/client';
import { defaultTo } from 'lodash';


export type ApartmentImage = {
  id: number,
  url: string,
  favorite: boolean,
}

export type highlightedApartments = {
  id: string,
  number: string,
  description: string,
  available: boolean,
  highlighted: boolean,
  images: ApartmentImage[],
  coverImages: ApartmentImage[],
}

const GET_HIGHLIGHTED_APARTMENTS = gql`
  query AvailableApartments($highlighted: Boolean) {
  availableApartments (highlighted: $highlighted){
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
  const { loading, data: queryData } = useQuery<{ availableApartments: highlightedApartments[] }>(GET_HIGHLIGHTED_APARTMENTS, {
    variables: {
      highlighted: true
    }
  });
  const data = defaultTo(queryData?.availableApartments, [])
  return { loadingHighlightedApartments: loading, highlightedApartments: data };
}
