import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Contact from '../../components/Contact'

import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import { ContactProps } from '../../models/Contact'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eff2'
  },
  content: {
    flex: 1,
    padding: 20
  },
  sectionTitle: {
    color: '#243C43',
    fontSize: 25,
    fontFamily: 'Roboto Bold',
    paddingBottom: 20
  }
})

const contactsData = [
  {
    name: 'Beverly Jones',
    status: "You know you're in love when",
    uri: 'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    online: true
  },
  {
    name: 'Crystal Flores',
    status: "Hey you! What's up",
    uri: 'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    online: false
  },
  {
    name: 'Brittany Hart',
    status: "When I'm good, I'm very good",
    uri: 'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    online: true
  },
  {
    name: 'Deborah Flores',
    status: "Hey you! What's up",
    uri: 'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    online: false
  },
  {
    name: 'Harley Quinn',
    status: "I am a dancer. I know you're",
    uri: 'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    online: true
  }
]

const Conversations: React.FC = () => {
  const [contacts, setContacts] = useState(contactsData)

  const searchContacts = (query: string) => {
    const filteredContacts = contactsData.filter(
      contact =>
        contact.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    )
    if (query.length === 0) {
      return setContacts(contactsData)
    }
    setContacts(filteredContacts)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Navbar />
        <Text style={styles.sectionTitle}>Conversation</Text>
        <SearchBar searchFunction={searchContacts} />
        <FlatList
          data={contacts}
          renderItem={({ item }: { item: ContactProps }) => (
            <Contact
              name={item.name}
              status={item.status}
              uri={item.uri}
              online={item.online}
            />
          )}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    </SafeAreaView>
  )
}

export default Conversations
