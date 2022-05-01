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
            data: [7, 3, 7, 5, 12, 13, 10, 19, 13, 15, 19, 14],
            
            
            backgroundColor: [
                '#805b2a'
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
                ticks:{
                    beginAtZero: true,
                    color: 'white',
                    
                }
            },
            x: {
                ticks:{
                    
                    color: 'white',
                    
                }
            }
        }
    }}
        />
    </div>
  )
}
export default BarChart