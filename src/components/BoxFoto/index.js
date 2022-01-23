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
	box-shadow: 2px -2px 10px rgba(0,0,0,0.2);
`
