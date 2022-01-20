import styled from 'styled-components'

const BoxTituloSessao = styled.span`
	display: flex;
	flex-direction: row;
`

const TituloSessaoStyled = styled.h2`
	display: flex;
	justify-content: flex-start;
	font-size: 2.25em;
	font-weight: bold;
	margin-bottom: 40px;
	cursor: default;
`

const Rect = styled.span`
	font-size: 2em;
	margin-right: 10px;
	cursor: default;
	
	&:hover {
		color: blue;
	}
`


export function TituloSessao({ children }) {
	const rect = '▮'
	return (
		<BoxTituloSessao>
			<Rect>{rect}</Rect><TituloSessaoStyled>
				{children}
			</TituloSessaoStyled>
		</BoxTituloSessao>
	)
}
