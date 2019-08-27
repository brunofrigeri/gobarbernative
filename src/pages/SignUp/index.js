import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux'
import { CheckBox } from 'native-base'

import logo from '../../assets/logo.png'
import Background from '../../components/Background';
import { signUpRequest } from '../../store/modules/auth/actions'

import { Container, Form, FormInput, SubmitButton, SignLinkText, SignLink, Check, CheckText } from './styles'

export default function SignUp({ navigation }) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [provider, setProvider] = useState(false)

  function handleSubmit(){
    dispatch(signUpRequest(name, email, password, provider))
  }

  function handleClick() {
    if(provider) setProvider(false)
    else setProvider(true)
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
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
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <Check>
            <CheckBox
              checked={provider}
              color='rgba(0, 0, 0, 0.4)'
              onPress={handleClick}
            />
            <CheckText>Sou prestador</CheckText>
          </Check>

          <SubmitButton onPress={handleSubmit}>
            Criar conta
          </SubmitButton>

        </Form>

        <SignLink onPress={() => {navigation.navigate('SignIn')}}>
          <SignLinkText>Já possuo conta</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
}
