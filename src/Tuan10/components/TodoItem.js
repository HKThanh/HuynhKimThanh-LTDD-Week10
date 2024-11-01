import { View, Text, Pressable } from "react-native";
import React from "react";

const TodoItem = ({ item, deleteTodo }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item}</Text>
        <Pressable onPress={() => deleteTodo(item)}>
            <Text>Delete</Text>
        </Pressable>
        </View>
    );
};

export default TodoItem;