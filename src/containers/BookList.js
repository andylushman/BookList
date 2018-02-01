import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchtoProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//Promote BookList from component to container, it needs to know about this new dispatch method, selectBook. Make it avaiable as a prop.
export default connect(mapStateToProps, mapDispatchtoProps)(BookList);
