import * as React from 'react';
import { mount } from '@cypress/react' // or @cypress/vue
import TodoList from './TodoList'


describe('TodoList', () => {
  it('验证是否渲染了 TodoList 组件', () => {
    mount(<TodoList />)
    cy.get('#to-do-list').should('exist')
  })

  it('验证事项数量是否正确', () => {
    const todos = [
      { text: '吃饭', id: 1 },
      { text: '睡觉', id: 2 },
    ];
    mount(<TodoList todos={todos} />)

    cy.get('#to-do-list li').should('have.length', todos.length)
  })
})