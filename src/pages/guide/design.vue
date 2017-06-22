<template>
	<div class="design">
		<div class="design-top">
			<ul>
				<li v-for="(item, index) in design">
					<div>
						<img v-bind:src="item.img" alt="img">
						<p>{{item.title}}</p>
						<span>{{item.annotation}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="design-main">
			<div class="design-item" v-for="(item, index) in design">
				<h3>{{item.title}}&emsp;{{item.annotation}}</h3>
				<ul>
					<li v-for="(itemtext, i) in item.content">
						<strong>{{itemtext.title}}</strong>{{itemtext.text}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    name: 'design',
    data() {
        return {
            design: [{
                title: '一致',
                annotation: 'Consistency',
                content: [
                    {title: '与现实生活一致：', text: '与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'},
                    {title: '在界面中一致：', text: '所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'}
                ],
                img: './static/img/Consistency.png'
            }, {
                title: '反馈',
                annotation: 'Feedback',
                content: [
                    {title: '控制反馈：', text: '通过界面样式和交互动效让用户可以清晰的感知自己的操作；'},
                    {title: '页面反馈：', text: '操作后，通过页面元素的变化清晰地展现当前状态。'}
                ],
                img: './static/img/Feedback.png'
            }, {
                title: '效率',
                annotation: 'Efficiency',
                content: [
                    {title: '简化流程：', text: '设计简洁直观的操作流程；'},
                    {title: '清晰明确：', text: '语言表达清晰且表意明确，让用户快速理解进而作出决策；'},
                    {title: '帮助用户识别：', text: '界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。'}
                ],
                img: './static/img/Efficiency.png'
            }, {
                title: '可控',
                annotation: 'Controllability',
                content: [
                    {title: '用户决策：', text: '根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'},
                    {title: '结果可控：', text: '用户可以自由的进行操作，包括撤销、回退和终止当前操作等。'}
                ],
                img: './static/img/Controllability.png'
            }]
        };
    }
};
</script>
<style lang="less" scoped>
.design-top {
	margin: 30px 0 70px;
	ul {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		-webkit-justify-content: space-around;
    	justify-content: space-around;
	}
	li {
		list-style: none;
		flex: 1;
		padding: 0 7px;
		div {
			background: #fbfcfd;
			height: 204px;
			text-align: center
		}
		img {
			width: 80px;
			height: 80px;
			margin: 40px auto 25px;
		}
		p {
			font-size: 18px;
			color: #1f2d3d;
			font-weight: 400;
			margin: 0;
		}
		span {
			font-size: 14px;
    		color: #99a9bf;
		}
	}
}
.design-item {
	h3 {
		text-align: left;
		font-size: 22px;
		font-weight: 400;
		margin: 0 0 30px;
		color: #1f2d3d;
	}
	ul {
		margin-bottom: 50px;
    	padding-left: 0;
	}
	li {
		text-align: left;
		font-size: 14px;
		margin-bottom: 10px;
		color: #99a9bf;
		list-style: none;
		&:before {
			content: "";
			display: inline-block;
			width: 4px;
			height: 4px;
			border-radius: 50%;
			vertical-align: middle;
			background-color: #5e6d82;
			margin-right: 5px;
		}
		strong {
			color: #5e6d82;
    		font-weight: 400;
		}
	}
}
</style>