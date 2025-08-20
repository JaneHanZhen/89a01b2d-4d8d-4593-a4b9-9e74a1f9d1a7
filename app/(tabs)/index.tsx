import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  SafeAreaView, 
  TextInput,
  Text,
  ActivityIndicator
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ContactCard from '../components/ContactCard';
import { contacts } from '../data/contacts';
import { Contact } from '../types/contacts';

export default function ContactsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  const handleContactPress = (contact: Contact) => {
    // In a real app, this would navigate to contact details
    console.log('Selected contact:', contact.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#3498db" style={styles.loader} />
      ) : (
        <>
          <Text style={styles.contactCount}>
            {filteredContacts.length} {filteredContacts.length === 1 ? 'Contact' : 'Contacts'}
          </Text>
          
          <FlatList
            data={filteredContacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ContactCard contact={item} onPress={handleContactPress} />
            )}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Ionicons name="person-outline" size={60} color="#ccc" />
                <Text style={styles.emptyText}>No contacts found</Text>
              </View>
            }
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  contactCount: {
    marginHorizontal: 16,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  list: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  loader: {
    marginTop: 50,
  },
});