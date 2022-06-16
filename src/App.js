import './App.css';

function App() {
  // const person = {
  //   name: "Amit",
  //   age: 25
  // }

  // for (const k in person) {
  //   console.log(person[k]);
  // }

  // const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //   },
  //   {
  //     name: "Piyush",
  //     age: 40,
  //   },
  // ];

  // person.map((v,i) =>{
  //   for (const k in v){
  //     console.log(v[k]);
  //   }
  // })

  // 

  // const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //     course: [
  //       "C",
  //       "HTML"
  //     ]
  //   },
  //   {
  //     name: "Ajay",
  //     age: 40,
  //     course: [
  //       "Java",
  //       "JavaScript"
  //     ]
  //   }
  // ]

  // person.map((v,i) => {
  //   for (let k in v){
  //     if (k === "course") {
  //         v.course.map((c) =>{
  //         console.log(c);
  //       })
  //     } else {
  //       console.log(v[k]);
  //     }
  //   }
  // })

  // const myObj = {
  //   name: "John",
  //   age: 30,
  //   cars: {
  //     car1: "Ford",
  //     car2: "BMW",
  //     car3: "Fiat"
  //   }
  // }

  // for (let k in myObj){
  //   if (k === "cars") {
  //     for (let c in myObj[k]){
  //       console.log(myObj[k][c]);
  //     }
  //   } else {
  //     console.log(myObj[k]);
  //   }
  // }

  // const medicineData =
  //   [
  //     {
  //       id: 101,
  //       name: 'Abacavir',
  //       quantity: 25,
  //       price: 150,
  //       expiry: 2022,
  //       status: true
  //     },
  //     {
  //       id: 102,
  //       name: 'Eltrombopag',
  //       quantity: 90,
  //       price: 550,
  //       expiry: 2021,
  //       status: true
  //     },
  //     {
  //       id: 103,
  //       name: 'Meloxicam',
  //       quantity: 85,
  //       price: 450,
  //       expiry: 2025,
  //       status: false
  //     },
  //     {
  //       id: 104,
  //       name: 'Allopurinol',
  //       quantity: 50,
  //       price: 600,
  //       expiry: 2023,
  //       status: true
  //     },
  //     {
  //       id: 105,
  //       name: 'Phenytoin',
  //       quantity: 63,
  //       price: 250,
  //       expiry: 2021,
  //       status: false
  //     }
  //   ];

  // let FmedicineData = medicineData.filter((fmd, fmi) => fmd.status === true);
  // let Expance = FmedicineData.reduce((acc,am,ai)=> acc + am.price, 0);

  // return (
  //   <div>
  //     <h1 align="center">Medicine Data</h1>
  //     <table border="2px" cellSpacing="0" cellPadding="0" width="750px" align='center'>
  //       <tr>
  //         <th>Id</th>
  //         <th>Name</th>
  //         <th>Quantity</th>
  //         <th>Price</th>
  //         <th>Expiry</th>
  //         <th>Status</th>
  //         <th>Expance</th>
  //       </tr>
  //       {
  //         FmedicineData.map((md, mi) => {
  //           let { id, name, quantity, price, expiry, status } = md;
  //           return (
  //             <tr align='center' key={mi}>
  //               <td>{id}</td>
  //               <td>{name}</td>
  //               <td>{quantity}</td>
  //               <td>{price}</td>
  //               <td>{expiry}</td>
  //               <td>{status.toString()}</td>
  //               {(mi===0)?<td rowSpan={3}>{Expance}</td>:null}
  //             </tr>
  //           )
  //         })
  //       }
  //     </table>
  //    </div>
  //   );
  // }

  // const EmployeeData =
  // [
  //     {
  //       name: "amit",
  //       age: 35,
  //       salary: 40000,
  //       bonus: 1000,
  //       status: true
  //     },
  //     {
  //       name: "ajay",
  //       age: 25,
  //       salary: 38000,
  //       bonus: 2000,
  //       status: false
  //     },
  //     {
  //       name: "mayur",
  //       age: 23,
  //       salary: 50000,
  //       bonus: 500,
  //       status: true
  //     },
  //     {
  //       name: "jay",
  //       age: 29,
  //       salary: 35000,
  //       bonus: 600,
  //       status: true
  //     },
  //     {
  //       name: "raj",
  //       age: 33,
  //       salary: 22000,
  //       bonus: 2000,
  //       status: true
  //     },
  //   ] 
    
  //   let FEmployeeData = EmployeeData.filter((em, ei) => em.status === true);
  //   let expens = FEmployeeData.reduce((acc,em,ei)=> acc + em.bonus + em.salary , 0);
  //   return(
  //     <div>
  //       <table border="5px" align='center' cellPadding="20" cellspacing="0">
  //         <tr>
  //           <th>Name</th>
  //           <th>Age</th>
  //           <th>Salary</th>
  //           <th>Bonus</th>
  //           <th>total salary</th>
  //           <th>total expans</th>
  //         </tr>
  //       {
  //         FEmployeeData.map((em, ei) => {
  //          let { name, age, salary, bonus} = em;
  //         return(
  //         <tr>
  //           <td>{name}</td>
  //           <td>{age}</td>
  //           <td>{salary}</td>
  //           <td>{bonus}</td>
  //           <td>{bonus + salary}</td>
  //           {(ei===0)?<th rowSpan="6">{expens}</th>:null}
  //         </tr>
  //         );
  //       })
  //     }
  //       </table>
  //     </div>
  //   );
  // }
    export default App;
