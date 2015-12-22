import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/action';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

import RaisedButton from 'material-ui/lib/raised-button';

class Cart extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <GridList
        cols={4}
        padding={5}
        cellHeight={50}
        style={{width: 500, height: 400, overflowY: 'auto', backgroundColor: 'blue'}}
      >

      </GridList>
    );
  }
}

Cart.propTypes = {

};


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

