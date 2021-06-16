import facebookLogo from '../../images/Facebook-128.webp';
import instagramLogo from '../../images/instagram-128.webp';
import whatsappLogo from '../../images/whatsapp--v1.png';

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6 col-sm-12 text-align-sm-left">
            <ul className="list-unstyled text-light">
              <li><a className="link-hover text-light">Início</a></li>
              <li><a className="link-hover text-light">Sobre nós</a></li>
              <li><a className="link-hover text-light">Nossas Unidades</a></li>
              <li><a className="link-hover text-light">Contato</a></li>
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
