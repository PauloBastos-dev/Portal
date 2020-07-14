import React from "react"
// Importando os components necessários da lib react-materialize
import { nav, ul, a, li} from 'react-bootstrap';
//import imageLogo from '../../components/img/Meu-Vídeo.gif'
import '../../css/navbar.css'

const Navbar2 = () => (
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
  <div className="container">
     <a id="in0" className="navbar-brand a1" href="#">Estratégia
      <p className="navbar-brand a2" href="#">Consultoria e Gestão de Agronegócios</p>
     </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-itemactive">
          <a id="in1" className="nav-link" href="#" tooltiplus="Início">
            <i className="fa fa-home fa-2x fa-fw" aria-hidden="true" ></i>
              <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item dropdown">
         <a id="in2" className="nav-link " href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           INSTITUCIONAL
         </a>
         <div className="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown">
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-university fa-fw" aria-hidden="true"></i> Quem somos</a>
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-sitemap fa-fw" aria-hidden="true"></i> Map do site</a>
         </div>
        </li>
        <li className="nav-item dropdown">
         <a id="in2" className="nav-link " href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           SERVIÇOS
         </a>
         <div className="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown">
          <a id="in2" className="dropdown-item" href="#"><i class="fa fa-rocket" aria-hidden="true"></i> Consultorias</a>
          <a id="in2" className="dropdown-item" href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> Gestão</a>
          <a id="in2" className="dropdown-item" href="#"><i class="fa fa-laptop" aria-hidden="true"></i> Cursos</a>
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-users fa-fw" aria-hidden="true"></i> Palestras</a>
         </div>
        </li>
        <li className="nav-item">
         <a id="in2" className="nav-link" href="#">ARTIGOS</a>
        </li>
        <li className="nav-item">
          <a id="in2" className="nav-link" href="#">VÍDEOS</a>
        </li>
        <li className="nav-item b4">
          <a id="in2" className="nav-link" href="#">PARCEIROS</a>
        </li>
        <li className="nav-item dropdown">
        <a id="in2" className="nav-link " href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <i className="fa fa-user fa-fw"></i> Usuários
        </a>
        <div className="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown">
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-sign-in fa-fw" aria-hidden="true"></i> Entrar</a>
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> Cadastre-se</a>
           <div className="dropdown-divider"></div>
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> Configurações</a>
           <div className="dropdown-divider"></div>
          <a id="in2" className="dropdown-item" href="#"><i className="fa fa-sign-out fa-fw" aria-hidden="true"></i> Sair</a>
        </div>
       </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  </div>
)
export default Navbar2
