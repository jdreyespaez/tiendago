import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import Auth from './components/authentication/auth';
import Signin from './components/authentication/signin';

var ROUTES = {
  auth: Auth,
  signin: Signin
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
