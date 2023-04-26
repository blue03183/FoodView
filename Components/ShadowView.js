import { StyleSheet, View, Platform } from 'react-native';

function ShadowView({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

export default ShadowView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
});
