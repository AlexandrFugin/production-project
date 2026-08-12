export const addComment = (text: string) => {
  cy.getByTestId('AddCommentForm.Input').type(text);
  cy.getByTestId('AddCommentForm.Button').click();
};

export const removeComment = (commentId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/comments/${commentId}`,
    headers: { Authorization: 'dvfdvd' },
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
      removeComment(commentId: string): Chainable<void>;
    }
  }
}
