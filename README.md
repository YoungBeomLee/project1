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
	





