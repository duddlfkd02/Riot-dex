# ✨ Riot Dex 리그 오브 레전드 정보 앱

- **작업 기간** : 24.09.30 ~ 24.10.07

- **페이지 구성**

  - 메인페이지
  - 챔피언 목록 페이지 : 전체 챔피언의 목록이 보여집니다.
  - 아이템 목록 페이지 : 전체 아이템의 목록이 보여집니다.
  - 로테이션 페이지 : 매주 챔피언 목록이 업데이트 됩니다.

  - 챔피언 상세페이지 : 클릭한 챔피언의 정보가 보여집니다.
  - 아이템 상세페이지 : 클릭한 아이템의 정보가 보여집니다.
  - 로테이션 상세페이지 : 클릭한 챔피언의 정보가 보여집니다.

    <br>

- 💻 **기술 스택** <br />

  ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

  - `Next.js` 는 `app router` 기반으로 코드를 작성하였습니다.

<br>

- <details>
    <summary> 💻 <b>폴더 구조</b></summary>
      <div markdown="1">
        📦public <br>
        ┣ link.cur<br>
        ┗ normal.cur<br>
        📦src<br>
        ┣ 📂 app<br>
        ┃ ┣ 📂 api<br>
        ┃ ┃ ┗ 📂 rotation<br>
        ┃ ┃ ┃ ┗ route.ts<br>
        ┃ ┣ 📂 champions<br>
        ┃ ┃ ┣ 📂 [id]<br>
        ┃ ┃ ┃ ┗ page.tsx<br>
        ┃ ┃ ┗ page.tsx<br>
        ┃ ┣ 📂 fonts<br>
        ┃ ┃ ┗ KoddiUDOnGothic-Regular.woff2<br>
        ┃ ┣ 📂 items<br>
        ┃ ┃ ┣ 📂 [name]<br>
        ┃ ┃ ┃ ┗ page.tsx<br>
        ┃ ┃ ┗ page.tsx<br>
        ┃ ┣ 📂 rotation<br>
        ┃ ┃ ┗ page.tsx<br>
        ┃ ┣ favicon.ico<br>
        ┃ ┣ globals.css<br>
        ┃ ┣ layout.tsx<br>
        ┃ ┗ page.tsx<br>
        ┣ 📂 components<br>
        ┃ ┣ ChampionCard.tsx<br>
        ┃ ┣ ItemCard.tsx<br>
        ┃ ┗ RotationCard.tsx<br>
        ┣ 📂 styles<br>
        ┃ ┗ reset.css<br>
        ┣ 📂 types<br>
        ┃ ┣ Champion.ts<br>
        ┃ ┣ Items.ts<br>
        ┃ ┗ Rotation.ts<br>
        ┣ 📂 utils<br>
        ┃ ┣ riotApi.ts<br>
        ┗ ┗ serverApi.ts<br>
      </div>
    </details>

<br>
<br>

## [🍿 결과 페이지 구경가기](https://riot-dex.vercel.app/)

🚨 참고사항

- 본 페이지는 `Riot`의 `api key`가 필요합니다. 코드를 `clone` 하여 로컬에서 보실 경우 [Riot 사이트](https://developer.riotgames.com/apis) 에서 고유 `api key`를 발급받으시길 바랍니다. (파일 내 `.env.sample`에 복사 붙여넣기 하시면 됩니다.)
- 페이지 링크를 통해 구경하실 때 로딩이 안 되는 경우, 개인 `api key`는 24시간 동안만 제공되어 만료 이슈가 있을 수 있습니다. 연락주시면 빠른 시일 내에 업데이트 하겠습니다.

  <br>

## 🧐 미리보기

### 메인페이지

<img width="1440" alt="메인페이지" src="https://github.com/user-attachments/assets/a791512d-eb0f-4713-b6f0-2e3fd00c0435">

<br>

### 챔피언목록 및 상세페이지

<img width="1440" alt="챔피언목록" src="https://github.com/user-attachments/assets/2351ed41-f8e8-4be6-a69f-2e3fd204e4c7">

<br>

### 아이템목록 및 상세페이지

<img width="1440" alt="아이템목록" src="https://github.com/user-attachments/assets/5998da45-3f83-4b79-826f-7a4f5f6213a5">

<br>

### 로테이션 및 상세페이지

<img width="1440" alt="프로필 변경" src="https://github.com/user-attachments/assets/886f9b8e-0ebd-4ec4-b830-5937af804f6d">

<br>

### 모바일 버전

<img width="40%" alt="모바일버전" src="https://github.com/user-attachments/assets/7f512322-01b5-4847-b72b-2f4930865767">

<br>
<br>

## 🔥 트러블슈팅

<a href="https://velog.io/@duddlfkd02/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-api-key" target="_blank">1. api key</a>

<a href="https://velog.io/@duddlfkd02/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-rotation-%EA%B8%B0%EB%8A%A5%EA%B5%AC%ED%98%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0" target="_blank">2. rotation 기능구현</a>

<a href="https://velog.io/@duddlfkd02/%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EC%9D%B8%EC%BD%94%EB%94%A9%EA%B3%BC-%EB%94%94%EC%BD%94%EB%94%A9" target="_blank">3. 인코딩과 디코딩</a>

<br>
<br>

## 🫨 회고

1. `Next.js`를 처음 접하고 바로 개인과제에 적용하려고 하니 두려움이 많았습니다. 제대로 이해되지 않았고 어떻게 써야할지 막막한 상태였는데 긴 기간이니 만큼 차근차근 조급해하지 않고 필수기능구현을 모두 완성하는데에 집중하자!는 마음으로 시작하여 잘 마무리 할 수 있어 만족스럽습니다.

2. 여전히 `TypeScript`는 여전히 어렵고 복잡하게 느껴집니다. 각 `Type`을 명시하고 불러오는 것에 이해도가 완벽하지 않고 헷갈리고 있다는 걸 느꼈습니다.

3. `Object.values` , `decodeURIComponent()` 등 평소 잘 사용하지 않앗던 메소드를 찾아보고 적용해보면서 시간은 조금 걸릴지라도 하나씩 문제를 해결해나가는 부분이 재미있고 뿌듯하게 느껴졌습니다. (트러블슈팅 3번 내용)

4. `tailwind css`를 사용하면서 반응형 구현을 해보는 것이 늘 목표였는데 이번 과제에 적용해보는 시간을 가져 좋았습니다. 다른 `css`와 달리 모바일 먼저 작성한 후 이 보다 더 넓을 때의 조건을 부여하는 점이 새로웠습니다.

5. 최종프로젝트에 들어가기 전 컨셉에 맞는 디자인 재미요소를 부여해보고 싶었습니다. 그래서 게임 관련 컨셉에 맞춰 `hover` 했을 때의 효과, `마우스 커서 모양 변경` 등 사이트 컨셉에 맞는 `UIUX` 경험을 제공해주는 연습을 해보았습니다.

6. `TanStack Query(React Query)`를 적용해보고자 도전해보았지만 아직 이해도가 부족하다고 느껴 강의와 예시 코드를 복습 후 리펙토링 해볼 예정입니다.
