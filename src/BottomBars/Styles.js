import {StyleSheet} from 'react-native';
import {BottomBarHeight} from './BottomBarConstants';

const Styles = StyleSheet.create({
  emptyBoxStyle: {
    position: 'absolute',
    top: 0,
    bottom: BottomBarHeight,
    left: 0,
    right: 0,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },

  tabBarStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100%',
  },

  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabIconStyle: {
    tintColor: 'red',
    width: 18,
    height: 18,
  },

  tabTitleStyle: {
    fontSize: 12,
  },
});

export default Styles;
