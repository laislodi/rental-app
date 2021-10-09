import { gql, useMutation } from "@apollo/client";

// https://stackabuse.com/how-to-send-emails-with-gmail-using-python

const SEND_CONTACT_EMAIL = gql`
  mutation SendContactMail($body: String, $mailFrom: String, $subject: String) {
    sendContactMail(body: $body, 
      mailFrom: $mailFrom, 
      subject: $subject) {
        ok
    }
  }
`;

export const useMutationSendContactEmail = ( body: string, mailFrom: string, subject: string) => {
  return useMutation<{ sendContactMail: { ok: string }}>(SEND_CONTACT_EMAIL, {
    variables: { body, mailFrom: mailFrom, subject },
  });
}

