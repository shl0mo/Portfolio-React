import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { Home } from './Home'
import { Certificados } from './Certificados'
import { Projetos } from './Projetos'

export const Rotas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home/>} path='/' exact/>
				<Route element={<Certificados/>} path='/certificados/'/>
				<Route element={<Projetos/>} path='/projetos/'/>
			</Routes>
		</BrowserRouter>
	)
}
