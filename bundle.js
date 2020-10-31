console.log("connected")
function displayRadioValue() 
{ 
    var ele = document.getElementsByName('inlineRadioOptions');
    var genre
      
    for(i = 0; i < ele.length; i++) 
    { 
        if(ele[i].checked)
        window.genre = ele[i].value  
    } 
} 

        let eventData = [];
    function formValidate()
    {
        var ele = document.getElementsByName('inlineRadioOptions');
        var genre
        var valid =false;
        for(i = 0; i < ele.length; i++) 
        { 
            if(ele[i].checked)
            {
                valid=true;
                window.genre = ele[i].value; 
            }     
        } 
        eName= document.getElementById('eName').value;
        date= document.getElementById('date').value;
        city= document.querySelector('#city').value;
        address= document.getElementById('about').value;
        if(eName==""||eName==null)
        {
             alert("Name required");
        }
        else if(eName.length<3||eName.length>30)
        { 
            alert("Length should be 3-30");
            return false;
        }
        else if(isNaN(eName)==false)
        {
            alert("No numeric value allowed in name");
            return false;
        }
        else if(date==""||date==null)
        {
            alert("Date required");
            return false;
        }
         else if(city=='select')
        {
            alert("Select a city");
            return false;
        }
        else if(valid==false)
        {
            alert("Select an option");
            return false;
        } 
       
        else
        {
            alert("Submitted, check in show Events section");
            let data = {
                id: Date.now(),
                eName,
                date,
                city,
                address
            }
            eventData.push(data);
            document.forms[0].reset();
            console.log('submit');
            displayRadioValue();
            buildTable(eventData);
        }                                 
    }
    function buildTable(data)
    {
        
        
        eventData=[]
        var table = document.getElementById('myTable')
        console.log("built");
        for (var i = 0; i < data.length; i++)
        {
            var row = `<tr>    
                            <td>${data[i].id}</td>         
                            <td>${data[i].eName}</td>
                            <td>${data[i].date}</td>
                            <td>${data[i].city}</td>
                            <td>${window.genre}</td>
                            <td>${data[i].about}</td>
                                   
                        </tr>`
                    table.innerHTML += row
        
        
        }
    }
    let data = JSON.stringify(eventData);         
{
    console.log('success');
}
