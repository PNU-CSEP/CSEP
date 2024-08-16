<div align="center">
  <img src="https://github.com/user-attachments/assets/90913ed2-5fba-4c0b-9b8b-b1e55e6d36aa" width="800" alt="Code Place Logo"/>
</div>

# <div align="center">PNU Code Place</div>
> 부산대학교 학생들의 코딩 역량을 강화에 도움을 주는 플랫폼 개발
>
> 개발기간 : 2023.12 ~ 2024.8 (현재 진행 중)
<br/>


## 🔗 배포 주소
> 이전 운영 서버 주로 : https://oj.pusan.ac.kr/
>
> 운영 서버 주소 : https://code.pusan.ac.kr/
<br/>
  
## 👨‍💻 구성원
### BE 개발 인원
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/hunsy9"> <img src="https://github.com/hunsy9.png" width="80" alt="main manager"/> </a>
    </td>
    <td align="center">
      <a href="https://github.com/Boksam"> <img src="https://github.com/Boksam.png" width="80" alt="main manager"/> </a>
    </td>
  </tr>
  <tr>
    <td align="center"> <a href="mailto:juniper0917@gmail.com">juniper0917@gmail.com</a> </td>
    <td align="center"> <a href="mailto:boksam1017@gmail.com">boksam1017@gmail.com</a> </td>
  </tr>
  <tr>
    <td align="left" width="350">
      <div>&nbsp&nbsp&nbsp&nbsp•&nbsp PM, 백엔드 개발 및 배포</div>
    </td>
    <td align="left" width="350">
      <div>&nbsp&nbsp&nbsp&nbsp•&nbsp 프로젝트 기획 및 백엔드 개발</div>
    </td>
  </tr>
</table>

### FE 개발 인원
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/hunsy9"> <img src="https://github.com/hunsy9.png" width="80" alt="main manager"/> </a>
    </td>
    <td align="center">
      <a href="https://github.com/minmunui"> <img src="https://github.com/minmunui.png" width="80" alt="main manager"/> </a>
    </td>
    <td align="center">
      <a href="https://github.com/llddang"> <img src="https://github.com/llddang.png" width="80" alt="main manager"/> </a>
    </td>
  </tr>
  <tr>
    <td align="center"> <a href="mailto:juniper0917@gmail.com">juniper0917@gmail.com</a> </td>
    <td align="center"> <a href="mailto:ehdwls1638@pusan.ac.kr">ehdwls1638@pusan.ac.kr</a> </td>
    <td align="center"> <a href="mailto:laliddang@gmail.com">laliddang@gmail.com</a> </td>
  </tr>
  <tr>
    <td width="350">
      <div>&nbsp&nbsp&nbsp&nbsp•&nbsp PM, 프론트/백엔드 기획 및 개발</div>
    </td>
    <td width="350">
      <div>&nbsp&nbsp&nbsp&nbsp•&nbsp 프론트엔드(Client) 기획 및 개발</div>
    </td>
    <td width="350">
      <div>&nbsp&nbsp&nbsp&nbsp•&nbsp 프론트엔드(Admin) 기획 및 개발</div>
    </td>
  </tr>
</table>
<br />

## 👀 프로젝트 배경
> 프로젝트 배경 작성해줘...
<br/>

## 🚀 프로젝트 목적
> 프로젝트 목적 작성해줘...
<br/>

## 🔧 기술 스택
### 🛠 BE Skill & Tool
<img src="https://img.shields.io/badge/Python-3.8.0-3776AB?style=flat-square&logo=Python&logoColor=white" /> <img src="https://img.shields.io/badge/django-3.2.9-092E20?style=flat-square&logo=django&logoColor=white"/> <img src="https://img.shields.io/badge/django--rest--framework-3.12.4-092e20?style=flat-square&logo=django&logoColor=white" />

### 🛠 FE Skill & Tool
<img src="https://img.shields.io/badge/Vue.js-2.5.13-4FC08D?style=flat-square&logo=Vue.js&logoColor=white" /> <img src="https://img.shields.io/badge/Vuex-3.0.1-4FC08D?style=flat-square&logo=Vue.js&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-16.16.0-339933?style=flat-square&logo=Node.js&logoColor=white" /> <img src="https://img.shields.io/badge/ECharts-3.8.3-F72C5B?style=flat-square" /> <img src="https://img.shields.io/badge/iView-2.8.0-2d8cf0?style=flat-square" /> <img src="https://img.shields.io/badge/Element-2.0.9-409eff?style=flat-square" />

### 🧩 Communication Tool
<img src="https://img.shields.io/badge/GitHub-181717?style=flatsquare&logo=GitHub&logoColor=white" /> <img src="https://img.shields.io/badge/Slack-4A154B?style=flatsquare&logo=Slack&logoColor=white" /> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white" /> <img src="https://img.shields.io/badge/Notion-eeeeee?style=flat-square&logo=Notion&logoColor=black" />

<br />

## 💡 시작 가이드
- Backend 기본
  ```bash
  # 의존 라이브러리 설치
  cd backend/deploy
  pip3 install -r requirements.txt
  
  # 데이터베이스 배포 스크립트 실행
  sh init_db.sh
  
  # md5sum secret key 초기화 및 django migrate 실행
  # super admin 생성(아이디 root, 비밀번호 rootroot로 자동생성됩니다.)
  sh init_db.sh --migrate
  
  # 프로젝트를 실행합니다. localhost:8080으로 접속할 수 있습니다.
  python3 manage.py runserver
  ```
- Backend **dramatiq** 실행 (문제 채점 및 제출과 같은 비동기 작업을 위해 필요)
  ```bash
  cd backend
  python3 manage.py rundramatiq
  ```
- Frontend
  ```
  cd frontend
  npm install
  sh run_develop.sh
  ```
<br/>

## 💎 라이센스
해당 프로젝트는 [MIT LICENSE](https://opensource.org/license/MIT) 를 따릅니다.
The MIT License (MIT)

Copyright (c) Code Place Developers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE A
