import React from "react";
import { useQueryAboutUsHtml } from "../../queries/useQueryAboutUsHtml";
import { useQueryGetFootParameters } from "../../queries/useQueryGetFootParameters";


const AboutUs : React.FC = () => {
  const { parameter: parameters } = useQueryGetFootParameters();
  const { aboutUsHtmlLoading, aboutUsHtml } = useQueryAboutUsHtml(parameters.telephone, parameters.email);
  console.log(aboutUsHtml);

  if (aboutUsHtmlLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div className="pt-5 pb-3">
        <h1>Sobre Nós</h1>
      </div>
      <div className="container col-md-6 col-sm-12">
        <div className="mx-4" dangerouslySetInnerHTML={aboutUsHtml}>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
