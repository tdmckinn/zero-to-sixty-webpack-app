const chartConfig = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 60, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
}

const unusedChartConfig = {
  u_labels: [
    'Purple',
    'Black',
    'White'
  ],
  u_datasets: [{
    data: [300, 60, 100],
    backgroundColor: [
      '#victory',
      '#victory',
      '#victory'
    ],
    u_hoverBackgroundColor: [
      '#victory',
      '#victory',
      '#victory'
    ]
  }]
}

export { unusedChartConfig }
export default chartConfig
