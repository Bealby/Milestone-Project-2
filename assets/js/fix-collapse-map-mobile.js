// On mobile devices the navbar did not collaspe when links were clicked. The jQuery code below fixed this issue.

$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});