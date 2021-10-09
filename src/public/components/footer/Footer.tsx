import facebookLogo from '../../../common/assets/images/Facebook-128.webp';
import instagramLogo from '../../../common/assets/images/instagram-128.webp';
import whatsappLogo from '../../../common/assets/images/whatsapp--v1.png';
import { NavLink } from "react-router-dom";
import {useQueryGetFootParameters} from "../../graphql/queries/useQueryGetFootParameters";


type SocialMediaType = {
  text: string,
  link: string
}

export type FooterParameters = {
  telephone: string,
  facebook: SocialMediaType,
  instagram: SocialMediaType
}

function Footer() {

  const { loading, parameter: parameters } = useQueryGetFootParameters();

  if (loading) {

  }

  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6 col-sm-12 text-align-sm-left">
            <ul className="list-unstyled text-light footer-list">
              <li><NavLink activeClassName='active' className="link-hover" to='/' exact={true}>Início</NavLink></li>
              <li><NavLink activeClassName='active'  className="link-hover" to='/sobre-nos'>Sobre nós</NavLink></li>
              <li><NavLink activeClassName='active'  className="link-hover" to='/nossas-unidades'>Nossas Unidades</NavLink></li>
              <li><NavLink activeClassName='active'  className="link-hover" to='/contato'>Contato</NavLink></li>
            </ul>
          </div>

          <div className="col-md-6 col-sm-12 text-align-sm-right">
            <div className="row">
              <div className="col-12">
                <a className="text-right" href={parameters.facebook.link} target="_blank" rel="noreferrer">
                  <img className="icon" src={facebookLogo} alt={''} />
                  {parameters.facebook.text}
                </a>
              </div>
              <div className="col-12">
                <a className="text-right" href={parameters.instagram.link} target="_blank" rel="noreferrer">
                  <img className="icon" src={instagramLogo} alt={''} />
                  {parameters.instagram.text}
                </a>
              </div>
              <div className="col-12">
                <a className="text-right" href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                  <img className="icon" src={whatsappLogo} alt={''} />
                  {parameters.telephone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
