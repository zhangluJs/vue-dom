<template>
    <div class="qui-nav">
    	<a
    		v-for="(item, index) in items"
    		v-bind:class="[item.active ? 'activites' : '']"
    		@click="navClickEvent(items, index)"
    		:href="item.src"
    	>{{item.text}}</a>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'quiNav',
    computed: mapState([
        'count'
    ]),
    data() {
        return {
            items: [{
                text: '首页',
                active: true,
                src: '#/main-two'
            }, {
                text: '列表',
                active: false,
                src: '#/main-two/main-two-two'
            }, {
                text: '关于',
                active: false,
                src: '#/main-two/main-two-three'
            }, {
                text: '招聘',
                active: false,
                src: '#/main-two/main-two-four'
            }]
        };
    },
    methods: {
        navClickEvent(items, index) {
            items.forEach(function (el) {
                el.active = false;
            });
            this.items[index].active = true;
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
	float: left;
	text-decoration: none;
}
</style>
