import React,{ useState} from 'react';

const JobForm = ({ submit }) => {

        const [form , setForm] = useState({
                title:"",
                company:"",
                city:"",
                description:""
        } )

        const handleInput = (event) =>{
                setForm( {...form , [event.target.name]:event.target.value} )
        }
        const handleSubmit = (event) =>{
                event.preventDefault();
                submit({...form , id: new Date().getTime().toString()});
                 
        }






        return (
                <div>
                <h3>Enter your Job</h3>
                        <form onSubmit={handleSubmit}>
        <input className="input is-primary"
         type="text"
          placeholder="Enter Title" 
          name="title"
          value={form.title}
          onChange={handleInput}
          /> 

        <input className="input is-primary"
         type="text"
          placeholder="Enter Company" 
          name="company"
          value={form.company}
          onChange={handleInput}

          />     
        <input className="input is-primary" 
        type="text"
         placeholder="Enter City" 
         name="city"
          value={form.city}
          onChange={handleInput}

         />     
        <textarea className="textarea is-primary"
         placeholder="Enter Job Description" 
         name="description"
          value={form.description}
          onChange={handleInput}

         ></textarea>  
        <button className="button is-danger">Create job</button>
                         </form>
                </div>
        );
}

export default JobForm;
