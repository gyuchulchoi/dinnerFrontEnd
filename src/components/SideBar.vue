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
                    title: 'Main Navigation',
                    hiddenOnCollapse: true
                },
                {
                    href: '/',
                    title: '홈',
                    icon: 'fa fa-home'
                },
                {
                    href: '/bon',
                    title: '1번링크',
                    icon: 'fa fa-utensils',
                    child: [
                        {
                            href: '/charts/sublink',
                            title: 'Sub Link'
                        }
                    ]
                },
                {
                    href: '/',
                    title: '2번링크',
                    icon: 'fa fa-hockey-puck'
                }
            ]
        }
    }
}
</script>