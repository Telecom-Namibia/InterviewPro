import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Vacancies = () => {
  return (
    <View style={styles.Container}>
      <Text>Vacancies</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  Container:{
    padding:20,
    marginTop:20,
  }
})

export default Vacancies