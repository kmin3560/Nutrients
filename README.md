<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" /> &nbsp
  <img src="https://img.shields.io/badge/styledComponents-DB7093?style=flat-square&logo=styled-components&logoColor=white" /> &nbsp 
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> &nbsp <br />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> &nbsp
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> &nbsp  
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> &nbsp 
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white"/> &nbsp
</p>

# 건강기능식품 정보 공유 커뮤니티
<img src="https://user-images.githubusercontent.com/73999808/147055064-815721cb-b79b-43d5-8268-7b014de62ad8.png" width="300px"/>

[**건강기능식품 정보 공유 커뮤니티**](http://nutrient-kmin.s3-website.ap-northeast-2.amazonaws.com/)

## 프로젝트 소개
> 현재 고령화 가속, 코로나 19 확산 등 건강에 대한 관심과 투자비용이 꾸준히 늘어나면서 시장의 규모 또한 커지고 있습니다. 
> 
> 보다 좋은 건강기능식품을 섭취하고, 커뮤니티로 정보를 공유를 위해 **건강기능 식품 정보 공유 웹 커뮤니티**를 만들게 되었습니다. 

## 프로젝트 일정
> **2021.12.13 - 2021.12.23**

### Structure

#### 폴더구조
```
├── backend
│   ├── bin
│   │   └── www 
│   ├── config
│   │   └── awsConfig.json
│   │   └── dbConfig.json
│   │   └── jwtConfig.json
│   ├── controller 
│   │   └── boardController.js
│   │   └── userController.js
│   ├── models
│   │   └── board.js
│   │   └── user.js
│   ├── modules
│   │   └── authModule.js
│   │   └── awsUpload.js
│   │   └── cryptoModule.js
│   │   └── jwtModule.js
│   ├── node_modules
│   ├── routes
│   │   └── index.js
│   │   └── board
│   │   │   └── index.js
│   │   └── user
│   │       └── index.js
│   ├── app.js
│   ├── package-lock.json
│   └── package.json
├── frontend
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── auth
│   │   │   ├── SigninComponent.jsx
│   │   │   └── SignupComponent.jsx
│   │   ├── button
│   │   │   └── ButtonComponent.jsx
│   │   ├── Link
│   │   │   └── LinkComponent.jsx
│   │   ├── loading
│   │   │   └── LoadingComponent.jsx
│   │   ├── main
│   │   │   ├── board
│   │   │   │   ├ CardComponent.jsx
│   │   │   │   └ CommentComponent.jsx
│   │   │   ├── MainComponent.jsx
│   │   │   ├── NavbarComponent.jsx
│   │   │   └── PostComponent.jsx
│   │   ├── mypage
│   │   │   └── MypageComponent.jsx
│   │   ├── mypost
│   │   │   ├── MycardCommentComponent.jsx
│   │   │   ├── MycardComponent.jsx
│   │   │   ├── MypostComponent.jsx
│   │   │   └── MypostListComponent.jsx
│   │   └── write
│   │       ├── image
│   │       │   └── EditImageComponent.jsx
│   │       ├── EditorComponent.jsx
│   │       └── WriteActionButtonComponent.jsx
│   ├── container
│   │   ├── auth
│   │   │   ├── SigninContainer.jsx
│   │   │   └── SignupContainer.jsx
│   │   ├── main
│   │   │   ├── MainContainer.jsx
│   │   │   └── PostContainer.jsx
│   │   ├── mypage
│   │   │   └── MypageContainer.jsx
│   │   ├── mypost
│   │   │   ├── MypostContainer.jsx
│   │   │   └── MypostListContainer.jsx
│   │   └── write
│   │       ├── EditorContainer.jsx
│   │       └── WriteActionButtonContainer.jsx
│   ├── context
│   │   ├── provider
│   │   │   ├── UserProvider.jsx
│   │   │   └── WriteProvider.jsx
│   │   ├── UserContext.js
│   │   └── WriteContext.js
│   ├── libs
│   │   ├── client.js
│   │   └── time.js
│   ├── pages
│   │   ├── auth
│   │   ├── 
│   │   ├── client.js
│   │   ├── client.js
│   │   ├── client.js
│   │   └── client.js
│   ├── App.js
│   ├── GlobalStyle.js
│   ├── index.js
│   ├── reportWebVital.js
│   ├── package-lock.json
│   ├── package.json
│   ├── yarn.lock
└── .gitignore












```

## :handshake:Team
> [이주혁](https://github.com/leejh96) :raising_hand:`팀장`
> 
> [배주은](https://github.com/jurincess)
> 
> [김민송](https://github.com/kmin3560)

[jlink]: https://github.com/leejh96
[blink]: https://github.com/jurincess
[mlink]: https://github.com/kmin3560


## 📄 Document
> [oven](https://ovenapp.io/project/zyP9yKD5FFlJGFkqVbaQeNBf3O9JMklG#DxMJ1)
> 
> [PPT](https://docs.google.com/presentation/d/1T7MUmJWTKmj-U9jeIrX87KnDlKlvQyleV0ZvtC0L20A/edit?usp=sharing)
