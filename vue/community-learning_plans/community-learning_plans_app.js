// Vue component for the items in the list
const CommunityLearningPlansListItem = {
  template: '#community-learning_plans_list-item-template',
  props: {
    name: {
      type: String,
      default: 'Loading...',
    },
    learning_plan_item_id: {
      type: Number,
      default: 0,
    },
    focusedLearningPlan: {
      type: String,
    },
    learningPlanItemProgress: {
      type: Number,
    },
    thumbnailUrls: {
      type: Object,
    },
  },
  computed: {
    buildHref: function() {
      const apiHost = window.location.protocol + '//' + window.location.host;
      return apiHost + 'learning/plans/' + this.learning_plan_item_id;
    },
    isFocused: function() {
      return this.name === this.focusedLearningPlan;
    },
    isCompleted: function() {
      return this.learningPlanItemProgress === 100;
    },
    percentNumberLocation: function() {
      if (this.learningPlanItemProgress > 93) {
        return 'left: ' + 93 + '%';
      } else if (this.learningPlanItemProgress > 2) {
        return 'left: ' + (this.learningPlanItemProgress - 4) + '%';
      }
    },
    chooseThumbnail: function() {
      if (this.isFocused) {
        return 'background-image: url(' + this.thumbnailUrls.thumbnail2x + ')';
      } else {
        return 'background-image: url(' + this.thumbnailUrls.thumbnail1x + ')';
      }
    },
    percentBarWidth: function() {
      return 'width: ' + this.learningPlanItemProgress + '%';
    },
  },
};

// vue component for the list of all items
const CommunityLearningPlansList = {
  template: '#community-learning_plans_list-template',
  data() {
    return {
      learningPlans: [],
      focusedLearningPlan: null,
    };
  },
  components: {
    'community-learning_plans_list-item': CommunityLearningPlansListItem,
  },
  created() {
    // fake api call
    this.learningPlans = data_local.learning_plans;
    this.findFocusedLearningPlan;
  },
  computed: {
    learningPlansSorted: function() {
      /**
       * identifies how to sort two learningPlans.
       * @param {object} a The first learningPlan.
       * @param {object} b The second learningPlan.
       * @return {int} The number for sort function.
       */
      function compare(a, b) {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
      }
      return this.learningPlans.sort(compare);
    },
    findFocusedLearningPlan: function() {
      for (let i = 0; i < this.learningPlansSorted.length; i++) {
        if (!this.focusedLearningPlan) {
          const currentLearningPlan = this.learningPlansSorted[i];
          if (currentLearningPlan.progress === 0) {
            this.focusedLearningPlan = currentLearningPlan.title;
            return;
          } else if (
            currentLearningPlan.progress > 0 &&
            currentLearningPlan.progress < 100
          ) {
            this.focusedLearningPlan = currentLearningPlan.title;
            return;
          }
        }
      }
    },
  },
};

// main vue instance
new Vue({
  el: '#community-learning_plans',
  components: {
    'community-learning_plans_list': CommunityLearningPlansList,
  },
});
