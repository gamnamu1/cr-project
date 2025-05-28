document.addEventListener('DOMContentLoaded', function() {
  const paragraphs = document.querySelectorAll('.paragraph-container');
  let currentParagraphIndex = 0;
  
  // 초기 상태: 모든 단락 숨김
  paragraphs.forEach(paragraph => {
    paragraph.style.display = 'none';
  });
  
  // 애니메이션 시작
  startAnimation();
  
  function startAnimation() {
    // 현재 단락 표시
    const currentParagraph = paragraphs[currentParagraphIndex];
    if (!currentParagraph) return; // 안전장치
    
    // 먼저 display 속성만 변경하고 opacity는 아직 0으로 유지
    currentParagraph.classList.add('active');
    currentParagraph.style.display = 'block';
    
    const lines = currentParagraph.querySelectorAll('.animated-text');
    let currentLineIndex = 0;
    
    // 약간의 지연 후 라인별 애니메이션 시작
    setTimeout(() => {
      animateLine();
    }, 50); // 아주 짧은 지연으로 display:block이 먼저 적용되게 함
    
    // 라인별 애니메이션 함수
    function animateLine() {
      if (currentLineIndex < lines.length) {
        lines[currentLineIndex].classList.add('visible');
        currentLineIndex++;
        setTimeout(animateLine, 800);
      } else {
        // 모든 라인이 표시되면 잠시 대기 후 사라지는 애니메이션 시작
        setTimeout(() => {
          fadeOutParagraph(currentParagraph);
        }, 3000);
      }
    }
    
    // 단락 사라지는 애니메이션
    function fadeOutParagraph(paragraph) {
      const paragraphLines = paragraph.querySelectorAll('.animated-text');
      paragraphLines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.remove('visible');
        }, index * 300); // 각 라인이 사라지는 간격 (300ms)
      });
      
      // 모든 라인이 사라진 후 다음 단락으로 이동
      setTimeout(() => {
        paragraph.classList.remove('active');
        paragraph.style.display = 'none';
        
        // 다음 단락으로 이동
        currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;
        startAnimation();
      }, paragraphLines.length * 300 + 500); // 마지막 라인이 사라진 후 다음 단락으로 넘어가는 시간
    }
    
    // 애니메이션 시작
    animateLine();
  }
});