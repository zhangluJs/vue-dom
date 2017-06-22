<template>
    <div class="footer">
        <div class="footer-main">
            <div class="footer-left">
                <p>Element 1.3.7 Beryllium</p>
                <a href="">反馈建议</a>
                <a href="">贡献指南</a>
                <a href="">Element-React</a>
            </div>
            <div class="footer-right">
                <i class="el-icon-search"></i>
                <i class="el-icon-message"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer {
    width: 100%;
    height: 120px;
    background-color: #324057;
    .footer-main {
        width: 1140px;
        height: 100%;
        margin:  0 auto;
        padding: 0 30px;
    }
    .footer-left {
        float: left;
        font-size: 0;
        padding-top: 40px;
        display: inline-block;
        color: #a4aebd;
        p {
            line-height: 1;
            font-size: 22px;
            margin: 0;
        }
        a {
            display: inline-block;
            margin: 12px 18px 0 0;
            line-height: 1;
            font-size: 12px;
            color: #768193;
            width: initial;
        }
    }
    .footer-right {
        float: right;
        line-height: 120px;
        i {
            transition: .3s;
            display: inline-block;
            line-height: 32px;
            text-align: center;
            color: #8d99ab;
            background-color: transparent;
            width: 32px;
            height: 32px;
            font-size: 32px;
            vertical-align: middle;
            &:nth-of-type(1) {
                margin-right: 36px;
            }
        }
        i:hover {
            color: #fff;
            transform: scale(1.3);
        }
    }
}
</style>
