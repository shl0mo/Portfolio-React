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
	const array_href = window.location.href.split('/')
	const pagina = array_href[array_href.length - 1]
	let linhas_tabela = [
			<Tr>
				<Td>Portifólio</Td>
				<Td><BotaoSecundario/></Td>
				<Td><BotaoPrimario/></Td>
			</Tr>,
			<Tr>
				<Td>Verificador de sintaxe de email</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Email_Syntax_Validator"/></Td>
				<Td><BotaoPrimario href="https://shl0mo.github.io/Email_Syntax_Validator"/></Td>
			</Tr>,
			<Tr>
				<Td>Calculadora</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Calculadora-Vue"/></Td>
				<Td><BotaoPrimario href="https://calculadora-vue-theta.vercel.app"/></Td>
			</Tr>
	]
	 if (pagina === 'projetos') {
		linhas_tabela = [
			...linhas_tabela,
			<Tr>
				<Td>Jogo Genius</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Genius"/></Td>
				<Td><BotaoPrimario href="https://shl0mo.github.io/Genius"/></Td>
			</Tr>,
			<Tr>
				<Td>Encurtador de URL</Td>
				<Td><BotaoSecundario/></Td>
				<Td><BotaoPrimario/></Td>
			</Tr>,
			<Tr>
				<Td>Monitorador do uso da RAM</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Uso_RAM-Node"/></Td>
				<Td></Td>
			</Tr>,
			<Tr>
				<Td>Jogo da memória</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/ChineseZodiac_MemoryGame"/></Td>
				<Td><BotaoPrimario href="https://shl0mo.github.io/ChineseZodiac_MemoryGame"/></Td>
			</Tr>,	
			<Tr>
				<Td>Consulta de DDD</Td>
				<Td><BotaoSecundario/></Td>
				<Td><BotaoPrimario/></Td>
			</Tr>,
			<Tr>
				<Td>Aplicativo de cálculo do IMC</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Calculadora_IMC-ReactNative"/></Td>
				<Td><BotaoPrimario href="https://snack.expo.dev/@sh_lomo/82271e"/></Td>
			</Tr>,
			<Tr>
				<Td>Calculadora de operações de matrizes</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Operacoes_Matrizes"/></Td>
				<Td><BotaoPrimario href="https://shl0mo.github.io/Operacoes_Matrizes"/></Td>
			</Tr>,
			<Tr>
				<Td>Sudoku em C</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Sudoku"/></Td>
				<Td></Td>
			</Tr>,
			<Tr>
				<Td>Blackjack em Java</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Blackjack-Java"/></Td>
				<Td></Td>
			</Tr>,
			<Tr>
				<Td>Análise de dados - cidades e países</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/AnaliseDados_DIO-Pandas"/></Td>
				<Td></Td>
			</Tr>,
			<Tr>
				<Td>Jogo Tabuada - Python</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Jogo_Tabuada-Python"/></Td>
				<Td></Td>
			</Tr>,
			<Tr>
				<Td>Filtros de imagens - passa-baixa e passa-alta</Td>
				<Td><BotaoSecundario href="https://github.com/shl0mo/Digital_Image_Processing-Filters"/></Td>
				<Td></Td>
			</Tr>,


		]
	}
	return (
		<TabelaProjetosStyled>
			<tbody>
				{linhas_tabela}
			</tbody>
		</TabelaProjetosStyled>
	)
}
