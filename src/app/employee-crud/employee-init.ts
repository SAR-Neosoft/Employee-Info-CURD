export class Init {
    load() {
      if(localStorage.getItem('employees') === null || localStorage.getItem('employees') == undefined) {
        console.log('No employees Found... Creating...');
        let emps = [
          {
            id:1,
            firstName:'Syed',
            lastName:'Abdur',
            age:'22',
            department:['Java Full stack'],
            languages: ['Mysql','Java','Javascript','Html','Css']
          }, 
          {
            id:2,
            firstName:'Zara',
            lastName:'Zara',
            age:'28',
            department:[' Microsoft dot net'],
            languages: ['Html','Css','Dot net','Mangodb']
          }, {
            id:3,
            firstName:'sher',
            lastName:'khan',
            age:'27',
            department:['Android'],
            languages: ['Java','Javascript','Html','Css']
          },
        ];
  
        localStorage.setItem('employees', JSON.stringify(emps));
        return 
      } else {
        console.log('Found employees...');
      }
    }
  }