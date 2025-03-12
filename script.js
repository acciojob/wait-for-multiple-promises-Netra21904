function createPromise(index) {
    const time = (Math.random() * 2 + 1).toFixed(3);
    return new Promise((resolve) => {
        setTimeout(() => resolve({ index: index, time: time }), time * 1000);
    });
}

const promises = [createPromise(1), createPromise(2), createPromise(3)];

setTimeout(() => {
    Promise.all(promises).then((results) => {
        const tbody = document.getElementById("output");
        const loadingRow = document.getElementById("loading");

        if (loadingRow) {
            tbody.removeChild(loadingRow);
        }

        let maxTime = 0;

        results.forEach((result) => {
            maxTime = Math.max(maxTime, parseFloat(result.time));
            const row = document.createElement("tr");
            row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`;
            tbody.appendChild(row);
        });

        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${maxTime.toFixed(3)}</strong></td>`;
        tbody.appendChild(totalRow);
    });
}, 100);  
