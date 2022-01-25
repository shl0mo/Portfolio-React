import styled from 'styled-components'
import { IconeGithub } from '../'

const ContainerFooter = styled.div`
	position: absolute;
	display: flex;
	align-items: space-between;
	width: 100vw;
`

const LogoFooter = styled.div`
	position: relative;
	font-size: 4.5em;
	font-family: "PublicPixel";
	margin: 60px 0px 0px 18vw;
	float: left;
`

const BarraVertical = styled.div`
	display: flex;
	align-self: center;
	position: relative;
	width: 1px;
	height: 340px;
	margin: 60px 20px 0px 10px;
	background-color: white;
	float: left;

`

const FooterStyled = styled.footer`
	position: relative;
	background-color: black;
	height: 500px;
	width: 100vw;
	color: white;
	padding: 0;
	margin-bottom: 0;
	bottom: 0;
`

const ContainerDadosDev = styled.div`
	display: flex;
	flex-direction: column;
`

const H1 = styled.h1`
	color: white;
	font-size: 1.8em;
	float: left;
	font-weight: normal;
	margin-top: ${props => props.margin_top ? "120px" : "0px" };
`

const Git = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	align-items: center;
`

export const Footer = () => {
	const bull = "•"
	return (
		<ContainerFooter>
			<FooterStyled>
				<LogoFooter>SC-Dev</LogoFooter>
				<BarraVertical/>
				<ContainerDadosDev>
					<H1 margin_top={true}>Salomão Cruz {bull} 2022</H1>
					<Git>
						<IconeGithub altura="50" largura="50" href="http://github.com/shl0mo" color_class="c-w"/>
						<a href="http://github.com/shl0mo" target="_blank"><h1>github.com/shl0mo</h1></a>
					</Git>
				</ContainerDadosDev>
			</FooterStyled>
		</ContainerFooter>
	)
}
