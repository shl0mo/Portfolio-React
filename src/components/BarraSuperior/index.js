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
`

const Logo = styled.span`
	font-size: 2em;
	font-family: 'URW Gothic Book';
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
	width: 130px;

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
	const pagina = array_href[array_href.length - 1]
	let array_paginas = []
	if (pagina === '' || pagina == '#sobre' || pagina == '#projetos' || pagina == '#contato') {
		array_paginas = [<A href={hrefSobre}><Li>Sobre mim</Li></A>, <A href={hrefProjetos}><Li>Projetos</Li></A>, <A href={hrefContato}><Li>Contato</Li></A>]
	} else if (pagina === 'certificados') {
		array_paginas = [<A href={hrefHome}><Li>Home</Li></A>, <A href={hrefProjetos}><Li>Projetos</Li></A>] 
	} else if (pagina === 'projetos') {
		array_paginas = [<A href={hrefHome}><Li>Home</Li></A>,<A href={hrefCertificados}><Li>Certificados</Li></A>]
	}
	return (
		<Header>
			<Logo>
				SC-Dev
			</Logo>
			<Nav>
				<Ul>
					{array_paginas}
				</Ul>
			</Nav>
		</Header>
	)
}
