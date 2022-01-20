import styled from 'styled-components'
import { Td } from '../TabelaProjetos'
import { BotaoPrimario } from  '../'

const TabelaCertificadosStyled = styled.table`
	position: relative;
	margin: 0px auto;
	background-color: white;
	border: 1px solid rgba(0,0,0,0.2);
	width: 60vw;
	min-height: 100px;
	padding: 20px;
`

const Tr = styled.tr`
	display: grid;
	grid-template-columns: 2fr 1fr;
	padding: 30px;
	aligm-items: center;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	margin: 10px 0;

	&:last-child {
		border-bottom: none;
		padding-bottom: 0px;
	}
`

export const TabelaCertificados = () => {
	return (
		<TabelaCertificadosStyled>
			<tbody>
				<Tr>
					<Td>
						Introdução ao React.js
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Javascript Avançado
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução ao Typescript: Explorando Classes, Tipos e Interfaces
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução a criação de websites com HTML5 e CSS3
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução prática a computação em nuvem usando AWS
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Microsserviços e Integrações com Node.js
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Node.js com Bancos de Dados Relacionais (SQL)
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Explorando o Estilo Arquitetural REST com Node.js
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução ao Nodejs com Javascript
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						MySql - Trabalhando com as suas primeiras tabelas
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Criando aplicações móveis multiplataforma com ReactNative
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução aos React Hooks
					</Td>
					<Td>
						<BotaoPrimario/>
					</Td>
				</Tr>
			</tbody>
		</TabelaCertificadosStyled>
	)
}

