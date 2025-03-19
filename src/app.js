/* -----------------------------------------------------------------------------
 * Copyright (c) 2023, Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e.V.
 * All rights reserved.

 * For more information please contact:
 * Fraunhofer FOKUS
 * Kaiserin-Augusta-Allee 31
 * 10589 Berlin, Germany
 * https://www.fokus.fraunhofer.de/go/fame
 * famecontact@fokus.fraunhofer.de
 * -----------------------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', function() {
    const url = 'http://localhost:3000/netio';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const outputs = data.Outputs;
        const energyData = outputs.map(output => output.Energy);
        const loadData = outputs.map(output => output.Load);
        const labels = outputs.map(output => output.Name);

        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Energy',
                        data: energyData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Load',
                        data: loadData,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});