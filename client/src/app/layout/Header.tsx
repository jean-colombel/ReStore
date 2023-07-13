import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean,
  onModeChange () : void
}

export default function Header({darkMode, onModeChange} : Props) {
  return (
    <AppBar position="static" sx={{mb: 4}}>
      <Toolbar>
        <Typography variant="h6">
          Re-Store
        </Typography>
        <Switch checked={darkMode} onChange={onModeChange}/>
      </Toolbar>
    </AppBar>
  )
}