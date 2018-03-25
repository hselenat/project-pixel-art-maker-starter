    // Select color input
    let color = "#000";
    // Select size input
    
    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
    // Your code goes here!
        let rowCount = $("#input_height").val();//定义表格行，并获取input高的数值
        let colCount = $("#input_width").val();//定义表格列，并获取input列的数值
        //for循环插入表格大小
        for (let i=0;i<rowCount;i++){
            $("#pixel_canvas").append("<tr></tr>");//向表格中插入行
            for (let j=0;j<colCount;j++){
                $("tr").last("tr").append("<td></td>");//向表格中插入列
            }
        }
    }
    //当文档加载完毕后，点击提交按钮执行表格插入dom中
    $(document).ready(function(){
        $("[type='submit']").click(function(e){
            e.preventDefault();
            $('#pixel_canvas').find("tr").remove();//更换数值时移除原先插入的表格
            makeGrid();
        });
    });
    //点击一个td，对所点中的td进行背景颜色替换
    $('table').on('click', 'td', function() {
        color = $('#colorPicker').val(); 
        $(this).css('background-color', color);
    });





