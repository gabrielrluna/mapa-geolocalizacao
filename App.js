import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} //Só android
          mapType="hybrid" //Satellite, hybrid, standard
          userInterfaceStyle="dark"
          maxZoomLevel={15} //Quanto maior o número, mais perto consigo buscar via zoom.
          minZoomLevel={2} //Quanto maior o número, menos consigo tirar zoom.
        />
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
