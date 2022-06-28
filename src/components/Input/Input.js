import React from 'react';
import {SafeAreaView, View, TextInput, Text} from 'react-native';
import styles from './Input.style';

const Input = ({label, placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default Input;
