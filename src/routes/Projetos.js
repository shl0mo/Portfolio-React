import React from 'react'
import { Link } from 'react-router-dom'
import { BarraSuperior, ContainerPagina, TituloPagina, TabelaProjetos, Footer } from '../components'

export const Projetos = () => {
	return (
		<>
			<BarraSuperior hrefHome="/" hrefCertificados="certificados"/>
			<ContainerPagina>
				<TituloPagina>Projetos</TituloPagina>
				<TabelaProjetos margin_left={true}/>
			</ContainerPagina>
			<Footer/>
		</>
	)
}
