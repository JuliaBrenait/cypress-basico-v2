/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function () {  
  beforeEach(() => {
    cy.visit('./src/index.html');
  })
  
  it('verifica o título da aplicação', function () {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  })

  it.only('Preenche os campos obrigatórios e envia o formulário', function () {
    cy.get('#firstName').type('Nome')
    cy.get('#lastName').type('Sobrenome')
    cy.get('#email').type('Email@gmail.com')
    cy.get('#open-text-area').type('Sugestão')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')


    })

})

