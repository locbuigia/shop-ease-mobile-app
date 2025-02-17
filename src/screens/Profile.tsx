import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../constants';
import {
  addNewRegisterUser,
  setUserLoginStatus,
  updateUserEmail,
  updateUserName,
} from '../features/userSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Divider from '../components/Divider';
import {Toast} from 'toastify-react-native';

const Profile = ({navigation}: any) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: UserState) => state.user.isLoggedIn);
  const userName = useSelector((state: UserState) => state.user.userName);
  const registeredUsers = useSelector(
    (state: UserState) => state.user.registeredUsers,
  );

  const [isRegistering, setIsRegistering] = useState(false);
  const [userNameInput, setUserNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    if (!emailInput || !passwordInput) {
      Toast.error('Please fill in all fields!');
      return;
    }

    if (!validateEmail(emailInput)) {
      Toast.error('Invalid email address!');
      return;
    }

    const foundUser = registeredUsers.find(
      user =>
        user.userEmail === emailInput && user.userPassword === passwordInput,
    );

    if (foundUser) {
      dispatch(updateUserName(foundUser.userName));
      dispatch(updateUserEmail(foundUser.userEmail));
      dispatch(setUserLoginStatus(true));
      clearInput();
    } else {
      Toast.error('Invalid credentials!');
    }
  };

  const handleRegister = () => {
    if (!userNameInput || !emailInput || !passwordInput) {
      Toast.error('Please fill in all fields.');
      return;
    }

    if (!validateEmail(emailInput)) {
      Toast.error('Invalid email address! Please check again!');
      return;
    }

    const isUserFound = registeredUsers.find(
      user => user.userEmail === emailInput,
    );

    if (isUserFound) {
      Toast.error('Email address has been used already!');
      return;
    }

    const newUser = {
      userName: userNameInput,
      userEmail: emailInput,
      userPassword: passwordInput,
    };

    dispatch(addNewRegisterUser(newUser));
    dispatch(updateUserName(userNameInput));
    dispatch(updateUserEmail(emailInput));
    dispatch(setUserLoginStatus(true));
    clearInput();
  };

  const handleLogout = () => {
    clearInput();
    setIsRegistering(false);
    dispatch(setUserLoginStatus(false));
  };

  const clearInput = () => {
    setUserNameInput('');
    setEmailInput('');
    setPasswordInput('');
  };

  return (
    <View style={styles.container}>
      <Header showGoBack={false} title={'Profile'} navigation={navigation} />
      {isLoggedIn ? (
        <View style={styles.userDetailsView}>
          <View style={styles.userHeaderView}>
            <Ionicons name="person-circle" color="white" size={100} />
            <Text style={styles.labelText}>{userName}</Text>
          </View>
          <View style={{width: '100%'}}>
            <View style={styles.dividerView}>
              <Divider />
            </View>
            <TouchableOpacity style={styles.actionButton}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="cog"
                  color="white"
                  size={30}
                  style={styles.icon}
                />
                <Text style={styles.labelText}>Settings</Text>
              </View>
              <Ionicons name="chevron-forward" color="white" size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="card"
                  color="white"
                  size={30}
                  style={styles.icon}
                />
                <Text style={styles.labelText}>Billing Details</Text>
              </View>
              <Ionicons name="chevron-forward" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={styles.contentView}>
          <Text style={styles.headlineText}>
            {isRegistering ? 'Create an account' : 'Welcome Back!'}
          </Text>
          {isRegistering && <Text style={styles.labelText}>Name</Text>}
          {isRegistering && (
            <TextInput
              style={styles.searchInput}
              value={userNameInput}
              placeholder="Enter your name"
              placeholderTextColor={'lightgray'}
              onChangeText={setUserNameInput}
            />
          )}
          <Text style={styles.labelText}>Email Address</Text>
          <TextInput
            style={styles.searchInput}
            value={emailInput}
            placeholder="Enter your email"
            placeholderTextColor={'lightgray'}
            onChangeText={setEmailInput}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.searchInput}
            value={passwordInput}
            placeholder="Enter your password"
            placeholderTextColor={'lightgray'}
            onChangeText={setPasswordInput}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={isRegistering ? handleRegister : handleLogin}>
            <Text style={styles.buttonText}>
              {isRegistering ? 'REGISTER' : 'LOGIN'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)}>
            <Text style={styles.toggleText}>
              {isRegistering
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentView: {
    padding: 20,
  },
  headlineText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 20,
  },
  labelText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  searchInput: {
    marginTop: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    fontFamily: 'Poppins-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  userDetailsView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  dividerView: {marginBottom: 80},
  actionButton: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  userHeaderView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
