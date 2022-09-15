import React, { Component } from "react";
import "./image-slider.css";
import img from "../../images/Dream_SMP_Preview_Image.webp";

export default class ImageSlider extends Component {
  state = {
    index: 0,
    images: ["../src/images/Dream_SMP_Preview_Image.webp"],
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

    return (
      <div className="image-slider card">
        <div className="container">
          <img
            className="image"
            src={img}
            alt="dreamSMP screenshot"
          />
        </div>

        {/*<div className="buttons">
          <button
            onClick={(e) => this.nextImage(e)}
            className="button"
            aria-hidden="true"
          >Prev</button>
          <button
            onClick={(e) => this.prevImage(e)}
            className="button"
            aria-hidden="true"
            text="<"
          >Next</button>
        </div>*/}
      </div>
    );
  }
}
