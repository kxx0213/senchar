Ext.application({
	launch : function() {
		var tabPanel = new Ext.create('Ext.TabPanel', {
			fullscreen : true,
			tabBar : {
				docked : 'bottom',  //docked = 탭바가 들어갈 위치
				layout : {
					pack : 'center'
				}
			},
			items : [{
				iconCls : 'info',
				title : 'About'
			},{
				iconCls : 'favarites',
				title : 'Favarites',
				badgeText : '2'
			}]
		});
	}
});