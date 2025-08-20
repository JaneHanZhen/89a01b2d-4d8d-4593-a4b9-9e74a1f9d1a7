import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Contact } from '../types/contacts';

interface ContactCardProps {
  contact: Contact;
  onPress?: (contact: Contact) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => onPress?.(contact)}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: contact.avatar || 'https://i.pravatar.cc/150' }} 
        style={styles.avatar} 
      />
      <View style={styles.info}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.contactInfo}>{contact.phone}</Text>
        <Text style={styles.contactInfo}>{contact.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  contactInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
});

export default ContactCard;