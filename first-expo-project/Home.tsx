import React, { FunctionComponent, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Home: FunctionComponent = () => {
  const [isOpenChatBot, setIsOpenChatBot] = useState(false);

  function toggleChatBot(): void {
    setIsOpenChatBot(!isOpenChatBot);
  }

  return (
    <SafeAreaView>
      <View style={{ position: 'relative' }}>
        <TouchableOpacity
          onPress={toggleChatBot}
          style={{
            padding: 5,
            backgroundColor: '#F7DC6F',
            width: 150,
            borderRadius: 10,
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 100,
          }}
        >
          <Text>
            Open/Close Webview
          </Text>
        </TouchableOpacity>
        <View style={{ width: '100%', height: '100%' }}>
          {isOpenChatBot && <WebView source={{ uri: 'https://www.google.com/' }}/>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;