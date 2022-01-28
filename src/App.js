import './App.css'
import styled from 'styled-components'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, Tabela, BoxConteudo, Section, Footer, SectionMain, BoxMain, ContainerTituloSessao, TabelaProjetos, TabelaCertificados, TituloPagina, ContainerPagina, IconeTelefone, IconeEmail, IconeLinkedin, IconeGithub, ContainerLogoTecnologia, TituloSubsessao, UlSubsessao, ItemSubsessao, BoxItemContato } from './components'

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
		  	<SectionMain>
		  		<BoxFoto/>
	  			<BoxMain/>
		  	</SectionMain>
		  	<Section bg_color="rgba(0,0,0,0.03)" id="sobre">
	  			<ContainerTituloSessao>
	 				 <TituloSessao>Sobre mim</TituloSessao>
		  		</ContainerTituloSessao>
		  		<BoxConteudo>
	  				<p>Desenvolvedor Full-Stack, estudante de Engenharia da Computação na Universidade Federal do Amazonas e de Segurança da Informação na Unip. Entusiasta de Ciência de Dados e Cybersegurança, possuo mais de 60 cursos na área de TI</p>
		  			<TituloSubsessao>Hard Skills</TituloSubsessao>
		  			<ContainerLogoTecnologia/>
		  			<TituloSubsessao>Soft Skills</TituloSubsessao>
		  			<TituloSubsessao>Idiomas</TituloSubsessao>
	  				<UlSubsessao>	
	  					<ItemSubsessao>Inglês - avançado</ItemSubsessao>
	  					<ItemSubsessao>Espanhol - intermediário</ItemSubsessao>
	  					<ItemSubsessao>Italiano - intermediário</ItemSubsessao>
		  			</UlSubsessao>
		  		</BoxConteudo>
		  		<BotaoRedir href="/certificados">Certificados</BotaoRedir>
	  		</Section>
		  	<Section bg_color="rgba(0,0,0,0.06)" id="projetos">
		  		<ContainerTituloSessao>
	  				<TituloSessao>Alguns projetos</TituloSessao>
		  		</ContainerTituloSessao>
		  		<TabelaProjetos></TabelaProjetos>
	  			<BotaoRedir href="/projetos">Ver mais projetos</BotaoRedir>
		  	</Section>
		  	<Section bg_color="rgba(0,0,0,0.09)" id="contato" ultimo={true}>
	  			<ContainerTituloSessao>
	  				<TituloSessao>Contato</TituloSessao>
		  		</ContainerTituloSessao>
		  		<BoxConteudo>
		  			<TituloSubsessao primeiro="true">Telefone</TituloSubsessao>
		  			<BoxItemContato>
			  			<IconeTelefone altura="25" largura="25"/>
			  			<ItemSubsessao>(92) 98115-2683</ItemSubsessao>
		  			</BoxItemContato>
		  			<TituloSubsessao>Email</TituloSubsessao>
		  			<BoxItemContato>
				  		<IconeEmail altura="25" lagura="25"/>
			  			<ItemSubsessao>scc@icomp.ufam.edu.br</ItemSubsessao>
		  			</BoxItemContato>
		  			<TituloSubsessao>Redes Sociais</TituloSubsessao>
		  				<IconeLinkedin altura="65" largura="65" href="http://linkedin.com/in/salomao-cruz" color_class="c-b" margin="0px 25px 0px 30px"/>
		  				<IconeGithub altura="65" largura="65" href="http://github.com/shl0mo" color_class="c-b"/>
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
