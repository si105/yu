// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 初始化ECharts图表
  const chartDom = document.getElementById('radarChart')
  const myChart = echarts.init(chartDom)

  // 数据配置（基于调研数据）
  const chartData = {
    provincial: {
      name: '省重点中学',
      color: '#3498db',
      data: [88, 82, 85, 90, 84], // 政策执行力度, 学生满意度, 家长认可度, 教师配合度, 实际效果
      description:
        '省重点中学在双休政策实施方面表现较好，政策执行相对到位，师生家长普遍支持，但仍有提升空间。',
      details: {
        政策执行力度: '88% - 大部分省重点中学能够按要求执行双休政策',
        学生满意度: '82% - 学生普遍欢迎更多休息时间',
        家长认可度: '85% - 多数家长支持减负政策',
        教师配合度: '90% - 教师积极配合政策调整',
        实际效果: '84% - 政策实施效果良好但有待完善',
      },
    },
    county: {
      name: '县域中学',
      color: '#e74c3c',
      data: [45, 38, 42, 35, 40], // 政策执行力度, 学生满意度, 家长认可度, 教师配合度, 实际效果
      description:
        '县域中学在双休政策实施方面面临诸多挑战，执行力度不足，各项指标均需大幅改善。',
      details: {
        政策执行力度: '45% - 许多县域中学仍在变相补课',
        学生满意度: '38% - 学生实际休息时间有限',
        家长认可度: '42% - 家长对减负效果存疑',
        教师配合度: '35% - 教师面临升学压力难以配合',
        实际效果: '40% - 政策落地效果有限',
      },
    },
  }

  // 图表配置选项
  const getOption = type => {
    const data = chartData[type]
    return {
      title: {
        text: `${data.name}政策实施情况`,
        left: 'center',
        top: 20,
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#2c3e50',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `
                        <div style="padding: 10px;">
                            <strong>${params.name}</strong><br/>
                            <span style="color: ${data.color};">●</span> ${data.name}: ${params.value}%<br/>
                            <div style="margin-top: 8px; font-size: 12px; color: #666;">
                                ${data.description}
                            </div>
                        </div>
                    `
        },
      },
      legend: {
        data: [data.name],
        top: 50,
        textStyle: {
          fontSize: 14,
        },
      },
      radar: {
        center: ['50%', '55%'],
        radius: '65%',
        indicator: [
          { name: '政策执行力度', max: 100 },
          { name: '学生满意度', max: 100 },
          { name: '家长认可度', max: 100 },
          { name: '教师配合度', max: 100 },
          { name: '实际效果', max: 100 },
        ],
        name: {
          textStyle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#2c3e50',
          },
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.05)'],
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(114, 172, 209, 0.3)',
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(114, 172, 209, 0.5)',
          },
        },
      },
      series: [
        {
          name: data.name,
          type: 'radar',
          symbol: 'circle',
          symbolSize: 8,
          data: [
            {
              value: data.data,
              name: data.name,
              itemStyle: {
                color: data.color,
              },
              lineStyle: {
                color: data.color,
                width: 3,
              },
              areaStyle: {
                color: data.color,
                opacity: 0.2,
              },
            },
          ],
          animationDuration: 1000,
          animationEasing: 'cubicOut',
        },
      ],
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicOut',
    }
  }

  // 初始化显示省重点中学数据
  let currentType = 'provincial'
  myChart.setOption(getOption(currentType))

  // 按钮点击事件处理
  const provincialBtn = document.getElementById('provincialBtn')
  const countyBtn = document.getElementById('countyBtn')

  function switchChart(type) {
    if (type === currentType) return

    currentType = type

    // 更新按钮状态
    if (type === 'provincial') {
      provincialBtn.classList.add('active')
      countyBtn.classList.remove('active')
    } else {
      provincialBtn.classList.remove('active')
      countyBtn.classList.add('active')
    }

    // 更新图表数据
    myChart.setOption(getOption(type), true)

    // 添加视觉反馈
    const chartContainer = document.getElementById('radarChart')
    chartContainer.style.transform = 'scale(0.95)'
    setTimeout(() => {
      chartContainer.style.transform = 'scale(1)'
    }, 150)
  }

  // 绑定按钮事件
  provincialBtn.addEventListener('click', () => switchChart('provincial'))
  countyBtn.addEventListener('click', () => switchChart('county'))

  // 响应式处理
  window.addEventListener('resize', function () {
    myChart.resize()
  })

  // 图表点击事件
  myChart.on('click', function (params) {
    if (params.componentType === 'radar') {
      // 可以添加更多交互功能
      console.log('雷达图被点击:', params)
    }
  })

  // 鼠标悬停效果
  myChart.on('mouseover', function (params) {
    if (params.componentType === 'series') {
      // 高亮效果已由ECharts自动处理
    }
  })

  // 添加图表加载动画和初始化完成提示
  setTimeout(() => {
    const chartContainer = document.getElementById('radarChart')
    chartContainer.style.opacity = '0'
    chartContainer.style.transform = 'translateY(30px)'
    chartContainer.style.transition = 'all 0.6s ease'

    requestAnimationFrame(() => {
      chartContainer.style.opacity = '1'
      chartContainer.style.transform = 'translateY(0)'
    })
  }, 100)

  // 添加键盘支持
  document.addEventListener('keydown', function (event) {
    if (event.key === '1' || event.key === 'p') {
      switchChart('provincial')
    } else if (event.key === '2' || event.key === 'c') {
      switchChart('county')
    }
  })

  // 提示用户可以使用键盘快捷键
  console.log('💡 提示：您可以使用键盘快捷键切换图表：')
  console.log('  按 "1" 或 "P" 键显示省重点中学数据')
  console.log('  按 "2" 或 "C" 键显示县域中学数据')
})

// 图表主题配置（可选）
const customTheme = {
  color: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'],
  backgroundColor: 'transparent',
  textStyle: {},
  title: {
    textStyle: {
      color: '#2c3e50',
    },
    subtextStyle: {
      color: '#7f8c8d',
    },
  },
}

// 注册自定义主题（如果需要）
if (typeof echarts !== 'undefined') {
  echarts.registerTheme('custom', customTheme)
}
