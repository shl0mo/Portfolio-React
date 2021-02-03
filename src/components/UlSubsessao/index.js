import styled from 'styled-components'

const UlSubsessaoStyled = styled.ul`
	margin-left: calc(3% + 20px);
`

export const UlSubsessao = ({children}) => {
	return (
		<UlSubsessaoStyled>
			{children}
		</UlSubsessaoStyled>
	)
}
