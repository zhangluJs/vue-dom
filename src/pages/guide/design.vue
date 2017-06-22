<template>
	<div class="design">
		<div class="design-top">
			<!--<ul>
				<li v-for="(item, index) in design">
					<img :src="item.img" alt="img">
					<p>{{item.title}}</p>
					<span>{{item.annotation}}</span>
				</li>
			</ul>-->
			<el-row :gutter="10">
				<el-col :xs="4" :sm="6" :md="8" :lg="9"  v-for="(item, index) in design">
					<div class="grid-content bg-purple-light">
						<img :src="item.img" alt="img">
						<p>{{item.title}}</p>
						<span>{{item.annotation}}</span>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
export default {
    name: 'design',
    data() {
        return {
            design: [{
                title: '一致性',
                annotation: 'Consistency',
                content: [
                    '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
                    '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
                ],
                img: '../asset/download.png'
            }]
        };
    }
};
</script>
<style lang="less" scoped>
.design-top {
	li {
		width: 
	}
}
</style>