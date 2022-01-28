import styled from 'styled-components'

const TituloSubsessaoStyled = styled.h3`
	margin: ${props => props.primeiro ? '0 0 20px 0' : '40px 0 20px 0'};
	cursor: default;
}`

export const TituloSubsessao = ({ children, primeiro }) => {
	const rect = '▮'
	return (
		<TituloSubsessaoStyled primeiro={primeiro}>
			{rect} {children}
		</TituloSubsessaoStyled>
	)
}
