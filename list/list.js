Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function() {
		//모델정의
		Ext.define('company', {
			extend : 'Ext.data.Model',
			config : {
				fields : ['grade','ban','name']
			}
		});
		
		var companyStore = new Ext.create('Ext.data.Store', {//new 없어도 된다,.
			model : 'company',
			sorters : 'ban',
			data : [{
				grade : '1', ban : '1', name : '홍길동1'
			},{
				grade : '2', ban : '2', name : '홍길동2'
			},{
				grade : '3', ban : '3', name : '홍길동3'
			},{
				grade : '1', ban : '1', name : '홍길동4'
			},{
				grade : '2', ban : '4', name : '홍길동5'
			},{
				grade : '3', ban : '4', name : '홍길동6'
			},{
				grade : '1', ban : '2', name : '홍길동7'
			}],
			grouper : {
				groupFn : function(record) {
					return record.get('ban')[0]+'반 입니다.';  //리턴값 : 그룹할때 타이틀 값!
				}
			}
		});  
		
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [{
				xtype : 'list',
				flex : 1,
				store : companyStore, //데이터를 저장
				itemTpl : '{grade}학년 {ban}반 이름 : {name}', //store에 있는 데이터들을 표현하는 방법
				grouped : true,
				indexBar : true,
				onItemDisclosure : true,
				listeners : {
					itemtap : function(dataList, index, target, record, e, eOpts) { //this(dataList) = list를 의미한다.
						Ext.Msg.alert('Title',record.get('grade')+'학년' + record.get('ban')+'반  이름 : ' + record.get('name'));
					}
				}
			}]
		});
	}
});