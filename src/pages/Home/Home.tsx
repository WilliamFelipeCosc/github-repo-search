import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import { UserContext } from "../../contexts/userContext";
import { getBranches, getCommits, getRepos } from "../../services/getGit";

function Home() {
  const { userName, gamb } = useContext(UserContext);

  useEffect(() => {
    if(userName)
    getRepos(userName).then(data => console.log(data))

  }, [gamb])

  console.log(userName)

  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
