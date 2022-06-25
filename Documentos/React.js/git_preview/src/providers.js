/* eslint-disable react/react-in-jsx-scope */
import GitHubProvider from "./providers/gitHubProvider"
import ResetCss from "./components/global/resetCss"
import App from "./App"

const Providers = () => {
	return (
		<main>
			<GitHubProvider>
				<ResetCss />
				<App />
			</GitHubProvider>
		</main>

	)
}

export default Providers
