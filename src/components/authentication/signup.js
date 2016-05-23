import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import ButtonFacebook from '../common/buttonFacebook';
import ButtonBottom from '../common/buttonBottom';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.toolbar}>
          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.onBackPress}>
            <Image
              source={require('../../../images/arrow_back.png')}
              style={styles.toolbarButton} />
          </TouchableHighlight>

          <Text style={styles.toolbarTitle}>Crear cuenta</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>

        <View style={styles.userInfo}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'NOMBRE'}
                />
            </View>

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
            </View>
        </View>

        <View style={styles.termsOfUse}>
          <Text style={styles.toolbarButton}></Text>
          <Text style={styles.text}>
            Al tocar <Text style={{fontWeight: '600'}}>Crear cuenta</Text> estás aceptando nuestros <Text style={{color: '#1D56FD'}}>Términos de uso</Text> y <Text style={{color: '#1D56FD'}}>Política de privacidad</Text>.</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>

        <View style={styles.wrapperFacebook}>
          <ButtonFacebook text={'CREAR CON FACEBOOK'} />
        </View>

        <View style={styles.wrapperBottom}>
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
      borderWidth: 1.5,
    }
  },
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    color: '#343434',
    textAlign: 'center',
    fontFamily: 'OpenSans',
    flex: 1,
    fontSize: 18,
  },
  userInfo: {
    flex: 10,
    justifyContent: 'center',
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
  termsOfUse: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSans',
    fontSize: 10,
    fontWeight: '900',
    textAlign: 'center',
    width: 260,
  },
  wrapperFacebook: {
    flex: 4.5,
  },
  wrapperBottom: {
    flex: 3,
  },
});
