import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import ButtonSignin from '../common/buttonSignin';
import ButtonSignup from '../common/buttonSignup';

module.exports = React.createClass({
  render: function() {
    return (
      <Image source={require('../../../images/IntroX3.png')}
        style={styles.container}>
        <Image source={require('../../../images/logo.png')}
          style={styles.logo}>
        </Image>

        <ButtonSignin text={'INICIAR SESIÓN'} onPress={this.onSigninPress} />
        <ButtonSignup text={'CREAR CUENTA'}  />

      </Image>
    );
  },
  onSigninPress: function() {
    this.props.navigator.push({name: 'signin'});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor:'rgba(0,0,0,0)',
    resizeMode: 'cover'
  },
  logo: {
    width: 150,
    height: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
