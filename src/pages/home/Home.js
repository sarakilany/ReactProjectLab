import { useSelector } from "react-redux/es/hooks/useSelector";
export const Home = () => {
    const reduxStore = useSelector(state => state.todos);
    console.log(reduxStore);
    return (
        <div>
            this is home
        </div>);
}