import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  const [localizacao, setLocalizacao] = useState({
    latitude: -30.52618,
    longitude: -15.54027,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });

    console.log(localizacao);
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          // initialRegion={regiaoInicial}
          region={localizacao ?? regiaoInicial}
          liteMode={false} //Só android
          mapType="satellite" //Satellite, hybrid, standard
          userInterfaceStyle="dark"
          // maxZoomLevel={15} //Quanto maior o número, mais perto consigo buscar via zoom.
          // minZoomLevel={2} //Quanto maior o número, menos consigo tirar zoom.
          onPress={marcarLocal}
        >
          {localizacao && (
            <Marker
              draggable
              coordinate={localizacao}
              title={"Guitarrinha uhu"}
              onPress={(event) => console.log(e.nativeEvent)}
            />
          )}
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
