import styled from 'styled-components'
import foto from '../../assets/foto.jpg'

export const BoxFoto = styled.div`
	position: relative;
	height: 400px;
	width: 400px;
	margin-top: 65px;
	border-radius: 200px;
	background-image: url(${foto});
	background-size: contain;
`
