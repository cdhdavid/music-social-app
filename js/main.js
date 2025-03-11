/**
 * 音乐社交APP主JavaScript文件
 * 包含通用功能和交互逻辑
 */

// 底部播放器控制
document.addEventListener('DOMContentLoaded', function() {
  // 播放按钮控制
  const miniPlayBtn = document.querySelector('.mini-play-btn');
  if (miniPlayBtn) {
    miniPlayBtn.addEventListener('click', function() {
      this.classList.toggle('playing');
    });
  }
  
  // 大播放器控制
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', function() {
      this.classList.toggle('playing');
    });
  }
  
  // 音乐笔记中的播放按钮
  const notePlayBtns = document.querySelectorAll('.note-play-btn');
  notePlayBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 模拟播放音乐
      const songName = this.closest('.note-music-player').querySelector('.note-song-name').textContent;
      const artistName = this.closest('.note-music-player').querySelector('.note-song-artist').textContent;
      
      // 更新底部播放器信息
      const miniSongName = document.querySelector('.mini-song-name');
      const miniArtist = document.querySelector('.mini-artist');
      const miniPlayBtn = document.querySelector('.mini-play-btn');
      
      if (miniSongName && miniArtist && miniPlayBtn) {
        miniSongName.textContent = songName;
        miniArtist.textContent = artistName;
        miniPlayBtn.classList.add('playing');
      }
    });
  });
  
  // 关注按钮控制
  const followBtns = document.querySelectorAll('.follow-btn:not(.followed)');
  followBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.add('followed');
      if (this.textContent === '关注') {
        this.textContent = '已关注';
      }
    });
  });
  
  // 点赞按钮控制
  const likeBtns = document.querySelectorAll('.action-btn.like');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const countElement = this.querySelector('.action-count');
      if (countElement) {
        let count = parseInt(countElement.textContent);
        if (this.classList.contains('active')) {
          count += 1;
        } else {
          count -= 1;
        }
        countElement.textContent = count;
      }
    });
  });
  
  // 收藏按钮控制
  const saveBtns = document.querySelectorAll('.action-btn.save');
  saveBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  
  // 标签切换控制
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  
  // 进度条控制
  const progressBar = document.querySelector('.progress-bar');
  const progressHandle = document.querySelector('.progress-handle');
  const progressCurrent = document.querySelector('.progress-current');
  
  if (progressBar && progressHandle && progressCurrent) {
    progressBar.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = (x / width) * 100;
      
      progressCurrent.style.width = percentage + '%';
      progressHandle.style.left = `calc(${percentage}% - 6px)`;
      
      // 更新时间显示
      const currentTime = document.querySelector('.current-time');
      const totalTime = document.querySelector('.total-time');
      
      if (currentTime && totalTime) {
        const totalSeconds = timeToSeconds(totalTime.textContent);
        const newSeconds = Math.floor((percentage / 100) * totalSeconds);
        currentTime.textContent = secondsToTime(newSeconds);
      }
    });
  }
});

// 辅助函数：时间字符串转换为秒数
function timeToSeconds(timeStr) {
  const [minutes, seconds] = timeStr.split(':').map(Number);
  return minutes * 60 + seconds;
}

// 辅助函数：秒数转换为时间字符串
function secondsToTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
} 