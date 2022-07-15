/// <reference types="cypress" />


describe('simple example', () => {
  beforeEach(() => {
    cy.visit('https://github.com/search')
  })

  it('搜索 cypress', () => {
    cy.get('.input-block') // 获取输入框
      .type('cypress') // 输入前端开发
      .type('{enter}') // 输入回车键
    cy.get('ul.repo-list > li:first-child a:first-child') // 获取搜搜结果第一项
      .should('have.text', 'cypress-io/cypress') // 校验第一项结果是否为 cypress
  })
})