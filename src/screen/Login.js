import React from 'react';
import { View, Text } from 'react-native';

import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
GoogleSignin.configure({
    webClientId:
        '517525829100-6714pbqes4jkup3hs95glet5n6hn9j0f.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

const Login = (props) => {
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // const googleCredential = auth.GoogleAuthProvider.credential(
            //     userInfo.idToken,
            // );
            // await auth().signInWithCredential(googleCredential);
            // let data = await UserAdd(userInfo.user, selectedUser);
            console.log(userInfo)
            // console.log('data', data)
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={false}
            />
        </View>
    );
};

export default Login;
