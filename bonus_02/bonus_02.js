$(document).ready(function() {
    $('#carpet').addClass('square');
    createGrid($('#carpet'));

    function createGrid(container) {
        container.empty(); 
        container.css({
            "display": "flex",
            "flex-wrap": "wrap"
        });
        
        for (let i = 0; i < 9; i++) {
            const newSquare = $('<div></div>').addClass('inner');
            
            if (i === 4) { 
                newSquare.addClass('middle');
            } else {
                newSquare.addClass('square');
                
                newSquare.on('click', function(e) {
                    e.stopPropagation();
                    createGrid(newSquare);
                });
            }
            container.append(newSquare);
        }
    }
});
