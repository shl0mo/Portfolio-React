import styles from './styles.css'

export function BarraSuperior (props) {
	const { hrefSobre, hrefProjetos, hrefContato } = props	
	return (
		<header>
			<span>
				sc-dev
			</span>
			<nav>
				<ul>
					<a href={hrefSobre}><li>Sobre mim</li></a>
					<a href={hrefProjetos}><li>Projetos</li></a>
					<a href={hrefContato}><li>Contato</li></a>
				</ul>
			</nav>
		</header>
	)
}
