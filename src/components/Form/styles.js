import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderColor: '#ddd',
    borderTopWidth: 1,
    borderRadius: 8,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },
  textbox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 10
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20
  },
  switchLabel: {
    color: '#333',
    fontSize: 16,
    marginRight: 10
  },
  errorMessageContainer: {
    backgroundColor: '#ffe6e6',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ff4d4d',
    borderWidth: 1,
    borderLeftWidth: 8,
    borderRadius: 8
  },
  errorMessageLabel: {
    color: '#ff4d4d',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  errorMessageText: {
    color: '#ff4d4d',
    fontSize: 16
  }
});

export default styles;
