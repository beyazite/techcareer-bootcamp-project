import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ThemeProvider } from '@emotion/react';
import theme from '../common/color';

export default function WhyTitle() {
  return (
    <ThemeProvider theme={theme}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: theme.palette.dark.main, pl:0}}>
      <ListItem sx={{ pl:0}}>
        <ListItemAvatar>
          <Avatar>
            <CheckCircleIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Variety" />
      </ListItem >
      <ListItem sx={{ pl:0}}>
        <ListItemAvatar>
          <Avatar>
            <CheckCircleIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Easy to Use"  />
      </ListItem>
      <ListItem sx={{ pl:0}}>
        <ListItemAvatar>
          <Avatar>
            <CheckCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Current Activities" />
      </ListItem>
    </List>
    </ThemeProvider>
  );
}