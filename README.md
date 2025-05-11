# CR 프로젝트 웹사이트

노션에서 내려받은 HTML 페이지들을 웹사이트로 통합한 프로젝트입니다.

## 프로젝트 구조

```
cr_project/
├── README.md
├── assets/
│   ├── css/
│   │   ├── content/
│   │   ├── content.css
│   │   ├── highlight/
│   │   ├── highlight.css
│   │   ├── main.css
│   │   ├── sidebar/
│   │   └── sidebar.css
│   ├── images/
│   │   ├── blueprint-bg.jpg
│   │   ├── chapter1-front.jpg
│   │   └── chapter2-front.jpg
│   └── js/
│       ├── app.js
│       ├── content-loader.js
│       └── welcome-animation.js
├── index.html (CR 프로젝트)
└── pages/
    ├── chapter1/
    │   ├── ch1_00.html (프롤로그. 왜 우리 사회는 바뀌지 않는가?)
    │   ├── ch1_01.html (1. 언론은 어떻게 한국사회를 좀먹고 있는가?)
    │   ├── ch1_02.html (2. 언론은 왜 제역할을 하지 못하는가?)
    │   ├── ch1_03.html (3. 누가 언론을 바꿀 수 있을까?)
    │   ├── ch1_04.html (4. 시민이 주도하는 언론 개혁, 어떻게 실현할까?)
    │   └── ch1_05.html (5. 집단적 상상과 실천으로!)
    ├── chapter1-overview.html (I. 프로젝트: 배경)
    ├── chapter2/
    │   ├── ch2_01_01.html (1-1. 기본 흐름)
    │   ├── ch2_01_02.html (1-2. 단계별 실행 계획)
    │   ├── ch2_02_00.html (2-0. 핵심 인력(초기) 구성 개요)
    │   ├── ch2_02_01_01.html (2-1-1. 미디어 전문가)
    │   ├── ch2_02_02_01.html (2-2-1. AI 전문가)
    │   ├── ch2_02_02_02.html (2-2-2. 플랫폼 개발자)
    │   ├── ch2_02_03_01.html (2-3-1. 법률 지원 조력자)
    │   ├── ch2_02_03_02.html (2-3-2. 경영 지원 조력자)
    │   ├── ch2_02_03_03.html (2-3-3. 캠페이너)
    │   └── ch2_03.html (3. 벤치마킹 사례)
    ├── chapter2-overview.html (II. 실행 계획)
    ├── chapter3/
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
    │   ├── ch3_04_01.html (4-1. AI 모델 전략 및 의사결정)
    │   ├── ch3_04_02.html (4-2. 시스템 아키텍처 설계)
    │   ├── ch3_04_03.html (4-3. 성능 최적화 및 패턴 인식 기술)
    │   ├── ch3_05.html (5. 다차원 매트릭스 기반 평가)
    │   ├── ch3_06.html (6. 기사 심층성 평가 시스템)
    │   ├── ch3_07.html (7. 유형별 맞춤 평가)
    │   ├── ch3_08.html (8. 규범 체계와 매트릭스 매칭)
    │   ├── ch3_09.html (9. 프롬프트 기반 평가 시스템 구현)
    │   ├── ch3_10_01.html (10-1. 사용자 경험 흐름 설계)
    │   ├── ch3_10_02.html (10-2. 결과 전달 및 시각화 시스템)
    │   ├── ch3_10_03.html (10-3. 서비스 안정성 및 확장성)
    │   ├── ch3_10_04.html (10-4. 평가 리포트 모델)
    │   ├── ch3_10_05.html (10-5. 평가 리포트 샘플(점수화))
    │   ├── ch3_11.html (11. 평가 시스템 검증 및 품질 관리)
    │   ├── ch3_12.html (12. 법적 고려사항 및 개인정보 보호)
    │   └── ch3_13.html (13. 미디어 비평 생태계 확장 전략)
    ├── chapter3-overview.html (III. 기술적 구현 방안)
    ├── chapter4/
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
    │   ├── ch4_04_01.html (4-1. 아카이브 구축 가이드)
    │   ├── ch4_04_02.html (4-2. 다른 비평 웹앱과의 연대 아이디어)
    │   ├── ch4_04_03.html (4-3. 이어 생겨날 비평 플랫폼 목록)
    │   ├── ch4_04_04.html (4-4. 국제적 연대가 필요한 이유와 의미)
    │   ├── ch4_05_01.html (5-1. 참고 사이트)
    │   └── ch4_05_02.html (5-2. 지금 우리에게 필요한 것···)
    ├── chapter4-overview.html (IV. 부록)
    └── welcome.html (CR 프로젝트)
```

## 커서AI(Cursor AI) 작업 지침

### 1. 주요 문제점 및 수정 방법

#### 1.2 사이드바 메뉴 수정

`index.html` 파일의 사이드바 메뉴에서 각 항목의 `data-content` 속성이 `content-loader.js`의 `contentMapping` 객체의 키와 일치하는지 확인하고 수정해야 합니다.

```html
<!-- index.html 파일에서 사이드바 메뉴 수정 예시 -->
<li><a href="#" class="content-link" data-content="section3-1-1">1-1. 진실성과 정확성</a></li>
```

### 2. 추가 개선 작업

#### 2.1 노션 HTML 파일 구조 분석 및 콘텐츠 추출 개선

노션 HTML 파일에서 콘텐츠를 추출하는 방식을 개선할 수 있습니다. 현재는 `article` 태그를 찾아 추출하고 있지만, 노션 HTML 구조에 따라 다른 선택자가 필요할 수 있습니다.

```javascript
// content-loader.js 파일에서 콘텐츠 추출 부분 수정 예시
const notionContent = doc.querySelector('article') || doc.querySelector('.notion-content') || doc.querySelector('main');
```

#### 2.2 스타일 통합 및 개선

노션 HTML 파일의 스타일과 웹사이트의 스타일을 더 잘 통합하기 위해 CSS 파일을 수정할 수 있습니다.

```css
/* content.css 파일에 노션 스타일 추가 예시 */
.notion-content img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
}

.notion-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}
```

#### 2.3 반응형 디자인 개선

모바일 기기에서의 사용성을 개선하기 위해 반응형 디자인을 강화할 수 있습니다.

```css
/* sidebar.css 파일에 반응형 스타일 추가 예시 */
@media (max-width: 768px) {
    #sidebar {
        width: 250px;
    }
    
    main {
        margin-left: 0;
    }
}
```

### 3. 배포 준비 및 방법

#### 3.1 Netlify 배포 준비

Netlify에 직접 배포하기 위한 준비 사항:

1. 모든 상대 경로가 올바른지 확인 (절대 경로 사용 금지)
2. 외부 리소스(CDN 등)가 HTTPS를 사용하는지 확인
3. 필요한 경우 `netlify.toml` 파일 생성:

```toml
# netlify.toml 예시
[build]
  publish = "/"
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3.2 GitHub Pages 배포 준비

GitHub Pages를 통해 배포하기 위한 준비 사항:

1. 저장소 루트에 `.nojekyll` 파일 생성 (Jekyll 처리 방지)
2. 기본 URL이 하위 경로인 경우(`username.github.io/project-name`), 모든 리소스 경로 앞에 `/project-name`을 추가하거나 상대 경로 사용

```javascript
// GitHub Pages 배포를 위한 baseUrl 설정 예시
const baseUrl = location.hostname.includes('github.io') ? '/project-name' : '';
const contentPath = baseUrl + '/' + contentMapping[contentId];
```

### 4. 작업 진행 순서 권장사항

1. 먼저 `content-loader.js` 파일의 `contentMapping` 객체 수정
2. `index.html` 파일의 사이드바 메뉴 항목 확인 및 수정
3. 노션 HTML 파일 구조 분석 및 콘텐츠 추출 방식 개선
4. CSS 스타일 통합 및 개선
5. 반응형 디자인 테스트 및 개선
6. 배포 전 최종 테스트 및 준비

### 5. 주의사항

1. 파일 경로와 이름을 변경할 때는 항상 `contentMapping` 객체도 함께 업데이트
2. 노션 HTML 파일의 구조가 변경될 경우 콘텐츠 추출 로직도 수정 필요
3. 외부 리소스(이미지, 스크립트 등)의 경로가 올바른지 확인
4. 배포 전 다양한 브라우저와 기기에서 테스트 필요
5. 큰 HTML 파일의 경우 로딩 성능 최적화 고려 (지연 로딩 등)

이 지침을 참고하여 커서AI를 통해 웹사이트를 세부적으로 조정하고 개선할 수 있습니다.
