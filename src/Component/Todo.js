import React, { useEffect, useState } from 'react'
import { db } from '../Firebaseconfig'
import { collection, getDocs, addDoc } from 'firebase/firestore';
const Todo = (props) => {

    const [tododata, settododata] = useState([]);
    const userRef = collection(db, "todolist");
    const [listitem, setlistitem] = useState({ date: '', name: ''})
    const uid = localStorage.getItem('userID');
   
    useEffect(() => {
        props.signout(true)
        const getusers = async () => {
            const data = await getDocs(userRef);
            settododata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getusers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createTodo = async () => {
        let len = 0
        await addDoc(userRef, { name: listitem.name, date: Date(), userID:localStorage.getItem('userID')  });
        settododata([...tododata, { name: listitem.name, date: listitem.date, id: len += 1 }]);
    }
    const onchange = (e) => {
        setlistitem({ ...listitem, [e.target.name]: e.target.value });
    }
    return (
        <div className='container'>
            <form className='w-50 m-auto mt-5'>
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Add ToDO</label>
                    <input type="email" name='name' onChange={onchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
            </form>
            <button type="submit" className="btn btn-primary" onClick={createTodo}>Add TODO</button>

             {tododata ? tododata.map((data) => {
                
                if(data.userID === uid){
                   
                   return   <div className="card mt-3 m-auto"  key={data.id} style={{width:'400px'}}>
                              <div className="card-header">
                                To-DO
                              </div>
                             <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{data.name}</p>
                                    <footer>{data.date}</footer>
                                </blockquote>
                            </div>
                    </div>
                }
            }) : null}
        </div>
    )
}

export default Todo