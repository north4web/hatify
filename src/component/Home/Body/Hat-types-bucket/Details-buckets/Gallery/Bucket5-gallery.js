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
              original: 'https://az1.hatstoremedia.com/hatstore/images/5057677585236_1/652/522/0/lorenzo-white-bucket-ellesse.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/5057677585236_1/652/522/0/lorenzo-white-bucket-ellesse.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/5057677585236_4/652/522/0/lorenzo-white-bucket-ellesse.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/5057677585236_4/652/522/0/lorenzo-white-bucket-ellesse.jpg.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket5Gallery;