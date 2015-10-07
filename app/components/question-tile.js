import Ember from 'ember';

export default Ember.Component.extend({
  questionForm: false,

  actions: {
    questionFormShow() {
      this.set('questionForm', true);
    },

    questionFormHide() {
      this.set('questionForm', false);
    },

    saveQuestion() {
      var params = [];
      params = {
        title: this.get('title'),
        author: this.get('author')
      }
      this.set('questionForm', false);
      this.sendAction('saveQuestion', params);
    },

    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    }
  }
});
