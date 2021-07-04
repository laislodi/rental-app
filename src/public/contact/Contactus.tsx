import React from 'react';
import TextField from '../input/TextField';
import SelectField from '../input/SelectField';

const Contactus: React.FC = () => {
  return (
  <main className="row justify-content-center">
    <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
      <div className="py-5 text-center">
        <h1>Contato</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam.</p>
      </div>
      <form className="needs-validation" noValidate={true}>
        <div className="row">
          <SelectField key={"subject"} label="Assunto" Options={["Locação", "Dúvidas"]}/>
          <TextField key={"name"} label="Name" />
          <TextField key={"telephone"} label="Telefone" />
          <div className="col-6 py-2">
            <label htmlFor="email" className="form-label">Email:</label>
            <input id="email" type="text" className="input-group"/>
          </div>
        </div>
      </form>
    </div>
  </main>);
}

export default Contactus;
