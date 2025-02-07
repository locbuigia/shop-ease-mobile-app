import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';

const Profile = ({route}: any) => {
  return (
    <View style={styles.container}>
      <Header showGoBack={false} title={'Profile'} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>This is Profile screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default Profile;
