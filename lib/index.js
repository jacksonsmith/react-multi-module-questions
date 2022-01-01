import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function QuestionMainScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Question Navigator</Text>
      </View>
    );
  }

  export function QuestionNavigator(props) {  
    const MainStack = createNativeStackNavigator();
    const QuestionNavigator = () => QuestionMainScreen(props)
  
    return (
             <MainStack.Navigator
             screenOptions={{
              headerShown: false
            }}>
              <MainStack.Screen name="Question" component={QuestionNavigator} />
            </MainStack.Navigator> 
    )
  }