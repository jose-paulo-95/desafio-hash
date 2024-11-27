import {getPosts,
  getPostById,
  createPost,
  updatePost } from './requests/posts.requests'

describe('API Posts Tests', () => {
  it('should validate the list of posts', () => {
    getPosts().then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      const firstPost = response.body[0]
      expect(firstPost).to.have.all.keys(['userId', 'id', 'title', 'body'])
      cy.log('Response status:', response.status)
      cy.log('Number of posts:', response.body.length)
      cy.log('First post structure:', JSON.stringify(firstPost, null, 2))
    })
  })

  it('should validate a specific post', () => {
    getPostById(1).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('should create a new post - BUG', () => {
    const newPost = {
      title: 'New Post',
      body: 'Post content', 
      userId: 1
    }

    createPost(newPost).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include(newPost)
      
      const postId = response.body.id
      getPostById(postId).then((getResponse) => {
        expect(getResponse.status).to.eq(200)
        expect(getResponse.body).to.include(newPost)
        expect(getResponse.body.id).to.eq(postId)
      })
    })
  })
  it('should update an existing post - BUG', () => {
    const updatedPost = {
      title: 'Updated Post', 
      body: 'New content',
      userId: 1
    }

    updatePost(1, updatedPost).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include(updatedPost)
      
      const postId = response.body.id
      
      getPostById(postId).then((getResponse) => {
        expect(getResponse.status).to.eq(200)
        expect(getResponse.body).to.include(updatedPost)
        expect(getResponse.body.id).to.eq(postId)
      })
    })
  })
})