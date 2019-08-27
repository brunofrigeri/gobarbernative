import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'react-native';

import { signInRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/logo.png'

import Background from '../../components/Background';

import { Container, Form, FormInput, SubmitButton, SignLinkText, SignLink } from './styles'

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispatch(signInRequest(email, password))
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>

        </Form>

        <SignLink onPress={() => {navigation.navigate('SignUp')}}>
          <SignLinkText>Criar conta gratuita!</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
