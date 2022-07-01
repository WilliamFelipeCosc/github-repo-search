import { useEffect } from "react";
import { getBranches, getCommits, getRepos } from "../../services/getGit";

function Home() {
  useEffect(() => {
    getRepos('williamFelipeCosc').then(data => console.log(data))
    getBranches('williamFelipeCosc', 'ibm-teste-tecnico').then(data => console.log(data))
    getCommits('williamFelipeCosc', 'ibm-teste-tecnico', 'a3943e7c625791e894dd303bd7e039cb952d481e').then(data => console.log(data))
  })
  return (
    <div>
      Initial
    </div>
  );
}

export default Home;
