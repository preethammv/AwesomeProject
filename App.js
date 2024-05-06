import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SimpleTodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodoItems([...todoItems, todoText]);
      setTodoText('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todoItems];
    updatedTodos.splice(index, 1);
    setTodoItems(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        style={styles.list}
        data={todoItems}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
            <TouchableOpacity onPress={() => deleteTodo(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    flex: 1,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default SimpleTodoList;
