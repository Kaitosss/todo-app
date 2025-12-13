import createHomeStyles from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { Text, View } from "react-native";

const Index = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};
