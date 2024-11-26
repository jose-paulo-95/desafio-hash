const request_URL = Cypress.env('apiUrl');
import "cypress-plugin-api";

const POSTS = '/posts';

function obterPosts() {
  return cy.api({
    method: 'GET',
    url: `${request_URL}${POSTS}`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false,
    timeout: 60000
  });
}

function obterPostPorId(id) {
  return cy.api({
    method: 'GET', 
    url: `${request_URL}${POSTS}/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false,
    timeout: 60000
  });
}

function criarPost(payload) {
  return cy.api({
    method: 'POST',
    url: `${request_URL}${POSTS}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: payload,
    failOnStatusCode: false,
    timeout: 60000
  });
}

function atualizarPost(id, payload) {
  return cy.api({
    method: 'PUT',
    url: `${request_URL}${POSTS}/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: payload,
    failOnStatusCode: false,
    timeout: 60000
  });
}

module.exports = {
  obterPosts,
  obterPostPorId,
  criarPost,
  atualizarPost
};