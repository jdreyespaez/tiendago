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
        <View style={styles.header}>
          <Image source={require('../../../images/logo.png')}
            style={styles.logo}>
          </Image>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttons}>
            <ButtonSignin text={'INICIAR SESIÓN'} onPress={this.onSigninPress} />
            <ButtonSignup text={'CREAR CUENTA'}  />
          </View>
        </View>
      </Image>
    );
  },
  onSigninPress: function() {
    this.props.navigator.push({name: 'signin'});
  },
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
  header: {
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
  },
  logo: {
    width: 200,
    height: 70,
    resizeMode: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
