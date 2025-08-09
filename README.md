## noteBookly-server
noteBookly 프로젝트(https://github.com/Hyunsoo-k/noteBookly)의 RESTful-api 서버

## 기술 스택
- typescript
- express
- mongoose
- @vercel/node

## 배포
Vercel기반 serverless function

## 설치
```
npm install
```

### 개발환경 실행
```
npm run dev
```

## 폴더 구조

```
note-bookly-server
├─ api
│  └─ index.ts // 프로덕션 엔트리 포인트
├─ dev-api
│  └─ index.ts // 개발환경 엔트리 포인트
├─ package-lock.json
├─ package.json
├─ request.http
├─ src
│  ├─ controller
│  ├─ error-handler
│  ├─ middleware
│  ├─ model
│  ├─ routes
│  ├─ types
│  └─ utils
├─ tsconfig.json
└─ vercel.json

```

## 특징
기존 타입스크립트를 배포하기위해선 tsc와 같은 트랜스파일러를 사용한 빌드 후에 output directory를 배포하지만 Vercel의 @vercel/node를 이용해 트랜스파일링 하지 않고 vercel 내부 엔진에서 빌드과정을 처리하므로 로컬환경의 폴더구조와 동일하게 처리가 가능하게 했습니다.
