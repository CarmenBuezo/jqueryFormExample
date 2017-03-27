$(document).ready(function() {
    /*
     ** put all your code inside of the $(document).ready function to make sure the html and CSS has been loaded 
     ** properly before running the JS code
     */


    /*
     ** this is the callback function that is invoked when the user clicks on the submit button
     */
    var greetings = ["Hello", "Hola", "Bonjour"];

    $('#submitButton').click(function(e) {

        // call prevent defualt here to disable the 
        // default action of clearing the input values
        e.preventDefault();
        //get selected radio button val and change it to a number
       var radioValue = $("input[name = 'language']:checked").val();
        radioValue = Number(radioValue);
        // get the value entered by the user into the text input box
        var name = $("#textInput").val();

        if (name != "") {
            // if the user entered a name, then set a greeeting in the feedback text box
            $('#greetingText').text(greetings[radioValue] + ' ' + name);
        };
    });
   
    // this is the callback function that is invoked when the user clicks on the clear button
 
    $('#clearButton').click(function(e) {

        // set the feedback text area to blank to clear it; note that we dont call preventDefault here, because we do 
        // want the default action to clear the name text input area which is the default action
        $('#greetingText').text("");

    });


});