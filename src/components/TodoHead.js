import React from 'react'
import styled from 'styled-components'

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    height: 15vh;
    h1{
        margin:0;
        font-size: 36px;
        color: #343a40;
    }
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left{
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2020.10.22</h1>
            <div className='day'>Thursday</div>
            <div className='tasks-left'>To do list : 2 / 4</div>
        </TodoHeadBlock>
    )
}

export default TodoHead
