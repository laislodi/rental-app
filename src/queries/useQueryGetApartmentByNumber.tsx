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

const GET_APARTMENT_BY_NUMBER = gql`
  query GetApartmentByNumber ($number: String) {
    getApartmentByNumber(number: $number) {
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

export const useQueryGetApartmentByNumber = ( number: string ) => {
  const { loading, data: queryData } = useQuery<{ getApartmentByNumber: ApartmentType }>(GET_APARTMENT_BY_NUMBER, {
    variables: {
      number: number
    }
  });
  console.log(loading)
  console.log(queryData)

  const data = defaultTo(queryData?.getApartmentByNumber, null);

  return { loadingApartment: loading, apartment: data}
}