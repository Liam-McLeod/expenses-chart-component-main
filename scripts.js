var data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];



// Generate Chart
const ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map((obj) => obj.day),
    datasets: [{
      data: data.map((obj) => obj.amount),
      backgroundColor: ["hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"],
      borderRadius: 5,
      hoverBackgroundColor: "hsl(10, 79%, 75%)",
    }]
  },
  
  options: {
    scales: {
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawTicks: false,
            drawBorder: false,
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          caretSize:0,
          yAlign: "bottom",
          displayColors: false,
          callbacks: {
            title: (e) => `$${e[0].formattedValue}`,
            label: () => null
          },
        },
      }
  }
});
