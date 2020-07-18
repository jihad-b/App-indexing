import React from 'react';
import { Container, Button} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
   render() {
      return (
        <Container>
            <View style={{ backgroundColor: "black", flex: 1}}>
                <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'space-around'}}>
                    <Button rounded light onPress={() => this.props.navigation.navigate("MainPage")}>
                        <Text style={styles.pagep}>
                            <Text>                 Main Page</Text>
                        </Text>               
                    </Button>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button bordered success onPress={() => this.props.navigation.navigate("unix2")}>
                     <Text style={styles.page}>
                        <Text>Unix System</Text>
                     </Text>
                  </Button>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button bordered success onPress={() => this.props.navigation.navigate("elem2")}>
                     <Text style={styles.page}>
                        <Text>Elementary Programming</Text>
                     </Text>
                  </Button>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button bordered success onPress={() => this.props.navigation.navigate("shell")}>
                     <Text style={styles.page}>
                        <Text>Shell Programming</Text>
                     </Text>
                  </Button>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button bordered success onPress={() => this.props.navigation.navigate("cgraph2")}>
                     <Text style={styles.page}>
                        <Text>C Graphical</Text>
                     </Text>
                  </Button>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                  <Button bordered success onPress={() => this.props.navigation.navigate("net")}>
                     <Text style={styles.page}>
                        <Text>Network and Systeme</Text>
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
      textAlign: "center",
     color: 'green',
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