import { View, Text, TextInput, Pressable, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import { useState, useEffect } from 'react';
import TodoItem from '../components/TodoItem';

const TodoApp = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 26, fontWeight: '700', textAlign: 'center', marginBottom: 20}}>Todo App</Text>
                <TextInput placeholder="Add new todo"
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        width: '80%',
                        padding: 10,
                        borderRadius: 10,
                    }}
                />
                <Pressable style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10,
                    width: '80%',
                }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: '700',
                    }}>Add</Text>
                </Pressable>
            </View>
            <FlatList
                data={[]}
                renderItem={({ item }) => <TodoItem item={item} deleteTodo={() => {}} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default TodoApp;