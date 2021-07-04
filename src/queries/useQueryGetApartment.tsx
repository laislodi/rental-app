import {useQuery, gql} from '@apollo/client';
import {defaultTo} from 'lodash';

type ApartmentImage = {
  id: number,
  url: string,
  favorite: boolean,
}

type ApartmentType = {
  id: string,
  number: string,
  description: string,
  available: boolean,
  highlighted: boolean,
  images: ApartmentImage[],
  coverImages: ApartmentImage[],
}

const GET_APARTMENT = gql`
  query GetApartment ($number: String) {
  getApartment(number: $number) {
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

export const useQueryGetApartment = ( number: string ) => {
  const { loading, data: queryData } = useQuery<{ getApartment: ApartmentType }>(GET_APARTMENT, {
    variables: {
      number: number
    }
  });
  console.log(loading)
  console.log(queryData)

  const data = defaultTo(queryData?.getApartment, null);

  return { loadingApartment: loading, apartment: data}
}