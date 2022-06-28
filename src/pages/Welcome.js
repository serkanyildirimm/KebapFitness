import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';

const Welcome = ({navigation}) => {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="uye kaydi olustur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
});
export default Welcome;
