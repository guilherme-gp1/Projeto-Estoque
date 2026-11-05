import React, { useState } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';

import ProfilePlaceholder from '../components/PerfilPhoto';
import CustomInput from '../components/input';
import RememberPassword from '../components/relembrarsenha';
import PrimaryButton from '../components/botão';
import Divider from '../components/line';
import SocialButton from '../components/BotãoSocial';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = async () => {

        if (!email || !senha) {

            Alert.alert(
                'Atenção',
                'Preencha o email e a senha.'
            );

            return;
        }

        try {

            const response = await fetch(
                'http://10.0.2.2:8000/api/login',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },

                    body: JSON.stringify({
                        email: email,
                        senha: senha,
                    }),
                }
            );

            const data = await response.json();

            console.log('Resposta Laravel:', data);

            if (response.ok && data.erro === 'n') {

                Alert.alert(
                    'Sucesso',
                    'Login realizado com sucesso!',
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.replace('Home'),
                        },
                    ]
                );

            } else {

                Alert.alert(
                    'Erro',
                    data.mensagem || 'Email ou senha incorretos.'
                );

            }

        } catch (error) {

            console.log('Erro ao conectar com Laravel:', error);

            Alert.alert(
                'Erro',
                'Não foi possível conectar ao servidor.'
            );
        }
    };

    return (

        <KeyboardAvoidingView
            style={styles.keyboard}
            behavior={
                Platform.OS === 'ios'
                    ? 'padding'
                    : undefined
            }
        >

            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >

                <View style={styles.container}>

                    <ProfilePlaceholder />

                    {/* Email */}

                    <CustomInput
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    {/* Senha */}

                    <CustomInput
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />

                    {/* Lembrar senha */}

                    <RememberPassword />

                    {/* Entrar */}

                    <PrimaryButton
                        texto="Entrar"
                        onPress={fazerLogin}
                    />

                    <TouchableOpacity
                        style={styles.CadastroLinkContainer}
                        onPress={() => navigation.navigate('Cadastro')}
                        activeOpacity={0.7}
                    >

                        <Text style={styles.CadastroText}>
                            Não tem uma conta?{' '}
                            <Text style={styles.CadastroLink}>
                                Cadastre-se
                            </Text>
                        </Text>

                    </TouchableOpacity>

                    <Divider />

                    <SocialButton
                        type="google"
                    />

                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({

    keyboard: {
        flex: 1,
        backgroundColor: '#fffffff0',
    },

    scroll: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 10,
    },

    container: {
        width: '94%',
        maxWidth: 390,
        minHeight: 610,

        alignSelf: 'center',

        backgroundColor: '#fffffff0',

        paddingHorizontal: 20,
        paddingTop: 38,
        paddingBottom: 14,
    },

    CadastroLinkContainer: {
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 10,
    },

    CadastroText: {
        fontSize: 12,
        color: '#666666',
    },

    CadastroLink: {
        color: '#4D90F5',
        fontWeight: '700',
    },

});