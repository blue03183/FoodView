import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
  subTitle: {
    color: '#e2b497',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
