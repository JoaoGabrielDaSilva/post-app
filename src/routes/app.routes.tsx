import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Conversations from '../pages/Conversations'
import Chat from '../pages/Chat'
import Profile from '../pages/Profile'
import Posts from '../pages/Posts'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Conversations"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  )
}

export default AppRoutes
