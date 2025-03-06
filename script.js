function getRandomTime() {
    return Math.random() * 2000 + 1000; 

function createPromise(name) {
    const time = getRandomTime();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time / 1000);
        }, time);
    });
}

const promise1 = createPromise("Promise 1");
const promise2 = createPromise("Promise 2");
const promise3 = createPromise("Promise 3");

Promise.all([promise1, promise2, promise3]).then((results) => {
    const output = document.getElementById("output");
    output.innerHTML = "";

    const promisesData = [
        { name: "Promise 1", time: results[0] },
        { name: "Promise 2", time: results[1] },
        { name: "Promise 3", time: results[2] },
    ];

    promisesData.forEach((promise) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const timeCell = document.createElement("td");

        nameCell.textContent = promise.name;
        timeCell.textContent = promise.time.toFixed(3);

        row.appendChild(nameCell);
        row.appendChild(timeCell);
        output.appendChild(row);
    });

    const totalTime = Math.max(...results);
    const totalRow = document.createElement("tr");
    const totalNameCell = document.createElement("td");
    const totalTimeCell = document.createElement("td");

    totalNameCell.textContent = "Total";
    totalTimeCell.textContent = totalTime.toFixed(3);

    totalRow.appendChild(totalNameCell);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
});