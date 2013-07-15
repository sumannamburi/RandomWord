
//Define wordnik functions

/// <reference path="jquery-2.0.2-vsdoc.js" />
/// <reference path="jquery-2.0.2.min.js" />
var getrandomword = function ()
{
    var random_url = 'http://api.wordnik.com/v4/words.json/randomWord?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&hasDictionaryDef=true&excludePartOfSpeech=noun-plural&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1';

    //return $.get(url, {count:5}, null, 'jsonp');

    $.ajax({
        type: 'POST',
        url: random_url,
        dataType: "jsonp",

        success: function (randomword)
        {

            //console.log(randomword);
            $("#word").text(randomword.word);
            getblurb(randomword.word);
          // $.mobile.hidePageLoadingMsg(); 

              $.mobile.loading('hide');
            getdefinition(randomword.word);
            getgoolgedef(randomword.word);
             getexample(randomword.word);

        },
        "error": function (jqXHR, status, error)
        {
            console.log("status:", status, "error:", error);
        }


    });
    return;
}

var getdefinition = function (randomwordpass)
{
    var definition_url = "http://api.wordnik.com/v4/word.json/" + randomwordpass + "/definitions?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&limit=200&includeRelated=true&useCanonical=false&includeTags=false";

    //return $.get(url, {count:5}, null, 'jsonp');

    $.ajax({
        type: 'POST',
        url: definition_url,
        dataType: "jsonp",

        success: function (definition)
        {
            //console.log(definition);
            /*$.each(definition, function(index, element) {
            $("#definition").append($('<div>', {
            text: element.text
            }));
            });
            */
            $("#def").css('display', 'none');

            $.each(definition, function (index1, element)
            {
                $("#def").append("<li><p><i class=\"icon-angle-right\"></i> " + element.text + "</p></li>");
               
            });
            $("#def").fadeIn("slow");
            // $("#def").listview("refresh");
            //$("p").text(definition[0].text);
        },
        "error": function (jqXHR, status, error)
        {
            console.log("status:", status, "error:", error);
        }
    });
    return;
}


var getgoolgedef = function (randomwordpass)
{
    var googdefinition_url = "http://www.google.com/dictionary/json?callback=dict_api.callbacks.id100&q=" + randomwordpass + "&sl=en&tl=en&restrict=pr%2Cde&client=te";

    //return $.get(url, {count:5}, null, 'jsonp');

    $.ajax({
        type: 'POST',
        url: googdefinition_url,
        dataType: "jsonp",

        success: function (googdefinition)
        {
            // console.log(googdefinition);
            $("gdef").css('display', 'none');
            $("#gwebdef").css('display', 'none');
            //var jsongoogdef = (JSON.stringify(googdefinition));

            /* $.each(definition, function(index, element) {
            $("#definition").append($('<div>', {
            text: element.text
            }));
            });
            */

            if (googdefinition.hasOwnProperty("primaries"))
            {

                var gprimary = googdefinition.primaries[0].entries[1].terms[0].text;
                if (!gprimary)
                {

                    gprimary = googdefinition.primaries[0].entries[0].terms[0].text;


                }
                //var gphoenitic = googdefinition.primaries[0].terms[1].text;
                // $("#gdef").text(gprimary).css(  "border-left" ,"5px solid green");
                $("#gdef").append("<li><i class=\"icon-angle-right\"></i> " + gprimary + "</li>");
                $("#gdef").fadeIn("slow");
            }

            if (googdefinition.hasOwnProperty("webDefinitions"))
            {

                var gwebdef = googdefinition.webDefinitions[0].entries[0].terms[0].text;
                $("#gwebdef").append("<li><i class=\"icon-angle-right\"></i> " + gwebdef + "</li>");
                $("#gwebdef").fadeIn("slow");
            }



            if (gprimary === undefined || gwebdef === undefined)
            {
                $("#ulgdata").hide();
            }
            else
            {
                $("#ulgdata").show();
            }
            /*  $.each(googdefinition, function (index1, element)
            {
            var gdef = $("#def").append("<li>" +webDefinitions[0].entries[0].terms[0].text + "</li>");
            //$("#def").listview("refresh");
            });
            */

            /* if (gflag != "true")
            {
            $("#ulgdata").hide();

            }

            */
            // console.log(gprimary);
            //console.log(gphoenitic);
            // console.log(gwebdef);
            //console.log(googdefinition.primaries[0].entries[0].terms[0].text);
        },
        "error": function (jqXHR, status, error)
        {
            console.log("status:", status, "error:", error);
        }
    });
    return;
}



var getblurb = function (blurbarg)
{
    var blurbdefinition_url = "https://www.vocabulary.com/dictionary/" + blurbarg;

    //return $.get(url, {count:5}, null, 'jsonp');

    $.ajax({
        type: 'POST',
        url: blurbdefinition_url,
        // dataType: "jsonp",

        success: function (blurbhtml)
        {
            //console.log(blurbhtml);
            // var bhtml = blurbhtml;
            // var $bhtml = $(bhtml);
            // var blurb = $('<div/>').append($bhtml).find("<div class="secti">).val();
            $("#blurbshort").css('display', 'none');
            $("#blurblong").css('display', 'none');
            var bhtml = '<div id="body-mock">' + blurbhtml.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/g, '') + '</div>';
            console.log(bhtml);
            var $bhtmlobj = $(bhtml);
            var blurbshort = $bhtmlobj.find("div.section.blurb > .short").text();
            var blurblong = $bhtmlobj.find("div.section.blurb > .long").text();
            $("#blurbshort").append("<li><p><i class=\"icon-angle-right\"></i> " + blurbshort + "</p></li>");   // get short description
            $("#blurbshort").fadeIn("slow");
            $("#blurblong").append("<li><p><i class=\"icon-angle-right\"></i> " + blurblong + "</p></li>");  // get blurb  {i haz blurb}
            $("#blurblong").fadeIn("slow");

            if (blurbshort === "")
            {
                $("#ulblurb").hide();
            }
            else
            {
                $("#ulblurb").show();
            }
            //console.log("blurb");
            //console.log($bhtmlobj.find("div.section.blurb > .short").text());
            // console.log($bhtmlobj.find("div.section.blurb > .long").text());

            //var blurb = $bhtml.filter(<body>)
            //  var content = $('<div/>').append(data).find('#yourelement').html();
            // alert(blurbhtml);
            /*$.each(definition, function(index, element) {
            $("#definition").append($('<div>', {
            text: element.text
            }));
            });*/
            //console.log(bhtml);
            //console.log(blurb);



        },
        "error": function (jqXHR, status, error)
        {
            console.log("status:", status, "error:", error);
        }
    });
    return;
}



var getexample = function (randomwordpass)
{
    var example_url = "http://api.wordnik.com/v4/word.json/" + randomwordpass + "/examples?api_key=8e73a5a541c0eff49700705a0d4014a1141c3679b7f1084cd&includeDuplicates=false&useCanonical=false&skip=0&limit=5";
    //return $.get(url, {count:5}, null, 'jsonp');

    $.ajax({
        type: 'POST',
        url: example_url,
        dataType: "jsonp",

        success: function (example)
        {
            /* //console.log(example.examples[0].text);
            $.each(example.examples, function(index1, element) {
            var exlist =   $("#example").append($('<div>', {text: element.text}));
            exlist.wrap("<li/>");
            });

            */
            $("#exp").css('display', 'none');
            $.each(example.examples, function (index1, element)
            {
                $("#exp").append("<li><p><i class=\"icon-angle-right\"></i> " + element.text + "</p></li>");
                 //$("#def").append("<li>" + element.text + "</li>");
                //exlist.wrap("<li/>");
            });
            //$("p").text(getjsonp_data.word);
           var explength = $('#exp li').length;
           $('#explength').text(explength);
            $("#exp").fadeIn("slow");
           // $("#exp").listview("refresh");
        },
        "error": function (jqXHR, status, error)
        {
            console.log("status:", status, "error:", error);
        }
    });
    return;
}