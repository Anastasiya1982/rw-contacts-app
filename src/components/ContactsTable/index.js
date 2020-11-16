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
import CopyToClickboardText from "../CopyToClickboardText";
import { NATIONALITY_HUMAN_NAME } from "../../constants/nationality";

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
              <TableCell>Full name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Nationality</TableCell>
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
                <TableCell>
                  <CopyToClickboardText
                    text={contact.email}
                  ></CopyToClickboardText>
                </TableCell>
                <TableCell>
                  <CopyToClickboardText text={contact.phone} />
                </TableCell>
                <TableCell>
                  <Typography> {contact.location.country}/</Typography>
                  <Typography>
                    {contact.location.city}, {contact.location.street.name}{" "}
                    {contact.location.street.number}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {NATIONALITY_HUMAN_NAME[contact.nat]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ContactsTable;
