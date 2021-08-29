import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { ContactProps } from '../../models/Contact'

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    borderRadius: 50
  },
  infoWrapper: {
    marginLeft: 15,
    justifyContent: 'space-between'
  },
  name: {
    fontFamily: 'Roboto Bold',
    color: '#243C43',
    letterSpacing: 0.5
  },
  status: {
    fontFamily: 'Roboto Bold',
    color: '#b0bcc7'
  }
})

const Contact: React.FC<ContactProps> = ({ name, status, uri = 'none' }) => {
  const navigation = useNavigation()

  const handleNavigateChat = () => {
    navigation.navigate('Chat')
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigateChat}>
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.image} width={60} height={60} />
        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Contact
