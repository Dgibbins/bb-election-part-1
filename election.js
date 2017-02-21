// Make sure you're making this request within your $(document).ready block
$(document).ready(function() {

  var i = 0;
  // In the election.js file, build an AJAX request that makes a GET request to the root path, and expects a JSON response.
    $('.view-candidates').on('click', function(){
      $.ajax({
        url: 'https://bb-election-api.herokuapp.com/',
        method: 'GET',
        dataType: 'json'

      }).done(function(data){
        // Set a loop to count through candidates, outside of your ajax request.
        // console.log(data);
        // console.log(data.candidates[0].votes + " " + data.candidates[0].name);
        // console.log(data.candidates[1].votes + " " + data.candidates[1].name);
        console.log(data.candidates.length);
        if (i < 5){

          var candidate = document.createElement('li');
          //  append a <li> element for each candidate into the DOM at our <ul> from the last step.
          // You'll want to show the name and votes count of each candidate.
          $(candidate).append(data.candidates[i].name + " | votes: " + data.candidates[i].votes );
          $(candidate).appendTo('#election-list');
          i++;

        }
    });
  });
});
