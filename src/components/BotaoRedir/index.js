import styled from 'styled-components'

const BotaoRedirStyled = styled.button`
	border: none;
	background-color: black;
	color: white;
	padding: 20px 80px;
	font-size: 1.3em;
	cursor: pointer;
	margin-top: 20px;
	width: 355.39px;

	&:hover {
		background-color: blue;
		color: white;
	}
`

export function BotaoRedir({href, children}) {
	return (
		<span>
		<a href={href}>
			<BotaoRedirStyled>
					{children}
			</BotaoRedirStyled>
		</a>
		</span>
	)
}
