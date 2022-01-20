import './App.css'
import styled from 'styled-components'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, Tabela, BoxConteudo, Section, Footer, SectionMain, BoxMain, ContainerTituloSessao } from './components'

const BoxDescricao = styled.div`
	font-size: 2em;
`

function App() {
  return (
	  <>
	  	<BarraSuperior hrefSobre="#sobre" hrefProjetos="#projetos" hrefContato="#contato"/>
	  	<SectionMain>
	  		<BoxFoto/>
	  		<BoxMain/>
	  	</SectionMain>
	  	<Section bg_color="rgba(0,0,0,0.03)" id="sobre">
	  		<ContainerTituloSessao>
	  			<TituloSessao>Sobre mim</TituloSessao>
	  		</ContainerTituloSessao>
	  		<BoxConteudo>
	  			<p>Estudante de Engenharia da Computação na Universidade Federal do Amazonas, desenvolvedor Full-Stack e entusiasta de Ciência de Dados e Cybersegurança. Possuo mais de 60 cursos na área de TI</p>
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
	  		<BotaoRedir>Certificados</BotaoRedir>
	  	</Section>
	  	<Section bg_color="rgba(0,0,0,0.06)" id="projetos">
	  		<ContainerTituloSessao>
	  			<TituloSessao>Alguns projetos</TituloSessao>
	  		</ContainerTituloSessao>
	  		<Tabela></Tabela>
	  		<BotaoRedir>Ver todos os projetos</BotaoRedir>
	  	</Section>
	  	<Section bg_color="rgba(0,0,0,0.09)" id="contato">
	  		<ContainerTituloSessao>
	  			<TituloSessao>Contato</TituloSessao>
	  		</ContainerTituloSessao>
	  		<BoxConteudo>
	  		</BoxConteudo>
	  	</Section>
	  </>
  );
}

export default App;
