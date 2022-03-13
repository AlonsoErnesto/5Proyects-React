import moment from 'moment';

const studentColumns = [
  {
    title:'First Name',
    dataIndex:'firstName',
    sorter:(a,b)=> a.firstName.localeCompare(b.firstName)
  },
  {
    title:'Last Name',
    dataIndex:'lastName',
    sorter:(a,b)=> a.lastName.localeCompare(b.lastName)
  },
  {
    title:'Gender',
    dataIndex:'gender',
    filters : [
      {
      text:'Male',
      value:'Male'
      },
      {
        text:'Female',
        value:'Female'
      }
    ],
    onFilter:(value, record) => record.gender == value
  },
  {
    title:'Date of Birth',
    dataIndex:'dob',
    sorter:(a,b)=>moment(a.dob,'DD-MM-YYYY') - moment(b.dob,'DD-MM-YYYY')
  },
  {
    title:'Marks',
    dataIndex:'marks',
    sorter:(a,b) => a.marks - b.marks
  },
  {
    title:'Country',
    dataIndex:'country',
    sorter:(a,b)=>a.country.localeCompare(b.country)
  }
];

export default studentColumns;
