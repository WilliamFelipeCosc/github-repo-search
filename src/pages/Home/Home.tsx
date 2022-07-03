import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RepositoriesList from "../../containers/RepositoryList";
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

  return (
    <Box>
      {repos?.length > 0 ? (
        <RepositoriesList repos={repos} handleClick={handleClick} />
      ) : (
        <Box>
          {userName.length > 0 ? (
            <Typography variant="h5">
              Insira um nome de usuário valido
            </Typography>
          ) : (
            <Typography variant="h5">Insira um nome de usuário</Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Home;
