import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { ChatProps, Message } from './Chat'

const messagesData = [
  {
    mine: false,
    message: 'Hi!'
  },
  {
    mine: false,
    message: 'How are you?'
  },
  {
    mine: true,
    message: "I'm good"
  },
  {
    mine: true,
    message: "How's going there"
  },
  {
    mine: false,
    message: "You know you're in love when you can't fall asleep"
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eff2'
  },
  header: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#b8b6b6',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18
  },
  leftArrow: {
    fontSize: 25,
    paddingRight: 10,
    color: '#1F2729'
  },
  image: {
    borderRadius: 50
  },
  name: {
    fontFamily: 'Roboto Bold',
    fontSize: 18,
    color: '#243C43',
    paddingLeft: 10
  },
  status: {
    width: 10,
    height: 10,
    backgroundColor: '#4abf4e',
    borderRadius: 10,
    marginLeft: 10
  },
  chat: {
    flex: 1,
    paddingTop: '10%'
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    borderRadius: 25,
    shadowColor: '#b8b6b6',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18
  },
  messageText: {
    fontFamily: 'Roboto Black'
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    shadowColor: '#b8b6b6',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18
  },
  input: {
    paddingLeft: 25,
    fontFamily: 'Roboto Bold',
    fontSize: 15,
    letterSpacing: 0.5
  },
  iconWrapper: {
    backgroundColor: '#eb9dce',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#eb9dce',
    shadowOffset: {
      width: 1,
      height: 5
    },
    shadowOpacity: 0.48,
    shadowRadius: 5,
    elevation: 18
  },
  sendIcon: {
    fontSize: 20,
    color: '#FFFFFF'
  }
})

const Chat: React.FC<ChatProps> = ({ route }) => {
  const contact = route.params.contact
  const navigation = useNavigation()
  let currentMessage = ''

  const [messages, setMessages] = useState(messagesData)
  const [inputValue, setInputValue] = useState('')

  const goBack = () => {
    navigation.goBack()
  }

  const handleChangeText = (message: string) => {
    setInputValue(message)
  }

  const sendMessage = () => {
    setMessages([...messages, { mine: true, message: inputValue }])
    clearInputValue()
  }

  const clearInputValue = () => {
    setInputValue('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" style={styles.leftArrow} onPress={goBack} />

        <Image
          source={{ uri: contact.uri }}
          style={styles.image}
          width={50}
          height={50}
        />
        <Text style={styles.name}>{contact.name}</Text>
        {contact.online && <View style={styles.status} />}
      </View>
      <FlatList
        data={messages}
        contentContainerStyle={styles.chat}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }: { item: Message }) => (
          <View
            style={[
              styles.messageContainer,
              {
                backgroundColor: item.mine ? '#eb9dce' : '#f2f2f2',
                alignSelf: item.mine ? 'flex-end' : 'flex-start'
              }
            ]}
          >
            <Text
              style={[
                styles.messageText,
                { color: item.mine ? '#ffffff' : '#243C43' }
              ]}
            >
              {item.message}
            </Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={inputValue}
          placeholder="Search friend"
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="#BACAD8"
          onChangeText={message => handleChangeText(message)}
        />
        <TouchableWithoutFeedback onPress={sendMessage}>
          <View style={styles.iconWrapper}>
            <Feather name="send" style={styles.sendIcon} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
}

export default Chat
