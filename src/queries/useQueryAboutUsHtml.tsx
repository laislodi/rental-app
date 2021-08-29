import {useQuery, gql} from '@apollo/client';
import {defaultTo} from 'lodash';


const GET_ABOUT_US_HTML = gql`
  query GetAboutUsHtml {
    getAboutUsHtml
  }
`;

export const useQueryAboutUsHtml = ( telephone: string, email: string ) => {
  const { loading, data: queryData } = useQuery<{ getAboutUsHtml: string }>(GET_ABOUT_US_HTML);

  const data = defaultTo(queryData?.getAboutUsHtml, '');

  return { aboutUsHtmlLoading: loading, aboutUsHtml: {__html: data}}
}