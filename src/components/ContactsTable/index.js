import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {},
});

const ContactsTable = ({ data }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="contacts table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell align="right">Full name</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Nationality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((contact) => (
              <TableRow key={contact.id.value}>
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">4</TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">6</TableCell>
                <TableCell align="right">7</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ContactsTable;
