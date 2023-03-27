import React, { Component } from "react";
import { View, Text, Button} from "react-native";

export default class Contador extends Component {
  state = {
    contador: 0,
  };
  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }
  decrementar() {
    if (this.state.contador > 0) {
      this.setState({ contador: this.state.contador - 1 });
    }
  }
  render() {
    return (
      <View>
        <Text>{this.state.contador}</Text>
        <Button title="+" onPress={() => this.incrementar()} />
        <Button title="-" onPress={() => this.decrementar()} />
      </View>
    );
  }
}