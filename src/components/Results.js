import React from 'react';
import Beer from './Beer';
import Loader from './Loader';

class Results extends React.Component {
  render() {
    if(this.props.loading) {
      return <Loader message= "Pouring a cold one!" />;
    }
    return (
      <div className="beers">
          {this.props.beers.map(beer => <Beer details={beer} key={beer.id}/>)}
      </div>
    );
  }
}
export default Results;
