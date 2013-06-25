$(function(){
//app.initialize();
//$("p").text(getrandomword());
 //$("#randomize").on( 'tap', getrandomword() );

 $("#randomize").click(function() {
       //location.reload();
       
     
    
        $("#exp").empty();
        $("#def").empty();
        getrandomword();
         //location.reload();
         
    });

//$("definition").text();
//var base_url = "http://query.yahooapis.com/v1/public/yql?q=select * from html where url='https://www.vocabulary.com/dictionary/randomword.json'&diagnostics=false&format=json&callback=?";
//var wordnikapiurl = "http://api.wordnik.com/v4/words.json/randomWord?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1";
/*
$.getJSON("http://w3schools.com/jquery/demo_ajax_json.js?callback=", function(result){
   //response data are now in the result variable
   console.log(result);
   alert(result);
    8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd
});

*/
/*
$.get('https://www.vocabulary.com/dictionary/gristly', function(data) {

alert('Load was performed.');
});
*/

/*
 $.ajax({
type: 'POST',
url: wordnikapiurl,
dataType: "jsonp",

success: function(getjsondata)
{
response = '[{"Language":"jQuery","ID":"1"},{"Language":"C#","ID":"2"},
{"Language":"PHP","ID":"3"},{"Language":"Java","ID":"4"},
{"Language":"Python","ID":"5"},{"Language":"Perl","ID":"6"},
{"Language":"C++","ID":"7"},{"Language":"ASP","ID":"8"},
{"Language":"Ruby","ID":"9"}]'
console.log(getjsondata);
//var json_obj = $.parseJSON(getjsondata);//parse JSON
//console.log(getjsondata);
//var jparse = getjsondata.query.results.body.p;
//var jparse = jQuery(getjsondata.results);
//console.log(jparse);
//var rword= JSON.parse(jparse);

//alert(rword.result.word);
$("p").text(getjsondata.word);
},
"error": function(jqXHR, status, error) {
console.log("status:", status, "error:", error);
}
});
*/
/*

$.ajax({
    url: 'http://w3schools.com/jquery/demo_ajax_json.js',
    type: 'GET',
    success: function(res) {
console.log(res);
  alert("headline");
    }
});
*/
});
