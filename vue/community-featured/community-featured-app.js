const CommunityLink = {
  template: '#community-link-template',
  data() {
    return {
      community: {
        name: 'Loading...',
        description: 'placeholder description',
      },
      href: '#',
    };
  },
  created() {
    const apiHost = window.location.protocol + '//' + window.location.host;
    // let user_current;
    // let community_featured;
    // const community_id_afn = 21387;
    // const community_id_escr = 20250;
    this.community = data_local.community;

    this.href = apiHost + '/communities/' + this.community.id;
  },
};

const FeaturedItems = {
  template: '#featured-items-template',
  data() {
    return {
      learningPlans: [],
      focusedLearningPlan: null,
      href: 'butt',
      apiHost: '',
    };
  },
  created() {
    this.learningPlans = data_local.learning_plans;
    this.apiHost = window.location.protocol + '//' + window.location.host;
    this.findFocusedLearningPlan;
  },
  computed: {
    learningPlansSorted() {
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
    findFocusedLearningPlan() {
      for (let i = 0; i < this.learningPlansSorted.length; i++) {
        if (!this.focusedLearningPlan) {
          const currentLearningPlan = this.learningPlansSorted[i];
          if (currentLearningPlan.progress === 0) {
            this.focusedLearningPlan = currentLearningPlan;
            this.href =
              this.api_host + '/learning/plans/' + currentLearningPlan.id;
            return;
          } else if (
            currentLearningPlan.progress > 0 &&
            currentLearningPlan.progress < 100
          ) {
            this.focusedLearningPlan = currentLearningPlan;
            this.href =
              this.api_host + '/learning/plans/' + currentLearningPlan.id;
            return;
          }
        }
      }
    },
    setThumbnail() {
      const thumbnailUrl = this.focusedLearningPlan.thumbnail_url.replace(
          'http://',
          'https://'
      );
      return 'background-image: url(' + thumbnailUrl + ')';
    },
    percentBarWidth() {
      return 'width: ' + this.focusedLearningPlan.progress + '%';
    },
    percentNumberLocation() {
      if (this.focusedLearningPlan.progress > 85) {
        return 'left: ' + 86 + '%';
      } else if (this.focusedLearningPlan.progress > 15) {
        return 'left: ' + (this.focusedLearningPlan.progress - 12) + '%';
      }
    },
  },
};

new Vue({
  el: '#community-featured',
  components: {
    'community-link': CommunityLink,
    'featured-items': FeaturedItems,
  },
});
