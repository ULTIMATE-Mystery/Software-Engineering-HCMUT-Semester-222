//Tham chiếu thư viện
var MongoClient = require('mongodb').MongoClient;
//Link kết nối đến database

var url = "mongodb+srv://thinh97a1:4PKaekL2W4HpWwF6@cluster0.ah9khll.mongodb.net/?retryWrites=true&w=majority";
//Tạo đối tượng và truyền dữ liệu qua url
var mongo = new MongoClient(url, {useNewUrlParser: true});
//Kết nối đến database

mongo.connect((err, db) =>{
    if(err) throw err;

    console.log("Kết nối thành công");

    // var dbo= db.db("test");
    // dbo.createCollection("List", (err,res) =>{
    //     if(err) throw err;

    //     console.log("Tạo bảng thành công")
    // } );

    // var obj = {name: 'Nguyen Van A', age : 18};
    // dbo.collection("List").insertOne(obj, (err, result)=>{
    //     if (err) throw err;

    //     console.log("Thêm thành công");
    //     console.log(result);
    //     db.close();
    // });
});