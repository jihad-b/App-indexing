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
                        <Text>~ Get_next_line</Text>
                        <Text>:  c'est un projet qui a </Text>
                        <Text>pour but de recoder </Text>
                        <Text> la fonction getline</Text>
                    </Text>               
                </View>
                <View style={{flex: 2, alignItems: 'stretch', justifyContent: 'space-around'}}>
                    <Text style={styles.pagep}>
                        <Text>~ matchstick  </Text>
                        <Text>:  c'est un projet qui a </Text>
                        <Text>pour but de recoder le </Text>
                        <Text>jeu matchstick</Text>
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