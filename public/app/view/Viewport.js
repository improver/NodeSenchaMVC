Ext.define('Myapp.view.Viewport', {
    extend: 'Ext.tab.Panel',
        
    config: {
        fullscreen: true,
        
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        defaults: {
            scrollable: true
        },

        items: [
            {
                title: 'home',
                iconCls: 'home',
                xtype : 'welcomescreen'                 
            },

            {
                title: 'Map',
                iconCls: 'map',
                xtype: 'myMap'
            }
        ]
    }
});
