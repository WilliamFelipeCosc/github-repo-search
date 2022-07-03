import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface Props {
  repository: any;
  handleClick: (repoName: string) => any;
}

function RepositoryListItem({ repository, handleClick }: Props) {
  return (
    <ListItem
      disablePadding
      onClick={() => handleClick(repository.name)}
    >
      <ListItemButton>
        <ListItemText
          primary={repository.name}
          secondary={repository.full_name}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default RepositoryListItem;
