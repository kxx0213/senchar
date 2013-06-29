Ext.application({
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{

			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'stretch',
				pack : 'start'
			},
			items : [{
				xtype : 'panel',
				style : 'background:red',
				html : 'First'
			},{
				xtype : 'panel',
				style : 'background:blue',
				html : 'Second'
			},{
				xtype : 'panel',
				style : 'background:green',
				html : 'Third'
			},{
				xtype : 'panel',
				style : 'background:yellow',
				html : 'fourth'
			}]
		
		});
	}
});