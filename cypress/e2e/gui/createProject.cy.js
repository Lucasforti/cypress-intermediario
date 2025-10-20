// Biblioteca faker já instalada anteriormente, é utilizada para gerar dados aleatórios
import { faker } from '@faker-js/faker'
const options = { env: { snapshotOnly: true } }

// Função para criação do projeto
describe('Create Project', options, () => {
// Indica que o login.cy.js deve rodar antes
    beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

// Então, começa a rodar o teste de criar um novo projeto
// Função para criação do projeto
  it('successfully', () => {
// Criando váriavel para utilizá-la posteriormente:
// pré-definições: concatenação do termo project, gerando "uuid" aleatório para o
// name; e 5 palavras aleatórias para a description
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }


    

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})