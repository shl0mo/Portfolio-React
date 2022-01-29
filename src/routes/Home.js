import React from 'react'

import { BarraSuperior, BoxFoto, TituloSessao, BotaoRedir, BoxConteudo, Section, Footer, SectionMain, BoxMain, ContainerTituloSessao, TabelaProjetos, IconeTelefone, IconeEmail, IconeLinkedin, IconeGithub, ContainerLogoTecnologia, TituloSubsessao, UlSubsessao, ItemSubsessao, BoxItemContato } from '../components'

export const Home = () => {
	return (
		<>
			<BarraSuperior hrefHome="/" hrefSobre="#sobre" hrefProjetos="#projetos" hrefContato="#contato" className="foto"/>
		  	<SectionMain className="sm">
		  		<BoxFoto/>
	  			<BoxMain/>
		  	</SectionMain>
		  	<Section bg_color="rgba(0,0,0,0.03)" id="sobre">
	  			<ContainerTituloSessao>
	 				 <TituloSessao>Sobre mim</TituloSessao>
		  		</ContainerTituloSessao>
		  		<BoxConteudo>
	  				<p>Desenvolvedor Full-Stack e estudante de Engenharia da Computação na Universidade Federal do Amazonas. Entusiasta de Ciência de Dados e Cybersegurança, possuo mais de 50 cursos na área de TI</p>
		  			<TituloSubsessao>Hard Skills</TituloSubsessao>
		  			<ContainerLogoTecnologia/>
		  			<TituloSubsessao>Soft Skills</TituloSubsessao>
		  			<UlSubsessao>
		  				<ItemSubsessao>Proativo</ItemSubsessao>
		  				<ItemSubsessao>Autodidata</ItemSubsessao>  	
		  				<ItemSubsessao>Perfil analítico</ItemSubsessao>
		  				<ItemSubsessao>Gestão de tempo</ItemSubsessao>
		  				<ItemSubsessao>Trabalho em equipe</ItemSubsessao>
		  				<ItemSubsessao>Habilidades de comunicação</ItemSubsessao>
		  			</UlSubsessao>
		  			<TituloSubsessao>Idiomas</TituloSubsessao>
	  				<UlSubsessao>	
	  					<ItemSubsessao>Inglês - avançado</ItemSubsessao>
	  					<ItemSubsessao>Italiano - intermediário</ItemSubsessao>
	  					<ItemSubsessao>Espanhol - intermediário</ItemSubsessao>
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
		  		<BotaoRedir href="mailto:scc@icomp.ufam.edu.br?">Enviar email</BotaoRedir>
		  	</Section>
		  	<Footer/>
		  </>
	  )
}
