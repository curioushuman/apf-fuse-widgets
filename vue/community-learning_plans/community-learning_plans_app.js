let CommunityLearningPlansListItem = {
    template: '#community-learning_plans_list-item-template'
}

let CommunityLearningPlansList = {
    template: '#community-learning_plans_list-template',
    data() {
        return {
            testitems: [1,2,3,4,5]
        }
    },
    components: {
        'community-learning_plans_list-item': CommunityLearningPlansListItem
    }
}

new Vue({
    el: '#community-learning_plans',
    components: {
        'community-learning_plans_list': CommunityLearningPlansList
    }
});