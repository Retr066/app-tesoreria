import React from 'react';
import { View } from 'react-native';
import { Text, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../../assets/img/logo.png';
import mercado from '../../../assets/img/mercado.jpeg';

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        paddingTop: 50,
      }}>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image
          source={logo}
          style={{
            width: 105,
            height: 105,
          }}
        />
      </View>
      <View>
        <Image
          source={mercado}
          resizeMode={'cover'}
          style={{
            width: 500,
            height: 600,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 510,
              left: 0,
              right: 0,
              bottom: 0,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text h4Style style={{ color: 'white' }}>
              Todo siempre en la mano
            </Text>
            <Text h4Style style={{ color: '#CCC' }}>
              Conoce tu monto a pagar y los ultimos pagos realizados
            </Text>
          </View>
        </Image>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button
          buttonStyle={{ marginBottom: 10 }}
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Iniciar Sesion"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button
          onPress={() => {
            navigation.navigate('Register');
          }}
          type="outline"
          icon={<Icon name="arrow-right" size={15} color="#2271B3" />}
          title="Registrate"
        />
      </View>
    </View>
  );
};

export default Welcome;
