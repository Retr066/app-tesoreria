import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
const Login = ({ navigation }) => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Input
          label="Ingrese su Correo"
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <Input
          label="Ingrese su Contraseña"
          secureTextEntry={true}
          placeholder="Contraseña"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Button
          containerStyle={{ width: 400, paddingBottom: 18 }}
          buttonStyle={{ backgroundColor: 'green' }}
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Iniciar Sesion"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={{ textDecorationLine: 'underline', fontSize: 13 }}>
          Necesita ayuda con la contraseña?
        </Text>
      </View>
    </>
  );
};

export default Login;
