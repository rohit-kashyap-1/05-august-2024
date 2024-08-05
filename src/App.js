import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/* 
different end points test
select


1. how to use react router
2. listing and final in react 
3. dynamic parameters

*/
function App() {
  const [urls,setURL] = useState([
    {id:1,url:"https://dummyjson.com/users"},
    {id:2,url:"https://dummyjson.com/todos"},
    {id:3,url:"https://dummyjson.com/recipes"},
    {id:4,url:"https://dummyjson.com/quotes"}
  ])

  const [choice,setChoice] = useState(0)
  const [data,setData] = useState([])
  const [myData,setMyData] = useState([])


  const callFetch = ()=>{
    let a = urls[choice]
    let url = a.url
    let id = a.id
    switch(id){
      case 1: 
      fetch(url).then(response=>response.json()).then((data)=>{
        let temp = []
        data = data.users
        data.forEach(function(item){
          temp.push({id:item.id, name:item.firstName})
        })
        setMyData(temp)
      })

      break;
      case 2: 
        fetch(url).then(response=>response.json()).then((data)=>{
        let temp = []
        data = data.todos
        data.forEach(function(item){
          temp.push({id:item.id, name:item.todo})
        })
        setMyData(temp)
      })

      break;
      case 3: 
      fetch(url).then(response=>response.json()).then((data)=>{
        let temp = []
        data = data.recipes
        data.forEach(function(item){
          temp.push({id:item.id, name:item.name})
        })
        setMyData(temp)
      })

      break;
      case 4:
        fetch(url).then(response=>response.json()).then((data)=>{
          let temp = []
          data = data.quotes
          data.forEach(function(item){
            temp.push({id:item.id, name:item.quote})
          })
          setMyData(temp)
        })

      break;
    }

    console.log(myData)
  }


  /* id, name  */

  return (
    <div className="App">
      <div className='container'>
        <div className='border mt-4 rounded p-4'>
          <h2>Test API</h2>
          <div style={{ width:400 }}>
            <select className='form-control form-select' onChange={(e)=>{setChoice(e.target.value)}}>
              <option value={''}>Select API</option>
              {urls.map((item,index)=>{
                return <option key={item.id} value={index}>{item.url}</option>
              })}
            </select>
          </div>
          <button onClick={callFetch} className='btn btn-primary mt-2'>Fetch</button>
          <hr></hr>
          <ul style={{ listStyle:'none' }} className='list-group'>
            {(myData.length!=0)?myData.map((item,index)=>{
              return <li key={index} className='list-group-item'>
                <div>{item.id}</div>
                <div>{item.name}</div>
              </li>
            }):""}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
