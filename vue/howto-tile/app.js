// featured item focus vue component
const FeaturedItemFocus = {
  template: '#featured-item-focus-template',
  data() {
    return {
      learning_plan: {
        title: 'loading...',
        progress: 0,
      },
      href: '#',
      background_image_url: '',
    };
  },
  created() {
    // fake api call
    const apiHost = window.location.protocol + '//' + window.location.host;
    const thumbnailUrl = data_local.learning_plan.thumbnail_2x_url.replace(
        'http://',
        'https://'
    );
    this.learning_plan = data_local.learning_plan;
    this.href = apiHost + '/learning/plans/' + data_local.learning_plan.id;
    this.background_image_url = 'url("' + thumbnailUrl + '")';
    this.$emit('update-progress', this.learning_plan.progress > 0);
  },
};

// community link vue component
const CommunityLink = {
  template: '#community-link-template',
  data() {
    return {
      communityLinkTestData: 'this is a community test!',
    };
  },
};

new Vue({
  el: '#howto-tile',
  components: {
    'featured-item-focus': FeaturedItemFocus,
    'community-link': CommunityLink,
  },
  data() {
    return {
      progress: false,
    };
  },
  methods: {
    updateProgress: function(isProgress) {
      this.progress = isProgress;
    },
  },
});
