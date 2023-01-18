import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

export default function App() {
  const [local, setLocal] = useState({
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  });

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={local}
          liteMode={false} //Só android
          mapType="satellite" //Satellite, hybrid, standard
          userInterfaceStyle="dark"
          // maxZoomLevel={15} //Quanto maior o número, mais perto consigo buscar via zoom.
          // minZoomLevel={2} //Quanto maior o número, menos consigo tirar zoom.
          onPress={(event) => event.nativeEvent(setLocal)}
        >
          <Marker draggable coordinate={local} title={"Guitarrinha uhu"} />
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});
