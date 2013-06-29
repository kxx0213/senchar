Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function() {
		var button1 = new Ext.create('Ext.Button', { //1,2방법 정도 알고있으면 좋고, 나머지는 그런것도 있구나...하면된다.
			text : '버튼1 비표준방식',
			handler : function() {
				Ext.Msg.alert('메세지', 'handler는 버튼에 특화된 구성옵션');
			}
		});
		var button2 = new Ext.create('Ext.Button', {
			text : '버튼2 표준방식',
			listeners : {   //listeners를 통해서 이벤트 타입을 명시하는 방법
				tap : function() {
					Ext.Msg.alert('메시지2', '표준적인 이벤트 처리방법');
				}
			}
		});
		var button3 = new Ext.create('Ext.Button', {
			text : '버튼3 표준방식-리스너를 별도로 기술',
			ui : 'action'
		});
		button3.addListener(
				'tap',
				function() {
					Ext.Msg.alert('메시지3', '표준적인 이벤트 처리방법: 리스너를 별도');
				}
		);
		var button4 = new Ext.create('Ext.Button', {
			text : '버튼4 표준방식-기타 구성 옵션',
			ui : 'confirm'
		});
		button4.addListener(
				'tap',
				function() {
					Ext.Msg.alert('메시지4', '표준적인 이벤트 처리방법: 기타 구성 옵션'); //(별로쓸일없다)
				},
				this,
				{
					delay : 3000,  //3초 후에 이벤트 처리하라.
					single : true   //이벤트를 딱 한번만 실행해라! 
				}
		);
		var button5 = new Ext.create('Ext.Button', {
			text : '버튼5 표준방식- 기타 구성 옵션 ',
			ui : 'decline',
			listeners : {
				tap : {
					fn : function() {
						Ext.Msg.alert('메시지5', '표준적. 브라우저 차원의 이벤트')
					}
				}
			}
		});
		var rootPanel = new Ext.create('Ext.Panel', {
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [button1,button2,button3,button4,button5]
		});
		Ext.Viewport.add(rootPanel);
	}
});