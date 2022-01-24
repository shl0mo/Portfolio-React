import './App.css'
import styled from 'styled-components'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, Tabela, BoxConteudo, Section, Footer, SectionMain, BoxMain, ContainerTituloSessao, TabelaProjetos, TabelaCertificados, TituloPagina, ContainerPagina, IconeTelefone, IconeEmail, IconeLinkedin, IconeGithub } from './components'

const BoxDescricao = styled.div`
	font-size: 2em;
`

function App() {
  const host = 'http://localhost'
  const porta = '3000'
  if (window.location.href === `${host}:${porta}/` || window.location.href === `${host}:${porta}/#sobre` || window.location.href === `${host}:${porta}/#projetos` || window.location.href === `${host}:${porta}/#contato`) {
	  return (
		  <>
	  		<BarraSuperior hrefHome="/" hrefSobre="#sobre" hrefProjetos="#projetos" hrefContato="#contato"/>
		  	<SectionMain className="nwrap">
		  		<BoxFoto/>
	  			<BoxMain/>
		  	</SectionMain>
		  	<Section bg_color="rgba(0,0,0,0.03)" id="sobre">
	  			<ContainerTituloSessao>
	 				 <TituloSessao>Sobre mim</TituloSessao>
		  		</ContainerTituloSessao>
		  		<BoxConteudo>
	  				<p>Desenvolvedor Full-Stack, estudante de Engenharia da Computação na Universidade Federal do Amazonas e de Segurança da Informação na Unip. Entusiasta de Ciência de Dados e Cybersegurança, possuo mais de 60 cursos na área de TI</p>
	  				<br/>
	  				<p><strong>Habilidades</strong></p>
		  			<br/>
		  				<p>React.js</p><br/>
	  					<p>React Native</p><br/>
						<p>Banco de dados Relacionais</p><br/>
	  					<p>Bancos de dados não relacionais</p><br/>
		  				<p>MySql</p><br/>
		  				<p>MongoDB</p>
	  				<br/>
	  				<br/>
		  			<p><strong>Idiomas</strong></p>
		  			<br/>
	  					<p>Inglês - avançado</p><br/>
	  					<p>Espanhol - intermediário</p><br/>
	  					<p>Italiano - intermediário</p><br/>
		  		</BoxConteudo>
		  		<BotaoRedir href="/certificados">Certificados</BotaoRedir>
	  		</Section>
		  	<Section bg_color="rgba(0,0,0,0.06)" id="projetos">
		  		<ContainerTituloSessao>
	  				<TituloSessao>Alguns projetos</TituloSessao>
		  		</ContainerTituloSessao>
		  		<TabelaProjetos></TabelaProjetos>
	  			<BotaoRedir href="/projetos">Ver todos os projetos</BotaoRedir>
		  	</Section>
		  	<Section bg_color="rgba(0,0,0,0.09)" id="contato" className="pb-20vh">
	  			<ContainerTituloSessao>
	  				<TituloSessao>Contato</TituloSessao>
		  		</ContainerTituloSessao>
		  		<BoxConteudo>
		  			<p><strong>Telefone</strong></p>
		  				<IconeTelefone altura="25" largura="25"/>
		  			<br/>
		  			<span><strong>Email</strong></span><br/>
			  			<IconeEmail altura="25" lagura="25"/>	  			
		  			<p><strong>Redes Sociais</strong></p>
		  			<span>
		  				<IconeLinkedin altura="50" largura="50"/>
		  			</span>
		  			<span>
		  				<IconeGithub altura="50" largura="50"/>
		  			</span>
	  			</BoxConteudo>
		  		<BotaoRedir>Enviar email</BotaoRedir>
		  	</Section>
		  	<Footer/>
		  </>
	  )
  } else if (window.location.href === `${host}:${porta}/certificados`) {
	return (
		<>
			<BarraSuperior hrefHome="/" hrefProjetos="projetos"/>
			<ContainerPagina>
				<TituloPagina>Certificados</TituloPagina>
				<TabelaCertificados/>
			</ContainerPagina>
			<Footer/>
		</>
	)
  } else if (window.location.href === `${host}:${porta}/projetos`) {
	return (
		<>
			<BarraSuperior hrefHome="/" hrefCertificados="certificados"/>
			<ContainerPagina>
				<TituloPagina>Projetos</TituloPagina>
				<TabelaProjetos/>
			</ContainerPagina>
			<Footer/>
		</>
	)
  }
}

export default App;
