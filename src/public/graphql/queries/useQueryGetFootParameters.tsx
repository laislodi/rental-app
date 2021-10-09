import {gql, useQuery} from "@apollo/client";
import { defaultTo } from 'lodash';

type SocialMediaType = {
  text: string,
  link: string
};

type FootParameters = {
  telephone: string,
  email: string,
  facebook: SocialMediaType,
  instagram: SocialMediaType,
};

const emptyFootParameters = {
  telephone: '',
  email: '',
  facebook: {
    text: '',
    link: ''
  },
  instagram: {
    text: '',
    link: ''
  }
};

const GET_FOOT_PARAMETERS = gql`
  query GetFootParameters {
    getFootParameters {
      telephone
      email
      facebook {
        text
        link
      }
      instagram {
        text
        link
      }
    }
  }
`;


export const useQueryGetFootParameters = () => {
  const { loading, data } = useQuery<{ getFootParameters: FootParameters }>(GET_FOOT_PARAMETERS);

  const parameterData = defaultTo(data, { getFootParameters: emptyFootParameters });

  return { loading, parameter: parameterData.getFootParameters }
}
