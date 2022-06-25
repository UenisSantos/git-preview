/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'


export const GithubContext = createContext({
	user: {},
	loading: false,
	repositories: [],
	starred: []
})

const GitHubProvider = ({ children }) => {
	const [gitState, setgitState] = useState({
		hasUser: false,
		loading: false,
		user: {
			id: undefined,
			avatar: undefined,
			login: undefined,
			name: 'Janaina',
			html_url: undefined,
			blog: undefined,
			company: undefined,
			location: undefined,
			following: 0,
			followers: 0,
			public_gists: 0,
			public_repos: 0


		},
		repositories: [],
		starred: []
	})


	const getUser = (username) => {
		setgitState((prevState) => ({
			...prevState,
			loading: !prevState.loading

		}))
		api.get(`/users/${username}`).then(({ data }) => {
			setgitState((prevState) => ({
				...prevState,
				hasUser: true,
				user: {
					id: data.id,
					avatar_url: data.avatar_url,
					login: data.login,
					name: data.name,
					html_url: data.html_url,
					blog: data.blog,
					company: data.company,
					location: data.location,
					following: data.following,
					followers: data.followers,
					public_gists: data.public_gists,
					public_repos: data.public_repos

				}
			}))
		}).finally(() => {
			setgitState((prevState) => ({
				...prevState,
				loading: !prevState.loading

			}))

		})
	}

	const getUserRepos = (username) => {

		api.get(`/users/${username}/repos`).then(({ data }) => {

			setgitState((prevState) => ({
				...prevState,
				repositories: data
			}))
		})

	}

	const getUserStarred = (username) => {

		api.get(`/users/${username}/starred`).then(({ data }) => {
			console.log('data:' + JSON.stringify(data))
			setgitState((prevState) => ({
				...prevState,
				starred: data
			}))
		})

	}


	const contextValue = {
		gitState,
		getUser: useCallback((username) => getUser(username), []),
		getUserRepos: useCallback((username) => getUserRepos(username), []),
		getUserStarred: useCallback((username) => getUserStarred(username), [])
	}

	return (
		<>
			<GithubContext.Provider value={contextValue}>
				{children}
			</GithubContext.Provider>
		</>
	)


}




export default GitHubProvider
