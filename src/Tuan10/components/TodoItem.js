import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newItem, setNewItem] = useState(item.title);

    const handleEdit = () => {
        console.log("Editing item:", newItem);
        dispatch({ type: "EDIT_TODO_REQUEST", payload: { ...item, title: newItem } });
        setIsEditing(false);
    }

    return (
        <Pressable onPress={() => setIsEditing(!isEditing)} style={styles.container}>
            <View>
                {isEditing ? (
                    <TextInput
                        value={newItem}
                        onChangeText={setNewItem}
                        style={{
                            width: 300,
                            backgroundColor: isEditing ? "lightgray" : "transparent",
                        }}
                    />
                ) : (
                    <Text>{item.title}</Text>
                )}
            </View>
            {isEditing && (
                <Pressable onPress={handleEdit}>
                    <Text>Save</Text>
                </Pressable>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10
    }
});

export default TodoItem;