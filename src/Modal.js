import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
// import {styles} from './styles';
import ImagePath from './ImagePath';
import Btn from './Btn';
import Txt from './Txt';

const ModalComponent = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        animationDuration={1500}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.rectangle}>
            <Image source={ImagePath.Line} style={styles.image1} />
            <Image source={ImagePath.smile} style={styles.image2} />

            <Txt />
            <Btn />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  rectangle: {
    width: 420,
    height: 305,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  },
  image1: {
    width: 60,
    height: 5,
    position: 'absolute',
    top: 8,
    left: 175,
  },

  image2: {
    width: 80,
    height: 82,
    position: 'absolute',
    top: 25,
    left: 167,
  },
});
