import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native';

import ButtonFacebook from '../common/buttonFacebook';
import ButtonBottom from '../common/buttonBottom';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>

          <TouchableHighlight onPress={this.onBackPress}>
            <Image
              source={require('../../../images/arrow_back.png')}
              style={styles.toolbarButton} />
          </TouchableHighlight>

          <Text style={styles.toolbarTitle}>Iniciar Sesión</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder={'EMAIL'}
              />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'CONTRASEÑA'}
              style={styles.input}
              secureTextEntry={true}
              />
            <Image source={require('../../../images/help_button.png')}
              style={styles.terms} />
          </View>
        </View>

        <View style={styles.buttonFacebook}>
          <ButtonFacebook text={'CONÉCTATE CON FACEBOOK'} />
        </View>

        <View style={styles.buttonBottom}>
          <ButtonBottom text={'ENTRAR'} />
        </View>

      </View>
    );
  },
  onBackPress: function() {
    this.props.navigator.pop();
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 1.5
    }
  },
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  button: {

  },
  buttonText: {

  },
  toolbar: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomColor: 'rgba(255, 162, 85, 0.5)',
    borderBottomWidth: 1,
  },
  toolbarButton: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  toolbarTitle: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'OpenSans',
    flex: 1,
    fontSize: 18,
  },
  input: {
    padding: 4,
    height: 30,
    width: 250,
    alignSelf: 'center',
    fontFamily: 'OpenSans',
  },
  inputWrapper: {
    borderBottomColor: 'rgba(166, 166, 166, 1)',
    borderBottomWidth: 1,
    marginTop: 20,
    alignSelf: 'center',
    width: 250,
    flexDirection: 'row',
  },
  userInfo: {
    flex: 10,
    justifyContent: 'center',
  },
  terms: {
    width: 20,
    height: 20,
  },
  buttonFacebook: {
    flex: 4.5,
  },
  buttonBottom: {
    flex: 2.5,
  },
  textButton: {

  },
});
