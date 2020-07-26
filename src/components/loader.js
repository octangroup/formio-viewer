import React, { Component } from "react";
import ContentLoader from "react-content-loader";
import style from "../styles/loader.scss";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metadata: {
        name: "RioF",
        github: "clariokids",
        description: "Three Dots",
        filename: "ThreeDots",
      },
    };
  }
  render() {
    return (
      <div className="content-loader">
          <ContentLoader
            viewBox="0 0 400 160"
            height={160}
            width={400}
            speed={2}
            backgroundColor="transparent"
            {...this.state.metadata}
          >
            <circle cx="150" cy="86" r="8" />
            <circle cx="194" cy="86" r="8" />
            <circle cx="238" cy="86" r="8" />
          </ContentLoader>
      </div>
    );
  }
}
