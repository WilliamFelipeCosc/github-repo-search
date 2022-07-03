import { IconButton, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBranches, getCommits } from "../../services/getGit";
import ChevronLeft from "@mui/icons-material/ChevronLeft";

function CommitPage() {
  const { repoName = "", userName = "" } = useParams();
  const navigate = useNavigate();
  const [branches, setBranches] = useState<any>([]);
  const [selectedBranch, setSelectedBranch] = useState<string>("0");
  const [commits, setCommits] = useState<any>([]);

  useEffect(() => {
    console.log(repoName, userName);
    getBranches(userName, repoName).then((data) => {
      setBranches(data);
      const masterSha =
        data.filter((d: any) => d.name === "master")?.[0]?.commit?.sha ?? "0";
      setSelectedBranch(masterSha);
    });
  }, [userName, repoName]);

  useEffect(() => {
    if (selectedBranch !== "0") {
      getCommits(userName, repoName, selectedBranch).then((data) =>
        setCommits(data)
      );
    }
  }, [userName, repoName, selectedBranch]);

  const handleChange = (e: ChangeEvent<any>) => {
    setSelectedBranch(e.target.value);
  };

  console.log(repoName);
  return (
    <Box mt={2}>
      <IconButton onClick={() => navigate('/')} sx={{ p: "10px", border: '1px solid #ccc' }} aria-label="search">
                <ChevronLeft />
              </IconButton>
      {/* <Button onClick={() => navigate('/')}></Button> */}
      <TextField
        select
        value={selectedBranch}
        onChange={handleChange}
        label="Selecione sua branch"
      >
        <MenuItem key={0} value={"0"} disabled>
          Selecione sua branch
        </MenuItem>
        {branches?.length > 0 &&
          branches?.map((branch: any) => (
            <MenuItem key={branch?.commit?.sha} value={branch?.commit?.sha}>
              {branch.name}
            </MenuItem>
          ))}
      </TextField>
      <Box mt={2}>{commits.length > 0 && commits.map((commit:any) => <Box key={commit?.sha}>{commit.commit.message}</Box>)}</Box>
    </Box>
  );
}

export default CommitPage;
