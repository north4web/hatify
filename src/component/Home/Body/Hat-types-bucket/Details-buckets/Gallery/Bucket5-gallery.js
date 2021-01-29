import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket5Gallery extends React.Component {
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
              original: '../images/buckets/bu5.jpg',
              thumbnail: '../images/buckets/bu5.jpg',
            },
            {
              original: '../images/buckets/bu5a.jpg',
              thumbnail: '../images/buckets/bu5a.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket5Gallery;