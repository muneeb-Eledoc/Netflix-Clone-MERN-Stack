import "./widgetLg.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from "@mui/material";

export const WidgetLg = () => {
      const Button = ({title})=>{
          return <button className={"widgetlg_status " + title}>{title}</button>
      }
    return (
        <div className="widgetlg">
            <h3 className="widgetlg__title">Lastest Transactions</h3>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "900"}}>Custumor</TableCell>
            <TableCell sx={{fontWeight: "600"}} align="right">Date</TableCell>
            <TableCell sx={{fontWeight: "600"}} align="right">Amount</TableCell>
            <TableCell sx={{fontWeight: "600"}} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display: "flex", alignItems:"center"}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{marginRight:"5px"}} className="table__image"/> Bill
              </TableCell>
              <TableCell align="right">2 Mar</TableCell>
              <TableCell align="right">$320</TableCell>
              <TableCell align="right"><Button title="Approved"/></TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display: "flex", alignItems:"center"}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{marginRight:"5px"}} className="table__image"/> Bill
              </TableCell>
              <TableCell align="right">2 Mar</TableCell>
              <TableCell align="right">$320</TableCell>
              <TableCell align="right"><Button title="Declined"/></TableCell>
            </TableRow> <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display: "flex", alignItems:"center"}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{marginRight:"5px"}} className="table__image"/> Bill
              </TableCell>
              <TableCell align="right">2 Mar</TableCell>
              <TableCell align="right">$320</TableCell>
              <TableCell align="right"><Button title="Pending"/></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
