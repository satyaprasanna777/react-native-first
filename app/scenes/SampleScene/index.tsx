// // import React from 'react';
// // import {
// //   ScrollView,
// //   RefreshControl,
// //   StyleSheet,
// //   Text,
// //   SafeAreaView,
// // } from 'react-native';

// // const wait = timeout => {
// //   return new Promise(resolve => {
// //     setTimeout(resolve, timeout);
// //   });
// // };

// // const SampleScene = () => {
// //   const [refreshing, setRefreshing] = React.useState(false);
// //   const onRefresh = React.useCallback(() => {
// //     setRefreshing(true);

// //     wait(2000).then(() => setRefreshing(false));
// //   }, []);

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <ScrollView
// //         contentContainerStyle={styles.scrollView}
// //         refreshControl={
// //           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
// //         }>
// //         <Text>Pull down to see RefreshControl indicator</Text>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   scrollView: {
// //     flex: 1,
// //     backgroundColor: 'pink',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // export {SampleScene};

// // import React, {Component, Fragment} from 'react';
// // import {SampleButton} from './styledComponents';

// // class SampleScene extends Component {
// //   render() {
// //     return (
// //       <Fragment>
// //         <SampleButton title={'Click Me'} onPress={() => {}} />
// //       </Fragment>
// //     );
// //   }
// // }

// // export {SampleScene};

// import React, {useState, Fragment} from 'react';
// import {
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   Alert,
//   Button,
//   View,
//   Switch,
//   FlatList,
//   ActivityIndicator,
//   TouchableHighlight,
//   RefreshControl,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// import {Modal} from 'react-native-router-flux';

// const wait = timeout => {
//   return new Promise(resolve => {
//     setTimeout(resolve, timeout);
//   });
// };

// const onPressTitle = () => {
//   console.log('title pressed');
//   Alert.alert('clicked');
// };

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d73',
//     title: 'Fourth Item',
//   },
// ];

// const SampleScene = () => {
//   const titleText = useState("Bird's Nest");
//   const bodyText = useState('This is not really a bird nest.');
//   const [onChangeText] = useState('');
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   const createThreeButtonAlert = () =>
//     Alert.alert(
//       'Alert Title',
//       'My Alert Msg',
//       [
//         {
//           text: 'Ask me later',
//           onPress: () => console.log('Ask me later pressed'),
//         },
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//       ],
//       {cancelable: false},
//     );
//   const [modalVisible, setModalVisible] = useState(false);
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);

//     wait(2000).then(() => setRefreshing(false));
//   }, []);

//   return (
//     <Fragment>
//       <Text style={styles.baseText}>
//         <Text style={styles.titleText} onPress={onPressTitle}>
//           {titleText}
//           {'\n'}
//           {'\n'}
//         </Text>
//         <Text numberOfLines={5}>{bodyText}</Text>
//       </Text>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={text => onChangeText(text)}
//         placeholder="satya"
//       />
//       <Button title="Press me" color="black" onPress={createThreeButtonAlert} />
//       <View style={styles.fixToText}>
//         <Button
//           title="Left button"
//           color="pink"
//           onPress={() => Alert.alert('Left button pressed')}
//         />
//       </View>
//       <Switch
//         trackColor={{false: 'red', true: 'blue'}}
//         thumbColor={isEnabled ? 'green' : 'yellow'}
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//         // onPress={() => {
//         //   setModalVisible(true);
//         // }}
//       />
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => (
//           <View style={styles.item}>
//             <Text style={styles.title}>{item.title}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.id}
//       />
//       <ActivityIndicator size="large" />
//       <ActivityIndicator size="small" color="red" />
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>

//               <TouchableHighlight
//                 style={{...styles.openButton, backgroundColor: '#2196F3'}}
//                 onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}>
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           style={styles.openButton}
//           onPress={() => {
//             setModalVisible(true);
//           }}>
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//       <SafeAreaView style={styles.container}>
//         <ScrollView
//           contentContainerStyle={styles.scrollView}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }>
//           <Text>Pull down to see RefreshControl indicator</Text>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   tinyLogo: {
//     width: 100,
//     height: 100,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export {SampleScene};
