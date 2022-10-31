/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../header'
import * as Estilo from './styled'

function Layout({ children }) {


	return (
		<Estilo.WrapperLayout>
			<Header />
			{children}

		</Estilo.WrapperLayout>
	)
}

export default Layout
