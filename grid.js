Ext.require([
	'Ext.direct.*',
	'Ext.data.*',
	'Ext.grid.*'
	]);
Ext.onReady(function() {

Ext.define('PersonalInfo', {
	extend: 'Ext.data.Model',
	fields: ['id', 'name', 'address', 'state'],
	 
});

	// Create the Grid
	Ext.create('Ext.grid.Panel', {
		store: {
			model: 'PersonalInfo',
			autoload: true,
			proxy: {
				type: 'direct',
			}
		},
		columns: [{
			dataIndex: 'id',
			width: 50,
			text: 'ID'
		},  {
        dataIndex: 'name',
        flex: 1,
        text: 'Name'
    }, {
        dataIndex: 'address',
        flex: 1.3,
        text: 'Address'
    }, {
        dataIndex: 'state',
        flex: 1,
        text: 'State'
    }],
		height: 450,
		width: 700,
		title: 'Velociraptor Owners',
		renderTo: Ext.getBody()
	});
	
});