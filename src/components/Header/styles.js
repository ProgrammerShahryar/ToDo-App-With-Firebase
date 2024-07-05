import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#4CAF50',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  author: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default styles;
