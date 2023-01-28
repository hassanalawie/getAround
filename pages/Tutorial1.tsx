import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial1'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Tutorial1({navigation}:Props) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tutorial 1</Text>
        <Button
            title="Go to Tutorial 2"
            onPress={() => navigation.navigate('Tutorial2')}
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
  