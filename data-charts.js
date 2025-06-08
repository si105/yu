// 数据图表JavaScript文件
document.addEventListener('DOMContentLoaded', function () {
  // 图表1：四川不同地区家长对于双休政策的观点对比（柱状图）
  function initRegionOpinionChart() {
    const chartDom = document.getElementById('regionOpinionChart')
    const myChart = echarts.init(chartDom)

    const option = {
      title: {
        text: '地区观点对比',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: '#2c3e50',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['支持双休', '反对双休'],
        top: 30,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['成都', '攀枝花', '绵阳'],
        axisLabel: {
          fontSize: 12,
          color: '#2c3e50',
        },
      },
      yAxis: {
        type: 'value',
        name: '支持率(%)',
        max: 100,
        axisLabel: {
          fontSize: 12,
          color: '#2c3e50',
        },
      },
      series: [
        {
          name: '支持双休',
          type: 'bar',
          data: [40, 35, 50],
          itemStyle: {
            color: '#74b9d3',
          },
          barWidth: '30%',
        },
        {
          name: '反对双休',
          type: 'bar',
          data: [28, 38, 23],
          itemStyle: {
            color: '#f29c9c',
          },
          barWidth: '30%',
        },
      ],
    }

    myChart.setOption(option)
    return myChart
  }

  // 图表2：成都小学一年级班级家庭结构分布（饼图）
  function initFamilyStructureChart() {
    const chartDom = document.getElementById('familyStructureChart')
    const myChart = echarts.init(chartDom)

    const option = {
      title: {
        text: '成都小学一年级班级家庭结构分布',
        left: 'center',
        textStyle: {
          fontSize: 14,
          color: '#2c3e50',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}% ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        bottom: 20,
        data: ['二胎家庭', '一胎家庭', '其他家庭'],
      },
      series: [
        {
          name: '家庭结构',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {c}%',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold',
            },
          },
          data: [
            {
              value: 50.8,
              name: '二胎家庭',
              itemStyle: { color: '#f29c9c' },
            },
            {
              value: 35.5,
              name: '一胎家庭',
              itemStyle: { color: '#74b9d3' },
            },
            {
              value: 13.7,
              name: '其他家庭',
              itemStyle: { color: '#f4d03f' },
            },
          ],
        },
      ],
    }

    myChart.setOption(option)
    return myChart
  }

  // 图表3：2019-2022年教育经费投入趋势（折线图）
  function initEducationInvestmentChart() {
    const chartDom = document.getElementById('educationInvestmentChart')
    const myChart = echarts.init(chartDom)

    const option = {
      title: {
        text: '教育经费投入趋势',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: '#2c3e50',
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          return (
            params[0].name +
            '年<br/>' +
            params[0].seriesName +
            ': ' +
            params[0].value +
            '亿元'
          )
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2019', '2020', '2021', '2022'],
        axisLabel: {
          fontSize: 12,
          color: '#2c3e50',
        },
      },
      yAxis: {
        type: 'value',
        name: '投入金额(亿元)',
        axisLabel: {
          fontSize: 12,
          color: '#2c3e50',
        },
      },
      series: [
        {
          name: '教育经费投入',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [2650, 2680, 2816.91, 2950],
          itemStyle: {
            color: '#5dade2',
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(93, 173, 226, 0.8)' },
                { offset: 1, color: 'rgba(93, 173, 226, 0.1)' },
              ],
            },
          },
        },
      ],
    }

    myChart.setOption(option)
    return myChart
  }

  // 图表4：不同收入家庭教育支出占比（组合柱状图）
  function initIncomeEducationChart() {
    const chartDom = document.getElementById('incomeEducationChart')
    const myChart = echarts.init(chartDom)

    const option = {
      title: {
        text: '不同收入家庭教育支出分析',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: '#2c3e50',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      legend: {
        data: ['年均教育支出(元)', '教育支出占比(%)'],
        top: 30,
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '低收入户\n(20%)',
            '中低收入户\n(20%)',
            '中等收入户\n(20%)',
            '中高收入户\n(20%)',
            '高收入户\n(20%)',
          ],
          axisPointer: {
            type: 'shadow',
          },
          axisLabel: {
            fontSize: 11,
            color: '#2c3e50',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '年均教育支出(元)',
          min: 0,
          max: 30000,
          position: 'left',
          axisLabel: {
            formatter: '{value}',
            color: '#2c3e50',
          },
        },
        {
          type: 'value',
          name: '教育支出占比(%)',
          min: 0,
          max: 20,
          position: 'right',
          axisLabel: {
            formatter: '{value}%',
            color: '#2c3e50',
          },
        },
      ],
      series: [
        {
          name: '年均教育支出(元)',
          type: 'bar',
          yAxisIndex: 0,
          data: [3200, 5800, 9500, 15000, 28500],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' },
            ]),
          },
          barWidth: '50%',
        },
        {
          name: '教育支出占比(%)',
          type: 'line',
          yAxisIndex: 1,
          data: [8.5, 10.2, 12.1, 14.3, 16.0],
          itemStyle: {
            color: '#e74c3c',
          },
          lineStyle: {
            width: 3,
          },
          symbol: 'circle',
          symbolSize: 8,
        },
      ],
    }

    myChart.setOption(option)
    return myChart
  }

  // 图表5：政策核心目标SmartArt风格图表
  function initPolicyGoalsChart() {
    const chartDom = document.getElementById('policyGoalsChart')
    if (!chartDom) return null

    const myChart = echarts.init(chartDom)

    // 定义目标数据
    const goalsData = [
      {
        name: '政策核心目标',
        x: 300,
        y: 50,
        symbolSize: 80,
        itemStyle: {
          color: '#3498db',
        },
        label: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      {
        name: '减轻学生\n课业负担',
        x: 100,
        y: 200,
        symbolSize: 120,
        itemStyle: {
          color: '#e74c3c',
        },
        label: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      },
      {
        name: '促进学生\n全面发展',
        x: 500,
        y: 200,
        symbolSize: 120,
        itemStyle: {
          color: '#2ecc71',
        },
        label: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      },
      {
        name: '推动\n教育公平',
        x: 100,
        y: 350,
        symbolSize: 120,
        itemStyle: {
          color: '#f39c12',
        },
        label: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      },
      {
        name: '优化\n教育生态',
        x: 500,
        y: 350,
        symbolSize: 120,
        itemStyle: {
          color: '#9b59b6',
        },
        label: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      },
    ]

    // 定义连接线
    const linksData = [
      { source: 0, target: 1 },
      { source: 0, target: 2 },
      { source: 0, target: 3 },
      { source: 0, target: 4 },
    ]

    const option = {
      title: {
        text: '双休政策核心目标体系',
        left: 'center',
        top: 10,
        textStyle: {
          fontSize: 18,
          color: '#2c3e50',
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const descriptions = {
            '减轻学生\n课业负担':
              '通过取消晚自习和压缩学习时间，减少学生的学习压力，保障其身心健康',
            '促进学生\n全面发展':
              '鼓励学生在双休日参与体育、艺术、社会实践等活动，提升综合素质',
            '推动\n教育公平':
              '通过减少校外补课需求，缩小城乡教育资源差距，促进教育公平',
            '优化\n教育生态':
              '从"时间竞争"转向"质量竞争"，推动教育从"工业化"向"人性化"转型',
          }

          if (descriptions[params.name]) {
            return `<div style="max-width: 300px; padding: 10px;">
                            <strong>${params.name.replace(
                              '\n',
                              ' '
                            )}</strong><br/>
                            <div style="margin-top: 8px; font-size: 12px; line-height: 1.4;">
                                ${descriptions[params.name]}
                            </div>
                        </div>`
          }
          return params.name
        },
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 60,
          roam: false,
          label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: 11,
            fontWeight: 'bold',
            formatter: '{b}',
          },
          lineStyle: {
            color: '#bdc3c7',
            width: 3,
            type: 'solid',
          },
          data: goalsData,
          links: linksData,
          emphasis: {
            focus: 'adjacency',
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 3,
            },
            lineStyle: {
              width: 5,
              color: '#3498db',
            },
          },
          animationDuration: 1500,
          animationEasing: 'cubicOut',
        },
      ],
    }

    myChart.setOption(option)
    return myChart
  }

  // 图表6：荣县高中与温江高中对比雷达图
  function initComparisonRadarChart() {
    const chartDom = document.getElementById('comparisonRadarChart')
    if (!chartDom) return null

    const myChart = echarts.init(chartDom)

    // 雷达图数据
    const indicatorData = [
      { name: '政策执行度', max: 100 },
      { name: '学生满意度', max: 100 },
      { name: '家长支持率', max: 100 },
      { name: '教师配合度', max: 100 },
      { name: '实际效果', max: 100 },
    ]

    const wenjiangData = [100, 85, 90, 92, 88]
    const rongxianData = [20, 35, 45, 30, 25]

    let currentSchool = 'wenjiang'

    function getOption(school) {
      const isWenjiang = school === 'wenjiang'
      const data = isWenjiang ? wenjiangData : rongxianData
      const color = isWenjiang ? '#3498db' : '#e74c3c'
      const schoolName = isWenjiang ? '温江高中' : '荣县中学'

      return {
        title: {
          text: `${schoolName}双休政策执行情况`,
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 18,
            color: '#2c3e50',
            fontWeight: 'bold',
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (params.componentType === 'radar') {
              const indicators = [
                '政策执行度',
                '学生满意度',
                '家长支持率',
                '教师配合度',
                '实际效果',
              ]
              let result = `<div style="padding: 10px;"><strong>${schoolName}</strong><br/>`
              params.value.forEach((value, index) => {
                result += `${indicators[index]}: ${value}%<br/>`
              })
              result += '</div>'
              return result
            }
          },
        },
        radar: {
          indicator: indicatorData,
          center: ['50%', '55%'],
          radius: '65%',
          axisName: {
            color: '#2c3e50',
            fontSize: 12,
            fontWeight: 'bold',
          },
          splitLine: {
            lineStyle: {
              color: '#bdc3c7',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#bdc3c7',
            },
          },
          splitArea: {
            areaStyle: {
              color: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)'],
            },
          },
        },
        series: [
          {
            name: schoolName,
            type: 'radar',
            data: [
              {
                value: data,
                name: schoolName,
                areaStyle: {
                  color: color,
                  opacity: 0.3,
                },
                lineStyle: {
                  color: color,
                  width: 3,
                },
                itemStyle: {
                  color: color,
                  borderColor: '#fff',
                  borderWidth: 2,
                },
              },
            ],
            emphasis: {
              areaStyle: {
                opacity: 0.5,
              },
              lineStyle: {
                width: 4,
              },
            },
            animationDuration: 1000,
            animationEasing: 'cubicOut',
          },
        ],
      }
    }

    // 初始显示温江高中数据
    myChart.setOption(getOption(currentSchool))

    // 按钮切换功能
    const wenjiangBtn = document.getElementById('wenjiangBtn')
    const rongxianBtn = document.getElementById('rongxianBtn')
    const wenjiangDesc = document.getElementById('wenjiangDesc')
    const rongxianDesc = document.getElementById('rongxianDesc')

    function switchSchool(school) {
      if (school === currentSchool) return

      currentSchool = school
      myChart.setOption(getOption(school))

      // 更新按钮状态
      if (school === 'wenjiang') {
        wenjiangBtn.classList.add('active')
        rongxianBtn.classList.remove('active')
        wenjiangDesc.classList.add('active')
        rongxianDesc.classList.remove('active')
      } else {
        rongxianBtn.classList.add('active')
        wenjiangBtn.classList.remove('active')
        rongxianDesc.classList.add('active')
        wenjiangDesc.classList.remove('active')
      }
    }

    // 添加事件监听器
    if (wenjiangBtn && rongxianBtn) {
      wenjiangBtn.addEventListener('click', () => switchSchool('wenjiang'))
      rongxianBtn.addEventListener('click', () => switchSchool('rongxian'))

      // 键盘快捷键支持
      document.addEventListener('keydown', function (event) {
        if (event.key === '1' || event.key.toLowerCase() === 'w') {
          switchSchool('wenjiang')
        } else if (event.key === '2' || event.key.toLowerCase() === 'r') {
          switchSchool('rongxian')
        }
      })
    }

    return myChart
  }

  // 图表7：全国各省2024年本科录取率地图
  function initChinaMapChart() {
    const chartDom = document.getElementById('chinaMapChart')
    if (!chartDom) return null

    const myChart = echarts.init(chartDom)

    // 各省本科录取率数据（根据图片数据整理）
    // 将数据设为全局，确保tooltip能访问
    window.chinaProvinceData = [
      { name: '浙江', value: 50.0 },
      { name: '天津', value: 65.7 },
      { name: '安徽', value: 35.3 },
      { name: '江苏', value: 47.1 },
      { name: '四川', value: 30.0 },
      { name: '福建', value: 54.9 },
      { name: '江西', value: 36.3 },
      { name: '河北', value: 36.4 },
      { name: '山东', value: 43.0 },
      { name: '广东', value: 40.0 },
      { name: '湖北', value: 46.0 },
      { name: '北京', value: 76.7 },
      { name: '重庆', value: 64.0 },
      { name: '湖南', value: 35.4 },
      { name: '云南', value: 43.0 },
      { name: '山西', value: 40.0 },
      { name: '上海', value: 79.2 },
      { name: '河南', value: 34.2 },
      { name: '贵州', value: 35.5 },
      { name: '陕西', value: 46.0 },
      { name: '广西', value: 36.4 },
      { name: '甘肃', value: 56.2 },
      { name: '辽宁', value: 66.0 },
      { name: '内蒙古', value: 58.0 },
      { name: '黑龙江', value: 57.0 },
      { name: '吉林', value: 60.0 },
      { name: '青海', value: 54.0 },
      { name: '西藏', value: 43.0 },
      { name: '新疆', value: 69.0 },
      { name: '宁夏', value: 51.0 },
      { name: '海南', value: 56.2 },
    ]

    // 需要引入中国地图
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
      .then(response => response.json())
      .then(geoJson => {
        echarts.registerMap('china', geoJson)

        const option = {
          title: {
            text: '2024年全国各省本科录取率分布',
            left: 'center',
            top: 20,
            textStyle: {
              fontSize: 18,
              color: '#2c3e50',
              fontWeight: 'bold',
            },
          },
          tooltip: {
            show: true,
            trigger: 'item',
            backgroundColor: 'rgba(255,255,255,0.98)',
            borderColor: '#ddd',
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.1)',
            textStyle: {
              color: '#333',
              fontSize: 14,
            },
            extraCssText:
              'box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px;',
            formatter: function (params) {
              console.log(
                '🐛 Tooltip triggered:',
                params.name,
                'Data:',
                params.data
              )

              // 省份名称映射表，处理地图JSON与我们数据的名称差异
              const nameMapping = {
                北京市: '北京',
                天津市: '天津',
                上海市: '上海',
                重庆市: '重庆',
                河北省: '河北',
                山西省: '山西',
                辽宁省: '辽宁',
                吉林省: '吉林',
                黑龙江省: '黑龙江',
                江苏省: '江苏',
                浙江省: '浙江',
                安徽省: '安徽',
                福建省: '福建',
                江西省: '江西',
                山东省: '山东',
                河南省: '河南',
                湖北省: '湖北',
                湖南省: '湖南',
                广东省: '广东',
                广西壮族自治区: '广西',
                海南省: '海南',
                四川省: '四川',
                贵州省: '贵州',
                云南省: '云南',
                西藏自治区: '西藏',
                陕西省: '陕西',
                甘肃省: '甘肃',
                青海省: '青海',
                宁夏回族自治区: '宁夏',
                新疆维吾尔自治区: '新疆',
                内蒙古自治区: '内蒙古',
              }

              // 获取标准化的省份名称
              let provinceName = params.name
              if (nameMapping[params.name]) {
                provinceName = nameMapping[params.name]
              }

              // 多种方式查找数据
              let data = params.data

              // 方式1：直接从params.data获取
              if (!data || typeof data.value === 'undefined') {
                // 方式2：从全局数据中按标准化名称查找
                if (window.chinaProvinceData) {
                  data = window.chinaProvinceData.find(
                    item => item.name === provinceName
                  )
                  console.log('🔍 按标准名称查找:', provinceName, data)
                }
              }

              // 方式3：如果还是找不到，尝试模糊匹配
              if (!data || typeof data.value === 'undefined') {
                if (window.chinaProvinceData) {
                  data = window.chinaProvinceData.find(
                    item =>
                      params.name.includes(item.name) ||
                      item.name.includes(params.name.replace(/[省市区]/g, ''))
                  )
                  console.log('🔍 模糊匹配查找:', data)
                }
              }

              if (data && typeof data.value !== 'undefined') {
                return `
                  <div style="padding: 16px; max-width: 280px; line-height: 1.5;">
                    <div style="font-weight: bold; font-size: 18px; margin-bottom: 12px; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 8px;">
                      📍 ${provinceName}
                    </div>
                    <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: center;">
                      <span style="color: #e74c3c; font-size: 20px; margin-right: 12px;">●</span>
                      <span style="font-size: 18px;">本科录取率：<strong style="color: #e74c3c; font-size: 20px;">${data.value}%</strong></span>
                    </div>
                  </div>
                `
              }

              // 备用显示
              return `
                <div style="padding: 12px; text-align: center;">
                  <div style="font-weight: bold; color: #2c3e50; margin-bottom: 5px;">📍 ${params.name}</div>
                  <div style="color: #7f8c8d; font-size: 13px;">暂无详细数据</div>
                  <div style="color: #95a5a6; font-size: 12px; margin-top: 4px;">标准名称: ${provinceName}</div>
                </div>
              `
            },
          },
          visualMap: {
            min: 30,
            max: 80,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            color: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#27ae60'],
            textStyle: {
              color: '#2c3e50',
            },
            calculable: true,
          },
          series: [
            {
              name: '本科录取率',
              type: 'map',
              map: 'china',
              roam: false,
              emphasis: {
                label: {
                  show: true,
                  color: '#fff',
                },
                itemStyle: {
                  areaColor: '#3498db',
                  borderWidth: 2,
                  borderColor: '#fff',
                },
              },
              select: {
                label: {
                  show: true,
                  color: '#fff',
                },
                itemStyle: {
                  areaColor: '#2980b9',
                },
              },
              data: window.chinaProvinceData.map(item => {
                // 创建反向映射，将我们的标准名称映射到地图JSON的完整名称
                const reverseMapping = {
                  北京: '北京市',
                  天津: '天津市',
                  上海: '上海市',
                  重庆: '重庆市',
                  河北: '河北省',
                  山西: '山西省',
                  辽宁: '辽宁省',
                  吉林: '吉林省',
                  黑龙江: '黑龙江省',
                  江苏: '江苏省',
                  浙江: '浙江省',
                  安徽: '安徽省',
                  福建: '福建省',
                  江西: '江西省',
                  山东: '山东省',
                  河南: '河南省',
                  湖北: '湖北省',
                  湖南: '湖南省',
                  广东: '广东省',
                  广西: '广西壮族自治区',
                  海南: '海南省',
                  四川: '四川省',
                  贵州: '贵州省',
                  云南: '云南省',
                  西藏: '西藏自治区',
                  陕西: '陕西省',
                  甘肃: '甘肃省',
                  青海: '青海省',
                  宁夏: '宁夏回族自治区',
                  新疆: '新疆维吾尔自治区',
                  内蒙古: '内蒙古自治区',
                }

                // 使用地图JSON的完整名称作为key，同时保存我们的数据
                const mapName = reverseMapping[item.name] || item.name

                return {
                  name: mapName, // 地图JSON中的名称
                  value: item.value,
                  originalName: item.name, // 保存原始名称
                  // 添加额外的数据确保tooltip能访问到
                  itemStyle: {
                    emphasis: {
                      areaColor: '#3498db',
                    },
                  },
                }
              }),
            },
          ],
        }

        myChart.setOption(option)

        // 添加调试信息
        console.log(
          '✅ 中国地图初始化完成，省份数据:',
          window.chinaProvinceData.length,
          '个'
        )

        // 打印映射后的数据，用于调试
        const mappedData = window.chinaProvinceData.map(item => {
          const reverseMapping = {
            北京: '北京市',
            天津: '天津市',
            上海: '上海市',
            重庆: '重庆市',
            河北: '河北省',
            山西: '山西省',
            辽宁: '辽宁省',
            吉林: '吉林省',
            黑龙江: '黑龙江省',
            江苏: '江苏省',
            浙江: '浙江省',
            安徽: '安徽省',
            福建: '福建省',
            江西: '江西省',
            山东: '山东省',
            河南: '河南省',
            湖北: '湖北省',
            湖南: '湖南省',
            广东: '广东省',
            广西: '广西壮族自治区',
            海南: '海南省',
            四川: '四川省',
            贵州: '贵州省',
            云南: '云南省',
            西藏: '西藏自治区',
            陕西: '陕西省',
            甘肃: '甘肃省',
            青海: '青海省',
            宁夏: '宁夏回族自治区',
            新疆: '新疆维吾尔自治区',
            内蒙古: '内蒙古自治区',
          }
          const mapName = reverseMapping[item.name] || item.name
          return { original: item.name, mapped: mapName, value: item.value }
        })
        console.log('🗺️ 数据映射表:', mappedData)

        // 确保tooltip事件正确绑定
        myChart.on('mouseover', function (params) {
          console.log('🖱️ 鼠标悬停:', params.name, 'params.data:', params.data)
        })

        // 添加更详细的事件监听
        myChart.on('mouseout', function (params) {
          console.log('🖱️ 鼠标离开:', params.name)
        })
      })
      .catch(error => {
        console.error('❌ 地图数据加载失败:', error)
        // 显示错误信息
        const option = {
          title: {
            text: '地图数据加载中...',
            left: 'center',
            top: 'center',
            textStyle: {
              fontSize: 16,
              color: '#7f8c8d',
            },
          },
        }
        myChart.setOption(option)
      })

    return myChart
  }

  // 初始化所有图表
  const charts = []

  setTimeout(() => {
    charts.push(initRegionOpinionChart())
    charts.push(initFamilyStructureChart())
    charts.push(initEducationInvestmentChart())
    charts.push(initIncomeEducationChart())
    charts.push(initPolicyGoalsChart())
    charts.push(initComparisonRadarChart())
    charts.push(initChinaMapChart())

    console.log('✅ 所有数据图表初始化完成')
  }, 300)

  // 响应式处理
  window.addEventListener('resize', function () {
    charts.forEach(chart => {
      if (chart) {
        chart.resize()
      }
    })
  })

  // 添加图表交互增强
  setTimeout(() => {
    charts.forEach((chart, index) => {
      if (chart) {
        chart.on('click', function (params) {
          console.log(`图表${index + 1}被点击:`, params)
        })
      }
    })
  }, 500)
})
