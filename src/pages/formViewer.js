import React, { Component } from "react";
import { Form } from "react-formio";
import "formiojs/dist/formio.form.css";
import "formiojs/dist/formio.full.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../components/loader";

export default class FormViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      form: null,
    };
  }
  componentDidMount() {
    const { project, form } = this.props.match.params;
    fetch(`https://${project}.form.io/${form}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ form: data });
        console.log(data);
      });
  }

  setVisible() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        {this.state.form && (
          <Form
            onRender={() => this.setVisible()}
            form={this.state.form}
            onSubmit={console.log}
          />
        )}
        {this.state.visible && <Loader />}
      </div>
    );
  }
}
