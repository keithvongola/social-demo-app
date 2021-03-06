import React, { PureComponent } from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { AlbumItem } from '../../components';
import { colors } from '../../styles';

class Album extends PureComponent {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
    this._onItemPress = this._onItemPress.bind(this);
  }

  _onItemPress(url, title) {
    const { navigation } = this.props;
    navigation.navigate('Photo', { title, url });
  }

  _renderItem({ item }) {
    return (
      <AlbumItem
        hideTitle
        id={item.get('id')}
        title={item.get('title')}
        url={item.get('url')}
        thumbnailUrl={item.get('thumbnailUrl')}
        onPress={this._onItemPress}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const { photos } = this.props;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <FlatList
            numColumns={3}
            data={photos && photos.toArray()}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Album.propTypes = {
  photos: PropTypes.instanceOf(List).isRequired,
};

export default Album;
