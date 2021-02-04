import React from 'react'
import styled from 'styled-components'
import foto from '../../assets/foto.jpg'

export const BoxFoto = styled.div`
	height: 400px;
	width: 400px;
	border-radius: 200px;
	background-image: url(${foto});
	background-size: contain;
`
