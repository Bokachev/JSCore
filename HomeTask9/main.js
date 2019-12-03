//********************** Task 1 ********************** 

/*$("a[href^='https']").attr("target", "_blank");*/

//********************** Task 2 ********************** 

/*let $el=$('h2.head');
$el.css('background','green');
$el.children(".inner").css('font-size','35px');*/

//********************** Task 2 ********************** 
/*let $elDiv = $("h3").next('div')
$('h3').before(function(i){return $elDiv[i]})
*/

//********************** Task 2 ********************** 

$('input[type="checkbox"]').on('click', function() {
    if ($('input[type="checkbox"]').not(':checked').length == 3) {
        $('input[type="checkbox"]').not(':checked').attr('disabled', true)
    } else
        $('input[type="checkbox"]').removeAttr('disabled')
});