import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('editprofile')}>
        <Text style={styles.buttonTitle}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}