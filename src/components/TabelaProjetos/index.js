import styled from 'styled-components'
import { BotaoPrimario } from '../BotaoPrimario'
import { BotaoSecundario } from '../BotaoSecundario'

export const TabelaProjetosStyled = styled.table`
	position: relative;
	margin: 0px auto;
	background-color: white;
	width: 65vw;
	min-height: 100px;
	padding: 20px;
	border: 1px solid rgba(0,0,0,0.2);
`

export const Tr = styled.tr`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 20px;
	align-items: center;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	margin: 10px 0;

	&:last-child {
		border-bottom: none;
		padding-bottom: 0px;
	}
`

export const Td = styled.td`
	text-align: right;

	&:first-child {
		text-align: left;
		font-size: 1.3em;
	}
`

export function TabelaProjetos () {
	return (
		<TabelaProjetosStyled>
			<tbody>
				<Tr>
					<Td>Monitorador de Recursos do PC</Td>
					<Td><BotaoSecundario/></Td>
					<Td><BotaoPrimario/></Td>
				</Tr>
				<Tr>
					<Td>Jogo da Memória</Td>
					<Td><BotaoSecundario/></Td>
					<Td><BotaoPrimario/></Td>
				</Tr>
				<Tr>
					<Td>Loja Virtual</Td>
					<Td><BotaoSecundario/></Td>
					<Td><BotaoPrimario/></Td>
				</Tr>
			</tbody>
		</TabelaProjetosStyled>
	)
}
