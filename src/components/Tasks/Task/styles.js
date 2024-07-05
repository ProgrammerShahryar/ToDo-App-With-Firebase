import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#C8E6C9',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A5D6A7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  sTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 5,
  },
  sText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  sModalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  sModalContent: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  sModalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388E3C',
    textAlign: 'center',
  },
  sModalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    marginVertical: 10,
  },
  sModalButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  sModalCloseButton: {
    marginTop: 20,
    backgroundColor: '#388E3C',
    borderRadius: 20,
    padding: 10,
  },
});

export default styles;
