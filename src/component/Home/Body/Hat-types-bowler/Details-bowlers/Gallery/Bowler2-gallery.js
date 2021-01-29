import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bowler2Gallery extends React.Component {
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
                original: '../images/bowlers/bo2.jpg',
                thumbnail: '../images/bowlers/bo2.jpg',
            },
            {
                original: '../images/bowlers/bo2a.jpg',
                thumbnail: '../images/bowlers/bo2a.jpg',
            },
        ]

        })} />
        </div>);
  }
}
export default Bowler2Gallery;