import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Login,
  Home,
  Notification,
  Task,
  Account,
  TaskDetail,
  Register,
  AccountEdit,
  Laporan,
  Informasi,
  InformasiDetail,
  LokasiDetail,
  Lokasi,
  Satuan,
  SatuanDetail,
  Notifikasi,
} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/BottomNavigator';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {


  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};


export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Informasi"
        component={Informasi}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="InformasiDetail"
        component={InformasiDetail}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Lokasi"
        component={Lokasi}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="LokasiDetail"
        component={LokasiDetail}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Satuan"
        component={Satuan}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="SatuanDetail"
        component={SatuanDetail}
        options={{
          headerShown: false,

        }}
      />

    </Stack.Navigator>
  );
}
