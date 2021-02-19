import React from 'react';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';
import {styles} from './Css';

export default function Login(props)
{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/LogoFlamengo.png')} style={styles.logo}/>
            <Text style={{ color: 'white' }}>LOGIN:</Text>
            
            <TextInput style={styles.input} placeholder="Digite seu usuário" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
            <Button style={styles.btnLogar} title='Logar' onPress={ ()=> props.navigation.navigate('Team')}/>

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