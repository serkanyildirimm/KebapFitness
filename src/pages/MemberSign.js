import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userHometown, setUserHometown] = useState('');

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebap Fitness Salonu', 'bilgiler boş bırakılamaz.');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };
    console.log(user);
    navigation.navigate('MemberResultScreen', {user});
  };

  return (
    <SafeAreaView>
      <Input
        label="Name"
        placeholder="enter your name"
        onChangeText={setUserName}
      />
      <Input
        label="Surname"
        placeholder="enter your surname"
        onChangeText={setUserSurname}
      />
      <Input
        label="Age"
        placeholder="enter your age"
        onChangeText={setUserAge}
      />
      <Input
        label="Mail"
        placeholder="enter your mail adress"
        onChangeText={setUserMail}
      />
      <Input
        label="Hometown"
        placeholder="enter your hometown"
        onChangeText={setUserHometown}
      />
      <Button text="submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};
export default MemberSign;
