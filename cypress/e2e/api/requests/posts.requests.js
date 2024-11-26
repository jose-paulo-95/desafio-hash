const request_URL = Cypress.env('apiUrl');
import "cypress-plugin-api";

const POSTS = '/posts';

function getPosts() {
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

function getPostById(id) {
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

function createPost(payload) {
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

function updatePost(id, payload) {
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
  getPosts,
  getPostById,
  createPost,
  updatePost
};