import styled from 'styled-components'

const TituloSubsessaoStyled = styled.h3`
	display: flex;
	flex-directio: row;
	margin: ${props => props.primeiro ? '0 0 20px 0' : '40px 0 20px 0'};
	cursor: default;
}`

const Rect = styled.span`
	font-size: 0.6em;
	margin-right: 8px;
`

export const TituloSubsessao = ({ children, primeiro }) => {
	const rect = '▮'
	return (
		<TituloSubsessaoStyled primeiro={primeiro}>
			<Rect>{rect}</Rect> {children}
		</TituloSubsessaoStyled>
	)
}
