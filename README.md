터미널 열기
ctrl+j



---맨처음 할때--------------------------------------

--로컬에서의 작업---
1. 깃초기화
	git init
2. stage-area
	git add .
3. 버전생성
	git commit -m "first commit"

---원격 저장소 관리----
1. 깃허브 로그인 후 New repository 생성
2. 브랜치명 변경
	git branch -M main
3. 깃 원격 주소 등록
	git remote add origin https://github.com/YoungBeomLee/project1
4. 깃 원격저장소로 코드 올리기
	git push -u origin main

	
---최초 사용시 사용자등록---	
git config --global user.email edlee127127@gmail.com
git config --global user.name YoungBeomLee

git congig --list


	
	
---------두번째 부터 --------------------
수정한게 있어야함   
    -파일에 수정이력이 없으면 workingtree clean 이라는 오류 메시지 출력됨
**작업순서
1. git add 파일명 (와일드카드)
        -git add * - 모든파일
        -git add . - 수정된파일
2. git commit -m ""
    깃 버전생성 메시지 "메시지내용"
    깃 커밋시 메시지 내용은 공동작업자가 이해할수 있도록 수정내용을 구체적으로 작성해야 한다
	





# Project Name
> 프로젝트에 대한 요약설명   
> 구현화면보기 [_here_](https://qwerewqwerew.github.io/book01/)


## 목차
<a herf="#general-information">제작과정</a>
* [제작과정](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
> 기획서 보기 [_here_](https://github.com/YoungBeomLee/project1/blob/main/proposal/%ED%95%9C%EA%B5%AD%EA%B0%80%EC%8A%A4%EA%B3%B5%EC%82%AC%20%EB%A6%AC%EB%89%B4%EC%96%BC%20%EA%B8%B0%ED%9A%8D%EC%84%9C.pdf)
- 기획서의 목차작성
- 기획서의 내용을 간락히 요약 정리

## Technologies Used
<!-- 사용한 기술환경 (언어와 버전을 작성) -->
- Tech 1 - HTML5
- Tech 2 - CSS3
- Tech 3 - ES6


## assets

Some text

```text
folder1/
└── folder2/
    ├── folder3/
    │   ├── file1
    │   └── file2
    └── folder4/
        ├── file3
        └── file4
```

## Features
List the ready features here:
- Awesome feature 1
- Awesome feature 2
- Awesome feature 3


## Screenshots
<!-- ![Example screenshot](./img/screenshot.png) -->
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- 메인 포트폴리오 주소 [this tutorial](https://www.example.com).
- 방문해주셔서 감사합니다.


## Contact
Created by [@Youngbeom Lee](krkr127127@naver.com) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->