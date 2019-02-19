import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as firebase from 'firebase';

import firebaseConfig from './config/firebase';

firebase.initializeApp(firebaseConfig);

import {
  Container, Content, Header, Form, Input, Item, Button, Label
} from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: ''
    });
  }

  loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      alert("login success");
    })
  }
  signUpUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => { this.setState({ email: email }) }}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => { this.setState({ password: password }) }}
            />
          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Sign up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});
