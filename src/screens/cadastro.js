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
import PrimaryButton from '../components/botão';
import Divider from '../components/line';
import SocialButton from '../components/BotãoSocial';

const CadastroScreen = ({ navigation }) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

  const cadastrarUsuario = async () => {

    if (!nome || !email || !senha || !dataNascimento || !cpf) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos.'
      );

      return;
    }

    try {

      const response = await fetch(
        'http://10.0.2.2:8000/api/cadastro',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },

          body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            data_nascimento: dataNascimento,
            cpf: cpf,
          }),
        }
      );

      const data = await response.json();

      console.log('Resposta Laravel:', data);

      if (response.ok && data.erro === 'n') {

        Alert.alert(
          'Sucesso',
          data.mensagem || 'Usuário cadastrado com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Login'),
            },
          ]
        );

      } else {

        Alert.alert(
          'Erro',
          data.mensagem || 'Não foi possível realizar o cadastro.'
        );

      }

    } catch (error) {

      console.log('Erro ao conectar com Laravel:', error);

      Alert.alert(
        'Erro',
        'Não foi possível conectar ao servidor Laravel.'
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

          <CustomInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            placeholder="Senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          <CustomInput
            placeholder="dd/mm/aaaa"
            keyboardType="numeric"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />

          <CustomInput
            placeholder="CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />

          <PrimaryButton
            texto="Cadastrar"
            onPress={cadastrarUsuario}
          />

          <TouchableOpacity
            style={styles.loginLinkContainer}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >

            <Text style={styles.loginText}>
              Já tem uma conta?{' '}
              <Text style={styles.loginLink}>
                Entrar
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

export default CadastroScreen;

const styles = StyleSheet.create({

  keyboard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 2,
  },

  container: {
    width: '94%',
    maxWidth: 390,
    minHeight: 610,

    alignSelf: 'center',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 20,
    paddingTop: 38,
    paddingBottom: 18,
  },

  loginLinkContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },

  loginText: {
    fontSize: 12,
    color: '#666666',
  },

  loginLink: {
    color: '#4D90F5',
    fontWeight: '700',
  },

});