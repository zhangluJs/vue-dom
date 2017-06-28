<template>
	<div>
		<div class="qui-button" v-on:click="btnClickEvent">
			<slot name="icon"></slot><!--重点在这里-->
			<span>{{msg}}</span>
		</div>
		<el-input v-model="input" placeholder="请输入内容" class="text"></el-input>
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
    data() {
        return {
            input: ''
        };
    },
    methods: {
        btnClickEvent() {
			// 触发父组件中的事件（向父组件传递事件）
            // this.$emit('btnClickEvent');
            this.$store.commit('addItems', {text: this.input, active: false});
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
	cursor: pointer;
	float: left;
	margin-top: 3px;
}
.slot {
	width: 20px;
	display: block;
}
.text {
	width: 200px;
	margin-left: 20px;
	float: left;
}
</style>