import styled from 'styled-components'

const BotaoSecundarioStyled = styled.button`
	border: 1px solid black;
	background-color: white;
	color: black;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 1.3em;
	margin: 0;

	&:hover {
		background-color: white;
		color: blue;
		border-color: blue;
	}
`

export const BotaoSecundario = ({ href }) => {
	return (
		<a href={href}>
			<BotaoSecundarioStyled>Códigos</BotaoSecundarioStyled>
		</a>
	)
}
