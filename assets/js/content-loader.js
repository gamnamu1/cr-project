/**
 * 콘텐츠 로더 스크립트
 * 노션 HTML 파일을 동적으로 로드하는 기능을 담당합니다.
 */

// 파일 경로 매핑 객체 (전역으로 이동)
const contentMapping = {
    'welcome': 'pages/welcome.html',
    'change': 'pages/welcome.html',
    // 탭 개요 페이지 추가 (기존 매핑 앞에 추가)
    'chapter1-overview': 'pages/chapter1-overview.html',
    'chapter2-overview': 'pages/chapter2-overview.html',
    'chapter3-overview': 'pages/chapter3-overview.html',
    'chapter4-overview': 'pages/chapter4-overview.html',

    // 챕터 1 (프로젝트: 배경)
    'prologue': 'pages/chapter1/ch1_00.html',
    'chapter1': 'pages/chapter1/ch1_01.html',
    'chapter2': 'pages/chapter1/ch1_02.html',
    'chapter3': 'pages/chapter1/ch1_03.html',
    'chapter4': 'pages/chapter1/ch1_04.html',
    'chapter5': 'pages/chapter1/ch1_05.html',
    
    // 챕터 2 (실행 계획)
    'section1': 'pages/chapter2/ch2_01_00.html',          // 1. 로드맵 개요
    'section2-1': 'pages/chapter2/ch2_01_01.html',      // 1-1. 기본 흐름
    'section2-1-2': 'pages/chapter2/ch2_01_02.html',    // 1-2. 단계별 실행 계획
    'section2': 'pages/chapter2/ch2_02_00_overview.html', // 2. 시민 전문가 네트워크 개요
    'section2-0': 'pages/chapter2/ch2_02_00.html',      // 2-0. 기본 유닛 구성
    'section2-1-1': 'pages/chapter2/ch2_02_01_01.html', // 2-1-1. 미디어 전문가
    'section2-2-1': 'pages/chapter2/ch2_02_02_01.html', // 2-2-1. AI 전문가
    'section2-2-2': 'pages/chapter2/ch2_02_02_02.html', // 2-2-2. 플랫폼 개발자
    'section2-3-1': 'pages/chapter2/ch2_02_03_01.html', // 2-3-1. 법률 자문가
    'section2-3-2': 'pages/chapter2/ch2_02_03_02.html', // 2-3-2. 경영 자문가
    'section2-3-3': 'pages/chapter2/ch2_02_03_03.html', // 2-3-3. 홍보 전문가
    'section3': 'pages/chapter2/ch2_03.html',          // 3. 벤치마킹 사례
    'ch2_section3-1': 'pages/chapter2/ch2_03_01.html', // 벤치마킹: 글로벌 표준 확립 사례
    'ch2_section3-2': 'pages/chapter2/ch2_03_02.html', // 벤치마킹: 비즈니스 모델 전환 사례
    'ch2_section3-3': 'pages/chapter2/ch2_03_03.html', // 벤치마킹: 부분적 참고 사례
    'ch2_section3-4': 'pages/chapter2/ch2_03_04.html', // 벤치마킹: 프로젝트를 위한 시사점
    
    // 챕터 3 (기술적 구현 방안) - 재배열 완료
    'section3-1': 'pages/chapter3/ch3_01.html',      // 1. 문제적 보도 관행 분류
    'section3-1-1': 'pages/chapter3/ch3_01_01.html', // 1-1. 진실성과 정확성
    'section3-1-2': 'pages/chapter3/ch3_01_02.html', // 1-2. 투명성과 책임성
    'section3-1-3': 'pages/chapter3/ch3_01_03.html', // 1-3. 균형성과 공정성
    'section3-1-4': 'pages/chapter3/ch3_01_04.html', // 1-4. 독립성과 자율성
    'section3-1-5': 'pages/chapter3/ch3_01_05.html', // 1-5. 인권과 프라이버시 존중
    'section3-1-6': 'pages/chapter3/ch3_01_06.html', // 1-6. 전문성과 심층성
    'section3-1-7': 'pages/chapter3/ch3_01_07.html', // 1-7. 언어와 표현의 윤리
    'section3-1-8': 'pages/chapter3/ch3_01_08.html', // 1-8. 디지털 환경의 윤리
    'section3-2': 'pages/chapter3/ch3_02.html',      // 2. 분류 체계 평가/검증
    'section3-3': 'pages/chapter3/ch3_03.html',      // 3. 기사 유형 분류 및 평가 대상
    'section3-4': 'pages/chapter3/ch3_04.html',      // 4. 다차원 매트릭스 기반 평가
    'section3-5': 'pages/chapter3/ch3_05.html',      // 5. 규범 체계와 매트릭스 매칭
    'section3-6': 'pages/chapter3/ch3_06.html',      // 6. 기술 적용 방식
    'section3-6-1': 'pages/chapter3/ch3_06_01.html', // 6-1. AI 모델 전략 및 의사결정
    'section3-6-2': 'pages/chapter3/ch3_06_02.html', // 6-2. 시스템 아키텍처 설계
    'section3-6-3': 'pages/chapter3/ch3_06_03.html', // 6-3. 성능 최적화 및 패턴 인식 기술
    'section3-7': 'pages/chapter3/ch3_07.html',      // 7. 프롬프트 기반 평가 시스템 구현
    'section3-8': 'pages/chapter3/ch3_08.html',      // 8. 기사 심층성 평가 시스템
    'section3-9': 'pages/chapter3/ch3_09.html',      // 9. 유형별 맞춤 평가
    'section3-10': 'pages/chapter3/ch3_10.html',      // 10. 웹앱 서비스 흐름
    'section3-10-1': 'pages/chapter3/ch3_10_01.html', // 10-1. 사용자 경험 흐름 설계
    'section3-10-2': 'pages/chapter3/ch3_10_02.html', // 10-2. 결과 전달 및 시각화 시스템
    'section3-10-3': 'pages/chapter3/ch3_10_03.html', // 10-3. 서비스 안정성 및 확장성
    'section3-10-4': 'pages/chapter3/ch3_10_04.html', // 10-4. 평가 리포트 모델
    'section3-10-5': 'pages/chapter3/ch3_10_05.html', // 10-5. 평가 리포트 샘플(점수화)
    'section3-11': 'pages/chapter3/ch3_11.html',      // 11. 평가 시스템 검증 및 품질 관리
    'section3-12': 'pages/chapter3/ch3_12.html',      // 12. 법적 고려사항 및 개인정보 보호
    'section3-13': 'pages/chapter3/ch3_13.html',      // 13. 미디어 비평 생태계 확장 전략
    
    // 챕터 4 (부록) - 수정
    'section4-1-1': 'pages/chapter4/ch4_01_01.html', // 1-1. CR 소개
    'section4-1-2': 'pages/chapter4/ch4_01_02.html', // 1-2. 언론 윤리 규범에 관한 대화
    'section4-1-3': 'pages/chapter4/ch4_01_03.html', // 1-3. 점수화 없는 CR 프로젝트
    'section4-1-4': 'pages/chapter4/ch4_01_04.html', // 1-4. 평가 리포트 샘플
    'section4-1-5': 'pages/chapter4/ch4_01_05.html', // 1-5. 플랫폼 구축 3단계 시나리오
    'section4-2-1': 'pages/chapter4/ch4_02_01.html', // 2-1. CR 플랫폼 구조 설계
    'section4-2-2': 'pages/chapter4/ch4_02_02.html', // 2-2. 웹앱 정보구조 설계 제안
    'section4-2-3': 'pages/chapter4/ch4_02_03.html', // 2-3. 회원 관리 및 과금 방식
    'section4-2-4': 'pages/chapter4/ch4_02_04.html', // 2-4. 나쁜 저널리즘 요소 식별 가이드
    'section4-2-5': 'pages/chapter4/ch4_02_05.html', // 2-5. 문제적 표현 패턴 샘플
    'section4-2-6': 'pages/chapter4/ch4_02_06.html', // 2-6. 평가 결과의 일관성 문제
    'section4-3-1': 'pages/chapter4/ch4_03_01.html', // 3-1. 프롬프트 템플릿 시스템
    'section4-3-2': 'pages/chapter4/ch4_03_02.html', // 3-2. 프롬프트 템플릿 초안
    'section4-3-3': 'pages/chapter4/ch4_03_03.html', // 3-3. 기사 정보 수집 기술 가이드
    'section4-3-4': 'pages/chapter4/ch4_03_04.html', // 3-4. 사용자 경험 시나리오
    'section4-4-1': 'pages/chapter4/ch4_04_01.html', // 4-1. 아카이브 구축 가이드
    'section4-4-2': 'pages/chapter4/ch4_04_02.html', // 4-2. 다른 비평 웹앱과의 연대
    'section4-4-3': 'pages/chapter4/ch4_04_03.html', // 4-3. 비평 플랫폼 목록
    'section4-4-4': 'pages/chapter4/ch4_04_04.html', // 4-4. 국제 연대가 필요한 이유
    // 현재 주석 처리된 부분도 파일명 업데이트
    'section5-1': 'pages/chapter4/ch4_05_01.html',   // 5-1. 참고 사이트
    'section5-2': 'pages/chapter4/ch4_05_02.html',   // 5-2. 지금 우리에게 필요한 것
    
    // 기존 샘플 파일 (호환성 유지) - 업데이트
    'section2-3': 'pages/chapter4/ch4_02_03.html'    // 2-3. 회원 관리 및 과금 방식
};

// 탭 매핑 정의 - 각 콘텐츠가 어떤 탭에 속하는지 지정 (전역으로 이동)
const tabMapping = {
    // 챕터 1 (프로젝트: 배경) 관련 콘텐츠
    'welcome': 'I',
    'change': 'I',
    'chapter1-overview': 'I',
    'prologue': 'I',
    'chapter1': 'I',
    'chapter2': 'I',
    'chapter3': 'I',
    'chapter4': 'I',
    'chapter5': 'I',
    
    // 챕터 2 (실행 계획) 관련 콘텐츠
    'chapter2-overview': 'II',
    'section1': 'II',  // 로드맵 개요
    'section2-1': 'II',
    'section2-1-2': 'II',
    'section2': 'II',  // 시민 전문가 네트워크 개요
    'section2-0': 'II',
    'section2-1-1': 'II',
    'section2-2-1': 'II',
    'section2-2-2': 'II',
    'section2-3-1': 'II',
    'section2-3-2': 'II',
    'section2-3-3': 'II',
    'section3': 'II',
    'ch2_section3-1': 'II',
    'ch2_section3-2': 'II',
    'ch2_section3-3': 'II',
    'ch2_section3-4': 'II',
    
    // 챕터 3 (기술적 구현 방안) 관련 콘텐츠
    'chapter3-overview': 'III',
    'section3-1': 'III',
    'section3-1-1': 'III',
    'section3-1-2': 'III',
    'section3-1-3': 'III',
    'section3-1-4': 'III',
    'section3-1-5': 'III',
    'section3-1-6': 'III',
    'section3-1-7': 'III',
    'section3-1-8': 'III',
    'section3-2': 'III',
    'section3-3': 'III',
    'section3-4': 'III',
    'section3-5': 'III',
    'section3-6': 'III',
    'section3-6-1': 'III',
    'section3-6-2': 'III',
    'section3-6-3': 'III',
    'section3-7': 'III',
    'section3-8': 'III',
    'section3-9': 'III',
    'section3-10': 'III',
    'section3-10-1': 'III',
    'section3-10-2': 'III',
    'section3-10-3': 'III',
    'section3-10-4': 'III',
    'section3-10-5': 'III',
    'section3-11': 'III',
    'section3-12': 'III',
    'section3-13': 'III',
    
    // 챕터 4 (부록) 관련 콘텐츠
    'chapter4-overview': 'appendix',
    'section4-1-1': 'appendix',
    'section4-1-2': 'appendix',
    'section4-1-3': 'appendix',
    'section4-1-4': 'appendix',
    'section4-1-5': 'appendix',
    'section4-2-1': 'appendix',
    'section4-2-2': 'appendix',
    'section4-2-3': 'appendix',
    'section4-2-4': 'appendix',
    'section4-2-5': 'appendix',
    'section4-2-6': 'appendix',
    'section4-3-1': 'appendix',
    'section4-3-2': 'appendix',
    'section4-3-3': 'appendix',
    'section4-3-4': 'appendix',
    'section4-4-1': 'appendix',
    'section4-4-2': 'appendix',
    'section4-4-3': 'appendix',
    'section4-4-4': 'appendix',
    'section5-1': 'appendix',
    'section5-2': 'appendix',
    'section2-3': 'appendix'  // 기존 샘플 파일 매핑 추가
};

// 무한 루프 방지를 위한 플래그
let isLoadingContent = false;

document.addEventListener('DOMContentLoaded', function() {
    // 콘텐츠 링크 클릭 이벤트 처리
    const contentLinks = document.querySelectorAll('.content-link');
    const contentContainer = document.getElementById('content-container');
    
    // 콘텐츠 링크 클릭 이벤트 리스너 등록
    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 활성 링크 표시
            contentLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 콘텐츠 ID 가져오기
            const contentId = this.getAttribute('data-content');
            const sectionId = this.getAttribute('data-section');
            
            // 콘텐츠 로드
            loadContent(contentId, sectionId);

            // 콘텐츠 로드 후 모바일 사이드바 닫기 (전역 함수 호출)
            if (typeof window.closeSidebarOnMobile === 'function') {
                window.closeSidebarOnMobile();
            }
            
            // 콘솔에 디버그 정보 출력
            console.log('Loading content:', contentId, 'Section:', sectionId);
        });
    });
    
    // 콘텐츠 로드 함수
    function loadContent(contentId, sectionId = null) {
        // 무한 루프 방지
        if (isLoadingContent) {
            return;
        }
        isLoadingContent = true;
        
        // 로딩 메시지 표시
        contentContainer.innerHTML = '<div class="loading">콘텐츠를 불러오는 중입니다...</div>';
        
        // 콘텐츠 파일 경로 확인
        let contentPath = contentMapping[contentId];
        
        // 콘텐츠 ID가 없거나 매핑이 없는 경우 처리
        if (!contentPath) {
            console.error(`매핑되지 않은 콘텐츠 ID: ${contentId}`);
            
            // 챕터 III과 IV의 섹션 연결 문제 해결을 위한 대체 매핑
            if (contentId.startsWith('section3-')) {
                // 챕터 III의 섹션인 경우
                const sectionNum = contentId.replace('section3-', '');
                const possiblePath = `pages/chapter3/ch3_${sectionNum.padStart(2, '0')}.html`;
                console.log(`시도하는 대체 경로: ${possiblePath}`);
                contentPath = possiblePath;
            } else if (contentId.startsWith('section4-')) {
                // 챕터 IV의 섹션인 경우
                const sectionNum = contentId.replace('section4-', '');
                const possiblePath = `pages/chapter4/ch4_${sectionNum.padStart(2, '0')}.html`;
                console.log(`시도하는 대체 경로: ${possiblePath}`);
                contentPath = possiblePath;
            } else {
                contentContainer.innerHTML = `
                    <div class="error-content">
                        <h3>콘텐츠를 찾을 수 없습니다</h3>
                        <p>요청하신 콘텐츠(${contentId})를 찾을 수 없습니다.</p>
                    </div>
                `;
                isLoadingContent = false;
                return;
            }
        }
        
        // 콘텐츠 파일 로드
        fetch(contentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // 노션 콘텐츠 추출 및 표시
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // 노션 콘텐츠 추출 (article 태그 내용)
                const notionContent = doc.querySelector('article');
                
                if (notionContent) {
                    // 제목 요소 레벨 조정 (한 단계씩 낮추기)
                    const headings = notionContent.querySelectorAll('h1, h2, h3, h4, h5');
                    headings.forEach(heading => {
                        const currentLevel = parseInt(heading.tagName.substring(1));
                        if (currentLevel < 6) { // h6보다 작은 경우에만 변경
                            const newHeading = document.createElement(`h${currentLevel + 1}`);
                            newHeading.innerHTML = heading.innerHTML;
                            newHeading.id = heading.id;
                            newHeading.className = heading.className;
                            heading.parentNode.replaceChild(newHeading, heading);
                        }
                    });
                    
                    // 콘텐츠 표시
                    contentContainer.innerHTML = '';
                    
                    // 노션 콘텐츠 클래스 추가
                    const contentWrapper = document.createElement('div');
                    contentWrapper.className = 'notion-content';
                    
                    // 하위섹션 ID 추가 (하위섹션 네비게이션 기능 구현)
                    const allHeadings = notionContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
                    allHeadings.forEach((heading, index) => {
                        // 기존 ID가 없거나 덮어쓰기
                        const headingText = heading.textContent.trim();
                        
                        // 섹션 번호 추출 (예: "1-1.", "3-2.", "1-1-1." 등)
                        const sectionMatch = headingText.match(/^(\d+[-]\d+(?:[-]\d+)?)\./);
                        
                        if (sectionMatch) {
                            // 섹션 번호가 있는 경우 (예: "1-1. 제목")
                            const sectionNumber = sectionMatch[1];
                            heading.id = `section${sectionNumber}`;
                            console.log(`섹션 ID 추가 (번호 기반): ${heading.id}`);
                        } else {
                            // 섹션 번호가 없는 경우 (예: "제목")
                            heading.id = `section-${index}`;
                            console.log(`섹션 ID 추가 (인덱스 기반): ${heading.id}`);
                        }
                    });
                    
                    contentWrapper.appendChild(notionContent.cloneNode(true));
                    contentContainer.appendChild(contentWrapper);
                    
                    // 해당 콘텐츠에 맞는 탭 활성화
                    updateActiveTabForContent(contentId);

                    // URL 해시 업데이트
                    updateURLHash(contentId);

                    // welcome 페이지인 경우 애니메이션 실행
                    if (contentId === 'welcome' || contentId === 'change') {
                        // 약간의 지연 후 애니메이션 시작 (DOM이 완전히 렌더링되도록)
                        setTimeout(() => {
                        const paragraphs = document.querySelectorAll('.paragraph-container');
                        if (paragraphs.length === 0) return;
                        
                        let currentParagraphIndex = 0;
                        
                        // 초기 상태: 모든 단락 숨김
                        paragraphs.forEach(paragraph => {
                            paragraph.style.display = 'none';
                        });
                        
                        function startAnimation() {
                            // 현재 단락 선택
                            const currentParagraph = paragraphs[currentParagraphIndex];
                            if (!currentParagraph) return;
                            
                            // 모든 텍스트 요소를 미리 투명하게 설정
                            const lines = currentParagraph.querySelectorAll('.animated-text');
                            lines.forEach(line => {
                            line.style.opacity = '0';
                            });
                            
                            // 단락을 먼저 표시 (투명 상태)
                            currentParagraph.style.display = 'block';
                            
                            // 브라우저가 렌더링할 시간 부여
                            setTimeout(() => {
                            let currentLineIndex = 0;
                            
                            function animateLine() {
                                if (currentLineIndex < lines.length) {
                                lines[currentLineIndex].classList.add('visible');
                                currentLineIndex++;
                                setTimeout(animateLine, 1200);
                                } else {
                                setTimeout(() => {
                                    fadeOutParagraph(currentParagraph);
                                }, 5000);
                                }
                            }
                            
                            // 애니메이션 시작
                            animateLine();
                            }, 100);
                        }
                        
                        // 단락 사라지는 애니메이션
                        function fadeOutParagraph(paragraph) {
                            const paragraphLines = paragraph.querySelectorAll('.animated-text');
                            
                            // 모든 줄 동시에 페이드아웃
                            paragraphLines.forEach(line => {
                            line.classList.remove('visible');
                            });
                            
                            // 페이드아웃 애니메이션 완료 후 다음 단락으로 이동
                            setTimeout(() => {
                            paragraph.style.display = 'none';
                            
                            // 다음 단락으로 이동
                            currentParagraphIndex = (currentParagraphIndex + 1) % paragraphs.length;
                            startAnimation();
                            }, 1000);
                        }
                        
                        // 애니메이션 시작
                        startAnimation();
                        }, 500);
                    }

                    // 코드 블록 하이라이팅 적용
                    setTimeout(() => {
                        // Python 코드 블록 처리
                        document.querySelectorAll('code.language-Python, code.language-python').forEach((block) => {
                            // 인라인 스타일 제거
                            block.removeAttribute('style');
                            
                            // 클래스 이름 변경
                            block.className = 'language-python';
                            
                            // 부모가 pre가 아니면 pre로 감싸기
                            if (block.parentElement.tagName !== 'PRE') {
                                const pre = document.createElement('pre');
                                pre.style.margin = '1.5em 0';
                                pre.style.padding = '0';
                                pre.style.borderRadius = '6px';
                                pre.style.overflow = 'hidden';
                                pre.style.backgroundColor = '#282c34';
                                
                                const parent = block.parentElement;
                                parent.insertBefore(pre, block);
                                pre.appendChild(block);
                            }
                            
                            // 코드 내용 정리 - 줄바꿈과 공백 처리
                            let codeText = block.textContent;
                            // 들여쓰기 일관성 유지
                            const lines = codeText.split('\n');
                            const codeHasIndent = lines.some(line => line.startsWith('  ') || line.startsWith('    '));
                            
                            if (codeHasIndent) {
                                // 코드 정리
                                block.textContent = codeText;
                            }
                            
                            // 하이라이팅 적용
                            if (typeof hljs !== 'undefined') {
                                hljs.highlightElement(block);
                            }
                        });
                        
                        // pre > code 블록도 처리
                        document.querySelectorAll('pre > code:not(.language-python)').forEach((block) => {
                        // Python 코드인지 내용으로 유추
                            if (block.textContent.includes('def ') || 
                                block.textContent.includes('import ') || 
                                block.textContent.includes('class ')) {
                                block.className = 'language-python';
                            }
                            
                        // 하이라이팅 적용
                            if (typeof hljs !== 'undefined') {
                                hljs.highlightElement(block);
                            }
                        });

                        // 오디오 플레이어 초기화 (챕터1 페이지들)
                        if (contentId === 'prologue' || contentId === 'chapter1' || 
                            contentId === 'chapter2' || contentId === 'chapter3' || 
                            contentId === 'chapter4' || contentId === 'chapter5') {
                            setTimeout(initAudioPlayer, 100);
                        }
                    }, 500);

                    // 특정 섹션으로 스크롤 (있는 경우)
                    if (sectionId) {
                        setTimeout(() => {
                            // 정확한 ID로 먼저 시도
                            let section = document.getElementById(sectionId);
                            
                            // ID를 찾지 못한 경우 대체 방법 시도
                            if (!section) {
                                console.log(`정확한 ID로 섹션을 찾지 못함: ${sectionId}, 대체 방법 시도 중...`);
                                
                                // 1. 숫자만 추출하여 시도 (예: section1-2 -> 1-2)
                                const sectionNumber = sectionId.replace('section', '');
                                
                                // 2. 모든 헤딩 요소를 검색하여 텍스트에 해당 번호가 포함된 요소 찾기
                                const allElements = contentContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
                                for (let i = 0; i < allElements.length; i++) {
                                    const element = allElements[i];
                                    if (element.textContent.includes(sectionNumber + '.')) {
                                        section = element;
                                        console.log(`대체 방법으로 섹션 찾음: ${element.textContent}`);
                                        break;
                                    }
                                }
                            }
                            
                            // 섹션을 찾은 경우 스크롤
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                                
                                // 섹션 하이라이트
                                section.classList.add('highlight-section');
                                setTimeout(() => {
                                    section.classList.remove('highlight-section');
                                }, 2000);
                            } else {
                                console.error(`섹션을 찾을 수 없음: ${sectionId}`);
                            }
                        }, 500);
                    }
                    
                    // 무한 루프 방지 플래그 해제
                    isLoadingContent = false;
                } else {
                    // 노션 콘텐츠를 찾을 수 없는 경우
                    contentContainer.innerHTML = `
                        <div class="error-content">
                            <h3>콘텐츠 형식 오류</h3>
                            <p>노션 콘텐츠를 추출할 수 없습니다. 파일 형식을 확인해주세요.</p>
                        </div>
                    `;
                    isLoadingContent = false;
                }
            })
            .catch(error => {
                console.error('콘텐츠 로드 오류:', error);
                contentContainer.innerHTML = `
                    <div class="error-content">
                        <h3>콘텐츠 로드 오류</h3>
                        <p>${error.message}</p>
                    </div>
                `;
                isLoadingContent = false;
            });
    }
    
    // 콘텐츠 ID에 따라 탭 활성화 함수
    function updateActiveTabForContent(contentId) {
        // 현재 콘텐츠에 해당하는 탭 ID 가져오기
        const tabId = tabMapping[contentId];
        
        // 탭 ID가 있으면 해당 탭 활성화
        if (tabId) {
            console.log('Activating tab:', tabId, 'for content:', contentId);
            
            // 모든 탭과 콘텐츠에서 active 클래스 제거
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 해당 탭과 콘텐츠에 active 클래스 추가
            const selectedTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
            const selectedContent = document.getElementById(`tab-${tabId}`);
            
            if (selectedTab && selectedContent) {
                selectedTab.classList.add('active');
                selectedContent.classList.add('active');
                
                // 사이드바 업데이트 (전역 함수로 정의된 경우 사용, 아니면 내부 함수 사용)
                if (typeof window.updateSidebar === 'function') {
                    window.updateSidebar(tabId);
                } else {
                    updateSidebarInContentLoader(tabId);
                }
            }
        }
    }
    
    // 내부 사이드바 업데이트 함수 (app.js의 함수와 충돌 방지를 위해 이름 변경)
    function updateSidebarInContentLoader(activeTabId) {
        // 모든 목차 항목 숨기기
        const sidebarItems = document.querySelectorAll('.table-of-contents > li');
        sidebarItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // 활성화된 탭에 해당하는 목차만 표시
        const activeItem = document.querySelector(`.table-of-contents > li > a[data-tab="${activeTabId}"]`);
        if (activeItem) {
            const parentLi = activeItem.parentNode;
            if (parentLi) {
                parentLi.style.display = 'block';
            }
        }
    }

    // 오디오 플레이어 초기화 함수 (범용)
    function initAudioPlayer() {
        // 페이지 내 모든 오디오 토글 버튼 찾기
        const audioButtons = document.querySelectorAll('.audio-toggle-btn');
        
        audioButtons.forEach(button => {
            const buttonId = button.id;
            let audioId;
            
            // 버튼 ID에 따라 해당 오디오 요소 ID 결정
            if (buttonId === 'audio-toggle') {
                audioId = 'prologue-audio';
            } else if (buttonId === 'audio-toggle-ch1') {
                audioId = 'chapter1-audio';
            } else if (buttonId === 'audio-toggle-ch2') {
                audioId = 'chapter2-audio';
            } else if (buttonId === 'audio-toggle-ch3') {
                audioId = 'chapter3-audio';
            } else if (buttonId === 'audio-toggle-ch4') {
                audioId = 'chapter4-audio';
            } else if (buttonId === 'audio-toggle-ch5') {
                audioId = 'chapter5-audio';
            }
            
            const audio = document.getElementById(audioId);
            if (!audio) return;
            
            let isPlaying = false;
            
            button.addEventListener('click', function() {
                if (isPlaying) {
                    audio.pause();
                    isPlaying = false;
                    console.log(`${audioId} 일시정지`);
                } else {
                    audio.play().then(() => {
                        isPlaying = true;
                        console.log(`${audioId} 재생 시작`);
                    }).catch(error => {
                        console.error(`${audioId} 재생 오류:`, error);
                    });
                }
            });
            
            // 오디오 종료시 상태 초기화
            audio.addEventListener('ended', function() {
                isPlaying = false;
                console.log(`${audioId} 재생 완료`);
            });
        });
    }
    
    // loadContent 함수를 전역으로 노출
    window.loadContent = loadContent;
    
    // 초기 페이지 로드 또는 Hash 라우터 초기화
    initHashRouter();
});

// URL Hash 라우팅 함수들
function initHashRouter() {
    // 페이지 로드 시 해시 확인
    const hash = window.location.hash.substring(1); // # 제거
    if (hash && contentMapping[hash]) {
        // window.loadContent가 존재하는지 확인
        if (typeof window.loadContent === 'function') {
            window.loadContent(hash);
        } else {
            // DOMContentLoaded 후에 다시 시도
            setTimeout(() => {
                if (typeof window.loadContent === 'function') {
                    window.loadContent(hash);
                }
            }, 100);
        }
    } else {
        // 해시가 없으면 기본 welcome 페이지 로드
        setTimeout(() => {
            if (typeof window.loadContent === 'function') {
                window.loadContent('welcome');
            }
        }, 100);
    }
    
    // 해시 변경 시 콘텐츠 로드
    window.addEventListener('hashchange', function() {
        if (isLoadingContent) return; // 로딩 중이면 무시
        
        const newHash = window.location.hash.substring(1);
        if (newHash && contentMapping[newHash]) {
            if (typeof window.loadContent === 'function') {
                window.loadContent(newHash);
            }
        }
    });
}

// 브라우저의 뒤로가기/앞으로가기 이벤트 처리
window.addEventListener('popstate', function(event) {
    if (isLoadingContent) return; // 로딩 중이면 무시
    
    // URL 해시에서 콘텐츠 ID 추출
    const hash = window.location.hash.substring(1);
    if (hash && contentMapping[hash]) {
        if (typeof window.loadContent === 'function') {
            window.loadContent(hash);
        }
    } else {
        // 해시가 없으면 welcome 페이지로
        if (typeof window.loadContent === 'function') {
            window.loadContent('welcome');
        }
    }
});

// URL 해시 업데이트 함수
function updateURLHash(contentId) {
    // 현재 해시와 다를 때만 업데이트 (무한 루프 방지)
    const currentHash = window.location.hash.substring(1);
    if (currentHash !== contentId && !isLoadingContent) {
        // replaceState 사용하여 히스토리에 추가하지 않고 URL만 업데이트
        window.history.replaceState(null, null, '#' + contentId);
    }
}
