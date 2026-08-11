let currentArticleId = '';
let currentCommentId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(article => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`)
    });
  });
  afterEach(() => {
    if (currentCommentId) {
      cy.removeComment(currentCommentId);
      currentCommentId = '';
    }
    cy.removeArticle(currentArticleId);
  });
  // Создали статью - протестили все что нужно - удалили статью
  it('И видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('И видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('И оставляет комментарий', () => {
    cy.intercept('POST', '**/comments').as('addComment');
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.wait('@addComment').then(({ response }) => {
      currentCommentId = response?.body.id;
    });
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('И ставит оценку', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
})
