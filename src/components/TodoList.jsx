import React,{useState} from 'react';

//Components
import Dashboard from './Dashboard' ;

//antd
import { Row, Col, Input, Button, Modal } from 'antd';

const Todolist = () => {

  const [inputValue, setInputValue] = useState('');
  const [ todoItems, setTodoItems ] = useState([]);
  const [ isModalVisible, setIsModalvisible ] = useState(false);
  const [ editIndex, setEditIndex] = useState();
  const [ editInputValue, setEditInputValue ] = useState('');

  const addTodoItem = () => {
    setTodoItems([...todoItems, inputValue])
    console.log(todoItems);
  }

  const showModal = (index) => {
    setEditInputValue(todoItems[index])
    setEditIndex(index);
    setIsModalvisible(true);

  };

  const editTodoItem = () => {
    var dupitems = [...todoItems];
    dupitems[editIndex] = editInputValue;
    setTodoItems(dupitems);
    setIsModalvisible(false);

  }

  const handleCancel = () => {
    setIsModalvisible(false);
  }

  const deleteTodoItem = (index) => {
    var dupitems = [...todoItems];
    dupitems.splice(index,1);
    setTodoItems(dupitems);
  }


  return  (
    <Dashboard>
      <div className="todo">
        <h3 className="text-center">Todolist</h3>
        <Row justify="center">
          <Col lg={10} sm={24} className='bs p-2'>
            <div className="flex">
              <Input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="Enter item"/>
              <Button className="ml-2" onClick={addTodoItem}>Add</Button>
            </div>
          </Col>
        </Row>

        <Row justify='center' className="mt-3">
        { todoItems.length===0 ? <h3>No Items</h3>  :
          (<Col lg={10} sm={24} className='bs p-2'>
            {todoItems.map((item,index)=>{
               return (  
                 <div className="flex" style={{justifyContent : 'space-between'}}>
                  <h3>{item}</h3>
                  <div>
                    <Button type="primary" onClick={()=>{showModal(index)}}>Update</Button>
                    <Button type="danger" onClick={()=>{deleteTodoItem(index)}}>Delete</Button>
                   </div>
                </div>)
            })}
          </Col>)
        }
        </Row>

        <Modal title="Edit Item" visible={isModalVisible} onOk={editTodoItem} onCancel={handleCancel} okText='edit'>
          <Input value={editInputValue} onChange={(e)=>{setEditInputValue(e.target.value)}}/>
        </Modal>

      </div>
    </Dashboard>
  )

}

export default Todolist;
