export const m = {

  // HomeStatistics.vue
  UsableLanguages: '채점 가능한 언어',
  NumberOfProblems : '전체 문제 수',
  NumberOfSolvedProblems : '해결된 문제',
  NumberOfHeldContests : '진행된 대회',
  Lecture: '관련강의',
  Times: '회',
  Standard: '기준',
  Grading: '채점중..',
  Correct: '정답!',

  // SideMenu.vue
  Dashboard: '대시보드',
  General: '일반',
  User: '사용자 목록',
  Announcement: '공지사항',
  System_Config: '시스템 환경',
  Judge_Server: '저지 서버',
  Prune_Test_Case: '테스트 케이스 목록',
  Problem: '문제',
  Problem_List: '문제 목록',
  Create_Problem: '문제 생성',
  Export_Import_Problem: '문제 내보내기/가져오기',
  Contest: '대회',
  Contest_List: '대회 목록',
  Create_Contest: '대회 생성',

  // User.vue
  User_User: '사용자',
  Import_User: '사용자 가져오기',
  Generate_User: '사용자 생성',
  User_Table_ID: 'ID',
  User_Table_Username: '사용자명',
  User_Table_Create_Time: '계정 생성일',
  User_Table_Last_Login: '마지막 로그인',
  User_Table_Real_Name: '실명',
  User_Table_Email: '이메일',
  User_Table_User_Type: '타입',
  User_Table_Option: '옵션',
  User_Import_Tooltip_Content: '헤더가 없는 CSV 파일만을 제공합니다.',
  User_Import_Tooltip_Reference: '참조',
  Import_User_Table_Username: '사용자명',
  Import_User_Table_Password: '비밀번호',
  Import_User_Table_Email: '이메일',
  Import_User_Table_RealName: '이름',
  Create_User_Table_Prefix: '접두사',
  Create_User_Table_Suffix: '접미사',
  Create_User_Table_Start_Number: '시작 숫자',
  Create_User_Table_End_Number: '마지막 숫자',
  Create_User_Table_Password_Length: '비밀번호 길이',
  Create_User_Annotation: '생성될 사용자명은 다음과 같습니다.',
  Delete_User_Modal_Title: '사용자 삭제',
  Delete_User_Modal_Content: '정말로 이 사용자를 삭제하겠습니까? 이 계정으로 생성된 모든 공지사항, 문제, 대회 등이 삭제됩니다.',
  Create_User_Modal_Title: '알림',
  Create_User_Modal_Content: '모든 사용자가 성공적으로 생성되었습니다. 생성된 사용자의 목록을 다운로드했습니다.',

  // User.vue-dialog
  User_Info: '사용자 정보',
  User_Username: '사용자 아이디',
  User_Real_Name: '사용자 이름',
  User_Email: '이메일',
  User_New_Password: '새 비밀번호',
  User_Type: '사용자 유형',
  Problem_Permission: '문제 권한',
  Two_Factor_Auth: '이중 인증',
  Is_Disabled: '비황성화 상태',

  // Announcement.vue
  General_Announcement: '공지사항',
  Announcement_Title: '제목',
  Announcement_Content: '내용',
  Announcement_visible: '공개 여부',
  Announcement_Table_Id: 'ID',
  Announcement_Table_Title: '제목',
  Announcement_Table_CreateTime: '생성일',
  Announcement_Table_LastUpdateTime: '마지막 수정일',
  Announcement_Table_Author: '작성자',
  Announcement_Table_Visible: '공개',
  Announcement_Table_Option: '설정',
  Announcement_Create: '추가',
  Edit_Announcement: '공지사항 수정',
  Create_Announcement: '공지사항',
  Delete_Announcement: '공지사항 삭제',
  Delete_Announcement_Content: '정말로 이 공지사항을 삭제하겠습니까?',

  // Conf.vue
  SMTP_Config: 'SMTP 설정',
  Server: '서버',
  Port: '포트',
  Email: '이메일',
  Password: '비밀번호',
  Website_Config: '웹 설정',
  Base_Url: '기본 Url',
  Name: '이름',
  Shortcut: 'Shortcut',
  Footer: '푸터',
  Allow_Register: '회원가입 허용',
  Submission_List_Show_All: '제출물 목록 노출',
  SMTP_Server_Address: 'SMTP 서버 주소',
  SMTP_Server_Port: 'SMTP 서버 포트',
  SMTP_Server_Email: '이메일을 보내는데 사용할 계정',
  SMTP_Server_Password: 'SMTP 서버 비밀번호',
  SMTP_Test_Email: '테스트 메일 보내기',
  Web_Config_Url: '웹사이트 기본 url',
  Web_Config_Name: '웹사이트 이름',
  Web_Config_Shortcut: '웹사이트 이름 축약어',
  Web_Config_Footer: '웹사이트 푸터 html',

  // JudgeServer.vue
  Judge_Server_Token: '저지 서버 토큰',
  Judge_Server_Info: '저지 서버 정보',
  IP: 'IP',
  Judger_Version: '저지 버전',
  Service_URL: '서버스 URL',
  Last_Heartbeat: '마지막 통신',
  Create_Time: '생성일',
  JudgeServer_Table_Status: '상태',
  JudgeServer_Table_Hostname: '호스트 이름',
  JudgeServer_Table_Task_Number: '일 순서',
  JudgeServer_Table_CPU_Core: 'CPU 코어',
  JudgeServer_Table_CPU_Usage: 'CPU 사용량',
  JudgeServer_Table_Memory_Usage: '메모리 사용량',
  JudgeServer_Table_Disabled: '비활성화',
  JudgeServer_Table_Options: '설정',
  JudgeServer_Delete_Modal_Title: 'Warning',
  JudgeServer_Delete_Modal_Content: 'If you delete this judge server, it can\'t be used until next heartbeat',

  // PruneTestCase
  Test_Case_Prune_Test_Case: '테스트 케이스 목록',
  PruneTestCase_Tooltip_Content: '이 테스트 케이스는 어떠한 문제에 종속되어 있지 않습니다. 자유롭게 삭제하여도 괜찮습니다.',
  PruneTestCase_Last_Modified: '마지막 생성일',
  PruneTestCase_Test_Case_ID: '테스트 케이스 ID',
  PruneTestCase_Last_Option: '옵션',
  PruneTestCase_Delete_All: '전체 삭제',

  // Problem.vue
  Display_ID: '문제 번호',
  Title: '제목',
  Description: '문제 설명',
  Input_Description: '입력 설명',
  Output_Description: '출력 설명',
  Time_Limit: '시간 제한',
  Memory_limit: '메모리 제한',
  Difficulty: '난이도',
  Visible: '공개 여부',
  ShareSubmission: '제출 공유 여부',
  Languages: '언어',
  Input_Samples: '입력 예시',
  Output_Samples: '출력 예시',
  Add_Sample: '예시 추가',
  Code_Template: '코드 템플릿',
  Special_Judge: '스페셜 저지',
  Use_Special_Judge: '스페셜 저지 사용',
  Special_Judge_Code: '스페셜 저지 코드',
  SPJ_language: '스페셜 저지 언어',
  Compile: '컴파일',
  TestCase: '테스트케이스',
  IOMode: '입출력 모드',
  InputFileName: '입력 파일 이름',
  OutputFileName: '출력 파일 이름',
  Type: '종류',
  Input: '입력',
  Output: '출력',
  Score: '점수',
  Hint: '힌트',
  Source: '출처',
  Edit_Problem: '문제 수정',
  Add_Problem: '문제 추가',
  VeryHigh: "매우 어려움",
  High: '어려움',
  Mid: '보통',
  Low: '쉬움',
  VeryLow: '매우 쉬움',
  Field: '영역',
  Field_Math: '수학',
  Field_Impl: '구현',
  Field_DataStructure: '자료구조',
  Field_Search: '탐색',
  Field_Sorting: '정렬',
  Tag: '태그',
  New_Tag: '새 태그',

  // ProblemList.vue
  Contest_Problem_List: '대회 문제 목록',

  // AddPublicProblem.vue
  AddProblem_Table_ID: 'ID',
  AddProblem_Table_DisplayId: '문제 번호',
  AddProblem_Table_Title: '문제명',
  AddProblem_Table_Option: '옵션',
  AddProblem_Modal_Title: '확인',
  AddProblem_Modal_Content: '추가하려는 문제 번호를 기입해주세요.',

  // ImportAndExport.vue
  ImportAndExport_ID: 'ID',
  ImportAndExport_Display_ID: '문제 번호',
  ImportAndExport_Title: '문제명',
  ImportAndExport_Author: '작성자',
  ImportAndExport_Create_Time: '생성일',
  ImportAndExport_Export: '다운로드',
  ImportAndExport_Import_Problems: '문제 가져오기 (beta)',
  ImportAndExport_Import_FPS: 'FPS 문제 가져오기 (beta)',

  // ProblemList.vue
  ProblemList_ID: 'ID',
  ProblemList_Title: '문제명',
  ProblemList_Author: '작성자',
  ProblemList_Create_Time: '생성일',
  ProblemList_Visible: '활성화',
  ProblemList_Operation: '설정',
  ProblemList_Update_Title: '이 문제를 변경하는 것이 확실합니까?',
  ProblemList_Delete_Problem_Title: '문제 삭제',
  ProblemList_Delete_Problem_Content: '이 문제를 삭제하겠습니까? 문제와 관련된 모든 제출물도 삭제됩니다.',
  ProblemList_Visible_Problem_Title: '확인',
  ProblemList_Visible_Problem_Content: '공개할 문제의 번호를 입력해주세요.',

  // Contest.vue
  CreateContent: '대회 생성',
  ContestTitle: '대회명',
  ContestDescription: '설명',
  Contest_Start_Time: '시작 시간',
  Contest_End_Time: '종료 시간',
  Contest_Password: '비밀번호',
  Contest_Rule_Type: '종류',
  Real_Time_Rank: '실시간 랭킹 허용',
  Contest_Status: '활성화',
  Allowed_IP_Ranges: '허용된 IP 범위',
  CIDR_Network: 'CIDR 네트워크',

  // ContestList.vue
  Contest_List_Page_Title: '대회 목록',
  Contest_List_Table_Id: 'ID',
  Contest_List_Table_Title: '대회명',
  Contest_List_Table_Rule_Type: '규칙 종류',
  Contest_List_Table_Contest_Type: '대회 종류',
  Contest_List_Table_Status: '상태',
  Contest_List_Table_Visible: '활성 여부',
  Contest_List_Table_Operation: '설정',
  Contest_List_Start_Time: '시작일',
  Contest_List_End_Time: '종료일',
  Contest_List_Create_Time: '생성일',
  Contest_List_Creator: '생성자',
  Contest_List_DownloadModal_Title: '대회 제출물 다운로드',
  Contest_List_DownloadModal_Exclude: '관리자 제출 제외',
  Contest_List_DownloadModal_Execute: '확인',

  // constants.js
  Contest_Status_Not_Started: '시작 전',
  Contest_Status_Underway: '진행중',
  Contest_Status_Ended: '종료됨',
  Contest_Type_Public: '공개 대회',
  Contest_Type_PasswordProtected: '비공개 대회',

  // Dashboard.vue
  Last_Login: '마지막 로그인 날',
  System_Overview: '시스템 개요',
  DashBoardJudge_Server: '저지 서버',
  HTTPS_Status: 'HTTPS 상태',
  Force_HTTPS: '강제 HTTPS',
  CDN_HOST: 'CDN HOST',
  Time: '시간',
  Ip: 'IP 주소',
  OS: '운영체제',
  Browser: '브라우저',
  Total_Users: '전체 사용자 수',
  Today_Submissions: '오늘 제출 수',
  Recent_Contests: '최근에 열린 대회 수',
  Release_Notes: '릴리즈 노트',
  Release_Tooltip_Content: '새 기능을 사용하기 위해 최신 버전으로 업그레이드 해주세요.',
  Release_Tooltip_Reference: '참조',
  New_Version: '새 버전',
  Level: '중요도',
  Details: '세부사항',

  // Login.vue
  GO: '로그인',
  username: '아이디',
  password: '비밀번호',

  // Modal
  Modal_Confirm: '확인',
  Modal_Cancel: '취소',

  // Icon
  Icon_Edit: '수정',
  Icon_Delete: '삭제',
  Icon_Problem: '문제',
  Icon_Announcement: '공지사항',
  Icon_Download: '다운로드',
  Icon_Download_TestCase: '테스트케이스 다운로드',
  Icon_Make_Public: '공개',
  Icon_Add: '추가',

  // Button
  Button_Choose_File: '파일 선택',
  Button_Import_All: '모두 가져오기',
  Button_Reset_Data: '데이터 리셋',
  Button_Generate_Export: '생성 & 내보내기',
  Button_Upload: '업로드',
  Button_Create: '생성하기',
  Button_Add_Public_Problem: '기존 문제 추가하기',

  // Search
  Search_Keywords: '검색어',
  Search_Author: "작성자 검색",
}