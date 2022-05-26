import { Component } from "react";
class DemoClassComponent extends Component {
  username = "nguyenhuuluan";
  render() {
    return (
      <>
        {this.username}
        
        <p>{this.props.email}</p>
        <h1>this is heading</h1>
      </>
    );
  }
}
export default DemoClassComponent;
