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
db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});
module.exports.insert=function(table,data){
    var sql="INSERT INTO ? SET ?";
    db.query(sql,
        [table,data]
        ,function(err){
        if(err) throw err;
    });
};
module.exports.query=function(table,callback){
    var sql="SELECT * from ?";
    db.query(sql,table,function(err,results){
        if(err) throw err;
        callback(results.length);
    })
};
//data={
//    name:"test",
//    start:new Date(),
//    end:new Date(),
//    duration:30,
//    process:"test process"
//};
//console.log(data);
//module.exports.insert(data);
//module.exports.query();