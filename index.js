// var, let, const 
    //const sd khi không thay đổi giá trị, khi muốn lưu vào localStorage chẳng hạn

    //const
    const PI = 3.14;

    //let (cục bộ) (trong blocl-function)

    //var (toàn cục), cho phép khai báo chồng lên nhau 
    var a = 0;
    var a = 1;


//spread syntax & destructuring {...} , [...], 
//Biến: Đơn vị đại diện cho vùng nhớ trong mt. 
    //Spread: Cú pháp: ...
        let objA = {
            name: "Devmaster",
            age: 5,
        }

        //Tham chiếu
            //Tham chiếu đến ô nhớ và thay đổi tại ô nhớ đó
            let objB = objA; 
            objB.name = "Name đã thay đổi theo THAM CHIẾU";  
            // --> Cả 2 objA và B đều bị đổi Name

        //Tham trị
            //Copy giá trị sang 1 ô nhớ khác rồi mới thay đổi
            let objC = {
                ...objA,
                addr: "Hưng yên",
            }
            objC.name = "Name đã thay đổi theo tham trị";
            // --> Chỉ objC mới bị đổi tên, ObjA không bị

    //Destructuring: Cú pháp: {}
        let student = {
            name: "Khải",
            gender: "nam"
        }
        //Thông thường
        // let getName = name.student;
        // let getGender = gender.student;

        //Ta có thể viết gọn theo destructuring
        let {name, gender} = student;

//Function
    //Arrow function 
        //Muốn return Object thì phải có ngoặc tròn
        //KHông trả về giá trị: {}
        //Có tròn or ko ngoặc: trả về giá trị
        let createBbj = (name, age) => ({name:name, age:age});
        //Return kết quả là số thì ko cần {} 
        let sum = (a,b) => a+b;

    //Built-in function
    //Filter
    let products = [
        {
            name:"iphone",
            price: 1000,
            quanity: 10
        },
        {
            name:"samsung",
            price: 1500,
            quanity: 20
        },
        {
            name:"nokia",
            price: 2000,
            quanity: 5
        },
        {
            name:"Xiaomi",
            price: 500,
            quanity: 8
        },
        {
            name:"huawei",
            price: 900,
            quanity: 11
        },
    ]

    // let priceLonHon1nghinDo = products.filter(function(productThoaMan){
    //     return productThoaMan.quanity > 10;
    // })
    // console.log(priceLonHon1nghinDo);

    let prods2 = products.filter(x => x.name == "Xiaomi");
    console.log(prods2);

    //Find: Trả về obj
    let prods3 = products.find(function(product){
        return (product.name == "huawei");
    })
    console.log(prods3);

    let prods3Arrow = products.find(x => x.name == "huawei");

    //Some, Every: trả về true, false
    let prods4Arrow = products.some(x => x.price > 1500);
    console.log(prods4Arrow);

    //Map: Trả về 1 obj mới theo điều kiện.
    let prods5Arrow = products.map(x => x.name);
    console.log(prods5Arrow);

    let prod6Arrow = products.map(x => ({name: x.name, totalPrice: x.price * x.quanity}));
    console.log((prod6Arrow));

    let prods7 = products.map(function(product){
        return {
            name: product.name,
            newProperty: product.price,
        }
    })
    console.log(prods7);

    //Sort: Sắp xếp từ bé đến lớn: Nếu a - b: ( >0 : b trc a), ( < 0: b sau a) , ( == 0: giu nguyen)
    let prods8Arrow = products.sort((x,y) => x.price - y.price);
    console.log("Prods8: " + prods8Arrow);
    console.log(prods8Arrow);

    //Reduce
    let prods9Arrow = products.reduce((x,y) => x + y.price,0);
    console.log(prods9Arrow);

    let myArr = [ 'js', 'php'];
    let abc = myArr.reduce((x,y) => x + y,'');
    console.log(abc);

    let myArr2 = [
        {
            name: "khai",
            age: 18
        },
        {
            name: "huy",
            age: 119
        }
    ]
    let abc2 = myArr2.reduce((x,y) => x + y,{name});
    console.log(abc2);

    //async, await, promise, sử lý bất đồng bộ trong JS, class



