/**
 * 메인 애플리케이션 스크립트
 */
document.addEventListener('DOMContentLoaded', function() {
    // 탭 전환 기능
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const sidebarItems = document.querySelectorAll('.table-of-contents > li');
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobile-sidebar-toggle');
    
    // 초기 상태 설정 - 첫 번째 탭의 목차만 표시
    updateSidebar(tabs[0].getAttribute('data-tab'));
    
    // 탭 클릭 이벤트
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            if (tabId === 'I') {
                loadContent('chapter1-overview');
            } else if (tabId === 'II') {
                loadContent('chapter2-overview');
            } else if (tabId === 'III') {
                loadContent('chapter3-overview');
            } else if (tabId === 'appendix') {
                loadContent('chapter4-overview');
            }
        });
    });
    
    // 사이드바 탭 링크 클릭 이벤트
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // 탭 전환 함수
    function switchTab(tabId) {
        // 모든 탭과 콘텐츠에서 active 클래스 제거
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // 클릭된 탭과 해당 콘텐츠에 active 클래스 추가
        const selectedTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(`tab-${tabId}`);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
            
            // 사이드바 목차 업데이트
            updateSidebar(tabId);
        }
    }
    
    // 사이드바 목차 업데이트 함수
    function updateSidebar(activeTabId) {
        // 모든 목차 항목 숨기기
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
    
    // 모바일 사이드바 토글 기능
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // 사이드바 외부 클릭 시 닫기 (모바일)
    document.addEventListener('click', function(e) {
    if (sidebar && mobileToggle) {
        const isClickInside = sidebar.contains(e.target) || 
                            mobileToggle.contains(e.target);
        
        if (!isClickInside && window.innerWidth <= 768 && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

    // 반응형 처리
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });

    // 사이드바 닫기 함수 (전역)
    window.closeSidebarOnMobile = function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
};

    // 초기화면 자동 로드 (새로 추가된 부분)
    loadContent('welcome');
});

// 전역 이벤트 위임 - 동적으로 추가된 content-link 요소도 처리
document.addEventListener('click', function(e) {
    // 클릭된 요소 또는 부모 요소가 content-link 클래스를 가지고 있는지 확인
    const link = e.target.closest('.content-link');
    if (link) {
        e.preventDefault();
        const contentId = link.getAttribute('data-content');
        const sectionId = link.getAttribute('data-section');
        
        if (contentId) {
            // 콘텐츠 로드 함수 호출
            loadContent(contentId, sectionId);
            
            // 모바일 사이드바 닫기 (있는 경우)
            if (typeof window.closeSidebarOnMobile === 'function') {
                window.closeSidebarOnMobile();
            }
            
            console.log('링크 클릭됨:', contentId, sectionId);
        }
    }
});

