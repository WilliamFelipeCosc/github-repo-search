import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RepositoriesList from "../../containers/RepositoryList";
import { UserContext } from "../../contexts/userContext";
import { getRepos } from "../../services/getGit";

function Home() {
  const { userName, searchCount } = useContext(UserContext);
  const [repos, setRepos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName) {
      setLoading(true);
      getRepos(userName)
        .then((data) => {
          setRepos(data);
        })
        .catch((err) => {
          console.log(err);
          setRepos([]);
        })
        .finally(() => setLoading(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCount]);

  const handleClick = (repoId: string) =>
    navigate(`commits/${userName}&${repoId}`);

  return !loading ? (
    <Box>
      {repos?.length > 0 ? (
        <RepositoriesList repos={repos} handleClick={handleClick} />
      ) : (
        <Box py={2}>
          {(userName.length > 0 && searchCount > 0)? (
            <Typography variant="h5">
              Usuário não encontrado
            </Typography>
          ) : (
            <Typography variant="h5">Insira um nome de usuário</Typography>
          )}
        </Box>
      )}
    </Box>
  ) : (
    <Box width={50} p={4} mx="auto">
      <CircularProgress size={50} />
    </Box>
  );
}

export default Home;
