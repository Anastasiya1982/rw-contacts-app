import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

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
              <TableRow key={contact.login.uuid}>
                <TableCell>
                  <Avatar alt="" src={contact.picture.thumbnail} />
                </TableCell>
                <TableCell align="right">
                  {contact.name.title} {contact.name.first} {contact.name.last}
                </TableCell>
                <TableCell align="right">
                  <Typography>
                    {format(parseISO(contact.dob.date), "MM/dd/yyyy")}
                  </Typography>
                  <Typography>{contact.dob.age} years</Typography>
                </TableCell>
                <TableCell align="right">{contact.email}</TableCell>
                <TableCell align="right">{contact.phone}</TableCell>
                <TableCell align="right">
                  /{contact.location.country}/{contact.location.street.number}
                  {contact.location.street.name},{contact.location.city}
                  {contact.location.state}
                  {contact.location.postcode}
                </TableCell>
                <TableCell align="right">{contact.nat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ContactsTable;
