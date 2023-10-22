import { Paper, Container, ThemeProvider } from "@mui/material";
import theme from "../common/color";

function Item(props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={1}
        sx={{
          padding: "1.5rem",
          maxHeight: "400px",
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
  );
}

export default Item;
