import styled from 'styled-components'

const LogoTecnologiaStyled = styled.img`
	filter: grayscale(1);
	cursor: pointer;
	padding: 5px;

	&:hover {
		filter: grayscale(0);
		padding: 0px;
	}
`

export const LogoTecnologia = ({ href, src, alt }) => {
	const height = 80
	const width = 80
	return (
		<a href={href}>
			<LogoTecnologiaStyled src={src} height={height} width={width} alt={alt}/>
		</a>
	)
}
