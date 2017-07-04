<template>
    <div class="qui-nav">
    	<a
    		v-for="(item, index) in items"
    		v-bind:class="[item.active ? 'activites' : '']"
    		@click="navClickEvent(index)"
    		:href="item.src"
    	>{{item.text}}</a>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'quiNav',
    computed: mapState([
        'count',
        'items'
    ]),
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     },
    //     items() {
    //         return this.$store.state.items;
    //     }
    // },
    data() {
        return {};
    },
    methods: {
        navClickEvent(index) {
            this.$store.state.items.forEach(function (el) {
                el.active = false;
            });
            this.$store.state.items[index].active = true;
            this.$store.commit('getdescription', index);
        }
    }
};
</script>
<style>
.qui-nav {
    padding: 0 20px;
    float: left;
}
.activites {
    color: #ffcd00;
	border-bottom: 1px solid #ffcd00;
}
a {
	width: 100px;
	line-height: 30px;
	display: block;
	text-decoration: none;
    cursor: pointer;
    color: #20a0ff;
}
</style>
