

var numbers = new Array();
//numbers=[10,1,9,2,8,3,7,4,6];

var suminit,meaninit,medianinit,stdinit,max,min;
var upb,downb;
var arrUp,arrDown;
var strUp,strDown;

function markNull(){

    suminit = "null";
    meaninit = "null";
    medianinit = "null";
    stdinit = "null";
    max = "null";
    min = "null";
    upb=0;
    downb=0;
    strDown="";
    strUp="";
    return;
}



function add_element_to_array(){
    var v = document.getElementById("text1").value.split(' ');
    numbers = v;
    for(var i=0;i<numbers.length;i++)numbers[i] = Number(numbers[i]);
    console.log(v);
    document.getElementById("text1").value = "";
    document.getElementById("out").innerHTML = numbers;
    markNull();
}


function up(){
    if(upb==0)
    {
        arrUp = numbers.sort(function(a, b){return a-b});
        for(i=0;i<numbers.length;i++)
        {
            strUp+=numbers[i].toString();
        }
        max = numbers[numbers.length-1];
        min = numbers[0];
        upb=1;
    }
    
    console.log("Ascending order");
    for(i=0;i<arrUp.length;i++)
    {
        console.log(arrUp[i]);
    }

    document.getElementById("out").innerHTML = arrUp;
}

function down(){
    
    if(downb==0)
    {
        arrDown = numbers.sort(function(a, b){return b-a});
        for(i=0;i<numbers.length;i++)
        {
            strDown+=numbers[i].toString();
            strDown+=" ";
        }
        min = numbers[numbers.length-1];
        max = numbers[0];
        downb=1;
    }
    
    console.log("Descending order: ");
    for(i=0;i<arrDown.length;i++)
    {
        console.log(arrDown[i]);
    }

    document.getElementById("out").innerHTML = arrDown;
}

function max1(){
    if(max==="null")
    {
        max = Math.max.apply(null,numbers);
    }
    
    console.log("Max value: "+ max);
    document.getElementById("out").innerHTML = max;
    return max;
}

function min1(){
    if(min==="null")
    {
        min = Math.min.apply(null,numbers);
    }
     
    console.log("Min value: "+min);
    document.getElementById("out").innerHTML = min;
    return min;
}



function mean(){
   
    //if value already computed
    if(meaninit==="null")
    {
        meaninit= sum()/numbers.length;
    }
    
    return meaninit;
}

function disp_mean(){

    meaninit = mean();
    console.log("Mean: "+meaninit);
    document.getElementById("out").innerHTML = meaninit;
}

function sum(){

    //if value already computed
    if(suminit === "null")
    {
        var sum=0;
        for(i=0;i<numbers.length;i++)
        {
            sum+=numbers[i];
        }
        suminit = sum;
    }
    
    document.getElementById("out").innerHTML = sum;
    return suminit;
}

function disp_sum(){

    suminit = sum();
    console.log("sum= "+suminit);
    document.getElementById("out").innerHTML = suminit;
}

function median(){

    //if value already computed
    if(medianinit === "null")
    {
        var arr = numbers.sort(function(a, b){return a-b});
    
        if(arr.length%2==0)
        {
            var mid=arr.length/2;
            var m = Math.floor(mid);
            var med = (arr[m]+arr[m-1])/2;
        }
        else{
            var mid=arr.length/2;
            var m= Math.floor(mid);
            var med = arr[m];
        }

        medianinit = med;
    }
    
    console.log("Median: "+medianinit);
    document.getElementById("out").innerHTML = medianinit;
    return medianinit;
}

function stdev(){

    //if already computed
    if(stdinit === "null")
    {
        var m= mean();
        var std=Math.sqrt(numbers.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (numbers.length - 1));

        stdinit = std;
    }
    
    
    console.log("standard deviation: "+stdinit);
    document.getElementById("out").innerHTML = stdinit;
    return stdinit;
}

