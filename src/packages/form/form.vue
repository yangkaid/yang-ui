<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'YForm',
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
            },
            rules: {
                type: Object,
            }
        },
        mounted () {
            this.$nextTick(() => {
                console.log('form name',this.$options.componentName);
            })
        },
        methods: {
            resetFileds() {
                this.fileds.forEach(file => {
                    //调用item-input的重置方法
                    file.resetFileds()
                })
            },
            validator() {
                let isValid = true;
                let count = 0;
                this.fileds.forEach(filed => {
                    filed.validate('',err => {
                        if (err) {
                            isValid = false;
                        }
                        count++;
                        if (count === this.fileds.length) {
                            if (callback === 'function') {
                                cb(isValid);
                            }
                        }
                    })
                })
            }
        },
        data() {
            return {
                fileds: []
            }
        },
        created () {
            //初始化的时候缓存form-item
            this.$on('on-form-item-add',(filed) => {
                console.log('form-item-add');
                if (filed) {
                    this.fileds.push(filed);
                }
            })

            //form-item销毁的时候移除
            this.$on('on-form-item-destroy',(filed) => {
                console.log("form-item-destroy");
                if (filed.prop) {
                    this.fileds.splice(this.fileds.indexOf(filed),1);
                }
            })
        },
        
    }
</script>

<style lang="scss" scoped>
@import '../../styles/form.scss'
</style>