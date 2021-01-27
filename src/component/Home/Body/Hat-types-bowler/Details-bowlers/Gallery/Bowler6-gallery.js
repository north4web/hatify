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
              original: 'https://az1.hatstoremedia.com/hatstore/images/5055303732108_1/652/522/0/english-black-bowler-jaxon-james.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/5055303732108_1/652/522/0/english-black-bowler-jaxon-james.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/5055303732108_4/652/522/0/english-black-bowler-jaxon-james.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/5055303732108_4/652/522/0/english-black-bowler-jaxon-james.jpg',
            },
          ]

        })} />
    </div>);
  }
}
export default Bowler6Gallery;