Ext.application({
	launch : function() {
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [{
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