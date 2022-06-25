import { useContext } from "react";
import { GithubContext } from "../providers/gitHubProvider";


const useGithub = ()=>
{
    const {gitState, getUser, getUserRepos, getUserStarred}= useContext(GithubContext); 
    return {gitState, getUser, getUserRepos, getUserStarred}
        
    
   
}

export default useGithub