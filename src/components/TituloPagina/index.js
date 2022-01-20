import styled from 'styled-components'
import { TituloSessao } from '../TituloSessao'

const TituloPaginaStyled = styled.div`
	position: relative;
	font-size: 1.1em;
	margin-left: 15vw;
`

export function TituloPagina({ children }) {
	return (
		<TituloPaginaStyled>
			<TituloSessao>{children}</TituloSessao>
		</TituloPaginaStyled>
	)
}

