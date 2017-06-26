<template>
	<div class="qui-button" v-on:click="btnClickEvent">
		<slot name="icon"></slot><!--重点在这里-->
		<span>{{msg}}</span>
	</div>
</template>
<script>
export default {
    name: 'quibutton',
    props: {
        msg: {
            default: '下载'
        }
    },
    methods: {
        btnClickEvent() {
			// 触发父组件中的事件（向父组件传递事件）
            this.$emit('btnClickEvent');
        }
    }
};
</script>
<style scoped>
.qui-button {
	width: 50px;
	height: 30px;
	border-radius: 5px;
	background: #20a0ff;
	color: #fff;
	line-height: 30px;
}
.slot {
	width: 20px;
	display: block;
}
</style>