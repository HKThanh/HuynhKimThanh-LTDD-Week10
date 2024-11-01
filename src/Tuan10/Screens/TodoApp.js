import { View, Text, TextInput, Pressable, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';

const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [text, setText] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_TODOS' });
    }, [dispatch]);

    console.log(todos);

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({
                type: 'ADD_TODO_REQUEST',
                payload: {
                    id: Date.now().toString(),
                    createdAt: new Date().toISOString(),
                    title: text
                },
            });
            setText('');
        }
    }

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
                    onChangeText={setText}
                />
                <Pressable 
                    style={{
                        backgroundColor: 'blue',
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                        width: '80%',
                    }}
                    onPress={handleAdd}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: '700',
                    }}>Add</Text>
                </Pressable>
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default TodoApp;