import { CircularProgress, IconButton } from "@mui/material";
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
  const [commitLoading, setCommitLoading] = useState(false);

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
      setCommitLoading(true);
      getCommits(userName, repoName, selectedBranch)
        .then((data) => {
          setCommits(data);
          setCommitLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setCommitLoading(false);
        });
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

      {!commitLoading ? (
        <CommitsList commits={commits} />
      ) : (
        <Box width={50} p={4} mx="auto">
          <CircularProgress size={50} />
        </Box>
      )}
    </Box>
  );
}

export default CommitPage;
