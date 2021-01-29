import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket2Gallery extends React.Component {
  render() {
    return (<div >
      <ImageGallery {... (
        {
          thumbnailPosition: "left",
          useBrowserFullscreen: true,
          showPlayButton: true,
          showIndex: true,
          height: "400px",
          width: "400px",


          items: [
            {
              original: '../images/buckets/bu2.jpg',
              thumbnail: '../images/buckets/bu2.jpg',
            },
            {
              original: '../images/buckets/bu2a.jpg',
              thumbnail: '../images/buckets/bu2a.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket2Gallery;