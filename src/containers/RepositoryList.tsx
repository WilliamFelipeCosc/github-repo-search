import { List, ListSubheader } from "@mui/material";
import RepositoryListItem from "../components/RepositoryListItem/RepositoryListItem";

interface Props {
  repos: any;
  handleClick: (repoName: string) => any;
}

function RepositoriesList({ repos, handleClick }: Props) {
  return (
    <List
      subheader={<ListSubheader component="div">Repositórios</ListSubheader>}
    >
      {repos?.map((repo: any) => (
        <RepositoryListItem repository={repo} handleClick={handleClick} />
      ))}
    </List>
  );
}

export default RepositoriesList;
