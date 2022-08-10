import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../Firebaseconfig'
import { collection, getDocs } from 'firebase/firestore';
import {useNavigate ,Link} from "react-router-dom"
import { Register } from './Register';
const Login = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const userRef = collection(db, "users");
    const [credintials, setcredintials] = useState({ email: '', password: '' })

    useEffect(() => {
        const getusers = async () => {
            const data = await getDocs(userRef);
            console.log(data)
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getusers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onchange = (e) => {
        setcredintials({ ...credintials, [e.target.name]: e.target.value })
    }
    const submit = ()=>{
        users.forEach(user => {
            let {email, password,id} = user;
            if(credintials.email !== email|| credintials.password !== password){
                alert('invalid credential');
            }
            else{
            navigate("/todo")
            localStorage.setItem('userID', id)
        }
        });
    }
    return (
        <div className='container mt-5'>
            <div style={{ width: '50%', margin: 'auto' }}>


                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>
                            <h1 style={{ textAlign: 'center', marginTop: '200px' }}>Login</h1>
                            <div className="form-outline mb-4">
                                <input type="email" name='email' onChange={onchange} id="loginName" className="form-control" />
                                <label className="form-label" htmlFor="loginName">Email or username</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" name='password' onChange={onchange} id="loginPassword" className="form-control" />
                                <label className="form-label" htmlFor="loginPassword">Password</label>
                            </div>

                            <div className="row mb-4">

                                <div className="col-md-6 d-flex justify-content-center">

                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                        </form>
                        <button onClick={submit} className="btn btn-primary btn-block mb-4">Sign in</button>


                        <div className="text-center">
                            <p>Not a member? <Link to='/signup'>Register</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login