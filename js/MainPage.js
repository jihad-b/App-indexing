import React from 'react';
import { Container, Button} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
   render() {
      return (
         <Container>
            <View style={{ backgroundColor: "black", flex: 1}}>
               <View style={{flex: 0.5, alignItems: 'stretch', justifyContent: 'space-around'}}>
                  <Button rounded>
                     <Text style={styles.pagep}>
                        <Text>Projet Epitech</Text>
                     </Text>               
                  </Button>
               </View>
               <View style={{flex: 0, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button rounded onPress={() => this.props.navigation.navigate("semestre1")}>
                     <Text style={styles.page}>
                        <Text>Semestre 1</Text>
                     </Text>
                  </Button>
               </View>
               <View style={{flex: 0, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button rounded success onPress={() => this.props.navigation.navigate("semestre2")}>
                     <Text style={styles.page}>
                        <Text>Semestre 2</Text>
                     </Text>
                  </Button>
               </View>
            </View>
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   page: {
     color: 'black',
     fontWeight: 'bold',
     fontSize: 19,
   },
   pagep: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 30
   },
});