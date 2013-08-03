

// global variables

var operation = "A"; //"A"=Adding; "E"=Editing

    var selected_index = -1; //Index of the selected list item

    var tbClients = localStorage.getItem("tbClients"); //Retrieve the stored data

    tbClients = JSON.parse(tbClients); //Converts string to object

    if (tbClients == null) //If there is no data, initialize an empty array
        tbClients = [];
   // console.log("CRUD JS called");


    var bookmark = function ()
    {
        //console.log("Bookmark function called");
       // console.log($(".hd").attr('word'));
        var client = JSON.stringify({
            word: $("#word").text(),
            definition: $("#def").text()
           
        });
        tbClients.push(client);
        localStorage.setItem("tbClients", JSON.stringify(tbClients));
       alert("bookmark added");
        return true;
    }


    var deletebookmark = function ()
    {
        countValue = localStorage.getItem('tbClients');
        //console.log(Object.keys(countValue).length);
        var count = countValue.match(/}/g); 
        console.log(count.length);
       tbClients.splice(count.length - 1, 1);
       localStorage.setItem("tbClients", JSON.stringify(tbClients));
      //  alert("Client deleted.");
    }


    var listbookmarks = function ()
    {

        // console.log("ListBookmark function called");
      
        $("#listbook").show();
        $("#uldef").hide();
        $("#ulgdata").hide();
        $("#ulblurb").hide();
        $("#ulexp").hide();
        $("#listbookid").empty();
        for (var i in tbClients)
        {
            var cli = JSON.parse(tbClients[i]);
            //console.log(cli);
            $("#listbookid").append(
           "<li>" +
               "<h2>" + cli.word + "</h2>" +
              "<p>" + cli.definition + "</p>" +
               "<p class=\"ui-li-aside\"><strong>6:24</strong>PM</p>" +
          " </a></li>"

           );


        }

        $("#listbookid").listview().listview("refresh");
    }
            



          
       