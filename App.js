import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  PlatformColor,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LogoComponent from './src/components/LogoComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.contentContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <LogoComponent height={300} width={300} />
        <View style={styles.form}>
          <TextInput
            paddingLeft={10}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={Platform.select({
              ios: PlatformColor('secondaryLabel'),
              android: 'white',
            })}
            style={styles.input}
          />

          <TextInput
            paddingLeft={10}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor={Platform.select({
              ios: PlatformColor('secondaryLabel'),
            })}
            style={styles.input}
          />

          <View>
            <Pressable style={styles.loginButton}>
              <Text style={styles.label}>Login</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {backgroundColor: PlatformColor('systemBackground')},
      default: {
        backgroundColor: '#000000ff',
      },
    }),
  },
  contentContainer: {
    flex: 1,
    maxHeight: '90%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    ...Platform.select({
      ios: {backgroundColor: PlatformColor('systemBackground')},
      default: {
        backgroundColor: '#000000ff',
      },
    }),
  },
  form: {
    width: '90%',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  input: {
    height: 40,
    marginTop: 10,
    fontWeight: '500',
    borderWidth: 0.3,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        color: PlatformColor('labelColor'),
        backgroundColor: PlatformColor('tertiarySystemBackground'),
        borderColor: PlatformColor('separator'),
      },
      default: {
        backgroundColor: '#1c1c1eff',
        borderColor: '#54545899',
      },
    }),
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 5,
    height: 40,
    marginTop: 40,
    ...Platform.select({
      ios: {backgroundColor: PlatformColor('systemBlue')},
      android: {backgroundColor: '#0a84ffff'},
      default: {
        backgroundColor: '#0a84ffff',
      },
    }),
  },
  label: {
    fontWeight: '600',
    color: 'white',
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
