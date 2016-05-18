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
        <View style={[styles.header, this.border('red')]}>
          <Image source={require('../../../images/logo.png')}
            style={[styles.logo, this.border('white')]}>
          </Image>
        </View>

        <View style={[styles.footer, this.border('blue')]}>
          <View style={[styles.buttons, this.border('yellow')]}>
            <ButtonSignin text={'INICIAR SESIÓN'} onPress={this.onSigninPress} />
            <ButtonSignup text={'CREAR CUENTA'}  />
          </View>
        </View>
      </Image>
    );
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
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
    width: 180,
    height: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
