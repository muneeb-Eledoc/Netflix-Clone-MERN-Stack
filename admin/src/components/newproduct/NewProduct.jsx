import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useContext, useState } from "react"
import { createMovie } from "../../context/movieContext/apiCall";
import { MoviesContext } from "../../context/movieContext/MoviesContext";
import storage from "../../firebase"
import "./newProduct.scss"
import LinearProgress from '@mui/material/LinearProgress';

const NewProduct = () => {
    const { dispatch } = useContext(MoviesContext)
    const [movie, setMovie] = useState({})
    const [trailer, setTrailer] = useState(null)
    const [img, setImg] = useState(null)
    const [video, setVideo] = useState(null)
    const [uploaded, setUploaded] = useState(0)
    const [progress, setprogress] = useState(null)
   const onChange =(e)=>{
       setMovie({...movie, [e.target.name]: e.target.value})
   }
   const upload = (items)=>{
      items.forEach(item => {
          const filename = new Date().getTime() + item.file.name
          const storageRef = ref(storage, `items/${filename}`);
          const uploadTask = uploadBytesResumable(storageRef, item.file);
          uploadTask.on("state_changed", (snapshot)=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setprogress(progress === 100 ? null : progress)
          },(error)=>{
              console.log(error)
          },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                  setMovie(prev=>{ return {...prev, [item.label]:url}})
                  setUploaded(prev=> prev + 1)
                  console.log(movie)
                  console.log(url)
              })
          })
      });
   }
   const handleUpload = (e)=>{
       e.preventDefault()
     upload([
         {file: img, label: "img"},
         {file: trailer, label: "trailer"},
         {file: video, label: "video"}
     ])
   }

   const handleCreate = (e) =>{
       e.preventDefault()
     createMovie(movie, dispatch)

   }
    return (
        <div className="newproduct">
            <h3 className="newproduct__Title">New Movie</h3>
            <form className="newproductForm">
                <div className="newproductformItem">
                    <label>Image</label>
                    <input type="file" name="img" onChange={(e)=> setImg(e.target.files[0])}/>
                </div>
                <div className="newproductformItem">
                    <label>Title</label>
                    <input type="text" placeholder="Title" name="title" onChange={onChange}/>
                </div>
                <div className="newproductformItem">
                    <label>Description</label>
                    <input type="text" placeholder="Description" name="desc" onChange={onChange}/>
                </div>
                <div className="newproductformItem">
                    <label>Year</label>
                    <input type="text" placeholder="Year" name="year" onChange={onChange}/>
                </div>
                <div className="newproductformItem">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" name="genre" onChange={onChange}/>
                </div>
                <div className="newproductformItem">
                    <label>Duration</label>
                    <input type="text" placeholder="Duration" name="duration" onChange={onChange}/>
                </div>
                <div className="newproductformItem">
                    <label>Limit</label>
                    <input type="text" placeholder="Limit" name="limit" onChange={onChange}/>
                </div>
                <div className="newproductformItem">
                    <label>isSeries</label>
                    <select name="isSeries" id="active" onChange={onChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>                    
                </div>
                <div className="newproductformItem">
                    <label>Trailer</label>
                    <input type="file" name="trailer" onChange={(e)=> setTrailer(e.target.files[0])}/>
                </div>
                <div className="newproductformItem">
                    <label>Video</label>
                    <input type="file" name="video" onChange={(e)=> setVideo(e.target.files[0])}/>
                </div>
               {uploaded === 3 ? <button className="newProductBtn" onClick={handleCreate}>
                    Create
                </button>: <button className="newProductBtn" onClick={handleUpload}>
                    Upload
                </button>}
            </form>
            {progress && <LinearProgress variant="determinate" value={progress} />}
        </div>
    )
}

export default NewProduct
