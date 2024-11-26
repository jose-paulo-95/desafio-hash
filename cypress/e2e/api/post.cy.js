import {obterPosts,
  obterPostPorId,
  criarPost,
  atualizarPost } from './requests/posts.requests'

describe('Testes de API Posts', () => {
  it('deve validar a listagem de posts', () => {
    obterPosts().then((response) => {
      // Valida o status HTTP da resposta
      expect(response.status).to.eq(200)
      
      // Valida se a resposta contém uma lista de objetos
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      
      // Valida os campos do primeiro objeto
      const primeiroPost = response.body[0]
      expect(primeiroPost).to.have.all.keys(['userId', 'id', 'title', 'body'])
      
      // Registra os resultados para documentação
      cy.log('Status da resposta:', response.status)
      cy.log('Quantidade de posts:', response.body.length)
      cy.log('Estrutura do primeiro post:', JSON.stringify(primeiroPost, null, 2))
    })
  })

  it('deve validar um post específico', () => {
    obterPostPorId(1).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('deve criar um novo post - BUG', () => {
    const newPost = {
      title: 'Novo Post',
      body: 'Conteúdo do post', 
      userId: 1
    }

    criarPost(newPost).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(newPost)
      
      const postId = response.body.id
      obterPostPorId(postId).then((getResponse) => {
        expect(getResponse.status).to.eq(200)
        expect(getResponse.body).to.include(newPost)
        expect(getResponse.body.id).to.eq(postId)
      })
    })
  })
  it('deve atualizar um post existente - BUG', () => {
    const updatedPost = {
      title: 'Post Atualizado', 
      body: 'Novo conteúdo',
      userId: 1
    }

    atualizarPost(1, updatedPost).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include(updatedPost)
      
      const postId = response.body.id
      
      obterPostPorId(postId).then((getResponse) => {
        expect(getResponse.status).to.eq(200)
        expect(getResponse.body).to.include(updatedPost)
        expect(getResponse.body.id).to.eq(postId)
      })
    })
  })
})