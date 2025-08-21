import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function TabLayout() {
  const { colors, currentSeason } = useTheme();
  
  const getSeasonIcon = () => {
    switch (currentSeason) {
      case 'spring': return 'flower';
      case 'summer': return 'sunny';
      case 'fall': return 'leaf';
      case 'winter': return 'snow';
      default: return 'flower';
    }
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.tabBarActive,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarInactiveTintColor: colors.text,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
          headerTitle: 'My Contacts',
        }}
      />
      <Tabs.Screen
        name="seasons"
        options={{
          title: 'Seasons',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={getSeasonIcon()} size={size} color={color} />
          ),
          headerTitle: `Current Season: ${currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)}`,
        }}
      />
    </Tabs>
  );
}