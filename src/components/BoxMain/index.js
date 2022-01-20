import styled from 'styled-components'

const BoxMainStyled = styled.div`
	flex: 1;
	align-self: flex-end;
	padding-bottom: 40px;
	margin-left: 30px;
	line-height: 60px;
	cursor: default;
`

const Nome = styled.span`
	font-size: 3.5em;
	font-weight: bold;
	display: block;
`

const Funcao = styled.span`
	font-size: 2.3em;
	margin-left: 20px;
	display: block;
`

const BarraTag = styled.span`
	&:hover {
		font-weight: bold;
		color: blue;
	}
`

export function BoxMain() {
	const abre_tag = "<"
	const barra_tag = "/"
	const fecha_tag = ">"
	return (
		<BoxMainStyled>
			<Nome>Salomão Cruz</Nome>
			<Funcao>{abre_tag}Web Full-Stack Developer<BarraTag>{barra_tag}</BarraTag>{fecha_tag}</Funcao>
		</BoxMainStyled>
	)
}
