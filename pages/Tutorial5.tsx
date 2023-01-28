import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tutorial5'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Tutorial5({navigation}:Props) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tutorial 5</Text>
        <Button
            title="Go to Select Building"
            onPress={() => navigation.navigate('SelectBuilding')}
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
  