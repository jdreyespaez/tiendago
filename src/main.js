import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import Auth from './components/authentication/auth';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Categories from './components/categories/categories';

var ROUTES = {
  auth: Auth,
  signin: Signin,
  signup: Signup,
  categories: Categories,
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'auth'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;} }
        />
    );
  }
});

var styles = StyleSheet.create ({
  container: {
    flex: 1
  }
});
