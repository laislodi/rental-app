import React from 'react';
import TextField from '../../../common/components/input/TextField';
import SelectField from '../../../common/components/input/SelectField';
import { useMutationSendContactEmail } from "../../graphql/mutations/useMutationSendContactMail";


const Contactus: React.FC = () => {
  const subjectList = ["Locação", "Dúvidas", "Preços"];
  const [ telephone, setTelephone ] = React.useState<string>('');
  const [ email, setEmail ] = React.useState<string>('');
  const [ subject, setSubject ] = React.useState<string>(subjectList[0]);
  const [ name, setName ] = React.useState<string>('');
  const [ emailBody, setEmailBody ] = React.useState<string>('');


  const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailBody(event.target.value)
  }

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.currentTarget.value);
  }

  const clearFrom = () => {
    setName('');
    setEmail('');
    setEmailBody('');
    setTelephone('');
    setSubject('');
  }

  const [mutation, { loading, data, error }] = useMutationSendContactEmail(emailBody, email, subject);
  const dependsOnLoading = loading ? ".bg-info" : "";

  return (
    <main className="row justify-content-center">
      <div className="col-md-6 col-sm-12">
        <div className="py-5 text-center">
          <h1>Contato</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus.
            Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu.
            Pellentesque feugiat molestie enim a aliquam.</p>
        </div>
        <form className="needs-validation" noValidate={true}>
          <div className="row">
            <div className="col-12">
              <SelectField key="subject" label="Assunto:" Options={subjectList}
                           onChange={handleSubjectChange} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField key="name" value={name} label="Name" onChange={handleNameChange} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField key="telephone" value={telephone} label="Telefone" onChange={handleTelephoneChange} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField key="email" value={email} label="Email" onChange={handleEmailChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="col-12 py-2">
                <label htmlFor="text-email" >Mensagem</label>
                <textarea className="form-control" id="text-email" onChange={handleEmailBodyChange} />
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <button
                type='button'
                disabled={telephone === '' || name === '' || email === ''}
                onClick={() => {
                  mutation()
                  if (error) {
                    alert("Algo deu errado, tente novamente...");
                  } else if (data) {
                    clearFrom();
                  }
                }}
                // className={dependsOnLoading}
                >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contactus;
