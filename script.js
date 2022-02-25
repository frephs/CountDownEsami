function stringToCoundown(stringDay, exam, date, id, aula, bgColor, color, inside){
    if(inside){
         container = "#container "+inside;
    } else{
        container ="#container1";
    }

    $(container).append('<div class="timer" id = "'+id.slice(1)+'" style="background-color:'+bgColor+'; color:'+color+';"></div>');
    if(!aula)
         aula = '';
    $(id).countdown(date, function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div class="day">'+stringDay+'</div>'
    + '<div class="title">'+exam+'<div class="aula">'+aula+'</div>'+'</div>'
    +'<div class="countdown">'
    + '     <div class="days"><span>%D</span><span>Days</span></div>'
    + '     <div class="hours"><span>%H</span><span>Hours</span></div>'
    + '     <div class="minutes"><span>%M</span><span>Minutes</span></div>'
    + '     <div class="seconds"><span>%S</span><span>Seconds</span></div>'
    + '</div>'
));
});
console.log("Done!");
}