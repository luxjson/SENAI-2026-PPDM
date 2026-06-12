import { Dimensions, ScrollView, Text, View, StyleSheet } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window");

const dadosLinha = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"], 
  datasets: [{ data: [65, 66, 68, 77, 50, 40] }],
};


const dadosPizza = [
  {
    name: "Jd Paulista",
    temp: 18,
    color: "#6C5CE7", 
    legendFontColor: "#A0AEC0",
    legendFontSize: 12,
  },
  {
    name: "Portal Nobres",
    temp: 20,
    color: "#00CEC9", 
    legendFontColor: "#A0AEC0",
    legendFontSize: 12,
  },
  {
    name: "Três Pontes",
    temp: 15,
    color: "#FF7675", 
    legendFontColor: "#A0AEC0",
    legendFontSize: 12,
  },
  {
    name: "Alto Boa Vista",
    temp: 15,
    color: "#FAB1A0", 
    legendFontColor: "#A0AEC0",
    legendFontSize: 12,
  },
];


const chartConfig = {
  backgroundColor: "#1A202C",
  backgroundGradientFrom: "#1A202C",
  backgroundGradientTo: "#2D3748",
  decimalPlaces: 0, 
  color: (opacity = 1) => `rgba(108, 92, 231, ${opacity})`, 
  labelColor: (opacity = 1) => `rgba(160, 174, 192, ${opacity})`, 
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#00CEC9", 
  },
};

export default function Dashboard() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Estação Meteorológica SESI</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Últimas Medições</Text>
        <View style={styles.row}>
          <Text style={styles.textData}>12/06/2026</Text>
          <Text style={styles.textValue}>25ºC</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textData}>11/06/2026</Text>
          <Text style={styles.textValue}>22ºC</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={styles.textData}>12/06/2026</Text>
          <Text style={styles.textValue}>60% UR</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textData}>11/06/2026</Text>
          <Text style={styles.textValue}>80% UR</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Acompanhe em Tempo Real</Text>

        <LineChart
          data={dadosLinha}
          width={width - 64} 
          height={220}
          chartConfig={chartConfig}
          bezier 
          style={styles.chart}
        />
        
        <Text style={[styles.cardTitle, { marginTop: 24 }]}>Bairros de Mirandópolis</Text>

        <PieChart
          data={dadosPizza}
          width={width - 64}
          height={220}
          chartConfig={chartConfig}
          accessor="temp"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute 
        />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A", 
  },
  contentContainer: {
    padding: 20,
    paddingTop: 60, 
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#1E293B", 
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, 
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E2E8F0",
    marginBottom: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "between", 
    alignItems: "center",
    marginBottom: 8,
  },
  textData: {
    color: "#94A3B8",
    fontSize: 14,
    flex: 1,
  },
  textValue: {
    color: "#38BDF8", 
    fontSize: 14,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 12,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 12,
  },
});