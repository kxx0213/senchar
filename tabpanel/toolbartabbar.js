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
				iconCls : 'favorites',
				title : 'Favorites',
				badgeText : '2'
			}],
			dockedItems : [{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				items : [{
					xtype : 'button',
					text : 'back'
				},{
					xtype : 'spacer'    //버튼 중간에 영역을 잡아준다.
				},{
					xtype : 'button',
					text : 'home'
				}]
			}]
		});
	}
});