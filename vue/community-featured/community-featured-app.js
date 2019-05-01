const CommunityLink = {
  template: '#community-link-template',
};

const FeaturedItems = {
  template: '#featured-items-template',
};

new Vue({
  el: '#community-featured',
  components: {
    'community-link': CommunityLink,
    'featured-items': FeaturedItems,
  },
});
