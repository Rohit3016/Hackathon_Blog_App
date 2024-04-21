import { useEffect, useState } from "react";
import { getCategories } from "../services/category";
import Category from "../components/category";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sideNavBar";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const result = await getCategories();
    if (result["status"] === "Success") {
      setCategories(result["data"]);

      console.log(result["data"]);
    }
  };

  const onAdd = () => {
    navigate("/category/add");
  };
  const onGoBack = async () => {
    navigate("/home");
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            console.log(category)
            return (
              <Category
                id={category.id}
                title={category.title}
                description={category.description}
              />
            );
          })}
        </tbody>
      </table>

      <button onClick={onAdd} className="btn btn-primary">
        Add Category
      </button>

      <button className="btn btn-primary" onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default CategoryList;
