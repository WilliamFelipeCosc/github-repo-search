import { api } from "./api"

interface GetRepos {
  userName: string
}

interface GetBranches {
  userName: string
  repoName: string
}

interface GetCommits {
  userName: string
  repoName: string
  branchSha:string
}

export const getRepos = async ({userName}:GetRepos) => {
  const { data } = await api.get(`users/${userName}/repos`);
  return data
}

export const getBranches = async ({userName, repoName}: GetBranches) => {
  const { data } = await api.get(`repos/${userName}/${repoName}/branches`);
  return data
}

export const getCommits = async ({userName, repoName, branchSha}: GetCommits) => {
  const { data } = await api.get(`repos/${userName}/${repoName}/commits?sha=${branchSha}`);
  return data
}