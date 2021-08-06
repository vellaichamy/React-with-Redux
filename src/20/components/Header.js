import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="streams/new" className="item">
          create Streams
        </Link>
      </div>
      <div className="right menu">
        <Link to="streams/edit" className="item">
          edit Streams
        </Link>
      </div>
      <div className="right menu">
        <Link to="streams/delete" className="item">
          delete Streams
        </Link>
      </div>
      <div className="right menu">
        <Link to="streams/show" className="item">
          show Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
