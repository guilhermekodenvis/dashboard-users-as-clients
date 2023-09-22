const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [{
        label: 'Views',
        data: [12, 19, 3, 5, 2, 3, 6],
        borderWidth: 1,
        backgroundColor: "#b76164",
        barThickness: 8
      },
    {
        label: 'Follows',
        data: [1, 2, 3, 3, 3, 4, 6],
        borderWidth: 1,
        backgroundColor: "#3aa6c2",
        barThickness: 8
    }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            text: ['10k', '20k', '30k', '40k', '50k']
          }
        }
      },
    }
  });
