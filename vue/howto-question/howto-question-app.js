const CommunityLinkFaq = {
  template: '#community-link-faq-template',
};

const CommunityLinkLibrary = {
  template: '#community-link-library-template',
};
const CommunityLink = {
  template: '#community-link-template',
};
const howtoQuestionForm = {
  template: '#howto-question-form-template',
  data() {
    return {
      question: 'Or ask your question here',
      description:
        'And add any additional information you might have,' +
        'to help us find an answer',
    };
  },
  methods: {
    submitClicked: function() {
      alert(this.question + '\n\n' + this.description);
    },
  },
};
const howtoQuestionSuccess = {
  template: '#howto-question-success-template',
};

// main vue instance
new Vue({
  el: '#howto-question',
  components: {
    'community-link-faq': CommunityLinkFaq,
    'community-link-library': CommunityLinkLibrary,
    'community-link': CommunityLink,
    'howto-question-form': howtoQuestionForm,
    'howto-question-success': howtoQuestionSuccess,
  },
});
