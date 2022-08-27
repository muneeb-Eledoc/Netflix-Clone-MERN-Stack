import "./list.scss"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListContext } from "../../../context/listContext/ListsContext";
import { deleteList, getLists } from "../../../context/listContext/apiCall";

export const List = () => {
    const { lists, dispatch } = useContext(ListContext)
    useEffect(() => {
       getLists(dispatch)
      }, [dispatch])
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'title', headerName: 'Title', width: 220 , renderCell: (params)=>{
          return <div className="product_col">
            {params.row.title}
          </div>
        }},
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'type', headerName: 'Type', width: 120 },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return <div className="actions">
              <Link to={"/list/" +params.row._id}>
                 <EditIcon className="userListedit"/>
              </Link>
                 <DeleteIcon className="userListdelete" onClick={()=> handleDelete(params.row._id)}/>
              </div>
            
          }
        }
      ];
      const handleDelete = (id)=>{
        deleteList(id, dispatch)
      }
    return (
        <div className="porduct__list">
            <div style={{ height: 560, width: '100%' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={lists}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    getRowId={r=>r._id}
                />
            </div>            
        </div>
    )
}
