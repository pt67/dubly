import React, { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

const [data, setData] = useState();

useEffect(()=>{
 
var dat = JSON.parse(localStorage.getItem('items'));
//console.log(JSON.parse(dat)[0].name);
setData(dat);
 
 
 }, []);
 
console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Added Items</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <div>
       <ul className="list-group">
        
        {data?.map(e=>
        <li className="list-group-item" key={e.name}>{ e.name }</li>
        )}
        
       </ul>
      </div>
    </View>
  );
  
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
