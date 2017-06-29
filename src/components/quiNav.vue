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
    data() {
        return {};
    },
    methods: {
        navClickEvent(index) {
            this.$store.commit('navClickEvent', index);
        }
    }
};
</script>
<style>
.activites {
	border-bottom: 1px solid #ffcd00;
	color: #ffcd00;
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
