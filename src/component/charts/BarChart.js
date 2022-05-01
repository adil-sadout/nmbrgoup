import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
function BarChart() {
  return (
    <div className='min-vh-50'>
        <Line
        data={{
        labels: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
        datasets: [{
            label: 'Price',
            data: [1, 3, 7, 5, 12, 13, 15, 17, 25, 15, 19, 14],
            backgroundColor: [
                '#18d8d880'
                
            ],
            borderColor: [
                'transparent'
            ],
            tension: 0.5,
            fill:true,
            pointRadius:0
        }]
    
    }}
    options={{
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }}
        />
    </div>
  )
}
export default BarChart