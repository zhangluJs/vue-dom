<template>
    <div class="nav-box">
        <div class="item" v-for="(item, index) in navList">
            <h3>{{item.title}}</h3>
            <div class="item-left" :class="{'min-width':item.information.length > 0}">
                <p>{{item.presentation}}</p>
            </div>
            <div class="item-right">
                <div class="nav-doms"  v-for="(items, i) in item.information">
                    <img :src="items.img" alt="img">
                    <p>{{items.childTitle}}</p>
                    <span>{{items.childPresentation}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav',
    data() {
        return {
            navList: [{
                title: '导航',
                presentation: `导航可以解决用户在访问页面时：
                                在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。`,
                information: []
            }, {
                title: '选择合适的导航',
                presentation: `选择合适的导航可以让用户在产品的使用过程中非常流畅，相反
                                若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。`,
                information: []
            }, {
                title: '侧栏导航',
                presentation: `可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，
                                如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。`,
                information: [{
                    childTitle: '一级类目',
                    childPresentation: '适用于结构简单的网站：只有一级页面时，不需要使用面包屑。',
                    img: './static/img/nav-img1.png'
                }, {
                    childTitle: '二级类目',
                    childPresentation: '侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。',
                    img: './static/img/nav-img2.png'
                }, {
                    childTitle: '三级类目',
                    childPresentation: '适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。',
                    img: './static/img/nav-img3.png'
                }]
            }, {
                title: '顶部导航',
                presentation: '顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。',
                information: [{
                    childTitle: '',
                    childPresentation: '适用于导航较少，页面篇幅较长的网站。',
                    img: './static/img/nav-img1.png'
                }]
            }]
        };
    }
};
</script>
<style scoped lang="less">
.nav-box {
    .item {
        h3 {
            margin-bottom: 10px;
            font-weight: 400;
            color: #1f2f3d;
            font-size: 28px;
            text-align: left;
            clear: both;
        }
        .item-left {
            float: left;
            text-align: left;
            margin-bottom: 20px;
            p {
                margin: 0 0 15px;
                line-height: 1.6;
                font-size: 14px;
                color: #5e6d82;
            }
        }
        .min-width {
            width: 37.5%;
        }
        .item-right {
            float: left;
            width: 62.5%;
            padding-left: 20px;
            box-sizing: border-box;
            margin-bottom: 20px;
            font-weight: 400;
            color: #1f2f3d;
            img {
                width: 100%;
                margin-bottom: 15px;
            }
            p {
                text-align: left;
            }
            span {
                text-align: left;
                margin-bottom: 50px;
                display: block;
                line-height: 1.6;
                font-size: 14px;
                color: #5e6d82;
            }
        }
    }
}
</style>
