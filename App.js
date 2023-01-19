import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Alert,
  Pressable,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import { useEffect } from "react";
import * as Location from "expo-location";

export default function App() {
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  useEffect(() => {
    async function obterLocalizacao() {
      //Acessando o status da requisição de permissão de uso
      const { status } = await Location.requestForegroundPermissionsAsync();

      //Verificando o status
      if (status !== "granted") {
        Alert.alert(
          "Opa!",
          "Você não autorizou o uso de recursos de localização"
        );
        return;
      }

      //Acessando os dados de geolocalização
      let localizacaoAtual = await Location.getCurrentPositionAsync({});

      //Adicionando os dados ao state
      setMinhaLocalizacao(localizacaoAtual);
    }
    obterLocalizacao();
  }, []);

  console.log(minhaLocalizacao);

  const regiaoInicial = {
    //SP
    latitude: -23.52618,
    longitude: -46.54027,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  /* Usando state para controlar a localização */
  const [localizacao, setLocalizacao] = useState();

  const marcarLocal = (event) => {
    setLocalizacao({
      ...localizacao,
      latitude: minhaLocalizacao.coords.latitude,
      longitude: minhaLocalizacao.coords.longitude,
    });

    console.log(minhaLocalizacao);
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <View style={estilos.botao}>
          <Button title="Onde Estou?" onPress={marcarLocal} />
        </View>
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
    flex: 10,
    width: "100%",
    height: "100%",
  },
  botao: {
    width: "100%",
  },
});
