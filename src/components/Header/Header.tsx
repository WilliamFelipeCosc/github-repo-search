import { IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { FormEvent, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { userName, setUserName, gamb, setGamb } = useContext(UserContext);
  const navigator = useNavigate();
  const location = useLocation();

  console.log(location)

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    if(location.pathname === '/'){
      setGamb(gamb + 1)
    } else {
      navigator('/');
    }
    
  }

  return (
    <Box
      component={"header"}
      minHeight={64}
      p={2}
      borderBottom={"1px solid #777"}
    >
      <Box component={"form"} onSubmit={handleSubmit}>
        <TextField
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Pesquise o nome do usuário"
          InputProps={{
            endAdornment: (
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default Header;