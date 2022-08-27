import { useContext, useEffect, useState } from "react"
import { createList } from "../../../context/listContext/apiCall"
import { ListContext } from "../../../context/listContext/ListsContext"
import { getMovies } from "../../../context/movieContext/apiCall"
import { MoviesContext } from "../../../context/movieContext/MoviesContext"
import "./newList.scss"

export const NewList = () => {
    const { dispatch } = useContext(ListContext)
    const {movies, dispatch:moviedispatch} = useContext(MoviesContext)
    const [list, setList] = useState(null)
    useEffect(() => {
       getMovies(moviedispatch)
    }, [moviedispatch])
    const handleChange = (e)=>{
        setList({...list, [e.target.name]: e.target.value})
    }
    const handleSelect = (e)=>{
        let value = Array.from(e.target.selectedOptions, (option) => option.value )
        setList({...list, [e.target.name]: value})
    }
    const handleSubmit = (e)=>{
       e.preventDefault()
       createList(list, dispatch)
    }
    console.log(list)
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New List</h1>
            <form className="newUserform">
                <div className="newUserItem">
                    <label>Title</label>
                    <input type="text" placeholder="Title" name="title" onChange={handleChange}/>
                </div>
                <div className="newUserItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleChange}>
                        <option disabled selected>Type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label htmlFor="content">Content</label>
                    <select multiple name="content" id="content" onChange={handleSelect}>
                       {movies.map(movie=>
                        <option value={movie._id}>{movie.title}</option>
                        )}
                    </select>
                </div>
                <div className="btn">
                    <button className="newUserCreate" onClick={handleSubmit}>Create</button>
                </div>
            </form>
        </div>
    )
}
