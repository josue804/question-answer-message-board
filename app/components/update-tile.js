import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,

  actions: {
    updateFormShow() {
      this.set('updateForm', true);
    },

    updateFormHide() {
      window.location.reload(true);
    },

    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author')
      };
      this.set('updateForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
