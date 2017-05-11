window.onload=function() {
	var vizDiv = document.getElementById('viz');
	var options = {
		hideTabs: true
	};
	var vizUrl = "https://public.tableauSoftware.com/views/CustomDashboard_2/ProjectDashboard";
	viz = new tableauSoftware.Viz(vizDiv, vizUrl, options);
};

function switchView(sheetName) {
	workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}