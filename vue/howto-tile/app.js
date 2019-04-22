// featured item focus vue component
let FeaturedItemFocus = {
    template: '#featured-item-focus-template',
    data() {
        return {
            "learning_plan": {
                title: 'loading...'
            }
        }
    },
    created() {
        // fake api call
        setTimeout(() =>
            this.learning_plan = {
                "id": 10551,
                "title": "An introduction to the APF Learning Community",
                "created_at": "2018-08-26T04:22:09.000Z",
                "updated_at": "2018-08-30T01:32:32.000Z",
                "items": [],
                "progress": 29,
                "thumbnail_url": "http://ganhri.fuseuniversal.com/media/W1siZiIsIjIwMTgvMDgvMzAvMDEvMzIvMzAvMzdmYmNiMGMtNDNiZS00NWJiLWE4NDEtNjZmNThmNzc4MjNhL2xlYXJuaW5nX3BsYW4ucG5nIl0sWyJwIiwidGh1bWIiLCIxNDN4MTA3IyJdXQ?sha=c152fbb77930fb60",
                "thumbnail_2x_url": "http://ganhri.fuseuniversal.com/media/W1siZiIsIjIwMTgvMDgvMzAvMDEvMzIvMzAvMzdmYmNiMGMtNDNiZS00NWJiLWE4NDEtNjZmNThmNzc4MjNhL2xlYXJuaW5nX3BsYW4ucG5nIl0sWyJwIiwidGh1bWIiLCIyODZ4MjE0IyJdXQ?sha=f1976715af708048",
                "thumbnail_3x_url": "http://ganhri.fuseuniversal.com/media/W1siZiIsIjIwMTgvMDgvMzAvMDEvMzIvMzAvMzdmYmNiMGMtNDNiZS00NWJiLWE4NDEtNjZmNThmNzc4MjNhL2xlYXJuaW5nX3BsYW4ucG5nIl0sWyJwIiwidGh1bWIiLCI0Mjl4MzIxIyJdXQ?sha=c7d1685dbb683425",
                "expiration_info": {
                    "expiry_state": "inactive",
                    "expiry_date": null,
                    "deadline_state": "disabled",
                    "deadline_date": null,
                    "reset_date": null
                }
            }, 100
        )

    }
}

// community link vue component
let CommunityLink = {
    template: '#community-link-template',
    data() {
        return {
            communityLinkTestData: 'this is a community test!'
        }
    }
}

new Vue({
    el: '#howto-tile',
    components: {
        'featured-item-focus': FeaturedItemFocus,
        'community-link': CommunityLink
    }
})