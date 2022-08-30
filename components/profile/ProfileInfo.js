import React from 'react'
import { Text, View, StyleSheet} from 'react-native';

const ProfileInfo = ({pics, user}) => {
  return (
    <View style={styles.profileInfo}>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>{pics.length}</Text>
        <Text style={styles.infoText}>publications</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>{user.followers}</Text>
        <Text style={styles.infoText}>followers</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>{user.subscriptions}</Text>
        <Text style={styles.infoText}>subscriptions</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  profileInfo: {
    paddingVertical: 7,
    backgroundColor: '#000',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#404040'
  },
  infoItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600'
  }
})
export default ProfileInfo