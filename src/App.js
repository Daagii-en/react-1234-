import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/search";
import { CardList } from "./components/card-list";
export default class App extends Component {
  //App class iin baiguulagch function iig zaaval bichij uguh ystoi ingesneer state tei ajillah bolomj ugnu.
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };
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
    const { robots, searchField } = this.state;
    const robotsFilter = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Роботуудын хайлт</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={robotsFilter} />
      </div>
    );
  }
}
