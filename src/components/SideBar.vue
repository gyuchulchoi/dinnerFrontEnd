<template>
    <sidebar-menu :menu="menu" @toggle-collapse="onToggleCollapse" @item-click="onItemClick"/>
</template>

<script>

export default {
    methods: {
        onToggleCollapse : (collapsed) => {
            console.log(collapsed)
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
                    href: '#',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '/charts',
                    title: 'Charts',
                    icon: 'fa fa-chart-area',
                    child: [
                        {
                            href: '/charts/sublink',
                            title: 'Sub Link'
                        }
                    ]
                }
            ]
        }
    }
}
</script>