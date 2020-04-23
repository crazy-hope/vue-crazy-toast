<template>
    <transition-group tag="div" name="fade">
        <div class="crazyToast-mask transitionGroupItem" v-if="show && paramter.mask" key="mask"></div>
        <div
            class="crazyToast transitionGroupItem"
            :class="[
                    !paramter.loading && paramter.position ? paramter.position : 'center',
                    paramter.loading ? 'loading': ''
                ]"
            key="toast"
            v-if="show"
        >
            <div class="iconfont icon-loading" v-if="paramter.loading"></div>
            <div class="title" v-if="paramter.title">{{ paramter.title }}</div>
        </div>
    </transition-group>
</template>

<script>
export default {
    name: 'CrazyToast',

    data() {
        return {
            show: false,
            timer: null,
            defaultParmater: {
                loading: false,
                title: '',
                mask: true,
                autoClose: 3000,
                position: 'center',
                success() {},
                fail() {}
            },
            paramter: {}
        }
    },

    methods: {
        open(options) {
            clearTimeout(this.timer)
            this.paramter = {
                ...this.defaultParmater,
                ...options
            }
            this.show = true
            this.paramter.success && this.paramter.success()
            this.timer = setTimeout(() => {
                this.close()
            }, this.paramter.autoClose || this.defaultParmater.autoClose)
        },
        close() {
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import './assets/iconfont.css';
.crazyToast-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: rgba(255,255,255,0);
}
.crazyToast {
    position: fixed;
    left: 50%;
    z-index: 1000;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(39, 39, 39, 0.1);
    font-size: 16px;
    color: #333333;
    padding: 10px 15px;
    text-align: center;
    max-width: 90%;
    overflow: hidden;
    .title {
        line-height: 1.4em;
        width: 100%;
        overflow: hidden;
    }
    &.loading {
        min-width: 100px;
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        .iconfont {
            display: inline-block;
            font-size: 150%;
            color: #999;
            @keyframes loading {
                0% {
                    transform: rotate(0deg)
                }
                100% {
                    transform: rotate(360deg)
                }
            }
            animation: loading 2s linear infinite;
        }
    }
    &.center {
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &.top {
        top: 30px;
        transform: translate(-50%, 0);
    }
    &.bottom {
        bottom: 30px;
        transform: translate(-50%, 0);
    }
}

.transitionGroupItem {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
