import React from 'react';
import { Container, Button} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
   render() {
      return (
        <Container>
            <View style={{ backgroundColor: "black", flex: 1}}>
                <View style={{flex: 0.5, alignItems: 'stretch', justifyContent: 'space-around'}}>
                    <Button rounded light onPress={() => this.props.navigation.navigate("MainPage")}>
                        <Text style={styles.pagep}>
                            <Text>Main Page</Text>
                        </Text>               
                    </Button>
                </View>
                <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'space-around'}}>
                    <Text style={styles.pagep}>
                        <Text>~ My screensaver : </Text>
                        <Text>  écran de veille </Text>
                        <Text>~ My hunter</Text>
                        <Text> Duck Hunt revisité</Text>
                    </Text>               
                </View>
                <View style={{flex: 2, alignItems: 'stretch', justifyContent: 'space-around'}}>
                    <Text style={styles.pagep}>
                        <Text>~ My radar  </Text>
                        <Text>:  un radar d'avion </Text>
                        <Text>~ my_runner </Text>
                        <Text>geometry Dash revisité</Text>
                    </Text>               
                </View>
            </View>
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   page: {
      textAlign: "center",
     color: 'blue',
     fontWeight: 'bold',
     fontSize: 19,
   },
   pagep: {
      textAlign: "center",
      fontWeight: 'bold',
      color: 'white',
      fontSize: 30
   },
});