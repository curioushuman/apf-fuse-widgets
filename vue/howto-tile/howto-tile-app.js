import FeaturedItemFocus from '../components/featured-item-focus.js';
import CommunityLink from '../components/community-link.js';

new Vue({
  el: '#howto-tile',
  components: {
    FeaturedItemFocus,
    CommunityLink,
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
