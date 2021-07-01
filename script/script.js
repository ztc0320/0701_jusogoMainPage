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
    });
