import React from 'react';
import {styles} from './Css';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';

export default function Team(props)
{
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/LogoFlamengo.png')} style={styles.FlamengoLogo}/>
            </View>

            <Text style={styles.textoTitulo}>HINO DO FLAMENGO</Text>
            <Text style={styles.texto}>
                     Uma vez Flamengo, sempre Flamengo
                    Flamengo sempre eu hei de ser
                    É meu maior prazer vê-lo brilhar
                    Seja na terra, seja no mar
                    Vencer, vencer, vencer!
                    Uma vez Flamengo, Flamengo até morrer!

                    Na regata, ele me mata
                    Me maltrata, me arrebata
                    Que emoção no coração!
                    Consagrado no gramado
                    Sempre amado, o mais cotado
                    No Fla-Flu é o Ai, Jesus!

                    Eu teria um desgosto profundo
                    Se faltasse o Flamengo no mundo
                    Ele vibra, ele é fibra
                    Muita libra já pesou
                    Flamengo até morrer eu sou!
            </Text>

            <View style={styles.containerbtn}>
                <TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate('Login')}>
                    <Image resizeMode='contain' source={require('../assets/backtohome.png')} style={styles.iconlogin}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate('Team')}>
                    <Image resizeMode='contain' source={require('../assets/letraicon.png')} style={styles.iconlogin}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnMenu} title='Cadastro Escola' onPress={ ()=> props.navigation.navigate('Historia')}>
                    <Image resizeMode='contain' source={require('../assets/Historiaiconfut.png')} style={styles.iconlogin}/>
                 </TouchableOpacity>
            </View>

        </View>
    );
}