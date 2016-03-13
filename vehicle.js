function addOption(id,option,text)
{
	var select=document.getElementById(id);
	var option=document.createElement(option); 
	var text=document.createTextNode(text); 
	option.appendChild(text);
	select.appendChild(option);	
}
var vehicleData;
function getVehicledata()
{
	var vehicleData=[	{year:2015,make:"Audi",model:"A4"},
						{year:2014,make:"Benz",model:"c2000"},
						{year:2015,make:"Maruti",model:"s-cross"},
						{year:2015,make:"Maruti",model:"WagonR"}
					];
	return vehicleData;
}

function checkDuplicates(inputarray,data)      // this function will be called everytime for the year in vehicledata
{	
	var dataExists=false;
	if(inputarray) // this will check wheter the array is present or not 
	{	
			
		//for(var j=0;j<data.length;j++)
		//{	
			for(var i=0;i<inputarray.length;i++)  
				{
				if(inputarray[i]==data) //data[j]
				{
					dataExists=true;
					break;
				}
			}
		//}
	}
	if(!dataExists)
	{
		inputarray.push(data);
	}
	return inputarray;
}




function selectYear()
{
	var year=[];
	var vehicleData = getVehicledata(); // this function is not returning anything thats why the error ,now its giving error because of local variable
	for(var i=0;i<vehicleData.length;i++)
	{
			year=checkDuplicates(year,vehicleData[i].year);
	}
	console.log(year);
	addOption("year","option","Select Year");
	for(i=0;i<year.length;i++)
		addOption("year","option",year[i]);
	
}

function selectMake()
{
	
	var make=[];
	document.getElementById("make").options.length=0;
	var x = document.getElementById("year").value; // this fetch is used because we need make for this selected year only
	console.log(x); 
	var vehicleData = getVehicledata();
	for(var i=0;i<vehicleData.length;i++)  // this loop is used beacause we need to search the particular year in data and get only make for that
	{
		if(x==vehicleData[i].year) // this condition for check whether the year in data is euqul to our selected year
			make=checkDuplicates(make,vehicleData[i].make); //if it is the same selected year then we will need all the make of the year only
	}
	console.log(make);
	addOption("make","option","Select Make");
	for(i=0;i<make.length;i++)
		addOption("make","option",make[i]);
	
}



function selectModel()
{
	var model=[];
	var vehicleData=getVehicledata();
	document.getElementById("model").options.length=0;
	var x=document.getElementById("year").value;
	var y=document.getElementById("make").value;

	for(var i=0;i<vehicleData.length;i++) // to loop inside the whole vehicle data 
	{
		if(x == vehicleData[i].year ) // this to check for the particular year is prsent in vehicle data
		{
			if(y == vehicleData[i].make) // this will check for selected make of the user in vehicle data
			{
				model.push(vehicleData[i].model);
			}
		}
	}
	console.log(model);
	addOption("model","option","Select Model");
	for(i=0;i<model.length;i++)
		addOption("model","option",model[i]);
	
}
	
	

