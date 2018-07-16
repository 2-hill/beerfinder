import React from 'react';
import { Link } from 'react-router-dom';
import slug from 'slugify';

class Beer extends React.Component {
  render() {
     const { name, labels, id } = this.props.details;

    return (
    <div className="beer">
      <Link to={`/beer/${id}/${slug(name)}`}>
         <h2>{this.props.details.name}</h2>
         <img src= {labels.medium} alt = {name} />
      </Link>
    </div>
  );
  }
}
export default Beer;
