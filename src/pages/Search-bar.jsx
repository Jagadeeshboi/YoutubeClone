import { useForm } from "react-hook-form";
import { UseContext } from "../Contextapi"
import { HiSearch } from "react-icons/hi";

function SearchBar() {
    const {setSearchterm}=UseContext();
    const {register,handleSubmit}=useForm()

    const onSubmit=(data)=>
        {
            setSearchterm(data["Search-term"])
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            id="Search-term"
            {...register('Search-term')}
            />
            <button><HiSearch className="svg"/></button>
        </form>
    );
}

export default SearchBar
