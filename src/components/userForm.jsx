import React, {useState, useEffect} from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { toPng } from '@dicebear/converter';
import { adventurer } from '@dicebear/collection';

const UserForm = () => {
    //Set default values on form
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    useEffect(() => {
        fetch('https://api.dicebear.com/9.x/adventurer/svg?seed=Robert');
    }, [])
    //Submit Button Function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && age) {
            setIsSubmitted(true);
        }
    };
    //When Submit is clicked, show input values in console
    const submitClick = () => {
        console.log(`Name: ${name}, Age: ${age}`);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setAge('');
        setName('');
    }

    return (
        //Form 1: Show if form is not submitted, Form 2: Show if form is submitted
        <div>
            <h2>Create Profile</h2>
            
            {!isSubmitted ? (
                <form className = "form" onSubmit = {handleSubmit}> 
                    <div>
                    <input
                        type = "text"
                        placeholder = "Enter Your Name"
                        value = {name}
                        onChange = {e => setName(e.target.value)}
                        required
                    />
                    </div>
                    <div>
                        <input
                            type = "text"
                            placeholder = "Enter your Age"
                            value = {age}
                            onChange = {(e) =>
                            setAge(e.target.value)}
                            required
                        />
                    </div>
                    <button className = "button" onClick = {submitClick}>Submit</button>
                </form>
            ) : (
                <div>
                    <h3>Form Submitted!</h3>
                    <img className = 'avatar'
  src="https://api.dicebear.com/9.x/adventurer/svg?seed=Robert"
  alt="avatar" />
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <button onClick = {handleReset}>Reset</button>
                </div>
                
            )}
        </div>
    );
};

export default UserForm;