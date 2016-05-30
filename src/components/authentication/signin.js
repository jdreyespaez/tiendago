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
import Spinner from 'react-native-loading-spinner-overlay';
import Api from '../../utils/api';


export default class Signin extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      visible: false,
    }
  }
  handleChangeEmail = (e) => {
    this.setState({
      email: e.nativeEvent.text
    });
  }
  handleChangePassword = (e) => {
    this.setState({
      password: e.nativeEvent.text
    })
  }
  handleSubmit = () => {
    var email = this.state.email;
    var password = this.state.password;
    this.setState({
      visible: true
    });
    console.log('Enviando email: ', email);
    console.log('Enviando contraseña: ', password);
    Api.addUser(email, password)
      .then((res) => {
        this.props.navigator.push({
          name: 'categories',
          passProps: {res}
        });
        this.setState({
          visible: false
        })
        console.log("El email: ", res.email,
          "Password Promes exitosa: ", res.password
        );
      })
      .catch((err) => {
        console.log('El servidor local no sirve')
        console.log(email, password)
      })
  }
  render() {
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

          <Text style={styles.toolbarTitle}>Iniciar Sesión</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>

        <View style={styles.userInfo}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder={'EMAIL'}
              value={this.state.email}
              onChange={this.handleChangeEmail}
              />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'CONTRASEÑA'}
              style={styles.input}
              secureTextEntry={true}
              value={this.state.password}
              onChange={this.handleChangePassword}
              />
            <Image source={require('../../../images/help_button.png')}
              style={styles.terms} />
          </View>
        </View>

        <View style={styles.wrapperFacebook}>
          <ButtonFacebook text={'CONÉCTATE CON FACEBOOK'} />
        </View>

        <View style={styles.wrapperBottom}>
          <ButtonBottom
            text={'ENTRAR'}
            onPress={this.handleSubmit}
            />
        </View>

      </View>
    );
  }
  onBackPress = () => {
    this.props.navigator.pop();
  }
  border(color){
    return {
      borderColor: color,
      borderWidth: 1.5
    }
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
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
  terms: {
    width: 20,
    height: 20,
  },
  wrapperFacebook: {
    flex: 4.5,
  },
  wrapperBottom: {
    flex: 2.5,
  },
});
