// 图片预览功能
class ImagePreview {
  constructor() {
    this.modal = null
    this.modalImage = null
    this.imageCaption = null
    this.closeBtn = null
    this.init()
  }

  init() {
    // 获取DOM元素
    this.modal = document.getElementById('imageModal')
    this.modalImage = document.getElementById('modalImage')
    this.imageCaption = document.getElementById('imageCaption')
    this.closeBtn = document.querySelector('.image-close-btn')

    // 绑定事件
    this.bindEvents()
  }

  bindEvents() {
    // 为所有可点击的图片添加点击事件
    const clickableImages = document.querySelectorAll('.clickable-image')
    clickableImages.forEach(img => {
      img.addEventListener('click', e => {
        this.showImage(e.target)
      })

      // 添加鼠标悬停效果提示
      img.addEventListener('mouseenter', e => {
        e.target.style.cursor = 'zoom-in'
        e.target.style.opacity = '0.8'
      })

      img.addEventListener('mouseleave', e => {
        e.target.style.opacity = '1'
      })
    })

    // 关闭按钮事件
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.hideImage()
      })
    }

    // 点击模态框背景关闭
    if (this.modal) {
      this.modal.addEventListener('click', e => {
        if (e.target === this.modal) {
          this.hideImage()
        }
      })
    }

    // ESC键关闭
    document.addEventListener('keydown', e => {
      if (
        e.key === 'Escape' &&
        this.modal &&
        this.modal.style.display === 'block'
      ) {
        this.hideImage()
      }
    })
  }

  showImage(imgElement) {
    if (!this.modal || !this.modalImage || !this.imageCaption) return

    // 设置图片源和描述
    this.modalImage.src = imgElement.src
    this.modalImage.alt = imgElement.alt
    this.imageCaption.textContent = imgElement.alt

    // 显示模态框
    this.modal.style.display = 'block'
    document.body.style.overflow = 'hidden' // 防止背景滚动

    // 添加显示动画
    setTimeout(() => {
      this.modal.classList.add('show')
    }, 10)
  }

  hideImage() {
    if (!this.modal) return

    // 移除显示动画
    this.modal.classList.remove('show')
    document.body.style.overflow = 'auto' // 恢复背景滚动

    // 等待动画完成后隐藏
    setTimeout(() => {
      this.modal.style.display = 'none'
    }, 300)
  }
}

// 页面加载完成后初始化图片预览功能
document.addEventListener('DOMContentLoaded', () => {
  new ImagePreview()
})
