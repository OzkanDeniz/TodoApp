import { useState } from "react";

const AddBilgi = ({ postBilgiler }) => {
  //!(1)
  const [baslik, setBaslik] = useState("");
  //!(2)
  const [desc, setDesc] = useState("");

  //!(6)
  const handleSubmit = (e) => {
    e.preventDefault();

    // database e yolla
    postBilgiler({ title: baslik, description: desc }); //!(5)

    setBaslik("");  //! inputları boşaltmak için "" yazdık.
    setDesc("");
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}> 
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
            onChange={(e) => setBaslik(e.target.value)} //!(3)
            value={baslik} //! inputları boşaltmak için "" yazdık.
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
            onChange={(e) => setDesc(e.target.value)} //!(4)
            value={desc} //! inputları boşaltmak için "" yazdık.
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;
