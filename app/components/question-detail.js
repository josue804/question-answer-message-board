import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(question){
      var params = {
        question: question,
        answer: this.get('answer'),
        author: this.get('author')
      };
      this.sendAction('saveAnswer', params);
      this.set('answer', '');
      this.set('author', '');
    }
  }
});
