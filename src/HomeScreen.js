import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from './ImagePath';
import Btn from './Btn';

export default function HomeScreen() {
  const handlePress = () => {
    console.log('Add to calendar');
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.Text1Container}>
          <Text style={styles.Text1}>Power Moms</Text>
          <Image source={ImagePath.formkit} style={styles.imageformkit} />
        </View>
        <View style={styles.Text2Container}>
          <Text style={styles.Text2}>Good Afternoon,</Text>
          <Text style={styles.Text3}>Sarina!</Text>
        </View>
      </View>
      <Text style={styles.upcomingcontainer}>Upcoming Session</Text>
      <View style={styles.bgRectangle}>
        <View style={styles.bgText}>
          <Text style={styles.bgText1}>
            Thursday
            <LinearGradient colors={['#333333', '#333333']}></LinearGradient>
          </Text>
          <View style={styles.liveTag}>
            <Image source={ImagePath.Tag} style={styles.imageTag} />
            <Image source={ImagePath.Group} style={styles.imageGroup} />
          </View>
          <Text style={styles.bgText2}>
            Oct 7th, 2023, 10:00 pm ET
            <LinearGradient colors={['#333333', '#333334']}></LinearGradient>
          </Text>
          <Text style={styles.bgText3}>6 going</Text>
          <Text style={styles.bgText4}>By Aimée Williams</Text>
        </View>
        <View style={styles.btnContainer}>
          <Btn
            label="Add to Calendar"
            onPress={handlePress}
            textColor={'#304F6D'}
          />
          <Btn
            label="Mark RSVP"
            onPress={handlePress}
            backgroundColor="#304F6D"
            textColor="#FFFFFF"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 415,
    height: 199,
    backgroundColor: '#304F6D',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  Text1Container: {
    flex: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 120,
    height: 27,
    top: 42,
    left: 15,
  },

  Text1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'inter',
    fontWeight: '800',
  },
  imageformkit: {
    left: 228

  },


  Text2Container: {
    width: 250,
    height: 48,
    top: 60,
    left: 15,
  },

  Text2: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Alegreya',
    fontWeight: '650',
  },

  Text3: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Alegreya',
    fontWeight: '900',
  },
  upcomingcontainer: {
    width: 343,
    height: 250,
    color: '#4D4D4D',
    fontWeight: '700',
    fontStyle: 'Inter',
    fontSize: 24,
    left: 17,
    top: 12,
  },

  bgRectangle: {
    width: 375,
    height: 254,
    backgroundColor: '#FEF3E7',
    borderRadius: 20,
    marginLeft: 19,
    bottom: 189,
  },
  bgText: {
    height: 190,
    width: 360,
  },
  bgText1: {
    Font: 'Inter',
    fontWeight: '500',
    fontSize: 35,
    lineHeight: 36,
    letterSpacing: 2,
    left: 15,
    top: 20,
  },

  imageTag: {
    left: 185,
    bottom: 8,
  },

  liveTag: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  imageGroup: {
    bottom: 8,
    right: 10,
  },
  bgText2: {
    Font: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    left: 19,
    bottom: 65,
  },
  bgText3: {
    Font: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 15,
    color: '#000000',
    left: 21,
    bottom: 50,
  },
  bgText4: {
    Font: 'Inter',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 25,
    color: '#333333',
    left: 21,
    bottom: 30,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    right: 135,
    bottom: 25,
  },
});
