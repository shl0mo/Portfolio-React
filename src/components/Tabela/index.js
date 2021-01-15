import styled from 'styled-components'
import styles from './styles.css'
import { BotaoDeploy } from '../BotaoDeploy'
import { BotaoCodigos } from '../BotaoCodigos'

const TabelaStyled = styled.table`
	background-color: white;
	width: 60vw;
	height: 100px;
	border-radius: 10px;
	padding: 20px;
`

const Tr = styled.tr`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 20px;
	align-items: center;
`

const Td = styled.td`
	text-align: right;
`

export function Tabela () {
	return (
		<TabelaStyled>
			<tbody>
				<Tr>
					<Td>Monitorador de Recursos do PC</Td>
					<Td><BotaoCodigos/></Td>
					<Td><BotaoDeploy/></Td>
				</Tr>
				<Tr>
					<Td>Jogo da Memória</Td>
					<Td><BotaoCodigos/></Td>
					<Td><BotaoDeploy/></Td>
				</Tr>
				<Tr>
					<Td>Loja Virtual</Td>
					<Td><BotaoCodigos/></Td>
					<Td><BotaoDeploy/></Td>
				</Tr>
			</tbody>
		</TabelaStyled>
	)
}