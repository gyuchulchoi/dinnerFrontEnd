<template>
    <sidebar-menu :menu="menu" @toggle-collapse="onToggleCollapse" @item-click="onItemClick" :collapsed="true"/>
</template>

<script>

export default {
    methods : {
        onToggleCollapse : function (collapsed) {
            this.$emit('collapsedChange', collapsed)
        },
        onItemClick : (event, item, node) => {
            console.log(event, item, node)
        }
    },
    data() {
        return {
            menu: [
                {
                    header: true,
                    title: '저녁밥도우미',
                    hiddenOnCollapse: true
                },
                {
                    href: '/',
                    title: '홈',
                    icon: 'fa fa-home'
                },
                {
                    href: '#',
                    title: '식당',
                    icon: 'fa fa-utensils',
                    child: [
                        {
                            href: '/bon',
                            title: '본도시락'
                        },
                        {
                            href: '/bon',
                            title: '김가네'
                        },
                        {
                            href: '/bon',
                            title: '중국집'
                        }
                    ]
                },
                {
                    href: '/',
                    title: '주문확인',
                    icon: 'fa fa-hockey-puck'
                }
            ]
        }
    }
}
</script>