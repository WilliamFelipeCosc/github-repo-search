import { api } from "./api"

export const getRepos = async (userName:string) => {
  const { data } = await api.get(`users/${userName}/repos`);
  return data
}

export const getBranches = async (userName:string, repoName:string) => {
  const { data } = await api.get(`repos/${userName}/${repoName}/branches`);
  return data
}

export const getCommits = async (userName:string, repoName:string, branchSha:string='main') => {
  const { data } = await api.get(`repos/${userName}/${repoName}/commits?sha=${branchSha}`);
  return data
}