/* eslint-disable */

$(function(){
        /* gnb메뉴 start */

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").show();
        $("div#gnbBGFrame").show();
    });

    $("li.mainLi").mouseout(function(){
       $("ul.subMenu").hide();
       $("div#gnbBGFrame").hide();
    });
        /* gnb메뉴 end */

        /* input 작성시 x 표시 생성 start */
    $("input#searchWord").keyup(function(){
        var txt = $("input#searchWord").val(); /* 변수 = 값을 임시저장 */
        // txt에 저장된 값이 비어있는 공백이 ("") 아니라면
        // 제이쿼리의 css를 사용하여 x기호를 표시하세요.
        // txt 공백이라면 => txt == ""
        // txt 공백이 아니라면 => != ""
        if(txt != ""){
            $("span#closeMark").css({ "visibility" : "visible" });
        } else {
            $("span#closeMark").css({ "visibility" : "hidden" });
        };

    });
        /* input 작성시 x 표시 생성 end */

        /* X 표시 클릭하면 입력값을 없애고 X 표시도 숨김 */
    $("span#closeMark").click(function(){
        $("input#searchWord").val("");
        $("span#closeMark").css({ "visibility" : "hidden"});
    });
        /* X 표시 클릭하면 입력값을 없애고 X 표시도 숨김 */

        /* 검색창이 공백일 때 검색 실행 버튼을 누르면
            경고창을 발생하여 내용을 입력하게 만든다.
            이렇게 사용자에게 올바른 행동을 유도하는 코드를 작성하는 것을
            유효성 검사 라고 한다. */
    $("span#searchMark").click(function(){
        var txt = $("input#searchWord").val();
        if(txt == ""){
            alert("검색어을(를) 입력해주세요!");
        }else{
            $("form").submit();
        }

        // 텍스트박스에 포커스 설정하기
        $("input#searchWord").focus();
    });
        /* 검색창 실행 */

    });
