import "./product.scss"
import EditIcon from '@mui/icons-material/Edit';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios";
import  ReactPlayer from 'react-player'

const Product = () => {
    const [movie, setMovie] = useState({})
    const param = useParams()
    const getMovie = async(id)=>{
        try{
           const res = await axios.get(`/movies/movie/${id}`)
           setMovie(res.data.movie)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        getMovie(param.productId)
    }, [param.productId])
    return (
        <div className='product'>
            <div className="productheader">
                <span className="productheaderTitle">
                    Movie
                </span>
                <Link to="/newproduct" className="productheaderCreate">Create</Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <div className="movie__Title">{movie.title}</div>
                    <video src={movie.video} progress controls/>
                </div>
                <div className="productTopRight">
                    <div className="productInfo">
                        <div className="productInfoItem">
                            <img src={movie.img} alt="" />
                            <span className="productInfoTitle">{movie.title}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id</span>
                            <span className="productInfoTitle">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre</span>
                            <span className="productInfoTitle">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Limit</span>
                            <span className="productInfoTitle">{movie.limit}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Year</span>
                            <span className="productInfoTitle">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Description</span>
                            <span className="productInfoTitle">{movie.desc}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="productBottom">
                <span className="productBottomTitle">Edit Product</span>
                <form className="editproductForm">
                    <div className="editProductLeft">
                        <div className="productformItem">
                            <label>Product Name</label>
                            <input type="text" placeholder="Apple Pots"/>
                        </div>
                        <div className="productformItem">
                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productformItem">
                            <label>Status</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="editproductRight">
                        <div className="upload">
                            <img src="../56783915435937186.jpg" alt="" />
                            <label htmlFor="file">
                                <EditIcon className="productupdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="editProductBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
