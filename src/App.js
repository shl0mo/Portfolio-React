import './App.css'
import styled from 'styled-components'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, Tabela } from './components'

const BoxDescricao = styled.div`
	font-size: 2em;
`

function App() {
  return (
	  <>
	  	<BarraSuperior hrefSobre="#sobre" hrefProjetos="#projetos" hrefContato="#contato"/>
	  	<div className="container-sessao-1 position-relative">	
	  		<section className="sessao-main">
	  			<div className="container-foto">
	  				<BoxFoto/>
	  				<div className="box-descricao">
	  					<span className="nome display-block">Salomão Cruz</span>
	  					<span className="funcao display-block">Web Full Stack Developer</span>
	  				</div>
	  			</div>
	 		</section>
	  	</div>
	  	<div className="container-sessao-2 position-relative">
	  		<section className="sessao-sobre position-relative border-top-gray" id="sobre">
	  			<div className="container-titulo-sessao">
	  				<TituloSessao>Sobre mim</TituloSessao>
	  			</div>
	  			<div className="container-conteudo-sobre">
	  				<p>Descrição</p>
	  				<p>Habilidades</p>
	  				<p>Certificados</p>
	  				<BotaoRedir>Certificados</BotaoRedir>
	  			</div>
	  		</section>
	  		<section className="sessao-projetos position-relative border-top-gray" id="projetos">
	  			<div className="container-titulo-sessao">
	  				<TituloSessao>Alguns projetos</TituloSessao>
	  			</div>
	  			<Tabela></Tabela>
	  			<BotaoRedir>Ver todos os projetos</BotaoRedir>
	  		</section>
	  		<section className="sessao-contato position-relative border-top-gray" id="contato">
	  			<div className="container-titulo-sessao">
	  				<TituloSessao>Contato</TituloSessao>
	  			</div>
	  		</section>
		</div>
	  </>
  );
}

export default App;
