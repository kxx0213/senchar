Ext.application({
	launch : function() {
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber',   //Model이 정의하는 것(indexNumber,title)
					type : 'string'
				},{
					name : 'text',
					type : 'string'
				}]
			}
		});
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1',
				text : '남'
			},{
				indexNumber : '2',
				text : '여'
			}]
		});
		var formPanel = new Ext.create('Ext.form.FormPanel', {
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					label : '이름',
					clearIcon : true
				},{
					xtype : 'datepickerfield',
					value : date,
					dateFormat : 'Y/m/d', // 밖의 값
					name : 'birthday',
					placeHalder : 'yyyy/mm/dd',
					label : '생년월일',
					picker : {
						useTitles : true, //픽커 타이틀
						dayText : '일',
						monthText : '월',
						yearText : '년',
						slotOrder : ['year', 'month', 'day']  //안에 있는 값.
					}
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					label : '군필여부',
					value : true
				},{
					xtype : 'spinnerfield',
					name : 'career',
					label : '경력',
					minvalue : 0,
					maxvalue : 100,
					increment : 1,
					value : 10
				},{
					layout : {
						type : 'hbox'
					},
					width : '100%',
					items : [{
						xtype : 'selectfield',
						name : 'gender',
						label : '성별',
						store : genderStore
					},{
						xtype : 'numberfield',
						name : 'age',
						label : '나이',
						value : 22
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					label : '이메일',
					placeHalder : 'test@test.com',
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					label : '홈페이지'
				},{
					xtype : 'sliderfield',
					name : 'pay',
					label : '희망연봉',
					value : 50,
					max : 100
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function() {
							//console.log(Ext.ComponentQuery.query('emailfield')[0]);
							var loadValues = formPanel.getValues();
							var name = loadValues.name; //name : 'name'으로 불러온다.
							var name = loadValues.name; 
							var name = loadValues.name; 
							var name = loadValues.name; 
							var name = loadValues.name; 
							var name = loadValues.name; 
							var name = loadValues.name; 
							var name = loadValues.name; 
							//지금은 formPanel을 선언했기때문에 name값으로 가져올 수 있지만.
							//formPanel이 없을 경우에는 ID값으로 가져와야한다.
						}
					},{
						xtype : 'spacer',
						width : 50
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function() {
							formPanel.reset(); //리셋~~!
						}
					}]
				}]//end fieldset items
			}] //end formPanel Items
		});//end formPanel
	}//end launch function
});