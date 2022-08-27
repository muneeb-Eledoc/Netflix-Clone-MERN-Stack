import "./productList.scss"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../../context/movieContext/MoviesContext";
import { deleteMovie, getMovies } from "../../../context/movieContext/apiCall";


export const ProductList = () => {
    const { movies, dispatch } = useContext(MoviesContext)
    useEffect(() => {
       getMovies(dispatch)
      }, [dispatch])
    const columns = [
        { field: '_id', headerName: 'ID', width: 100 },
        { field: 'movie', headerName: 'Movie', width: 220 , renderCell: (params)=>{
          return <div className="product_col">
            <img src={params.row.img} className="table_img" alt="" />
            {params.row.title}
          </div>
        }},
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return <div className="actions">
              <Link to={"/product/" +params.row._id}>
                 <EditIcon className="userListedit"/>
              </Link>
                 <DeleteIcon className="userListdelete" onClick={()=> handleDelete(params.row._id)}/>
              </div>
            
          }
        }
      ];
      const handleDelete = (id)=>{
        deleteMovie(id, dispatch)
      }
    return (
        <div className="porduct__list">
            <div style={{ height: 560, width: '100%' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={movies}
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
