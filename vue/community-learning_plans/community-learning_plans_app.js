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
        },
        focusedLearningPlan: {
            type: String
        },
        learningPlanItemProgress: {
            type: Number
        },
        thumbnailUrls: {
            type: Object
        }
    },
    computed: {
        buildHref: function () {
            const api_host = window.location.protocol + '//' + window.location.host
            return api_host + 'learning/plans/' + this.learning_plan_item_id
        },
        isFocused: function () {
            return this.name === this.focusedLearningPlan
        },
        isCompleted: function () {
            return this.learningPlanItemProgress === 100
        },
        percentNumberLocation: function () {            
            if (this.learningPlanItemProgress > 93) {
                return ('left: ' + 93 + '%')
            } else if (this.learningPlanItemProgress > 2) {
                return ('left: ' + (this.learningPlanItemProgress - 4) + '%')
            }
        },
        chooseThumbnail: function () {
            if (this.isFocused) {
                return ('background-image: url(' + this.thumbnailUrls.thumbnail2x)  + ')'
            } else {
                return ('background-image: url(' + this.thumbnailUrls.thumbnail1x) + ')'
            }
        },
        percentBarWidth: function () {
            return 'width: ' + this.learningPlanItemProgress + '%'
        }
    },
}

let CommunityLearningPlansList = {
    template: '#community-learning_plans_list-template',
    data() {
        return {
            learningPlans: [],
            focusedLearningPlan: null
        }
    },
    components: {
        'community-learning_plans_list-item': CommunityLearningPlansListItem
    },
    created() {
        // fake api call
        this.learningPlans = data_local.learning_plans;
        this.findFocusedLearningPlan;
    },
    computed: {
        learningPlansSorted: function () {
            function compare(a, b) {
                var aTitle = a.title.toLowerCase();
                var bTitle = b.title.toLowerCase();
                return ((aTitle < bTitle) ? -1 : ((aTitle > bTitle) ? 1 : 0));
            }
            return this.learningPlans.sort(compare);
        },
        findFocusedLearningPlan: function () {
            for (let i = 0; i < this.learningPlansSorted.length; i++) {
                if (!this.focusedLearningPlan) {
                    const current_learning_plan = this.learningPlansSorted[i];
                    if (current_learning_plan.progress === 0) {
                        this.focusedLearningPlan = current_learning_plan.title
                        return
                    } else if (current_learning_plan.progress > 0 && current_learning_plan.progress < 100) {
                        this.focusedLearningPlan = current_learning_plan.title
                        return
                    }

                }
            }
        }
    },
}

new Vue({
    el: '#community-learning_plans',
    components: {
        'community-learning_plans_list': CommunityLearningPlansList
    }
});