document.addEventListener("DOMContentLoaded", function () {
    // Get references to all five input fields
    const employee = document.getElementById("employee");
    const scannerId = document.getElementById("scannerId");
    const location = document.getElementById("location");
    const status = document.getElementById("status");
    const scanData = document.getElementById("scanData");

    // Add event listener to scandata input for the "keydown" event
    scanData.addEventListener("keydown", function (event) {
        // Check if the pressed key is "Enter" (keyCode 13)
        if (event.keyCode === 13 || event.key === "Enter") {

            // Create an array to store the values of all five inputs
            const values = [
                employee.value,
                scannerId.value,
                location.value,
                status.value,
                scanData.value,
            ];

            // Pass array to dummy function to call web service
            handleEnter(values);

        }
    });
});

function handleEnter(values) {
    console.log("Enter key was pressed");
    console.log("Values of all five inputs:", values);
    addPreviousScanRow(values[4]);
}

// Count of scans taken
let scanCount = 0;

function addPreviousScanRow(scandata) {
    var table = document.getElementById("previousScans").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(0);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    scanCount++;

    cell1.innerHTML = scanCount;
    cell2.innerHTML = new Date().toLocaleString();
    cell3.innerHTML = scandata;
    cell4.innerHTML = "Some Dummy Response";
}






