var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Uncomment the correct line*/
    //canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
    //canvas.getEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        mouseEvent = "mouseDown";
    }

    /*
    Create an event listener for "mousemove"
    and call function my_mousemove
    */
     canvas.addEventListener("mousemove,my_mousedown")
    function my_mousemove(e)
    {
        /*Uncomment the correct line*/
        //current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        //current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        //current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        /*
        create current_position_of_mouse_y and
        assign it e.clientY - canvas.offsetTop;
        */

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
    



    canvas.addEventListener("mouseleave",my_mouseleave)

    {
        mouseEvent = "mouseUP";
    }

    

    function my_mouseup()
{
    mouseEvent = "e";
}
    

    function(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }



    function my_mouseleave()
    {
        mouseEvent = "parameter";
    }
    


    function()
        {
            mouseEvent = "mouseleave";
        }
    

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
