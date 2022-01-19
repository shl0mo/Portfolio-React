import './App.css'
import styled from 'styled-components'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, Tabela, BoxConteudo, SectionStyled } from './components'

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
	  		<SectionStyled className="sessao-sobre position-relative border-top-gray" id="sobre">
	  			<div className="container-titulo-sessao">
	  				<TituloSessao>Sobre mim</TituloSessao>
	  			</div>
	  			<BoxConteudo>
	  				<p>Estudante de Engenharia da Computação na Universidade Federal do Amazonas, desenvolvedor Full-Stack e entusiasta de Ciência de Dados e Cybersegurança. Possuo nível avançado em inglês e mais de 60 cursos na área de TI</p>
	  				<br/>
	  				<p>Habilidades</p>
	  				<br/>
	  					<p>React.js</p><br/>
	  					<p>React Native</p><br/>
						<p>Banco de dados Relacionais</p><br/>
	  					<p>Bancos de dados não relacionais</p><br/>
	  					<p>MySql</p><br/>
	  					<p>MongoDB</p>
	  			</BoxConteudo>
	  			<BotaoRedir>Certificados</BotaoRedir>
	  		</SectionStyled>
	  		<SectionStyled className="sessao-projetos position-relative border-top-gray" id="projetos">
	  			<div className="container-titulo-sessao">
	  				<TituloSessao>Alguns projetos</TituloSessao>
	  			</div>
	  			<Tabela></Tabela>
	  			<BotaoRedir>Ver todos os projetos</BotaoRedir>
	  		</SectionStyled>
	  		<SectionStyled className="sessao-contato position-relative border-top-gray" id="contato">
	  			<div className="container-titulo-sessao">
	  				<TituloSessao>Contato</TituloSessao>
	  			</div>
	  			<BoxConteudo>
	  			</BoxConteudo>
	  		</SectionStyled>
		</div>
	  </>
  );
}

export default App;
