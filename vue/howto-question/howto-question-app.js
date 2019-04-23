let CommunityLinkFaq = {
    template: '#community-link-faq-template'
}

let CommunityLinkLibrary = {
    template: '#community-link-library-template'
}
let CommunityLink = {
    template: '#community-link-template'
}
let howtoQuestionForm = {
    template: '#howto-question-form-template'
}
let howtoQuestionSuccess = {
    template: '#howto-question-success-template'
}


// main vue instance
new Vue({
    el: '#howto-question',
    components: {
        'community-link-faq': CommunityLinkFaq,
        'community-link-library': CommunityLinkLibrary,
        'community-link': CommunityLink,
        'howto-question-form': howtoQuestionForm,
        'howto-question-success': howtoQuestionSuccess
    }
});