import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'
import { motion } from 'framer-motion'

const LearningProgressChart = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')

    // Create gradient for the line
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(15, 23, 42, 0.3)')
    gradient.addColorStop(1, 'rgba(15, 23, 42, 0.0)')

    // Create gradient for the line stroke
    const lineGradient = ctx.createLinearGradient(0, 0, 400, 0)
    lineGradient.addColorStop(0, '#0f172a')
    lineGradient.addColorStop(0.5, '#3b82f6')
    lineGradient.addColorStop(1, '#0d9488')

    const data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
      datasets: [
        {
          label: 'Mastery Score',
          data: [65, 72, 78, 75, 82, 88, 85, 91],
          borderColor: lineGradient,
          backgroundColor: gradient,
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#0f172a',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: '#3b82f6',
          pointHoverBorderColor: '#ffffff',
        },
        {
          label: 'Transfer Score',
          data: [40, 45, 42, 48, 52, 55, 50, 58],
          borderColor: '#dc2626',
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#dc2626',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: '#ef4444',
          pointHoverBorderColor: '#ffffff',
        }
      ]
    }

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart'
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
              font: {
                family: 'Inter',
                size: 12,
                weight: '600'
              },
              color: '#475569'
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            usePointStyle: true,
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.y + '%'
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              font: {
                family: 'Inter',
                size: 11
              },
              color: '#94a3b8'
            }
          },
          y: {
            min: 0,
            max: 100,
            grid: {
              color: '#f1f5f9',
              drawBorder: false
            },
            ticks: {
              font: {
                family: 'Inter',
                size: 11
              },
              color: '#94a3b8',
              callback: function(value) {
                return value + '%'
              }
            }
          }
        }
      }
    }

    chartInstance.current = new Chart(ctx, config)

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <canvas ref={chartRef} />
    </div>
  )
}

export default LearningProgressChart