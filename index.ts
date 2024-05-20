interface studentdetails{
    name: string;
    age: number;
    email: string;
    adress: native;
    course: "Javascript"|"Typescript",
}
 interface native{
    city: string;
    state: string;
    pincode: number;

 }
     let adress: native={
     city:"karimnagar",
     state:"Telangana",
     pincode: 505526,
  }
    let student: studentdetails={
        name:"keerthana",
        age:18,
        email :"keerthanadurgamm@gmail.com",
        adress: adress,
        course: "Javascript",
    }
   console.log(student);
     
