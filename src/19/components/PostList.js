import React from 'react';
import { connect } from 'react-redux';
import { connect } from 'react-redux'; // this is correct
import { fetchPosts } from '../actions';

// class PostList extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   render() {

//     return <div>Post List</div>;
//   }
// }

// begin 
const PostList = () => { // a stateless component
  // now, you can return the object
  return ( // just an example
   <div>
    <input type="text" />
   </div>
   )
 }
// end
export default connect(
  null,
  { fetchPosts }
)(PostList);
