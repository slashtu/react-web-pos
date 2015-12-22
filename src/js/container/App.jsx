import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/action';

// material 
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

import Category from './Category'
import Product from './Product'
import Cart from './Cart'
import Fn from './Fn'

class App extends Component {

    componentDidMount() {
        const { actions } = this.props;
        actions.fetchData();
    }

    render() {

        return (
            <GridList 
                style={{ width: '80%', height: 600, overflowY: 'auto', backgroundColor: '#d6d6d6', margin: '0 auto'}}
            >
                <GridTile 
                >
                    <Category />     
                </GridTile>
                <GridTile cols = {1}>
                    <Cart />
                </GridTile>
                <GridTile>
                    <Product />
                </GridTile>
                <GridTile>
                    <Fn />
                </GridTile>
            </GridList>
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

