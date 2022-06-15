import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
// Flickity for carousel architecture
// import Flickity from 'react-flickity-component'
import Carousel from './Components/Carousel';

function App() {

  // Application state 
  const [imageDataList,setImageDataList] = useState([])
  const [clicked , setClicked] = useState(false);
  const [imageURl , setImageURL] = useState('');
  const [imageDesc , setImageDesc] = useState('');

  useEffect(() => {
    getImage();    
  },[])

  // Async request for getting images from databases
  const getImage = async () => {
    console.log('test')
    await axios.get('http://localhost:4000/images').then(res => {
      setImageDataList(res.data);
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="App">
      <Carousel 
        imageData={imageDataList}
        setImageURL={setImageURL}
        setImageDesc={setImageDesc}
        setClicked={setClicked}
      />        

      {clicked ? 
        <div className="imageContainer">
          <img 
            src={imageURl}
            alt=""
            className="selectedImage"
          />
          <p className="imageDesc">Desc :  {imageDesc}</p>
        </div>
      : null}
    </div>
  );
}

export default App;


// //     <Flickity
  // Option for carousel 
  // const flickityOptions = {
  //   initialIndex: 2,
  //   wrapAround : true
  // }

// className={'carousel'} // default ''
// elementType={'div'} // default 'div'
// options={flickityOptions} // takes flickity options {}
// disableImagesLoaded={false} // default false
// reloadOnUpdate // default false
// static // default false     
// >
// {/* Maps all the image data we got from db into the front end */}
// {imageDataList.map(image => (
//   <>
//     <img 
//     src={image.imageUrl}  
//     className="image"
//     style={{height:'50vh',width:'50vw',margin:'3px'}}           
//     onClick={
//       () => {
//         setClicked(true)
//         setImageURL(image.imageUrl)
//         setImageDesc(image.desc)              
//       }
//     }
//     alt = "carousel"
//   />          
//   </>
// ))}            
// </Flickity>

//   {clicked ? 
//   <>
//     <img  src={imageURl} style={{margin:'30px'}} alt="clickedImage"/>
//     <p style={{margin:'10px'}}>{imageDesc}</p>
//   </> 
//   : null}