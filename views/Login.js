import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Image, Platform, TouchableOpacity, TextInput, StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import {css} from '../assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const imgbkg = "../assets/img/fundo.png";

const NavigateToDetails = props => {
  props.navigation.navigate('Home');
}


export default function Login(props) {

  const [display, setDisplay] = useState('none');
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [login, setLogin] = useState(null);


  async function sendForm(){
    let response = await fetch ('http://192.168.2.6:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          cpf: cpf
        })
    });
  }


  return (

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container]}>
    <ImageBackground source={require(imgbkg)} style={css.img}>
    <View style={css.login_logomarca}>

      <Image source={require('../assets/img/logomarca.png')}/>
    </View>


    <View style={css.login_form}>
      <TextInput style={css.login_input} placeholder = 'Email:'/>
      <TextInput style={css.login_input} placeholder = 'CPF:' secureTextEntry={true}/>


        <TouchableOpacity style={css.login_button} onPress={()=>sendForm()}>
          <Text style={css.login_buttonText}> Entrar </Text>
        </TouchableOpacity>

    </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}
