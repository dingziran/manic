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
    console.log('DB connected as id ' + db.threadId);
});

exports.init=function(){
    var sql="CREATE TABLE IF NOT EXISTS raw_data("+
        "id INT(11) NOT NULL AUTO_INCREMENT,"+
        "name VARCHAR(1023),"+
        "start DATETIME,"+
        "end DATETIME,"+
        "duration VARCHAR(255),"+
        "process VARCHAR(255),"+
        "PRIMARY KEY (id)"+
        ") ENGINE=InnoDB AUTO_INCREMENT=1001";
    db.query(sql,null,function(err){
            if(err) throw err;
        });
};

exports.insert=function(table,data){
    var sql="INSERT INTO "+table+" SET ?";
    db.query(sql,
        data,
        function(err){
            if(err) throw err;
        });
};
exports.query=function(table,callback){
    var sql="SELECT * from "+table;
    db.query(sql,null,function(err,results){
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
//module.exports.init();
//module.exports.query();