
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity
} from 'react-native';

type Props = {};


export default class App extends Component <Props> {
  render(){

  
  return (
    <View style={styles.container}>
      <Text style = {styles.welcome}>App for intern</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
          style={styles.userBtn}
          onPress={()=> alert("successfully logged in")}
          >
            <Text style={styles.btnTxt}>
              Login
            </Text>
          </TouchableOpacity>

        </View>

    </View>
  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
welcome:{
  fontSize:30,
  textAlign: 'center',
  margin:10,
  fontWeight: 'bold',
  color: "#fff",
  marginBottom:35

},
input: {
  width: "90%",
  backgroundColor: '#FFF',
  padding:15,
  marginBottom:10
  
},

userBtn: {
  backgroundColor: "#E6E6D8",
  padding:15,
  width: '45%',
},

btnTxt:{
  fontSize:18,
  textAlign: "center"
},
btnContainer:{
  width:'90%',
  alignItems: "center"

}


});
