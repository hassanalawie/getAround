import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NavigationPage'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function NavigationPage({navigation}:Props) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Navigation Page</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  