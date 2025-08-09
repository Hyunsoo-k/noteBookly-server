## noteBookly-server
noteBookly 프로젝트(https://github.com/Hyunsoo-k/noteBookly) 의 RESTful-api 서버

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

## 이슈
path alias를 사용하려면 배포 전 빌드과정이 필요하고 결과적으로 꼭 output directory를 생성해야 하는데 vercel에서 output directory를 severless function으로 인식하지 못하고 정적 사이트로 인식하는 이슈가 있습니다. vercel.json으로 직접 경로를 설정해도 vercel 빌드과정에서 이슈가 생겨서 일단  상대경로를 이용했습니다.
