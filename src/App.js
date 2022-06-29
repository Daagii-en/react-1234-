import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list";
export default class App extends Component {
  //App class iin baiguulagch function iig zaaval bichij uguh ystoi ingesneer state tei ajillah bolomj ugnu.
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }
  // render function ii daraa service tatah component function.
  componentDidMount() {
    //api  promise butsaagaad then method oor response huleej avah bolno first then eer header huleen avah bolno.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  //react app iin hamgiin ehend render hiigdeh function.
  render() {
    //console.log(this.state.robots);
    return (
      <div className="App">
        <h1>Роботуудын хайлт</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
