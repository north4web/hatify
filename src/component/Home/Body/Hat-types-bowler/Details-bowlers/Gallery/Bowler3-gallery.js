import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Bowler3Gallery extends React.Component {
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
                original: '../images/bowlers/bo3.jpg',
                thumbnail: '../images/bowlers/bo3.jpg',
            },
            {
                original: '../images/bowlers/bo3a.jpg',
                thumbnail: '../images/bowlers/bo3a.jpg',
            },
        ]

        })} />
    </div>);
  }
}
export default Bowler3Gallery;