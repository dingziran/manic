/**
 * Created by dingziran on 2015/2/13.
 */
var readcsv=require("./readcsv");
var persistence=require("./persistence");
module.exports.rawToDB=function(){
    readcsv.csvToObject("../data/ManicTimeData_2015-02-15.csv",function(data){
        if(data[0]=='Name'){
            console.log("Method(rawToDB): skip head");
            return;
        }
        var record={
            name:data[0],
            start:new Date(Date.parse(data[1])),
            end:new Date(Date.parse(data[2])),
            duration:data[3],
            process:data[4]
        };
        persistence.insert("raw_data",record);
        //for(var i= 1;i<data.length;i++){
        //    var record=data[i];
        //
        //}
    })
};
module.exports.groupByProcess=function(){
    persistence.query("row_data",function(results){
        results.forEach(function(item){
            persistence.queryBy("group_process","")
        });
    })
};
persistence.init();
module.exports.rawToDB();