import React from 'react'
import { Link } from 'react-router-dom'
import { BarraSuperior, ContainerPagina, TituloPagina, TabelaCertificados, Footer } from '../components'

export const Certificados = () => {
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
}
