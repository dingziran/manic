/**
 * Created by dingziran on 2015/2/13.
 */
var mysql=require('mysql');
var db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'manic'
});
module.exports.insert=function(data){
    var sql="INSERT INTO row_data (name,start,end,duration,process) values (?,?,?,?,?)";
    db.query(sql,
        [data.name,data.start,data.end,data.duration,data.process]
        ,function(err){
        if(err) throw err;
    });
};
data={
    name:"test",
    start:new Date(),
    end:new Date(),
    duration:30,
    process:"test process"
};
console.log(data);
module.exports.insert(data);