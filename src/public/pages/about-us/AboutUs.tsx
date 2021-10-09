import React from "react";
import { useQueryAboutUsHtml } from "../../graphql/queries/useQueryAboutUsHtml";
import Loading from "../../../common/components/loading/Loading";


const AboutUs : React.FC = () => {
  const { aboutUsHtmlLoading, aboutUsHtml } = useQueryAboutUsHtml();

  if (aboutUsHtmlLoading)
    return <Loading />

  return (
    <div>
      <div className="pt-5 pb-3">
        <h1>Sobre Nós</h1>
      </div>
      <div className="container col-md-6 col-sm-12">
        {
          aboutUsHtmlLoading ? <Loading /> : <div className="mx-4" dangerouslySetInnerHTML={aboutUsHtml} />
        }
      </div>
    </div>
  );
}

export default AboutUs;
