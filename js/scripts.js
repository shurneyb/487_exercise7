$(document).ready(function(){
  console.log('scripts loaded');

/*
1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
   The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
2) The table should have four columns:
    The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
   blank spaces with just 'None.' Clean this up with conditional logic in your code.
   If the grant has no description, do not include it in the table.
*/

var html = '';
var grants;
var Grant;
var title;
var year;
var amount;
var description;
var url = 'NEH_Grants2010s.xml'

$.ajax({
  type: 'GET',
  url: url,
  data: grants,
  dataType: 'xml',
  async: true,
  success: function(grants){
    console.log(grants);
    //get the data and build with it
    html += '<tr> <th>Project Title</th> <th>Year Awarded</th> <th>Original Amount</th> <th>Grant Description</th> </tr>'

    $(grants).find('Grant').each(function(){
      title = $(this).attr('ProjectTitle');
      year = $(this).attr('YearAwarded');
      amount = $(this).attr('OriginalAmount');
      description = $(this).find('ToSupport').text();
      if(description != 'None'){
        html += '<tr>'
        html += '<td>' + title + '</td>'
        html += '<td>' + year + '</td>'
        html += '<td>' + amount + '</td>'
        html += '<td>' + description + '</td>'
        html += '</tr>'
      }

    });
    $('#results').append(html);
  }
});

});
