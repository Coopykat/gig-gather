import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/home.css'
import { getAllUsers, postUser, login} from '../services';

import { useNavigate,  } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [samePassword, setSamePassword] = useState('');

    useEffect(()=>{
        getAllUsers()
        .then(res => console.log(res))
    }, [])

    const [formValues, setFormValues] = useState({
        firstname:'',
        lastname:'',
        mail:'',
        password:'',
        verifPassword:'',
    });

    // VERIFY SAME PASSWORD //
       const handlePassword = (e) => {
      let newPassword = e.target.value;
      setPassword(newPassword);
    };
    
    function handleSamePassword(e) {
    setSamePassword(e.target.value);
    }
   //      ******          //

    const onChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      
        if (e.target.name === 'password') {
          handlePassword(e);
        }
    
        if (e.target.name === 'verif-password') {
          handleSamePassword(e);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        postUser(formValues)
            .then(({data})=> (data))
            .then(function (result) {
                navigate(`/my-gigs/`);
              })
              .catch(function (err) {
                alert(err.message);
              });
          };


  return (
    <div>
        <NavBar/>
        <title>Home</title>
            <h2>Inscription</h2>
        <form onSubmit={onSubmit} className="inscription-form">
            <label htmlFor='firstname'>Prénom</label>
            <input
            onChange={onChange}
            name="firstname"
            id="firstname"
            placeholder="prénom"
            type="text"
            />
            <label htmlFor='lastname'>Nom</label>
            <input 
            onChange={onChange} 
            name="lastname" 
            id="lastname" 
            placeholder="nom" 
            type="text"
            />
            <label htmlFor='mail'>Email</label>
            <input 
            onChange={onChange} 
            name="mail" 
            id="mail" 
            placeholder="email" 
            type="email"
            />
            <label htmlFor='password'>Mot de passe</label>
            <input 
            onChange={onChange} 
            name="password" 
            id="password" 
            placeholder="mot de passe" 
            type="text" 
            value={formValues.password}
            />
            <label htmlFor='verif-password'>Vérfifiez votre mot de passe</label>
            <input 
            onChange={onChange} 
            id="verif-password" 
            placeholder="mot de passe" 
            type="text"
            />
      {/* VERIFICATION PASSWORD  */}
            <p className={formValues.verifPassword === formValues.password ? "password-ok" : "error-message"}>
             Renseignez un mot de passe identique
            </p>
            <button id="inscription-btn" type="submit">Envoyer</button>
        </form>
      {/* CONNEXION FORM */}
            <h2>Déjà inscrit ?</h2>
        <form className="connexion-form">
            <label htmlFor='firstname'>Email</label>
            <input id="connexion-firstname" placeholder="firstname" type="text"></input>
            <label htmlFor='password'>Mot de passe</label>
            <input id="connexion-password" placeholder="mot de passe" type="text" ></input>
            <button id="connexion-btn" type="submit">Connexion</button>
        </form>
    </div>
  )}


export default Home;