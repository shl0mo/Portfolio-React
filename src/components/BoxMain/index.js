import styled from 'styled-components'

const BoxMainStyled = styled.div`
	flex: 1;
	align-self: flex-end;
	padding-bottom: 40px;
	margin-left: 40px;
	line-height: 60px;
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

export function BoxMain() {
	return (
		<BoxMainStyled>
			<Nome>Salomão Cruz</Nome>
			<Funcao>Web Full-Stack Developer</Funcao>
		</BoxMainStyled>
	)
}
