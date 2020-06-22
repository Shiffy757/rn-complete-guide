import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";

import GoalItem from "./components/Goalitem";
import GoalInput from "./componets/Goalinput";

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals((currentGoals) => [ ...courseGoals, { id: Math.random().toString(), value: enteredGoal } ]);
	};
	return (
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
