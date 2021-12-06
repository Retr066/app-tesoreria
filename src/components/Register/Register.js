import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const Register = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Input
          keyboardType="numeric"
          label="Ingrese su DNI"
          placeholder="DNI"
          leftIcon={{ type: 'font-awesome', name: 'id-card' }}
        />
        <Input
          autoComplete="on"
          label="Ingrese su Correo"
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        />
        <Input
          label="Ingrese su Contraseña"
          secureTextEntry={true}
          placeholder="Contraseña de 6 digitos"
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
          type="outline"
          containerStyle={{
            width: 400,
          }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'green',
          }}
          icon={<Icon name="arrow-right" size={15} color="green" />}
          title="Registrar"
          titleStyle={{ color: 'green' }}
        />
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: 13,
            paddingTop: 18,
          }}>
          Si ya tiene cuenta Iniciar Sesion Aqui
        </Text>
      </View>
    </>
  );
};

export default Register;
