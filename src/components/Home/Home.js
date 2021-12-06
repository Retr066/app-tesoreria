import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Tab, TabView } from 'react-native-elements';
export default function Home() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            leftComponent={{
              icon: 'menu',
              color: '#fff',
              iconStyle: { color: '#fff' },
            }}
            centerComponent={{ text: 'Principal', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <>
            <Tab>
              <Tab.Item title="recent" />
              <Tab.Item title="favorite" />
              <Tab.Item title="cart" />
            </Tab>

            <TabView>
              <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                <Text h1>Recent</Text>
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                <Text h1>Favorite</Text>
              </TabView.Item>
              <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                <Text h1>Cart</Text>
              </TabView.Item>
            </TabView>
          </>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
