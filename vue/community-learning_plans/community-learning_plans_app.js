let CommunityLearningPlansListItem = {
    template: '#community-learning_plans_list-item-template',
    props: {
        name: {
            type: String,
            default: 'Loading...'
        },
        learning_plan_item_id: {
            type: Number,
            default: 0
        }
    },
    computed: {
        buildHref: function () {
            const api_host = window.location.protocol + '//' + window.location.host
            return api_host + 'learning/plans/' + this.learning_plan_item_id
        }
    },
}

let CommunityLearningPlansList = {
    template: '#community-learning_plans_list-template',
    data() {
        return {
            learningPlans: [],
            href_base: ''
        }
    },
    components: {
        'community-learning_plans_list-item': CommunityLearningPlansListItem
    },
    created() {
        // fake api call
        const api_host = window.location.protocol + '//' + window.location.host
        this.learningPlans = data_local.learning_plans
            ;
    },
    computed: {
        learningPlansSorted: function () {
            function compare(a, b) {
                var aTitle = a.title.toLowerCase();
                var bTitle = b.title.toLowerCase();
                return ((aTitle < bTitle) ? -1 : ((aTitle > bTitle) ? 1 : 0));
            }
            return this.learningPlans.sort(compare);
        }
    },
}

new Vue({
    el: '#community-learning_plans',
    components: {
        'community-learning_plans_list': CommunityLearningPlansList
    }
});