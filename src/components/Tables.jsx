import React,{useState} from 'react';

//Components
import Dashboard from './Dashboard';
import students from '../database/student' ;
import studentColumns from '../database/studentColumns';

//antd
import { Input, Table } from 'antd';

//moment
import moment from 'moment';

const Tables = () => { 

  const [tableData, setTableData] = useState(students);
  const searchTable = (searchKey) => {
    var tempdata = students.filter(student=>JSON.stringify(student).toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
    setTableData(tempdata)
  }

  return (
    <Dashboard>
      <div className="tables">
        <h3>Tabla de Productos</h3>
        <Input placeholder="Search student" styles={{marginBottom:20}} onChange={(e)=>{searchTable(e.target.value)}}/>
        <Table className="tabled" columns={studentColumns} dataSource={tableData}/>
      </div>
    </Dashboard>
  )
}


export default Tables;
