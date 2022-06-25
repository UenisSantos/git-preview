/* eslint-disable react/react-in-jsx-scope */
import * as Estilo from './styled'
import RepositoryItem from '../repository-Item'
import useGithub from '../../hooks/github-hooks'
import { useEffect, useState } from 'react'

const Repositories = () => {
	const { gitState, getUserRepos, getUserStarred } = useGithub()
	const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)

	useEffect(() => {
		if (gitState.user.login) {
			getUserRepos(gitState.user.login);
			getUserStarred(gitState.user.login)
		}
		sethasUserForSearchRepos(gitState.repositories)
	}, [gitState.user.login])

	return (
		<>
			{hasUserForSearchRepos ? (
				// eslint-disable-next-line react/react-in-jsx-scope
				<Estilo.WrapperTabs
					selectedTabClassName="is-selected"
					selectedTabPanelClassName="is-selected"
				>
					<Estilo.WrapperTabList>
						<Estilo.WrapperTab>Repositories</Estilo.WrapperTab>
						<Estilo.WrapperTab>Starred</Estilo.WrapperTab>
					</Estilo.WrapperTabList>

					<Estilo.WrapperTabPanel>
						<Estilo.WrapperList>
							{gitState.repositories.map(item => (
								<RepositoryItem
									key={item.id}
									name={item.name}
									linkToRepos={item.owner.html_url}
									fullName={item.full_name}
								/>
							))}
						</Estilo.WrapperList>
					</Estilo.WrapperTabPanel>


					<Estilo.WrapperTabPanel>
						<Estilo.WrapperList>
							{gitState.starred.map(item => (
								<RepositoryItem
									key={item.id}
									name={item.name}
									linkToRepos={item.owner.html_url}
									fullName={item.full_name}
								/>
							))}
						</Estilo.WrapperList>

					</Estilo.WrapperTabPanel>

				</Estilo.WrapperTabs>
			) : (<></>)}
		</>
	)
}

export default Repositories
