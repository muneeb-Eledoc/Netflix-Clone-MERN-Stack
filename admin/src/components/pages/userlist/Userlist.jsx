import "./userlist.scss"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'Username', width: 220 , renderCell: (params)=>{
          return <div className="username_col">
            <img src={params.row.avatar} className="table_avatar" alt="" />
            {params.row.username}
          </div>
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 150,
          type: 'number'
        },{
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return(
              <>
              <Link to={"/user/" +params.row.id }>
                 <EditIcon className="userListedit"/>
              </Link>
                 <DeleteIcon className="userListdelete" onClick={()=> handleDelete(params.row.id)}/>
              </>
            )
          }
        }
      ];
      const rows = [
        { id: 1, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 2, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 3, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 4, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 5, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 6, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 7, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 8, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 9, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
        { id: 10, avatar: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", username: 'Jon', email: 'Jon@gmail.com', status: "Active", transaction: "$261" },
      ];
        const [data, setData] = useState(rows)
      const handleDelete = (id)=>{
         setData(data.filter((row)=> row.id !== id))
      }
    return (
        <div className='userlist'>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            </div>            
        </div>
    )
}

export default Userlist
