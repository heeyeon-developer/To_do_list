import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {
    return (
    <TodoListBlock>
        <TodoItem text='웹 개발하기' done={true} />
        <TodoItem text='코테 1문제 풀기' done={true} />
        <TodoItem text='운동하기' done={false} />
        <TodoItem text='식단 지키기' done={false} />
    </TodoListBlock>
    )
    
}

export default TodoList
