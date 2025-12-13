import createHomeStyles from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import LoadingSpin from "@/components/LoadingSpin";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);

  const isLoading = todos === undefined;

  if (isLoading) return <LoadingSpin />;

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TodoInput />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Index;
