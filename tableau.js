window.onload=function() {
	var vizDiv = document.getElementById('viz');
	var options = {
	};
	var vizUrl = "https://public.tableauSoftware.com/views/CountryStrategyDashboard/CountryStrategist";
	viz = new tableauSoftware.Viz(vizDiv, vizUrl, options);
};

function switchView(sheetName) {
	var modalViz = document.getElementById('modal-viz');
	var options = {
	};
	var vizUrl = "https://public.tableauSoftware.com/views/CountryStrategyDashboard/CountryStrategist";
	newViz = new tableauSoftware.Viz(modalViz, vizUrl, options);
	document.modalViz.onload=function() {
		workbook = newViz.getWorkbook();
		workbook.activateSheetAsync(sheetName);
	}	
}