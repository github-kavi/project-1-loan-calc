let myPieChart; 

function rangeSlide(value, demoId) {
    document.getElementById(demoId).innerHTML = value;
    updateChart(); 
}

let result, total, EMI;

function initializeChart() {
    const pie = document.getElementById('myPieChart').getContext('2d');

    const data = {
        labels: ['Loan Amount', 'Interest Amount', 'Total Amount'],
        datasets: [{
            data: [5000, 1000, 6000], 
            backgroundColor: ['hsla(289, 39.00%, 72.40%, 0.92)', '#9dd4c5', 'rgba(252, 217, 128, 1)']
        }]
    };

    myPieChart = new Chart(pie, {
        type: 'pie',
        data: data
    });
}

function updateChart() {
    const js1 = document.getElementById("myRange1").value;
    const js2 = document.getElementById("myRange3").value;
    const js3 = document.getElementById("myRange2").value;

    result = Math.round(parseInt(js1) * parseInt(js2) / 100 * parseInt(js3));
    total = Math.round(parseInt(js1) + parseInt(result));
    EMI = Math.round(parseInt(total) / (parseInt(js3) * 12));

    // Display values
    document.getElementById("x").textContent = " Interest Rate: " + result;
    document.getElementById("y").textContent = "Total Amount : " + total;
    document.getElementById("z").textContent = "Monthly EMI Amount: " + EMI;

    if (myPieChart) {
        myPieChart.data.datasets[0].data = [js1, result, total];
        myPieChart.update(); 
    }
}

document.getElementById("myRange1").addEventListener('input', function () {
    rangeSlide(this.value, 'demo1');
});
document.getElementById("myRange2").addEventListener('input', function () {
    rangeSlide(this.value, 'demo2');
});
document.getElementById("myRange3").addEventListener('input', function () {
    rangeSlide(this.value, 'demo3');
});

initializeChart();


