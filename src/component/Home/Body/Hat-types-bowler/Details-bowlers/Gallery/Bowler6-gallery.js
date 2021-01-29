import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Bowler6Gallery extends React.Component {
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
                original: '../images/bowlers/bo6.jpg',
                thumbnail: '../images/bowlers/bo6.jpg',
            },
            {
                original: '../images/bowlers/bo6a.jpg',
                thumbnail: '../images/bowlers/bo6a.jpg',
            },
        ]

        })} />
    </div>);
  }
}
export default Bowler6Gallery;