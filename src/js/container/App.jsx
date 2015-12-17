import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/action';

import Category from './Category'

class App extends Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchData();
  }

  render() {
    
    return (
        <Category />     
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  actions: PropTypes.object,
  routePath: PropTypes.string,
  dispatch: PropTypes.func,
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
)(App);

