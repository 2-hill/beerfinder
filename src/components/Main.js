import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';


class Main extends React.Component {

  state = {
    numBeers: 10,
    beers: [],
    loading: true
  };

  // use a life cycle method to run loadBeers on mount (kind like a page load)
  componentDidMount () {
    console.log("Mounting");
    //first pull the params out of URL
    const params = this.props.match.params || {};
    // then set term to either be the searchTerm, or nothing
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  }
// when we go from /searcg/sour to /search/IPA, we are not going to have
//componentdidmount called again since its only changing some props

componentWillReceiveProps(nextProps) {
  console.log('Will receive props!');
  this.loadBeers(nextProps.match.params.searchTerm);
}

/*
Plus besoin de faire this.numBeers = this.state.numBeers.bind(this)
car on utilise le state juste au dessus (instance)
*/

  incrementBeers = () => {
    // create a new upated state variable
    const beerAmount = this.state.numBeers + 1;
    // set state to that amount
    this.setState({ numBeers: beerAmount });
  };

loadBeers = async (searchTerm = "Hops") => {
  // first turn on loader
  this.setState({ loading: true});
  // then we fetch out data
  const response = await fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`);
  const beers = await response.json();
  const filteredBeers = beers.data.filter(beer => beer.labels);
  // set those filtered beers into state!
  // also turn the load off with a false boolean
  this.setState({ beers: filteredBeers, loading: false });
  };


render() {
  return (
    <div className="wrapper">
    <Header siteName="Coffee Me!"/>
    <Search />
    <Results beers= {this.state.beers} loading={this.state.loading}/>
  </div>
    )
   }
}
export default Main;
