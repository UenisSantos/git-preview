/* eslint-disable react/react-in-jsx-scope */
import * as Estilo from './styled'

// eslint-disable-next-line react/prop-types
const RepositoryItem = ({ name, linkToRepos, fullName }) => {
	return (
		<Estilo.Wrapper>
			<Estilo.WrapperTitle>{name}</Estilo.WrapperTitle>

			<Estilo.WrapperFullName>full name</Estilo.WrapperFullName>
			<Estilo.WrapperLink href={linkToRepos} target="_blank" rel="noreferrer">
				{fullName}
			</Estilo.WrapperLink>
		</Estilo.Wrapper>
	)
}

export default RepositoryItem
