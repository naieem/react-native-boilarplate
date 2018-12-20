import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Badge} from 'react-native-elements';
export default class NativeBaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>sdfdsfd</Text>
          <Badge
  value={3}
  textStyle={{ color: 'orange' }}
/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})
