// 时间轴交互功能
class TimelineInteraction {
  constructor() {
    this.timelineData = [
      {
        year: '2000年',
        title: '《教育部关于在小学减轻学生过重负担的紧急通知》',
        content:
          '（教基〔2000〕1号）要求严格控制学生作业量，禁止占用节假日补课。',
      },
      {
        year: '2006年',
        title: '《中华人民共和国义务教育法》（修订）',
        content:
          '首次以法律形式规定"学校不得占用节假日组织学生集体补课"（第37条）。',
      },
      {
        year: '2021年',
        title: '《关于加强义务教育学校作业管理的通知》',
        content:
          '切实发挥好作业育人功能，布置科学合理有效作业，严控书面作业总量，严禁校外培训作业。',
      },
      {
        year: '2024年',
        title: '《教育强国建设规划纲要（2024-2035年）》',
        content: '提出深化高考改革，推动教育评价体系多元化，支持双休政策落地。',
      },
      {
        year: '2025年',
        title: '试点与全国推进',
        content:
          '地方试点启动：湖南、浙江、江苏、山东等30余个城市的高中率先试点双休，模式包括"高一高二双休、高三单休""取消早读和晚自习"等。',
      },
    ]

    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    // 绑定时间点点击事件
    const timelinePoints = document.querySelectorAll('.timeline-point')
    timelinePoints.forEach(point => {
      point.addEventListener('click', e => {
        const index = parseInt(e.currentTarget.dataset.index)
        this.showDetails(index)

        // 移除其他点的激活状态
        timelinePoints.forEach(p => p.classList.remove('active'))
        // 添加当前点的激活状态
        e.currentTarget.classList.add('active')
      })
    })

    // 绑定关闭按钮事件
    const closeBtn = document.querySelector('.close-details')
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.hideDetails()
        // 移除所有点的激活状态
        timelinePoints.forEach(p => p.classList.remove('active'))
      })
    }

    // 点击详情区域外部关闭
    const timelineDetails = document.getElementById('timelineDetails')
    if (timelineDetails) {
      timelineDetails.addEventListener('click', e => {
        if (e.target === timelineDetails) {
          this.hideDetails()
          timelinePoints.forEach(p => p.classList.remove('active'))
        }
      })
    }
  }

  showDetails(index) {
    const data = this.timelineData[index]
    const detailsElement = document.getElementById('timelineDetails')
    const titleElement = document.getElementById('detailsTitle')
    const contentElement = document.getElementById('detailsContent')

    if (titleElement && contentElement && detailsElement) {
      titleElement.textContent = data.title
      contentElement.textContent = data.content

      // 显示详情面板
      detailsElement.classList.add('show')

      // 添加动画延迟，确保滑入效果
      setTimeout(() => {
        detailsElement.classList.add('visible')
      }, 10)
    }
  }

  hideDetails() {
    const detailsElement = document.getElementById('timelineDetails')

    if (detailsElement) {
      detailsElement.classList.remove('visible')

      // 等待动画完成后隐藏
      setTimeout(() => {
        detailsElement.classList.remove('show')
      }, 300)
    }
  }
}

// 页面加载完成后初始化时间轴交互
document.addEventListener('DOMContentLoaded', () => {
  new TimelineInteraction()
})
