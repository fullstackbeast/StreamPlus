import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "./application/actions/ui";
import { getLoadingState } from "./application/selectors/ui";


const App = () => {

 const isLoading = useSelector(getLoadingState);

 const dispatch = useDispatch();



  return (
    <div className="App">
      <h1>Test {isLoading}</h1>

      <div>{isLoading ? "Loading" : "Not loading"}</div>


      <button onClick={()=>{dispatch(setLoading(!isLoading))}}>Change Loading</button>
    </div>
  );
}

export default App;
