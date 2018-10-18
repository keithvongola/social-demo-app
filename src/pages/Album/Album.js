import React, { PureComponent } from 'react';
import {
  View, SafeAreaView, Button,
} from 'react-native';

class Album extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Button
            title="To Photo"
            onPress={() => this.props.navigation.navigate('Photo')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {

  },
};
export default Album;
