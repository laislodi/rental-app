import facebookLogo from '../../images/Facebook-128.webp';
import instagramLogo from '../../images/instagram-128.webp';
import whatsappLogo from '../../images/whatsapp--v1.png';
import { NavLink } from "react-router-dom";

function Footer() {
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
                <a className="text-right" href="https://www.facebook.com/lais.lodi.1" target="_blank">
                  <img className="icon" src={facebookLogo}/>
                  Arminda Apartamentos
                </a>
              </div>
              <div className="col-12">
                <a className="text-right" href="http://instagram.com" target="_blank">
                  <img className="icon" src={instagramLogo}/>
                  Arminda Apartamentos
                </a>
              </div>
              <div className="col-12">
                <a className="text-right" href="https://web.whatsapp.com/" target="_blank">
                  <img className="icon" src={whatsappLogo}/>
                  (27) 99820-3636 (Vivo)
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
