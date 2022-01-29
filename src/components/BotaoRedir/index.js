import styled from 'styled-components'

const BotaoRedirStyled = styled.button`
	border: none;
	background-color: black;
	color: white;
	padding: 20px 80px;
	font-size: 1.3em;
	cursor: pointer;
	width: 357px;

	&:hover {
		background-color: blue;
		color: white;
	}
`

const ContainerBotaoRedir = styled.div`
	margin-top: 20px;
`

export function BotaoRedir({href, children}) {
	return (
		<ContainerBotaoRedir>
			<a href={href}>
				<BotaoRedirStyled>
						{children}
				</BotaoRedirStyled>
			</a>
		</ContainerBotaoRedir>
	)
}
