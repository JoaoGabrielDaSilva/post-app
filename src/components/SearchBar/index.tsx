import React from 'react'
import { Feather } from '@expo/vector-icons'

import { StyleSheet, View, TextInput } from 'react-native'
import { SearchBarProps } from './SearchBar'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
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
  searchWrapper: {
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
  searchIcon: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  input: {
    flex: 1,
    paddingLeft: 25,
    fontFamily: 'Roboto Bold',
    fontSize: 15,
    letterSpacing: 0.5
  }
})

const SearchBar: React.FC<SearchBarProps> = ({ searchFunction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Feather name="search" style={styles.searchIcon} />
      </View>
      <TextInput
        placeholder="Search friend"
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor="#BACAD8"
        onChangeText={text => searchFunction(text)}
      />
    </View>
  )
}

export default SearchBar
