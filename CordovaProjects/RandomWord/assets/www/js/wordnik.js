
//Define wordnik functions

var getrandomword = function(){
var random_url='http://api.wordnik.com/v4/words.json/randomWord?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1';

//return $.get(url, {count:5}, null, 'jsonp');

$.ajax({
type: 'POST',
url: random_url,
dataType: "jsonp",

success: function(randomword)
{

//console.log(randomword);
$("#word").text(randomword.word);
getdefinition(randomword.word);
getexample(randomword.word);

},
"error": function(jqXHR, status, error) {
console.log("status:", status, "error:", error);
}


});
return;
}

var getdefinition = function(randomwordpass){
var definition_url="http://api.wordnik.com/v4/word.json/"+randomwordpass+"/definitions?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&limit=200&includeRelated=true&useCanonical=false&includeTags=false";

//return $.get(url, {count:5}, null, 'jsonp');

$.ajax({
type: 'POST',
url: definition_url,
dataType: "jsonp",

success: function(definition)
{
    //console.log(definition);
/*$.each(definition, function(index, element) {
            $("#definition").append($('<div>', {
                text: element.text
            }));
        });
*/


$.each(definition, function(index1, element) {
           $("#def").append("<li>"+element.text+"</li>");
           $("#def").listview( "refresh" );
          });

//$("p").text(definition[0].text);
},
"error": function(jqXHR, status, error) {
console.log("status:", status, "error:", error);
}
});
return;
}


var getexample = function(randomwordpass){
var example_url ="http://api.wordnik.com/v4/word.json/"+randomwordpass+"/examples?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&includeDuplicates=false&useCanonical=false&skip=0&limit=5";
//return $.get(url, {count:5}, null, 'jsonp');

$.ajax({
type: 'POST',
url: example_url,
dataType: "jsonp",

success: function(example)
{
   /* //console.log(example.examples[0].text);
    $.each(example.examples, function(index1, element) {
         var exlist =   $("#example").append($('<div>', {text: element.text}));
         exlist.wrap("<li/>");
        });

*/
 $.each(example.examples, function(index1, element) {
           $("#exp").append("<li  style=\"font-weight:normal\" >"+element.text+"</li>");
           $("#exp").listview( "refresh" );
         //exlist.wrap("<li/>");
        });
//$("p").text(getjsonp_data.word);
},
"error": function(jqXHR, status, error) {
console.log("status:", status, "error:", error);
}
});
return;
}



