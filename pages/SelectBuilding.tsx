import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SelectBuilding'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function SelectBuilding({navigation}:Props) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Select Building Page</Text>
        <Button
            title="Go to Navigation Page"
            onPress={() => navigation.navigate('NavigationPage')}
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
  