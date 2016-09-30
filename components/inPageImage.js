import React from 'react';
import {View} from 'react-native';
import styles from '../styles/styles.ios';

const AnimalImage = require('./animalImage');

class InPageImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.indexes.length === 1) {
      return (
        <View>
          <AnimalImage
            index={this.props.indexes[0]}
            images={this.props.images}
            thumbnailStyle={styles.inPageSingleThumbnail}
            navigator={this.props.navigator}
          />
        </View>
      );
    } else if (this.props.indexes.length === 2) {
      return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <AnimalImage
          index={this.props.indexes[0]}
          images={this.props.images}
          thumbnailStyle={styles.inPageDuoThumbnailLeft}
          navigator={this.props.navigator}
        />
        <AnimalImage
          index={this.props.indexes[1]}
          images={this.props.images}
          thumbnailStyle={styles.inPageDuoThumbnailRight}
          navigator={this.props.navigator}
        />
      </View>
    );
    } else {
      // More pictures are not supported yet because they are not needed
      return null;
    }
  }
};

InPageImage.propTypes = {
  images: React.PropTypes.array.isRequired,
  indexes: React.PropTypes.array.isRequired,
//@fix  navigator: React.PropTypes.object.isRequired,
};

module.exports = InPageImage;
