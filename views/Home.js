import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, ImageBackground, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';
//import Scanner from "../components/Scanner";
import TesteQR from "../views/TesteQR";



export default function Home() {

  const [modalVisible, setModalVisible] = React.useState(false);
  const imgbkg = "../assets/img/fundo.png";

  const [type, setType] = React.useState("");
  const [data, setData] = React.useState("");

  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
    setModalVisible(false);
  };

  return (

    <View style={css.container}>
    <ImageBackground
    source={require(imgbkg)}
    style={css.img}>

    <Modal
    visible= {modalVisible}
    transparent= {true}
    animationType="fade"
    onRequestClose={() => setModalVisible(false)}
    >

    <View style={css.modal}>
    <TesteQR onCodeScanned={onCodeScanned}/>

    <TouchableOpacity style={css.login_button}  onPress={() => setModalVisible(false)}>
      <Text style={css.login_buttonText}> Cancelar </Text>
    </TouchableOpacity>

    </View>
    </Modal>

    <TouchableOpacity style={css.login_button} onPress={() => setModalVisible(true)}>
      <Text style={css.login_buttonText}> Escanear </Text>
    </TouchableOpacity>

    </ImageBackground>
    </View>

  );
}
