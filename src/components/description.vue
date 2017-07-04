<template>
	<div v-html="description">
	</div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'description',
    computed: mapState([
        'description'
    ]),
    // computed: {
    //     description() {
    //         return this.$store.state.description;
    //     }
    // },
    data() {
        return {
        };
    },
    methods: {}
};
</script>
<style scoped>
div {
	width: 450px;
	margin: 0 0 30px;
	float: left;
	color: #1f2d3d;
	line-height: 1.8;
	text-align: left;
	font-size: 22px;
	font-weight: 400;
}
</style>