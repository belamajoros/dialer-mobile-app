import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Linking } from 'react-native';

import Button from './Button';

export default class App extends Component {


  constructor(){
      super();
      this.state = {
        resultText: "",
        callState: false,
      };
    }

  buttonPressed(text) {
    if(this.state.callState == false){
      if(text != "Delete" && text != "Call" && text != "Decline"){
        this.setState({
          resultText: this.state.resultText+text,
        })
      }
      if(text == "Delete"){
        let str = this.state.resultText.toString() ;
        let deletedString;
        if(str.length > 0){
          deletedString = str.substr(0,str.length - 1);
        }
        let length = deletedString.length;
        this.setState({
          //resultText: deletedString.length == 1 ? '' : deletedString
          resultText: deletedString
        })
      }
    }
    if(text == "Call"){
      if(this.state.resultText.length >= 3){
        alert("Calling number: "+this.state.resultText);
        console.log("Calling number " + this.state.resultText);
        this.setState({
          callState: true,
        })
        Linking.openURL(`tel:${this.state.resultText}`)
      }
      else{
        alert("At least 3 digits is required");
      }
    }
    if(text == "Decline"){
      this.setState({
        callState: false,
      })
    }
  }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>Phone</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.resultText} >{this.state.resultText}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Button text="1" onPress={ () => this.buttonPressed("1")}/>
          <Button text="2" onPress={ () => this.buttonPressed("2")}/>
          <Button text="3" onPress={ () => this.buttonPressed("3")}/>
        </View>
        <View style={styles.row}>
          <Button text="4" onPress={ () => this.buttonPressed("4")}/>
          <Button text="5" onPress={ () => this.buttonPressed("5")}/>
          <Button text="6" onPress={ () => this.buttonPressed("6")}/>
        </View>
        <View style={styles.row}>
          <Button text="7" onPress={ () => this.buttonPressed("7")}/>
          <Button text="8" onPress={ () => this.buttonPressed("8")}/>
          <Button text="9" onPress={ () => this.buttonPressed("9")}/>
        </View>
        <View style={styles.row}>
          <Button text="*" onPress={ () => this.buttonPressed("*")}/>
          <Button text="0" onPress={ () => this.buttonPressed("0")}/>
          <Button text="#" onPress={ () => this.buttonPressed("#")}/>
        </View>
        <View style={styles.row}>
          <Button text="Delete" onPress={ () => this.buttonPressed("Delete")}/>
          <Button text={this.state.callState === false ? "Call" : "Decline"} special onPress={ () => this.buttonPressed(this.state.callState === false ? "Call" : "Decline")} />
        </View>
      </View>
    </View>
  );
          }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText : {
    fontSize : 50,
    textAlign : "center",
    color : 'black'
  },
  top: {
    backgroundColor : 'green',
    height : '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    height : '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
  },
  topText : {
    fontSize : 50,
    textAlign : "center",
    color : 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
});
