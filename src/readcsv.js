/**
 * Created by dingziran on 2015/2/13.
 */
//var http=require('http');
var fs = require('fs');
var csv = require("fast-csv");
//module.export.csvToObject("../ManicTimeData_2015-02-12.csv");
module.export.csvToObject=function (path,f){
    csv.fromPath(path)
        .on("data", function(data){
            f(data);
        })
        .on("end", function(){
            console.log("done");
        });
}

//fs.readFile('../ManicTimeData_2015-02-12.csv',function(err,data){
//    if(err){
//        console.error(err);
//    }
//    else{
//        console.log(data);
//    }
//})
//http.createServer(function(req,res){
//    if(req.url =='/'){
//        fs.readFile('../ManicTimeData_2015-02-12.csv',function(err,data){
//            if(err){
//                console.error(err);
//                res.end('Server Error');
//            }
//        })
//    }
//})
//
//
//
//module.export=function(){
//
//};