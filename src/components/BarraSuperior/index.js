import styled from 'styled-components'

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;
	background-color: black;
	color: white;
	height: 95px;
	font-size: 1.1em;
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
	height: 100%;
	padding: 20px;
	cursor: pointer;
	background-color: black;

	&:hover {
		background-color: blue;
	}
`

const A = styled.a`
	display: flex;
	algin-items: center;
	height: 100%;
`




export function BarraSuperior (props) {
	const { hrefSobre, hrefProjetos, hrefContato } = props	
	return (
		<Header>
			<span>
				sc-dev
			</span>
			<Nav>
				<Ul>
					<A href={hrefSobre}><Li>Sobre mim</Li></A>
					<A href={hrefProjetos}><Li>Projetos</Li></A>
					<A href={hrefContato}><Li>Contato</Li></A>
				</Ul>
			</Nav>
		</Header>
	)
}
