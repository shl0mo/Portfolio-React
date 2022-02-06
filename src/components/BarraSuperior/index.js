import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px 0 60px;
	background-color: black;
	color: white;
	height: 100px;
	font-size: 1.15em;
	width: 100%;

	@media (max-width: 830px) {
		width: 830px;
	}
`

export const Logo = styled.span`
	display: flex;
	align-self: center;
	font-size: 1.8em;
	font-family: 'PublicPixel';
`

const Nav = styled.nav`
	display: flex;
	align-items: center;
	height: 100%;
`

const Ul = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: row;
	height: 100%;
`

const Li = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 20px;
	cursor: pointer;
	background-color: black;
	width: 145px;

	&:hover {
		background-color: blue;
	}
`

const A = styled.a`
	display: flex;
	algin-items: center;
	height: 100%;
`




export function BarraSuperior ({ hrefSobre, hrefProjetos, hrefContato, hrefHome, hrefCertificados }) {
	const array_href = window.location.href.split('/')
	if (array_href.length == 5) array_href.pop()
	const pagina = array_href[array_href.length - 1]
	console.log(window.location.href)
	let array_paginas = []
	if (pagina === '' || pagina === '#sobre' || pagina === '#projetos' || pagina === '#contato') {
		array_paginas = [
			<A href={hrefSobre} key='bsh-1'><Li>Sobre mim</Li></A>,
			<A href={hrefProjetos} key='bsh-2'><Li>Projetos</Li></A>,
			<A href={hrefContato} key='bsh-3'><Li>Contato</Li></A>
		]
	} else if (pagina === 'certificados') {
		array_paginas = [
			<A href={hrefHome} key={'bsc-1'}><Li>Home</Li></A>,
			<A href={hrefProjetos} key='bsc-2'><Li>Projetos</Li></A>
		] 
	} else if (pagina === 'projetos') {
		array_paginas = [
			<A href={hrefHome} key='bsp-1'><Li>Home</Li></A>,
			<A href={hrefCertificados} key='bsp-2'><Li>Certificados</Li></A>
		]
	}
	return (
		<Header className="teste">
			<A href={hrefHome}>
				<Logo>
					SC-Dev
				</Logo>
			</A>
			<Nav>
				<Ul>
					{array_paginas}
				</Ul>
			</Nav>
		</Header>
	)
}
