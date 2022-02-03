import BlogList from "./BlogList";

const Home = () => {

    const blogs = [
        {id: 1, title: 'Object title 1', author: 'Object Author 1'},
        {id: 2, title: 'Object title 2', author: 'Object Author 2'},
        {id: 3, title: 'Object title 3', author: 'Object Author 3'},
        {id: 4, title: 'Object title 4', author: 'Object Author 4'},
    ];

    return (
        <div className="home">
            <BlogList blogs={blogs}/>
        </div>
    );
}

export default Home;
