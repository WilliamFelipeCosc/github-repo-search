import { Box, List, ListSubheader } from "@mui/material";
import CommitListItem from "../components/CommitListItem/CommitListItem";

interface Props {
  commits: any;
}

function CommitsList({ commits }: Props) {
  console.log(commits);
  return (
    <Box mt={2}>
      <List subheader={<ListSubheader component="div">Commits</ListSubheader>}>
        {commits.length > 0 &&
          commits.map((commit: any) => (
            <CommitListItem key={commit?.sha} commit={commit} />
          ))}
      </List>
    </Box>
  );
}

export default CommitsList;
