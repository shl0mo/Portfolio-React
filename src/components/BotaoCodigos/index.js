import styled from 'styled-components'
import styles from './styles.css'

const BotaoCodigosStyled = styled.button`
	border: 1px solid black;
	background-color: white;
	color: black;
	padding: 10px 20px;
	border-radius: 0px;
	margin: 0;
`

export function BotaoCodigos() {
	return (
		<BotaoCodigosStyled className="botao-codigos">Códigos</BotaoCodigosStyled>
	)
}
