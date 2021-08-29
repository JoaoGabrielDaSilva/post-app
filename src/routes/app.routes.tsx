import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Conversations from '../pages/Conversations'

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
    </Stack.Navigator>
  )
}

export default AppRoutes
