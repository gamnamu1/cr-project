# CR 프로젝트 웹사이트

## 프로젝트 구조

```
cr_project/
├── README.md
├── assets/
│   ├── audio/
│   │   ├── cr_ch0.mp3
│   │   ├── cr_ch1.mp3
│   │   ├── cr_ch2.mp3
│   │   ├── cr_ch3.mp3
│   │   ├── cr_ch4.mp3
│   │   ├── cr_ch5.mp3
│   │   ├── cr_podcast1.mp3
│   │   ├── cr_podcast2.mp3
│   │   ├── cr_podcast3.mp3
│   │   ├── cr_podcast4.mp3
│   │   ├── cr_podcast7.mp3
│   │   └── cr_podcast8.mp3
│   ├── css/
│   │   ├── content/
│   │   ├── content.css
│   │   ├── highlight/
│   │   ├── highlight.css
│   │   ├── main.css
│   │   ├── sidebar/
│   │   └── sidebar.css 
│   ├── evaluations/
│   │   ├── user_guide.txt
│   │   └── template.md
│   ├── images/
│   │   ├── blueprint-bg.jpg
│   │   ├── chapter1-front.jpg
│   │   ├── chapter2-front.jpg
│   │   ├── chapter3-front.jpg
│   │   └── chapter4-front.jpg
│   └── js/
│       ├── app.js
│       ├── content-loader.js
│       └── welcome-animation.js
├── index.html (CR 프로젝트)
└── pages/
    │   ├── chapter0-overview.html (선언문)
    ├── chapter1/
    │   ├── chapter1-overview.html (I. 프로젝트: 배경)
    │   ├── ch1_00.html (프롤로그. 왜 우리 사회는 바뀌지 않는가?)
    │   ├── ch1_01.html (1. 언론은 어떻게 한국사회를 좀먹고 있는가?)
    │   ├── ch1_02.html (2. 언론은 왜 제역할을 하지 못하는가?)
    │   ├── ch1_03.html (3. 누가 언론을 바꿀 수 있을까?)
    │   ├── ch1_04.html (4. 시민이 주도하는 언론 개혁, 어떻게 실현할까?)
    │   └── ch1_05.html (5. 집단적 상상과 실천으로!)
    ├── chapter2/
    │   ├── chapter2-overview.html (II. 실행 계획)
    │   ├── ch2_01_01.html (1-1. 기본 흐름)
    │   ├── ch2_01_02.html (1-2. 단계별 실행 계획)
    │   ├── ch2_02_00.html (2-0. 핵심 인력(초기) 구성 개요)
    │   ├── ch2_02_01_01.html (2-1-1. 미디어 전문가)
    │   ├── ch2_02_02_01.html (2-2-1. AI 전문가)
    │   ├── ch2_02_02_02.html (2-2-2. 플랫폼 개발자)
    │   ├── ch2_02_03_01.html (2-3-1. 법률 지원 조력자)
    │   ├── ch2_02_03_02.html (2-3-2. 경영 지원 조력자)
    │   ├── ch2_02_03_03.html (2-3-3. 캠페이너)
    │   ├── ch2_03.html (3. 벤치마킹)
    │   ├── ch2_03_01.html (3-1. 공적 플랫폼으로 설장)
    │   ├── ch2_03_02.html (3-2. 비즈니스 모델 전환)
    │   ├── ch2_03_03.html (3-3. 부분적 참고 사례)
    │   └── ch2_03_04.html (3-4. 프로젝트를 위한 시사점)
    ├── chapter3/
    │   ├── chapter3-overview.html (III. 기술적 구현 방안)
    │   ├── ch3_01.html (1. 문제적 보도 관행 분류)
    │   ├── ch3_01_01.html (1-1. 진실성과 정확성)
    │   ├── ch3_01_02.html (1-2. 투명성과 책임성)
    │   ├── ch3_01_03.html (1-3. 균형성과 공정성)
    │   ├── ch3_01_04.html (1-4. 독립성과 자율성)
    │   ├── ch3_01_05.html (1-5. 인권과 프라이버시 존중)
    │   ├── ch3_01_06.html (1-6. 전문성과 심층성)
    │   ├── ch3_01_07.html (1-7. 언어와 표현의 윤리)
    │   ├── ch3_01_08.html (1-8. 디지털 환경의 윤리)
    │   ├── ch3_02.html (2. 분류 체계 평가/검증)
    │   ├── ch3_03.html (3. 기사 유형 분류 및 평가 대상)
    │   ├── ch3_04.html (4. 다차원 매트릭스 기반 평가)
    │   ├── ch3_05.html (5. 규범 체계와 매트릭스 매칭)
    │   ├── ch3_06.html (6. 기술 적용 방식)
    │   ├── ch3_06_01.html (6-1. AI 모델 전략 및 의사결정)
    │   ├── ch3_06_02.html (6-2. 시스템 아키텍처 설계)
    │   ├── ch3_06_03.html (6-3. 성능 최적화 및 패턴 인식 기술)
    │   ├── ch3_07.html (7. 프롬프트 기반 평가 시스템 구현)
    │   ├── ch3_08.html (8. 기사 심층성 평가 시스템)
    │   ├── ch3_09.html (9. 유형별 맞춤 평가)
    │   ├── ch3_10.html (10. 웹앱 서비스 흐름)
    │   ├── ch3_10_01.html (10-1. 사용자 경험 흐름 설계)
    │   ├── ch3_10_02.html (10-2. 결과 전달 및 시각화 시스템)
    │   ├── ch3_10_03.html (10-3. 서비스 안정성 및 확장성)
    │   ├── ch3_10_04.html (10-4. 평가 리포트 모델)
    │   ├── ch3_10_05.html (10-5. 평가 리포트 샘플(점수화))
    │   ├── ch3_11.html (11. 평가 시스템 검증 및 품질 관리)
    │   ├── ch3_12.html (12. 법적 고려사항 및 개인정보 보호)
    │   └── ch3_13.html (13. 미디어 비평 생태계 확장 전략)
    ├── chapter4/
    │   ├── chapter4-overview.html (IV. 부록)
    │   ├── ch4_01_01.html (1-1. CR 소개 &ldquo;참여를 고민하는 시민 전문가에게&hellip;&rdquo;)
    │   ├── ch4_01_02.html (1-2. 언론 윤리 규범에 관한 대화)
    │   ├── ch4_01_03.html (1-3. 점수화 없는 CR 프로젝트)
    │   ├── ch4_01_04.html (1-4. 평가 리포트 샘플(점수화 없는, 세 가지 버전))
    │   ├── ch4_01_05.html (1-5. 플랫폼 구축 3단계 시나리오)
    │   ├── ch4_02_01.html (2-1. CR 플랫폼 구조 설계)
    │   ├── ch4_02_02.html (2-2. 웹앱 정보구조 설계 제안. 페이지와 메뉴 구성)
    │   ├── ch4_02_03.html (2-3. 회원 관리 및 과금 방식에 대한 아이디어)
    │   ├── ch4_02_04.html (2-4. 나쁜 저널리즘 요소 식별 및 제출 가이드)
    │   ├── ch4_02_05.html (2-5. 문제적 표현 패턴 (샘플))
    │   ├── ch4_02_06.html (2-6. 평가 결과의 일관성 문제)
    │   ├── ch4_03_01.html (3-1. 프롬프트 템플릿 시스템과 MCP 활용 방안)
    │   ├── ch4_03_02.html (3-2. 프롬프트 템플릿 초안 (샘플))
    │   ├── ch4_03_03.html (3-3. 기사 정보 수집 기술 가이드)
    │   ├── ch4_03_04.html (3-4. 사용자 경험 시나리오)
    │   ├── ch4_04_00.html (4-0. [제안] 자율규제 도구로 활용)
    │   ├── ch4_04_00_01.html (4-0-1. [재요청] 답변에 대한 재요청)
    │   ├── ch4_04_01.html (4-1. 아카이브 구축 가이드)
    │   ├── ch4_04_02.html (4-2. 다른 비평 웹앱과의 연대 아이디어)
    │   ├── ch4_04_03.html (4-3. 이어 생겨날 비평 플랫폼 목록)
    │   ├── ch4_04_04.html (4-4. 국제적 연대가 필요한 이유와 의미)
    │   ├── ch4_05_01.html (5-1. 참고 사이트)
    │   └── ch4_05_02.html (5-2. 지금 우리에게 필요한 것···)
    └── welcome.html (CR 프로젝트)
```

# CR 프로젝트 가이드 문서

## 프로젝트 개요
- **목적**: 시민이 주도하는 뉴스 신뢰도 평가 플랫폼 구축
- **현재 상태**: 노션에서 내려받은 HTML 페이지들을 웹사이트로 통합한 프로젝트

## 배포 환경
- **저장소**: GitHub Repository (gamnamu1/cr-project )
- **호스팅**: Netlify (자동 배포)
- **도메인 등록**: 가비아 (cr-project.org)
- **DNS/CDN**: Cloudflare
- **프로덕션 URL**: https://cr-project.org
- **Netlify URL**: https://cr-project.netlify.app/
- **GitHub Pages URL**: https://gamnamu1.github.io/cr-project/ (백업 )

## 사이트 구조
- **레이아웃**: 2단 구조 (좌측 사이드바 네비게이션 + 우측 콘텐츠 영역)
- **콘텐츠 조직**: 4개 주요 챕터로 구성, 각 챕터는 여러 하위 페이지로 세분화
- **네비게이션**: SPA(Single Page Application) 방식의 동적 콘텐츠 로딩

### 주요 챕터 구성
1. **I 프로젝트: 배경**: 미디어 현황 분석 및 방향성 제시
2. **II 실행 계획**: 단계별 실행 계획 및 인력 구성
3. **III 비평 플랫폼 설계**: 평가 시스템 및 기술적 구현 설계
4. **IV 부록**: 추가 자료 및 참고 사항

## 기술 스택
- **프론트엔드**: HTML5, CSS3, Vanilla JavaScript
- **콘텐츠 로딩**: AJAX를 통한 동적 콘텐츠 로드 (content-loader.js)
- **스타일링**: 모듈화된 CSS (main.css, sidebar.css, content.css, highlight.css)
- **오디오**: HTML5 Audio API, MP3 지원
- **접근성**: 스크린 리더 호환, 키보드 네비게이션
- **검색**: 클라이언트 사이드 검색 (브라우저 내장)
- **호스팅**: Netlify + GitHub Pages 호환

## 오디오 기능
- **팟캐스트**: CR 프로젝트 관련 팟캐스트 4편 제공
- **챕터별 오디오**: 각 챕터의 오디오 버전 제공 (TTS 또는 녹음)
- **지원 형식**: MP3
- **접근성**: 시각 장애인 및 오디오 학습 선호자를 위한 대체 콘텐츠

### 오디오 파일 구조
- `cr_ch0.mp3` ~ `cr_ch5.mp3`: 각 챕터별 오디오
- `cr_podcast1.mp3` ~ `cr_podcast4.mp3`: CR 프로젝트 관련 팟캐스트

## 평가 시스템
- **목적**: 뉴스 기사의 품질과 신뢰성을 AI 기반으로 평가
- **사용자 가이드**: `assets/evaluations/user_guide.txt`
- **평가 템플릿**: `assets/evaluations/template.md`
- **평가 기준**: 8개 차원 기반 다차원 매트릭스 시스템
  - 진실성과 정확성
  - 투명성과 책임성
  - 균형성과 공정성
  - 독립성과 자율성
  - 인권과 프라이버시 존중
  - 전문성과 심층성
  - 언어와 표현의 윤리
  - 디지털 환경의 윤리

## 사용자 가이드

### 웹사이트 사용법
1. **네비게이션**: 좌측 사이드바에서 원하는 챕터/섹션 선택
2. **탭 전환**: 상단 탭으로 주요 챕터 간 빠른 이동
3. **모바일**: 햄버거 메뉴(☰)로 사이드바 토글
4. **검색**: 브라우저 검색 기능(Ctrl+F) 활용 권장

### 콘텐츠 구성
- **I. 프로젝트: 배경**: CR 프로젝트의 필요성과 목적
- **II. 실행 계획**: 구체적인 실행 로드맵과 팀 구성
- **III. 비평 플랫폼 설계**: 기술적 구현 방안과 평가 시스템
- **IV. 부록**: 추가 자료, 샘플, 개발 가이드

## 핵심 파일 설명

### HTML
- **index.html**: 메인 진입점, 기본 레이아웃과 구조 정의
- **pages/*.html**: 각 챕터 및 하위 페이지 콘텐츠 HTML 파일

### CSS
- **main.css**: 전역 스타일 및 공통 요소 정의
- **sidebar.css**: 사이드바 네비게이션 스타일
- **content.css**: 콘텐츠 영역 스타일링
- **highlight.css**: 코드 블록 및 강조 표시 스타일

### JavaScript
- **app.js**: 메인 애플리케이션 로직, 이벤트 핸들러, UI 인터랙션
- **content-loader.js**: AJAX를 통한 콘텐츠 로드 및 페이지 전환 관리
- **welcome-animation.js**: 웰컴 페이지 애니메이션 효과

## 개발 환경 설정

### 로컬 개발
1. 프로젝트 클론: `git clone [repository-url]`
2. 로컬 서버 실행: `python -m http.server 8000` 또는 Live Server 사용
3. 브라우저에서 `http://localhost:8000` 접속

### 콘텐츠 수정
1. `pages/` 폴더의 해당 HTML 파일 수정
2. `content-loader.js`의 `contentMapping` 확인
3. 새 페이지 추가 시 `index.html` 사이드바 메뉴도 업데이트

### 스타일 수정
- 전역 스타일: `assets/css/main.css`
- 사이드바: `assets/css/sidebar.css`
- 콘텐츠 영역: `assets/css/content.css`
- 코드 하이라이팅: `assets/css/highlight.css`

## 주요 문제점 및 수정 방법

### 사이드바 메뉴 수정
- `index.html` 파일의 사이드바 메뉴 항목의 `data-content` 속성과 `content-loader.js`의 `contentMapping` 객체의 키가 일치하는지 확인 필요
- 불일치 항목은 수정 필요

### 추가 개선 작업

#### 노션 HTML 파일 구조 분석 및 콘텐츠 추출 개선
- 현재는 `article` 태그를 찾아 추출하는 방식
- 노션 HTML 구조에 따라 다른 선택자 사용이 필요할 수 있음
- 예: `doc.querySelector('article') || doc.querySelector('.notion-content') || doc.querySelector('main')`

#### 스타일 통합 및 개선
- 노션 HTML 파일의 스타일과 웹사이트 스타일 통합 필요
- 이미지, 테이블 등 노션 요소에 대한 스타일 정의 추가

#### 반응형 디자인 개선
- 모바일 기기 대응을 위한 반응형 디자인 강화
- 미디어 쿼리를 통한 사이드바 및 콘텐츠 영역 조정 필요

## 배포 준비 및 방법

### GitHub Repository 관리
1. 소스 코드는 GitHub Repository에 저장
2. `main` 브랜치를 기본 배포 브랜치로 사용
3. 모든 변경사항은 GitHub에 커밋/푸시

### Netlify 배포 설정
1. **자동 배포**: GitHub Repository와 연동하여 자동 빌드/배포
2. **배포 URL**: https://cr-project.netlify.app/
3. **커스텀 도메인**: cr-project.org로 도메인 연결
4. **HTTPS**: 자동 SSL 인증서 적용

### 배포 전 체크리스트
1. 모든 상대 경로가 올바른지 확인 (절대 경로 사용 금지)
2. 외부 리소스가 HTTPS를 사용하는지 확인
3. 이미지 및 오디오 파일 경로 확인
4. 모바일 반응형 테스트
5. 다양한 브라우저에서 호환성 테스트

### 도메인 설정
- **Netlify 도메인**: cr-project.netlify.app
- **커스텀 도메인**: cr-project.org
- **DNS 설정**: 도메인 등록업체에서 Netlify DNS 서버로 설정

## 작업 진행 권장 순서
1. `content-loader.js` 파일의 `contentMapping` 객체 수정
2. `index.html` 파일의 사이드바 메뉴 항목 확인 및 수정
3. 노션 HTML 파일 구조 분석 및 콘텐츠 추출 방식 개선
4. CSS 스타일 통합 및 개선
5. 반응형 디자인 테스트 및 개선
6. GitHub에 커밋/푸시 후 Netlify 자동 배포 확인

## 주의사항
1. 파일 경로와 이름 변경 시 `contentMapping` 객체도 함께 업데이트
2. 노션 HTML 파일 구조 변경 시 콘텐츠 추출 로직도 수정 필요
3. 외부 리소스(이미지, 스크립트 등)의 경로 확인
4. 배포 전 다양한 브라우저와 기기에서 테스트
5. 큰 HTML 파일의 경우 로딩 성능 최적화 고려 (지연 로딩 등)
6. 오디오 파일 용량 관리 (필요시 압축)

## 프로젝트 파일 구조
프로젝트는 다음과 같은 구조로 구성되어 있습니다:
- 루트 디렉토리: index.html, README.md
- assets/: CSS, JavaScript, 이미지, 오디오 파일
- pages/: 각 챕터별 HTML 콘텐츠 파일

각 챕터는 하위 디렉토리(chapter1/, chapter2/ 등)로 구성되어 있으며, 챕터 개요 페이지(chapter1-overview.html 등)가 별도로 존재합니다.

## 향후 계획
- [ ] 실제 기사 평가 API 연동
- [ ] 사용자 계정 시스템 구축
- [ ] 평가 결과 아카이브 기능
- [ ] 모바일 앱 개발
- [ ] 실시간 뉴스 피드 연동
- [ ] 커뮤니티 기능 (댓글, 토론)
- [ ] 평가 결과 공유 기능
- [ ] 브라우저 확장 프로그램 개발
