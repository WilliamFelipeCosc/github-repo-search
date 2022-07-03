import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { format } from 'date-fns'

interface Props {
  commit: any;
}

function CommitListItem({ commit }: Props) {
  const textEllipsis = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  } 
  
  const primary = (
    <Box
      component={"p"}
      sx={textEllipsis}
    >
      {commit.commit.message}
    </Box>
  );
  
  const secondary = (
    <Box
      component={"p"}
      sx={textEllipsis}
    >
      {commit.commit.author.name} / {" "}
      {commit.commit.author.email} / {" "}
      {format(new Date(commit.commit.author.date), "'Commitado em' dd/MM/uu")}
    </Box>
  )

  return (
    <ListItem disablePadding>
      <ListItemButton divider>
        <ListItemText primary={primary} secondary={secondary}/>
      </ListItemButton>
    </ListItem>
  );
}

export default CommitListItem;
