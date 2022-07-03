import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBranches, getCommits } from "../../services/getGit";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import CommitsList from "../../containers/CommitList";
import BranchList from "../../containers/BranchList";

function CommitPage() {
  const { repoName = "", userName = "" } = useParams();
  const navigate = useNavigate();
  const [branches, setBranches] = useState<any>([]);
  const [selectedBranch, setSelectedBranch] = useState<string>("0");
  const [commits, setCommits] = useState<any>([]);

  useEffect(() => {
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

  return (
    <Box mt={2}>
      <Box display={"flex"} alignItems="center" gap={1}>
        <Box>
          <IconButton
            onClick={() => navigate("/")}
            sx={{ p: 1 }}
            aria-label="return"
          >
            <ChevronLeft />
          </IconButton>
        </Box>
        <Box width={{ xs: "100%", sm: "60%", md: "30%" }}>
          <BranchList
            branches={branches}
            value={selectedBranch}
            handleChange={handleChange}
          />
        </Box>
      </Box>

      <CommitsList commits={commits} />
    </Box>
  );
}

export default CommitPage;
