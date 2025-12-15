import createSettingsStyles from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

const ProgressStats = () => {
  const { colors } = useTheme();

  const settingStyles = createSettingsStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const totalTodo = todos ? todos.length : 0;
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const activeTodos = totalTodo - completedTodos;

  return (
    <View>
      <Text>ProgressStats</Text>
    </View>
  );
};

export default ProgressStats;
