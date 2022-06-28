import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  console.log(route);
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.header}>Registery Completed!</Text>
      <Text style={styles.label}>Üye Ad: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyad: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
      <Text style={styles.label}>Üye Mail: {user.userMail}</Text>
      <Text style={styles.label}>Üye Şehir: {user.userHometown}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'green',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    color: 'black',
  },
});
export default MemberResult;
