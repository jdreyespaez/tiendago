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
import Spinner from 'react-native-loading-spinner-overlay';
import Api from '../../utils/api';

export default class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      visible: false,
    }
  }
  handleChangeFirstName = (e) => {
    this.setState({
      firstName: e.nativeEvent.text
    })
  }
  handleChangeLastName = (e) => {
    this.setState({
      lastName: e.nativeEvent.text
    })
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
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var password = this.state.password;
    this.setState({
      visible: true
    });
    Api.addUser(firstName, lastName, email, password)
      .then((res) => {
        this.props.navigator.push({
          name: 'categories',
          passProps: {res}
        });
        this.setState({
          visible: false
        })
        console.log("Nombres :", res.firstName,
          "Apellidos: ", res.lastName,
          "Email :", res.email,
          "Password: ", res.password
        );
      })
      .catch((err) => {
        console.log('El localhost no sirvió')
      })
  }
  onBackPress = () => {
    this.props.navigator.pop();
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

          <Text style={styles.toolbarTitle}>Crear cuenta</Text>
          <Text style={styles.toolbarButton}></Text>
        </View>

        <View style={styles.userInfo}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'NOMBRES'}
                value={this.state.firstName}
                onChange={this.handleChangeFirstName}
                />
            </View>

            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder={'APELLIDOS'}
                value={this.state.lastName}
                onChange={this.handleChangeLastName}
                />
            </View>

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
          <ButtonBottom
            text={'ENTRAR'}
            onPress={this.handleSubmit} />
        </View>

      </View>
    );
  }
  border(color){
    return {
      borderColor: color,
      borderWidth: 1.5,
    }
  }
};

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
