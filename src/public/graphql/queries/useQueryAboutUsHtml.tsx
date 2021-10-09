import {useQuery, gql} from '@apollo/client';
import {defaultTo} from 'lodash';
import {useQueryGetFootParameters} from "./useQueryGetFootParameters";


const GET_ABOUT_US_HTML = gql`
  query GetAboutUsHtml {
    getAboutUsHtml
  }
`;

export const useQueryAboutUsHtml = () => {
  const { parameter: parameters } = useQueryGetFootParameters();
  const { loading, data: queryData } = useQuery<{ getAboutUsHtml: string }>(GET_ABOUT_US_HTML);

  const data = defaultTo(queryData?.getAboutUsHtml
    .replace('${telephone}', `<i><strong>${parameters.telephone}</strong></i>`)
    .replace('${email}', `<i><strong>${parameters.email}</strong></i>`), '');

  return { aboutUsHtmlLoading: loading, aboutUsHtml: {__html: data}}
}