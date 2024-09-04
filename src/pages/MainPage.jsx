
import "../components/Title"
import "../components/About"
import Title from "../components/Title";
import About from "../components/About";

const MainPage =()=> {
    const info = {
        Title: "Some Title",
        body: "Some Body"
    }

    return (
        <div>
            <Title text="hello work"/>
            <About info={info}/>

        </div>
    );
};
export default MainPage;