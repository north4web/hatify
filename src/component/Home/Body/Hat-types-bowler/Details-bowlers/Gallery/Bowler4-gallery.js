import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


class Bowler4Gallery extends React.Component {
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
              original: 'https://az1.hatstoremedia.com/hatstore/images/hs2013529-2_1/652/522/0/connor-wolga-bordeaux-bowler-mayser.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/hs2013529-2_1/652/522/0/connor-wolga-bordeaux-bowler-mayser.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/hs2013529-2_4/652/522/0/connor-wolga-bordeaux-bowler-mayser.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/hs2013529-2_4/652/522/0/connor-wolga-bordeaux-bowler-mayser.jpg',
            },
          ]

        })} />
    </div>);
  }
}
export default Bowler4Gallery;