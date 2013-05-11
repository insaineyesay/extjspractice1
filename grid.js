Ext.require([
	'Ext.direct.*',
	'Ext.data.*',
	'Ext.grid.*'
	]);

Ext.define('PersonalInfo', {
	extend: 'Ext.data.Model',
	fields: ['id', 'name', 'address', 'state']
});

Ext.onReady(function() {
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
		}],
		height: 450,
		width: 700,
		title: 'Velociraptor Owners',
		renderTo: Ext.getBody()
	});
});