import './App.css'
import styled from 'styled-components'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, Tabela, BoxConteudo, Section, Footer, SectionMain, BoxMain, ContainerTituloSessao, TabelaProjetos, TabelaCertificados, TituloPagina, ContainerPagina, IconeTelefone, IconeEmail, IconeLinkedin, IconeGithub } from './components'

const BoxDescricao = styled.div`
	font-size: 2em;
`

function App() {
  const host = 'http://localhost'
  const porta = '3000'
  const tam_icones = 80
  const rect = '▮'
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
	  				<p><strong>{rect} Hard Skills</strong></p>
		  			<br/>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="react" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg" alt="jquery" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vue" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="node" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width={tam_icones} height={tam_icones}/></a>	  						  				
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" alt="java" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" alt="python" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-line.svg" alt="c" width={tam_icones} height={tam_icones}/></a>
		  				<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" alt="r" width={tam_icones} height={tam_icones}/></a>
		  			<br/>
		  			<br/>
		  			<p><strong>{rect} Soft Skills</strong></p>
		  				
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
		  	<Section bg_color="rgba(0,0,0,0.09)" id="contato" ultimo={true}>
	  			<ContainerTituloSessao>
	  				<TituloSessao>Contato</TituloSessao>
		  		</ContainerTituloSessao>
		  		<BoxConteudo>
		  			<p><strong>{rect} Telefone</strong></p>
		  				<IconeTelefone altura="25" largura="25"/>
		  			<br/>
		  			<span><strong>{rect} Email</strong></span><br/>
			  			<IconeEmail altura="25" lagura="25"/>	  			
		  			<p><strong>{rect} Redes Sociais</strong></p>
		  			<span>
		  				<IconeLinkedin altura="50" largura="50"/>
		  			</span>
		  			<span>
		  				<IconeGithub altura="50" largura="50" href="http://github.com/shl0mo" color_class="c-b"/>
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
