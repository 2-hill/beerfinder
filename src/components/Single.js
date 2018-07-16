import React from 'react';
import Loader from './Loader';
import Header from './Header';
import PropTypes from "prop-types";

class Single extends React.Component {

constructor() {
  super();
  this.state = {
    beer: {},
    loading: true
  };
}

static propTypes = {
  params: PropTypes.object
};

  componentDidMount () {
    console.log("Mounting");
    this.loadBeer(this.props.match.params.beerId);
  }

  loadBeer = async beerId => {
    // first turn on loader
    this.setState({ loading: true});
    // then we fetch out data
    const response = await fetch(`http://api.react.beer/v2/beer/${beerId}`);
    const beer = await response.json();

    // also turn the load off with a false boolean
    this.setState({ beer: beer.data, loading: false });
    };

    renderGlass = beer => {
      if (!beer.glass) return;
      return (
        <div className="glass">
          <img src={`/images/glass-${beer.glass.id}.jpg`} alt={beer.name} />
          <h3>{beer.glass.name} Glass</h3>
        </div>
      );
    };

    renderAbv = beer => {
      if (!beer.abv) return;
      return <div className="abv">ABV: {beer.abv}%</div>;
    };


  render() {
    if (this.state.loading) {
      return <Loader message="Pouring a cold one!" />;
    }

  const { beer } = this.state;

    return (
      <div>
        <Header siteName="Beer me!" />
        <div className="single-beer">
          <div className="desc">
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>

          <img className="label" src={beer.labels.large} alt={beer.name} />

          <div className="deets">
            {this.renderGlass(beer)}
            {this.renderAbv(beer)}
          </div>

          <div className="style">
            <h3>More Info on {beer.style.name}</h3>
            <p>{beer.style.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Single;
