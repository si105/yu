// 故事弹窗功能
document.addEventListener('DOMContentLoaded', function () {
  // 故事数据
  const storyData = {
    liu: {
      title: '小刘的教育投资故事',
      content: `
         <div class="story-article">
           <div class="story-header">
             <h4>📚 一个收废品父亲的十万补课费</h4>
             <div class="story-meta">
               <span class="meta-tag">💼 身份：收废品的父亲</span>
               <span class="meta-tag">⏰ 来京时间：20多年</span>
               <span class="meta-tag">💰 教育投资：十多万补课费</span>
             </div>
           </div>
           
           <div class="story-content">
             <p>小刘来北京20多年了，按他说是初中都没毕业，家里太穷了，只好出来赚钱。到了北京就一直收废品，从走街串巷直到垄断了这一块地盘儿，应该是挣了不少。因为他说不仅在郊区买了套回迁房，还从村里买了个院子，村里答应拆迁的时候也补偿一套房。所以小刘说他的任务快完成了，只要俩儿子都考上了好大学，那就算是功德圆满。</p>
             
             <p>上次小刘是说他大儿子第一次初三摸底排名，在全县排1200。我理解不了这到底算高还是低？他说是算高的，因为全县有2万名初三学生，但高中名额只有7000，而重点高中更是只有2000学位。所以这1200就能确保进入县重点了，努力到前500就有可能进入市重点。</p>
             
             <p>这次又叫他来收废品，我问儿子咋样了，小刘很兴奋，说二次摸底孩子考到了600多，这十多万的补课费没白花！这可惊到我了，十多万，放在北京都是大花销了，一个县城的补课能花这么多钱吗？小刘说能，这还不是最高的，比他花钱多的有的是。</p>
             
             <p>毕竟他的家乡是高考大省，难度比北京大的不是一星半点儿。按他的说法是全县人都在为孩子拼命，像他已经完全不存钱了，挣多少都寄回家，全砸在了孩子补课上。</p>
             
             <p>北京是肯定不让公开补习了，那县城不管吗？当然也管，但实际上也管不了太多。县城和大城市不同，本来就没什么兴趣班，在北京流行的各种兴趣素质班在他们家乡没市场，所有孩子补的全是语数英等主科。而且县城是个熟人社会，在北京可以用什么名校毕业的来吸引家长，而在小城市则只相信口碑。</p>
             
             <p>因此，就算是市里县里也打击教培行业了，但人家只要是把招牌撤下就行了，暗下里的补课照常进行。所以如果去县城里看，明面上没什么补习班了，但私下里一切照旧，甚至补得更狠。</p>
             
             <p>像他找的这种补习班就更不受影响了，都是县里最知名的退休教师们办的，不仅口碑好，而且只要是本地人，恨不得全是他们的学生。那就算是县里打击补课，谁好意思来查他们啊？连管理层执法者都是他们的学生，去处罚自己的老师，拉得下脸来吗？</p>
             
             <p>所以小刘说他花的这十多万值了，哪科的效果都确实好，现在他对孩子的期望值已经完全不止是县重点了，而是市重点的实验班。</p>
             
             <p>小刘的大儿子开始就是在北京上的小学，五年级才回的老家。按他的说法，当时他儿子在北京的班里排不到前列，但如果今天再比，他儿子能用成绩打得曾经的同学们满地找牙。这也就是高考大省的名额少，要不然虽然小城市孩子们虽然没啥特长，但在考试上真的谁也不怕。</p>
           </div>
           
           <div class="story-reflection">
             <h5>💭 故事启示</h5>
             <div class="reflection-text">
               <p>小刘的故事反映出当前教育竞争的激烈程度，特别是在高考大省。一个收废品的父亲，为了孩子的教育不惜投入十万元的补课费，这背后既有对教育改变命运的坚定信念，也折射出现行教育体制下家长的无奈与焦虑。</p>
               <p>同时，县城熟人社会中补课班的"隐性存在"，揭示了政策执行与现实需求之间的矛盾，以及教育公平在不同地区、不同社会阶层间的复杂表现。</p>
             </div>
           </div>
         </div>
       `,
    },

    shizhongying: {
      title: '石中英案例：分数之上是"价值观教育"',
      content: `
         <div class="academic-case">
           <div class="case-header">
             <div class="case-meta">
               <span class="case-type">📚 学术观点</span>
               <span class="case-source">石中英教授</span>
             </div>
             <div class="severity-indicator high">⚠️ 极端案例</div>
           </div>
           
           <div class="case-narrative">
             <h4>💔 悲剧事件</h4>
             <div class="tragedy-box">
               <p>一位大学生在念高中时父亲去世，母亲怀着失去丈夫的悲痛养育这个孩子。他顺利考上心仪的大学，但在大学期间觉得母亲生活没有意义，经过筹划后用极其残忍的手段杀害了母亲。</p>
             </div>
           </div>
           
           <div class="analysis-framework">
             <h4>🔬 分析框架</h4>
             
             <div class="analysis-section">
               <div class="analysis-point success">
                 <div class="point-icon">✅</div>
                 <div class="point-content">
                   <h6>学业表现</h6>
                   <p>考上理想大学，学术成绩优异</p>
                 </div>
               </div>
               
               <div class="analysis-point failure">
                 <div class="point-icon">❌</div>
                 <div class="point-content">
                   <h6>品德缺失</h6>
                   <p>道德品质和人性关怀严重缺失</p>
                 </div>
               </div>
               
               <div class="analysis-point root-cause">
                 <div class="point-icon">🎯</div>
                 <div class="point-content">
                   <h6>根本原因</h6>
                   <p>教育体系过分强调分数升学，忽视品德情感价值观培养</p>
                 </div>
               </div>
             </div>
           </div>
           
           <div class="expert-viewpoint">
             <h4>👨‍🏫 专家观点</h4>
             <blockquote>
               <p>"这种悲剧的根源在于我们的教育体系过分强调分数和升学，而忽视了对学生品德、情感、价值观的培养。学校和家庭都有责任在追求学业成绩的同时，更加重视学生的全面发展。"</p>
               <cite>—— 石中英教授</cite>
             </blockquote>
           </div>
           
           <div class="reform-directions">
             <h4>🚀 改革方向</h4>
             <div class="direction-grid">
               <div class="direction-card">
                 <div class="card-icon">🏫</div>
                 <h6>学校责任</h6>
                 <p>将德育放在与智育同等重要位置</p>
               </div>
               <div class="direction-card">
                 <div class="card-icon">👨‍👩‍👧‍👦</div>
                 <h6>家庭教育</h6>
                 <p>在价值观塑造方面发挥不可替代作用</p>
               </div>
               <div class="direction-card">
                 <div class="card-icon">🌟</div>
                 <h6>评价体系</h6>
                 <p>建立多元化的人才评价标准</p>
               </div>
               <div class="direction-card">
                 <div class="card-icon">💚</div>
                 <h6>品德培养</h6>
                 <p>教育不能仅追求分数，更要注重品德</p>
               </div>
             </div>
           </div>
         </div>
       `,
    },

    teacherStress: {
      title: '教师高压环境的畸形心态',
      content: `
         <div class="incident-analysis">
           <div class="incident-header">
             <div class="location-badge">📍 郴州市第三人民医院</div>
             <div class="incident-type">🚨 学生体罚事件</div>
           </div>
           
           <div class="event-reconstruction">
             <h4>📋 事件重构</h4>
             <div class="event-flow">
               <div class="flow-step">
                 <div class="step-number">1</div>
                 <div class="step-content">
                   <h6>压力传导</h6>
                   <p>学校对教师要求过于严格，追求教学成绩</p>
                 </div>
               </div>
               
               <div class="flow-arrow">→</div>
               
               <div class="flow-step">
                 <div class="step-number">2</div>
                 <div class="step-content">
                   <h6>方式扭曲</h6>
                   <p>教师在高压下采取不当教学手段</p>
                 </div>
               </div>
               
               <div class="flow-arrow">→</div>
               
               <div class="flow-step">
                 <div class="step-number">3</div>
                 <div class="step-content">
                   <h6>悲剧发生</h6>
                   <p>体罚事件导致严重后果</p>
                 </div>
               </div>
               
               <div class="flow-arrow">→</div>
               
               <div class="flow-step">
                 <div class="step-number">4</div>
                 <div class="step-content">
                   <h6>深刻反思</h6>
                   <p>校长周晋："对老师要求太严格了"</p>
                 </div>
               </div>
             </div>
           </div>
           
           <div class="pressure-analysis">
             <h4>⚡ 压力来源分析</h4>
             <div class="pressure-web">
               <div class="pressure-center">
                 <div class="teacher-icon">👨‍🏫</div>
                 <span>教师</span>
               </div>
               
               <div class="pressure-sources">
                 <div class="pressure-node school">
                   <div class="node-icon">🏫</div>
                   <h6>升学压力</h6>
                   <p>学校要求提高班级升学率</p>
                 </div>
                 
                 <div class="pressure-node parents">
                   <div class="node-icon">👨‍👩‍👧‍👦</div>
                   <h6>家长期望</h6>
                   <p>高期望转化为教师压力</p>
                 </div>
                 
                 <div class="pressure-node evaluation">
                   <div class="node-icon">📊</div>
                   <h6>职业评价</h6>
                   <p>绩效考核主要依据学生成绩</p>
                 </div>
                 
                 <div class="pressure-node society">
                   <div class="node-icon">🌍</div>
                   <h6>社会认知</h6>
                   <p>"好老师"标准与分数挂钩</p>
                 </div>
               </div>
             </div>
           </div>
           
           <div class="solution-framework">
             <h4>💡 系统性解决方案</h4>
             <div class="solution-tracks">
               <div class="track institutional">
                 <h6>🏛️ 制度层面</h6>
                 <ul>
                   <li>建立多元化教师评价体系</li>
                   <li>不仅看重成绩提升</li>
                 </ul>
               </div>
               
               <div class="track support">
                 <h6>💚 支持层面</h6>
                 <ul>
                   <li>加强教师心理健康关怀</li>
                   <li>提供压力管理培训</li>
                 </ul>
               </div>
               
               <div class="track collaboration">
                 <h6>🤝 协同层面</h6>
                 <ul>
                   <li>推动家校社协同</li>
                   <li>减少单纯分数焦虑</li>
                 </ul>
               </div>
               
               <div class="track culture">
                 <h6>🌱 文化层面</h6>
                 <ul>
                   <li>营造尊重教育规律的氛围</li>
                   <li>重塑社会教育观念</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       `,
    },

    yuXingjian: {
      title: '于行健事件：当父母的爱变成一场驯化实验',
      content: `
         <div class="memorial-case">
           <div class="memorial-header">
             <div class="portrait-section">
               <div class="memorial-icon">🕊️</div>
               <div class="person-details">
                 <h4>于行健</h4>
                 <div class="life-span">2008.7.14 - 2025.4.1</div>
                 <div class="age-tag">16岁231天</div>
               </div>
             </div>
             <div class="achievement-badges">
               <span class="badge genius">🏆 天才少年</span>
               <span class="badge school">🎓 东北育才学校</span>
               <span class="badge competition">💻 信息学奥赛</span>
             </div>
           </div>
           
           <div class="tragedy-timeline">
             <h4>⏰ 最后时刻</h4>
             <div class="final-moment">
               <div class="moment-card">
                 <div class="time-stamp">2025年4月1日 16:40</div>
                 <div class="location">📍 沈阳某小区</div>
                 <div class="event">坠楼身亡</div>
                 <div class="last-words">"妈妈，我疼，救我"</div>
               </div>
             </div>
           </div>
           
           <div class="pathology-analysis">
             <h4>🔍 病理解剖</h4>
             
             <div class="pathology-section">
               <div class="pathology-item toxic">
                 <div class="pathology-icon">⚗️</div>
                 <h6>"魔丸论"的毒性</h6>
                 <p>父亲在祭文中描述孩子"时而如灵童附体，时而如魔丸般叛逆"，将孩子视为需要"改造"的对象，用工业化思维重塑"完美作品"</p>
               </div>
               
               <div class="pathology-item instrumental">
                 <div class="pathology-icon">🔧</div>
                 <h6>工具人教育逻辑</h6>
                 <p>父母以"为你好"之名，将孩子的价值简化为竞赛成绩和奖项排名，忽视其作为独立个体的情感需求</p>
               </div>
               
               <div class="pathology-item neglect">
                 <div class="pathology-icon">🙈</div>
                 <h6>痛苦的系统性漠视</h6>
                 <p>明知儿子"每天都在为父母坚持"、"像奔赴刑场一样煎熬"，却用"普通凡人给不了你需要的世界"推诿责任</p>
               </div>
               
               <div class="pathology-item perfection">
                 <div class="pathology-icon">⛓️</div>
                 <h6>完美主义枷锁</h6>
                 <p>将"天才"标签当作勋章，把"失败"视为耻辱，孩子被剥夺表达脆弱的权利，只能活在"必须完美"的剧本里</p>
               </div>
             </div>
           </div>
           
           <div class="systemic-reflection">
             <h4>💭 系统反思</h4>
             <div class="reflection-matrix">
               <div class="reflection-cell education">
                 <h6>🎯 教育本质</h6>
                 <p>培养健全的人，而非制造完美的机器</p>
               </div>
               
               <div class="reflection-cell parenting">
                 <h6>👨‍👩‍👧‍👦 父母责任</h6>
                 <p>期望应建立在对孩子真实需求的理解之上</p>
               </div>
               
               <div class="reflection-cell society">
                 <h6>🌍 社会环境</h6>
                 <p>为"不完美"的孩子留出成长空间</p>
               </div>
               
               <div class="reflection-cell mental-health">
                 <h6>💚 心理健康</h6>
                 <p>天才教育不应以牺牲心理健康为代价</p>
               </div>
               
               <div class="reflection-cell emotional-care">
                 <h6>❤️ 情感关怀</h6>
                 <p>家庭教育应更多关注孩子的情感世界</p>
               </div>
             </div>
           </div>
           
           <div class="memorial-message">
             <h4>🕯️ 警示意义</h4>
             <div class="warning-box">
               <p>于行健的悲剧提醒我们：当父母的爱变成控制，当期望变成重压，当完美变成枷锁，再聪明的孩子也可能在痛苦中走向绝路。</p>
               <p><strong>每一个孩子都有权利做一个不完美但真实的自己。</strong></p>
             </div>
           </div>
         </div>
       `,
    },
  }

  // 获取DOM元素
  const modal = document.getElementById('storyModal')
  const modalTitle = document.getElementById('modalTitle')
  const modalBody = document.getElementById('modalBody')
  const closeBtn = document.querySelector('.close-btn')

  // 显示故事弹窗
  function showStory(storyKey) {
    const story = storyData[storyKey]
    if (story && modal && modalTitle && modalBody) {
      // 首先关闭可能已经打开的弹窗
      closeModal()

      // 设置内容
      modalTitle.textContent = story.title
      modalBody.innerHTML = story.content

      // 显示弹窗
      modal.style.display = 'block'
      modal.classList.add('show')
      document.body.style.overflow = 'hidden' // 防止背景滚动

      // 滚动到弹窗顶部
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-content')
        if (modalContent) {
          modalContent.scrollTop = 0
        }
      }, 100)
    }
  }

  // 关闭弹窗
  function closeModal() {
    if (modal) {
      modal.style.display = 'none'
      modal.classList.remove('show')
      document.body.style.overflow = 'auto' // 恢复滚动

      // 清理内容（可选，防止内存占用）
      if (modalBody) {
        modalBody.innerHTML = ''
      }
      if (modalTitle) {
        modalTitle.textContent = '故事详情'
      }
    }
  }

  // 获取故事卡片
  const liuStoryCard = document.getElementById('liuStoryCard')
  const shizhongyingCard = document.getElementById('shizhongyingCard')
  const teacherStressCard = document.getElementById('teacherStressCard')
  const yuXingjianCard = document.getElementById('yuXingjianCard')

  // 为小刘的故事卡片添加点击事件
  if (liuStoryCard) {
    liuStoryCard.addEventListener('click', () => showStory('liu'))
  }

  // 为案例卡片添加点击事件
  if (shizhongyingCard) {
    shizhongyingCard.addEventListener('click', () => showStory('shizhongying'))
  }

  if (teacherStressCard) {
    teacherStressCard.addEventListener('click', () =>
      showStory('teacherStress')
    )
  }

  if (yuXingjianCard) {
    yuXingjianCard.addEventListener('click', () => showStory('yuXingjian'))
  }

  // 关闭按钮点击事件 - 使用事件委托确保可靠性
  document.addEventListener('click', function (event) {
    // 处理关闭按钮点击
    if (
      event.target.classList.contains('close-btn') ||
      event.target.closest('.close-btn')
    ) {
      event.preventDefault()
      event.stopPropagation()
      closeModal()
    }

    // 处理背景点击关闭
    if (event.target === modal) {
      closeModal()
    }
  })

  // ESC键关闭弹窗
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal()
    }
  })

  // 额外的关闭按钮事件监听（双重保险）
  if (closeBtn) {
    closeBtn.addEventListener('click', function (event) {
      event.preventDefault()
      event.stopPropagation()
      closeModal()
    })
  }

  console.log('✅ 故事弹窗功能初始化完成')
})
