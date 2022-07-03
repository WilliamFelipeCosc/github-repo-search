import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { getRepos } from "../../services/getGit";

function Home() {
  const { userName, searchCount } = useContext(UserContext);
  const [ repos, setRepos ] = useState<any>([]);
  const navigate = useNavigate()

  useEffect(() => {
    if(userName)
    getRepos(userName).then(data => setRepos(data))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCount])

  const handleClick = (repoId:string) => navigate(`commits/${userName}&${repoId}`) 

  console.log(searchCount)

  return (
    <div>
      {repos?.length > 0 && repos?.map((repo:any) => <div key={repo.id} onClick={() => handleClick(repo.name)}>{repo.name}</div>)}
    </div>
  );
}

export default Home;
