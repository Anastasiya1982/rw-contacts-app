import React from "react";
import useContacts from "./useContacts";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ContactsTable } from "../../components/ContactsTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

// компонента Контакты
export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h4" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid items xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <div>LOADING</div>;
            }
            if (contacts.isError) {
              return <div>...ERROR</div>;
            }
            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
