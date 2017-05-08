window.onload=function() {
	var vizDiv = document.getElementById('viz');
	var options = {
		width: '1400px',
		height: '1000px'
	};
	var vizUrl = "https://public.tableauSoftware.com/views/CountryStrategyDashboard/CountryStrategist";
	viz = new tableauSoftware.Viz(vizDiv, vizUrl, options);
};

function switchView(sheetName) {
	workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}