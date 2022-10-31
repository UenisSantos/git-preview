import React from 'react'
import useGithub from '../../hooks/github-hooks'
import * as Estilo from './styled'

const Profile = () => {
	const { gitState } = useGithub()
	return (
		<>
			<Estilo.Wrapper>

				<Estilo.WrapperImage src={gitState.user.avatar_url} alt="avatar do seu github" />

				<Estilo.WrapperInfoUsers>
					<div>
						<h1>{gitState.user.name}</h1>
						<Estilo.WrapperUserName>
							<h3>Username: </h3>
							<a
								href={gitState.user.html_url}
								target="_blank"
								rel="noreferrer">
								{gitState.user.login}
							</a>

						</Estilo.WrapperUserName>

						<Estilo.WrapperUserName>
							<h3>Company: </h3>
							<a href={gitState.user.company} target="_blank"
								rel="noreferrer">
								{gitState.user.company}
							</a>

						</Estilo.WrapperUserName>

						<Estilo.WrapperUserName>
							<h3>Location: </h3>

							<span>{gitState.user.location}</span>

						</Estilo.WrapperUserName>

						<Estilo.WrapperUserName>
							<h3>Blog: </h3>
							<a href={gitState.user.blog} target='_blank'
								rel='noreferrer'>
								{gitState.user.blog}
							</a>


						</Estilo.WrapperUserName>

					</div>
					<Estilo.WrapperStatusCount>
						<div>
							<h4>Followers</h4>
							<span>{gitState.user.followers}</span>
						</div>
						<div>
							<h4>Followings</h4>
							<span>{gitState.user.following}</span>
						</div>
						<div>
							<h4>Gists</h4>
							<span>{gitState.user.public_gists}</span>
						</div>
						<div>
							<h4>Repos</h4>
							<span>{gitState.user.public_repos}</span>
						</div>
					</Estilo.WrapperStatusCount>
				</Estilo.WrapperInfoUsers>
			</Estilo.Wrapper>

		</>
	)
}

export default Profile
