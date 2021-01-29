import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import b1 from '../../../../../images/berets/b1.jpg'


const PREFIX_URL = 'https://az1.hatstoremedia.com/hatstore/images/';

class Beret1Gallery extends React.Component {
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
              original: '../images/berets/b1.jpg',
              thumbnail: '../images/berets/b1.jpg',
            },
            {
              original: '../images/berets/b1a.jpg',
              thumbnail: '../images/berets/b1a.jpg',
            },
          ]

        })} />
    </div>);
  }
}
export default Beret1Gallery;