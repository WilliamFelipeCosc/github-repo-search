import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { getRepos } from "../../services/getGit";

function Home() {
  const { userName, searchCount } = useContext(UserContext);
  const [repos, setRepos] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName) getRepos(userName).then((data) => setRepos(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCount]);

  const handleClick = (repoId: string) =>
    navigate(`commits/${userName}&${repoId}`);

  console.log(searchCount);

  return (
    <Box>
      {repos?.length > 0 ? (
        <List
          subheader={
            <ListSubheader component="div">Repositorios</ListSubheader>
          }
        >
          {repos?.map((repo: any) => (
            <ListItem
              disablePadding
              key={repo.id}
              onClick={() => handleClick(repo.name)}
            >
              <ListItemButton>
                <ListItemText primary={repo.name} secondary={repo.full_name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Box>
          {userName.length > 0
            ? <Typography variant="h5">Insira um nome de usuário valido</Typography>
            : <Typography variant="h5">Insira um nome de usuário</Typography>}
        </Box>
      )}
    </Box>
  );
}

export default Home;
