import { Paper, Container, ThemeProvider } from "@mui/material";
import theme from "../common/color";

function Item(props) {
  return (
    <div style={{backgroundColor:theme.palette.light.main}}>
    <ThemeProvider theme={theme}>
      <Paper
        elevation={1}
        sx={{
          padding: "1.5rem",
          maxHeight: "400px",
          backgroundColor: theme.palette.light.main,
          
        }}
      >
        <Container maxWidth="lg" color="light">
          <img
            src={props.item.imgPath}
            alt=""
            style={{ width: "100%", height: "80%", marginBottom: "10px" }}
          />
          <h3>{props.item.name}</h3>
          <p>{props.item.description}</p>
        </Container>
      </Paper>
    </ThemeProvider>
    </div>
  );
}

export default Item;
