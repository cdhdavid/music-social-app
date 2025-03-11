document.addEventListener('DOMContentLoaded', function() {
  // 标签切换功能
  const tabs = document.querySelectorAll('.tab');
  const waterfall = document.querySelector('.waterfall-container');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有active类
      tabs.forEach(t => t.classList.remove('active'));
      // 添加当前active类
      this.classList.add('active');
      
      // TODO: 根据标签加载不同内容
      // 这里可以添加AJAX请求获取不同分类的内容
    });
  });
  
  // 播放按钮功能
  const playBtns = document.querySelectorAll('.mini-play-btn, .note-play-btn');
  playBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isPlaying = this.classList.contains('playing');
      // 重置所有按钮状态
      playBtns.forEach(b => b.classList.remove('playing'));
      
      if (!isPlaying) {
        this.classList.add('playing');
        // TODO: 实现音乐播放功能
      }
    });
  });
  
  // 下拉刷新功能
  let startY = 0;
  let refreshing = false;
  const refreshSection = document.querySelector('.refresh-section');
  
  document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].pageY;
  });
  
  document.addEventListener('touchmove', function(e) {
    if (refreshing) return;
    
    const currentY = e.touches[0].pageY;
    const delta = currentY - startY;
    
    if (delta > 0 && window.scrollY === 0) {
      refreshSection.style.height = Math.min(delta, 60) + 'px';
      e.preventDefault();
    }
  });
  
  document.addEventListener('touchend', function() {
    if (refreshSection.offsetHeight >= 60) {
      refreshing = true;
      refreshSection.style.height = '60px';
      // TODO: 实现刷新数据功能
      setTimeout(() => {
        refreshSection.style.height = '0';
        refreshing = false;
      }, 2000);
    } else {
      refreshSection.style.height = '0';
    }
  });
  
  // 点赞功能
  const likeButtons = document.querySelectorAll('.action-btn.like');
  likeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const countSpan = this.querySelector('.action-count');
      const count = parseInt(countSpan.textContent);
      
      if (this.classList.contains('active')) {
        this.classList.remove('active');
        countSpan.textContent = count - 1;
      } else {
        this.classList.add('active');
        countSpan.textContent = count + 1;
      }
    });
  });
  
  // 收藏功能
  const saveButtons = document.querySelectorAll('.action-btn.save');
  saveButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  
  // 底部播放器控制
  const miniPlayer = document.querySelector('.mini-player');
  const nextBtn = miniPlayer.querySelector('.mini-next-btn');
  const playlistBtn = miniPlayer.querySelector('.mini-playlist-btn');
  
  nextBtn.addEventListener('click', function() {
    // TODO: 实现下一首功能
  });
  
  playlistBtn.addEventListener('click', function() {
    // TODO: 实现显示播放列表功能
  });
}); 