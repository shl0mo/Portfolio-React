import styled from 'styled-components'

export const BotaoDeployStyled = styled.button `
	background-color: black;
	border-radius: 0px;
	padding: 10px 20px;
	margin: 0;
`

export function BotaoDeploy() {
	return (
		<BotaoDeployStyled>Deploy</BotaoDeployStyled>
	)
}
