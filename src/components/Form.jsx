import {useState, useEffect} from "react";

export default function Form (props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
    // clear after submission
    setFormData ({searchterm: ""});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          placeholder ="Enter movie title"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
   
  );
};


// export default function Form(props){
//     // The component must return some JSX
//     return <h1>The Form Component</h1>;
//   };

  // export default function Form(props) {
   
  // }
  