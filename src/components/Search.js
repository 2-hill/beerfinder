import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {

  state = {
    Keyword: "Hoppy"
  };

// nicely ask react to expose the router via "context" which will pass the router
// down however many levels
  static contextTypes = {
  router: PropTypes.object.isRequired
}

  handleSubmit = e => {

  // when someone submits the form we need to do 3 things:
        //1 we need to stop the form from submiting
    e.preventDefault();
        //2 Grab the search query from the input box
    const searchTerm =this.q.value;
        //3 Change the page to /search/whatever-they-searched-for
   this.context.router.history.push(`/search/${searchTerm}`);      

  };


  render() {
    return (
    <div className="search">
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(q) => this.q = q} placeholder="Hoppy, Malt, Angry, New..."/>
        <input type="submit" value="Search"/>
      </form>
    </div>)
  }
}
export default Search;
