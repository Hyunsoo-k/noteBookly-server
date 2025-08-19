## noteBookly-server
noteBookly 프로젝트(https://github.com/Hyunsoo-k/noteBookly) 의 RESTful-api 서버

## 개발 인원
1인 개발

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
root
├─ api
│  └─ index.ts // 프로덕션 엔트리 포인트
├─ dev-api
│  └─ index.ts // 개발환경 엔트리 포인트
├─ package-lock.json
├─ package.json
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
타입스크립트 컴파일을 Vercel의 @vercel/node를 이용해 로컬환경에서의 폴더구조와 동일하게 처리가 가능하게 했습니다.(output directory 설정 x)
