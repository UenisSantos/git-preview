import React from 'react'
import useGithub from '../../hooks/github-hooks'
import * as Estilo from './styled'
import { useState } from 'react'

function Header() {
	const { getUser } = useGithub()
	const [usernameForSearch, setyusernameForSearch] = useState()

	const submitGetUser = () => {
		if (!usernameForSearch) return;
		return getUser(usernameForSearch)
	}

	return (
		<header>
			<Estilo.Wrapper>
				<input type="text" placeholder="Digite o usuário para pesquisa"
					onChange={(event) => setyusernameForSearch(event.target.value)}>

				</input>
				<button onClick={submitGetUser}>
					<span>Pesquisar</span>
				</button>
			</Estilo.Wrapper>

		</header>

	)
}

export default Header
