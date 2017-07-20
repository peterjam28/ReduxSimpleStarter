import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
          {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => (
  // anything returned is in props
  {
    books: state.books,
  }
)

// whenever selectBook is called, it is passed to all reducers
const mapDispatchToProps = (dispatch) => bindActionCreators({selectBook}, dispatch)

// promote BookList from a component to a container.
// it needs to know about the new dispatch method.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
