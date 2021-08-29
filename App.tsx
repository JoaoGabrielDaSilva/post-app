import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppLoading from 'expo-app-loading'

import Routes from './src/routes'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    'Roboto Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto Black': require('./src/assets/fonts/Roboto-Light.ttf')
  })

  if (!fontsLoaded) return <AppLoading />

  return <Routes />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
