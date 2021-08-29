import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacityBase,
  TouchableOpacity
} from 'react-native'
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import Navbar from '../../components/Navbar'
import { ProfileProps } from './Profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#e9eff2'
  },
  navbar: {
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#243C43',
    fontSize: 25,
    fontFamily: 'Roboto Bold',
    paddingBottom: 20,
    paddingLeft: 20
  },
  header: {
    alignItems: 'center'
  },
  image: {
    borderRadius: 35
  },
  name: {
    color: '#243C43',
    paddingVertical: 15,
    fontSize: 17,
    fontFamily: 'Roboto Bold'
  },
  status: {
    paddingLeft: 25,
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    color: '#BACAD8'
  },
  location: {
    paddingLeft: 25,
    fontFamily: 'Roboto Bold',
    fontSize: 14,
    color: '#BACAD8',
    letterSpacing: 0.9
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    borderBottomColor: '#BACAD8',
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  info: {
    alignItems: 'center'
  },
  label: {
    fontFamily: 'Roboto Black',
    fontSize: 15,
    color: '#BACAD8'
  },
  value: {
    color: '#243C43',
    fontSize: 14,
    fontFamily: 'Roboto Bold',
    marginTop: 10
  },
  postContainer: {
    flex: 1
  },
  posts: {
    flex: 1
  },
  postWrapper: {
    flex: 1,
    maxWidth: '31%',
    height: 120,
    margin: 5,
    borderRadius: 10
  },
  post: { borderRadius: 10, flex: 1 }
})

const screen = Dimensions.get('window')

const posts = [
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616687573527-a2174e529560?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
]

const Profile: React.FC<ProfileProps> = ({ route }) => {
  const profileInfo = route?.params?.profileInfo
  const navigation = useNavigation()

  const status = 'Guildhall School of Music & Drama'
  const location = 'London, UK'

  const handlePostClick = () => {
    navigation.navigate('Posts')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>My Profile</Text>
        <View style={styles.header}>
          <Image
            source={{ uri: profileInfo?.uri }}
            style={styles.image}
            width={70}
            height={70}
          />
          <Text style={styles.name}>{profileInfo?.name}</Text>
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.infoWrapper}>
          {profileInfo.info.map((item, index) => (
            <View key={index} style={styles.info}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
        <View style={styles.posts}>
          <FlatList
            nestedScrollEnabled
            data={posts}
            style={styles.postContainer}
            contentContainerStyle={{
              padding: 20
            }}
            keyExtractor={(_, index) => String(index)}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.postWrapper}
                activeOpacity={1}
                onPress={handlePostClick}
              >
                <Image style={styles.post} source={{ uri: item }} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
