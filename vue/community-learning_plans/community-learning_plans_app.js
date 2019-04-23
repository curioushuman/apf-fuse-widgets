let CommunityLearningPlansItems = {
    template: '#community-learning_plans_items-template',
    data() {
        return {
            
        }
    },
}

new Vue({
    el: '#community-learning_plans',
    components: {
        'community-learning_plans_items': CommunityLearningPlansItems
    }
});