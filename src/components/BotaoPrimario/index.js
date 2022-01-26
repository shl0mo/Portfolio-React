import styled from 'styled-components'

export const BotaoPrimarioStyled = styled.button `
	background-color: black;
	color: white;
	border: none;
	font-size: 1.3em;
	padding: 10px 20px;
	cursor: pointer;

	&:hover {
		background-color: blue;
	}
`

export const BotaoPrimario = ({ href }) => {
	const array_href = window.location.href.split('/')
	const pagina = array_href[array_href.length - 1]
	let label = ''
	if (pagina === '' || pagina === '#sobre' || pagina === '#projetos' || pagina === '#contato' || pagina === 'projetos') {
		label = 'Deploy'
	} else if (pagina === 'certificados') {
		label = 'Ver certificado'
	}
	return (
		<a href={href} target="_blank">
			<BotaoPrimarioStyled>{label}</BotaoPrimarioStyled>
		</a>
	)
}
