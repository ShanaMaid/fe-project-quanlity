import * as React from 'react';
import { mount } from '@cypress/react' // or @cypress/vue
import { Hello } from './Hello'

describe('Hello', () => {
  it('验证是否渲染了组件', () => {
    mount(<Hello />)
    cy.get('#hello').should('exist')
  })

  it('验证渲染是否正确', () => {
    const name = 'Tom Jerry';
    mount(<Hello name={name} />)
    cy.get('#hello').should('have.text', `Hello, ${name}`)
  })
})