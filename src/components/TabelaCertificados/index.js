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

	@media (max-width: 830px) {
		margin-left: 75px;
		width: 700px;
	}
`

const Tr = styled.tr`
	display: grid;
	grid-template-columns: 2fr 1fr;
	padding: 30px;
	aligm-items: center;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	margin: 10px 0;
	
	&first-child {
		margin-top: 0;
		padding-top: 15px;
	}
	&:last-child {
		border-bottom: none;
	}
`

export const TabelaCertificados = () => {
	return (
		<TabelaCertificadosStyled>
			<tbody>
				<Tr>
					<Td>
						Curso Web Moderno
					</Td>
					<Td>
						<BotaoPrimario href="https://www.udemy.com/certificate/UC-8c2be586-c8bf-4800-842c-6072b30416c0"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Curso Desenvolvimento Web 2.0
					</Td>
					<Td>
						<BotaoPrimario href="https://cursos.dankicode.com/certificados?view=6871"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						PHP Jedai
					</Td>
					<Td>
						<BotaoPrimario href="https://cursos.dankicode.com/certificados?view=6603"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						TreinaWeb Multi-Stack
					</Td>
					<Td>
						<BotaoPrimario href="https://www.treinaweb.com.br/certificado/YMLPUU79EUHP"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Cognizant Cloud Data Engineer
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/AC2ED738.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Data Science Foundations
					</Td>
					<Td>
						<BotaoPrimario href="https://visagio.com/vaiacademy/certificado/1835317093"/>
					</Td>
				</Tr> 
				<Tr>
					<Td>
						Artificial Intelligence A-Z™: Learn How To Build An AI
					</Td>
					<Td>
						<BotaoPrimario href="https://www.udemy.com/certificate/UC-b0d16ddd-4fdc-4343-919e-fe425fd15e21/"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Inteligência Aritifical Fundamentos 2.0
					</Td>
					<Td>
						<BotaoPrimario href="https://drive.google.com/file/d/1mi4nbg0qM2JDNFrF8qFQfS--HNMDHEW7/view?usp=sharing"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Python Basics
					</Td>
					<Td>
						<BotaoPrimario href="https://certificates-prd.s3.sa-east-1.amazonaws.com/ifood-python-basics-8ac2b805-2010-462e-8847-e52425b88848.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Modelagem de Dados
					</Td>
					<Td>
						<BotaoPrimario href="https://drive.google.com/file/d/1RgaBkTjeTAtGW1aSo0dlkromYm1aYdcd/view"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						II Maratona de Programação - Kenzie Academy
					</Td>
					<Td>
						<BotaoPrimario href="https://drive.google.com/file/d/1DBOZsLbMzl6f5QaaGwOOKDdGwcRTUk_8/view"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução a criação de wesites com HTML5 e CSS3
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/BBBD7C23.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						JavaScript ES6 essencial
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/03F67434.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Desenvolvimento avançado com JavaScript ES6
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/03F67434.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/E91E6E84.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Resolvendo desafios de Código em JavaScript
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/4C68D27F.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução ao ReactJS
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/C25FE216.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Trabalhando com Componentes em React
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/634FB044.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Desenvolvimento de aplicações para internet com ReactJS
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/B706353E.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Práticas avançadas em projetos com ReactJS
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/5D363FB4.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução aos React Hooks
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/95778331.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Criando aplicações móveis multiplataforma com React Native
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/058EAC5B.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						MySql - Trabalhando com as suas primeiras tabelas
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/45ABB972.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução ao MongoDB e Bancos de Dados NoSQL
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/19AE59C8.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução ao Node.js com JavaScript
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/6323CC83.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Explorando o Estilo Arquitetural REST com Node.js
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/227DEE6A.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Node.js com Bancos de Dados Relacionais (SQL)
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/1D2301E0.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Microsserviços e Integrações com Node.js
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/90B6A01E.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução prática a computação em nuvem usando AWS
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/499C5C4F.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Lógica de Programação Essencial
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/A8451B8E.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Projetos ágeis com SCRUM
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/CEFCFDD4.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introudção ao Git e ao GitHub
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/106F821B.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Linux: A introdução ao sistema operacional
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/5DDD1FEE.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Shell script - Manipulando Arquivos
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/8E1D170D.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Fundamentos de Arquitetura de Sistemas
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/18AE44C1.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Arquitetura de Sistemas Avançado
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/9D98A2E5.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução a orquestração de contêineres com Docker
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/ADDA83DC.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Conceitos e melhores práticas com banco de dados PostgreSQL
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/E42B790F.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Explorando o poder do NoSQL com Cassandra e HBase
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/3ABD6A20.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução à programação com Python
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/FD0CD2DE.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Fundamentos de ETL com Python
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/F4793F2B.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Análise de dados com Python e Pandas
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/AB5F39AA.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Monitoramento de clusters Hadoop de alto nível com HDFS e YARN
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/06644249.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Orquestrando ambientes de Big Data distribuídos com Zookeeper, Yarn e Sqoop
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/38956C5D.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Como realizar consultas de maneira simples no ambiente complexo de Big Data com Hive e Impala
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/7C4182BE.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Processando grandes conjuntos de dados de forma paralela e distribuída com Spark
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/DA20DA33.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Criando pipelines de dados eficientes com Spark e Python
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/FAECCF0D.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução a Engenharia de Dados na AWS
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/2D1D8FD5.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução a Engenharia de Dados na Azure
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/9814023E.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Introdução à Mensageria na Nuvem Com Kafka e Python
					</Td>
					<Td>
						<BotaoPrimario href="https://hermes.digitalinnovation.one/certificates/5D3DD2CA.pdf"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Masterclass Azure DevOps
					</Td>
					<Td>
						<BotaoPrimario href="https://drive.google.com/file/d/1LQiQPxHYyqV6w67vHxMyjjRD8eFSQd_O/view?usp=sharing"/>
					</Td>
				</Tr>
				<Tr>
					<Td>
						Comunicação & Oratória - Escola Conquer
					</Td>
					<Td>
						<BotaoPrimario href="https://drive.google.com/file/d/1xyj1r7HqwlAxFCP4Tauw6PMjKVYpPRUG/view"/>
					</Td>
				</Tr>
			</tbody>
		</TabelaCertificadosStyled>
	)
}
