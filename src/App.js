import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Add from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  fab: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
  card: {
    margin: "1rem",
    width: "16rem",
  },
  cardContent: {
    minHeight: "8rem",
  },
  cardActions: {
    height: "3rem",
  },
  iconButton: {
    marginLeft: "auto",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
  },
  expandMore: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    padding: "0.5rem",
  },
  select: {
    width: "100%",
    height: "100%",
    opacity: "0",
    cursor: "pointer",
  },
};

function App() {
  return (
    <Container>
      <AppBar position="sticky">
        <Toolbar>
          <Box py={3}>
            <Typography variant="h4">Course Planner</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box py={2}>
            <Typography variant="h6">Currently Enrolled</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Card style={styles.card}>
                <Box bgcolor={"info.main"}>
                  <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                      601.280
                    </Typography>
                    <Typography variant="h5">Full-Stack JavaScript</Typography>
                  </CardContent>
                </Box>
                <CardActions style={styles.cardActions}>
                  <Button disabled>Fall 2021</Button>
                  <IconButton style={styles.iconButton}>
                    <ExpandMore style={styles.expandMore} />
                    <Select style={styles.select} value={"enrolled"}>
                      <MenuItem value="move" disabled>
                        <Typography variant="body1">Move to...</Typography>
                      </MenuItem>
                      <MenuItem value="enrolled">
                        <Typography variant="body1">
                          Currently Enrolled
                        </Typography>
                      </MenuItem>
                      <MenuItem value="interested">
                        <Typography variant="body1">Want to Take</Typography>
                      </MenuItem>
                      <MenuItem value="taken">
                        <Typography variant="body1">Already Took</Typography>
                      </MenuItem>
                      <MenuItem value="none">
                        <Box fontStyle="italic">
                          <Typography variant="body1">None</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box py={2}>
            <Typography variant="h6">Want to Take</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Card style={styles.card}>
                <Box bgcolor={"warning.main"}>
                  <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                      601.421
                    </Typography>
                    <Typography variant="h5">
                      Object-Oriented Software Engineering
                    </Typography>
                  </CardContent>
                </Box>
                <CardActions style={styles.cardActions}>
                  <Button disabled>Spring 2021</Button>
                  <IconButton style={styles.iconButton}>
                    <ExpandMore style={styles.expandMore} />
                    <Select style={styles.select} value={"interested"}>
                      <MenuItem value="move" disabled>
                        <Typography variant="body1">Move to...</Typography>
                      </MenuItem>
                      <MenuItem value="enrolled">
                        <Typography variant="body1">
                          Currently Enrolled
                        </Typography>
                      </MenuItem>
                      <MenuItem value="interested">
                        <Typography variant="body1">Want to Take</Typography>
                      </MenuItem>
                      <MenuItem value="taken">
                        <Typography variant="body1">Already Took</Typography>
                      </MenuItem>
                      <MenuItem value="none">
                        <Box fontStyle="italic">
                          <Typography variant="body1">None</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box py={2}>
            <Typography variant="h6">Already Took</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Card style={styles.card}>
                <Box bgcolor={"success.main"}>
                  <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom>
                      601.226
                    </Typography>
                    <Typography variant="h5">Data Structures</Typography>
                  </CardContent>
                </Box>
                <CardActions style={styles.cardActions}>
                  <Button disabled>Fall 2019</Button>
                  <IconButton style={styles.iconButton}>
                    <ExpandMore style={styles.expandMore} />
                    <Select style={styles.select} value={"taken"}>
                      <MenuItem value="move" disabled>
                        <Typography variant="body1">Move to...</Typography>
                      </MenuItem>
                      <MenuItem value="enrolled">
                        <Typography variant="body1">
                          Currently Enrolled
                        </Typography>
                      </MenuItem>
                      <MenuItem value="interested">
                        <Typography variant="body1">Want to Take</Typography>
                      </MenuItem>
                      <MenuItem value="taken">
                        <Typography variant="body1">Already Took</Typography>
                      </MenuItem>
                      <MenuItem value="none">
                        <Box fontStyle="italic">
                          <Typography variant="body1">None</Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Fab style={styles.fab} color="primary">
        <Add />
      </Fab>
    </Container>
  );
}

export default App;
