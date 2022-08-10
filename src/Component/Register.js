import React, {useState} from 'react'
import { db } from '../Firebaseconfig'
import { collection, addDoc} from 'firebase/firestore';
import {useNavigate} from "react-router-dom"
export const Register = () => {
    const navigate = useNavigate();
    const userRef = collection(db, "users");
    const [listitem, setlistitem] = useState({ email: '', password: ''})

    const createTodo = async () => {
        await addDoc(userRef, { email: listitem.email, password:listitem.password});
        navigate("/")
    }

    const onchange = (e) => {
        setlistitem({ ...listitem, [e.target.name]: e.target.value });
    }

  return (
    <div className='container mt-5'>
    <div style={{ width: '50%', margin: 'auto' }}>
        <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form>
                    <h1 style={{ textAlign: 'center', marginTop: '200px' }}>SignUp</h1>
                    <div className="form-outline mb-4">
                        <input type="email" name='email' onChange={onchange} id="loginName" className="form-control" />
                        <label className="form-label" htmlFor="loginName">Email or username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" name='password' onChange={onchange} id="loginPassword" className="form-control" />
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                    </div> 
                </form>
                <button type="submit" className="btn btn-primary" onClick={createTodo}>SignUp</button>
            </div>
        </div>
    </div>
</div>
  )
}
