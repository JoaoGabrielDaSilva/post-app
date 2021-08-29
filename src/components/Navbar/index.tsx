import React from 'react'

import { StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#e9eff2',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftArrow: {
    fontSize: 25,
    color: '#1F2729'
  },
  options: {
    fontSize: 25,
    color: '#1F2729'
  }
})

const Navbar: React.FC = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Feather name="arrow-left" style={styles.leftArrow} onPress={goBack} />
      <Feather name="more-vertical" style={styles.options} />
    </View>
  )
}

export default Navbar
