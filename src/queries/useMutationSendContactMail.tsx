import { gql, useMutation } from "@apollo/client";
import {defaultTo} from 'lodash';

// https://stackabuse.com/how-to-send-emails-with-gmail-using-python

const SEND_CONTACT_EMAIL = gql`
  mutation SendContactMail($body: String, $mailTo: [String], $subject: String) {
    sendContactMail(body: $body, 
      mailTo: $mailTo, 
      subject: $subject) {
        ok
    }
  }
`;

export const useMutationSendContactEmail = ( body: string, mailTo: string, subject: string ) => {
  const [mutation, { loading, data: queryData, error }] = useMutation<{ ok: string }>(SEND_CONTACT_EMAIL);

  mutation( { variables: {
    body: body,
    mailTo: mailTo,
    subject: subject
  }});

  const data = defaultTo(queryData?.ok, "");
  return [mutation, { loading, ok: data, error }]
}

