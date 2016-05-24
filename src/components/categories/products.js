import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={[styles.mainContainer, this.border('blue')]}>

        <View style={styles.toolbar}>
          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.onBackPress}>
            <Image
              source={require('../../../images/arrow_back.png')}
              style={[styles.toolbarButton, this.border('yellow')]} />
          </TouchableHighlight>
          <Text style={[styles.toolbarTitle, this.border('green')]}>Bebidas</Text>
          <Image
            source={require('../../../images/search-icon-black.png')}
            style={[styles.toolbarButton, this.border('yellow')]} />
        </View>

        <View style={[styles.searchBarContainer, this.border('brown')]}>
          <View style={[styles.searchBar]}>

          </View>
        </View>

        <View style={[styles.listView, this.border('red')]}>

        </View>

      </View>
    )
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 1,
    }
  },
  onBackPress: function() {
    this.props.navigator.pop();
  },
});

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#F3F3F3',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
  },
  toolbarButton:{
    width: 20,
    height: 20,
    margin: 4,
    resizeMode: 'contain',
  },
  toolbarTitle: {
    color: '#333333',
    textAlign: 'center',
    fontFamily: 'OpenSans',
    flex: 1,
    fontSize: 18,
  },
  searchBarContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  searchBar: {
    width: 330,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#FFA255',
    borderWidth: 1.5,
    borderRadius: 100,
  },
  listView: {
    flex: 20,
  }
});
