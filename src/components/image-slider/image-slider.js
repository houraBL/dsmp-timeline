import React, { Component } from "react";
import "./image-slider.css";

export default class ImageSlider extends Component {
  state = {
    index: 0,
    images: [
      "https://static.wikia.nocookie.net/dream_team/images/0/0d/Dream_SMP_Preview_Image.png",
      "https://static.wikia.nocookie.net/dream_team/images/f/ff/L_cast.PNG",
      "https://static.wikia.nocookie.net/dream_team/images/8/8a/Lore-bridge.jpg",
      "https://static.wikia.nocookie.net/dream_team/images/1/14/Technoblade_cabin.jpg",
      "https://static.wikia.nocookie.net/dream_team/images/b/b2/Kinoko_Kingdom_construction.jpeg",
      "https://static.wikia.nocookie.net/dream_team/images/c/c4/Last-l-manflag2.jpg",
      "https://static.wikia.nocookie.net/dream_team/images/d/d7/FoolishSummerHome.jpg",
    ],
  };

  nextImage() {
    let i = this.state.index;
    if (i == this.state.images.length - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    this.setState({ index: i });
  }

  prevImage() {
    let i = this.state.index;
    if (i == 0) {
      i = this.state.images.length - 1;
    } else {
      i = i - 1;
    }
    this.setState({ index: i });
  }

  render() {
    var currImage = this.state.images[this.state.index];
    console.log(currImage);

    return (
      <div className="image-slider card">
        <div className="container">
          <img className="image" src={currImage} alt="dreamSMP screenshot" />
        </div>

        <div className="buttons">
          <button
            onClick={(e) => this.nextImage(e)}
            className=""
            aria-hidden="true"
          ></button>
          <button
            onClick={(e) => this.prevImage(e)}
            className=""
            aria-hidden="true"
          ></button>
        </div>
      </div>
    );
  }
}
