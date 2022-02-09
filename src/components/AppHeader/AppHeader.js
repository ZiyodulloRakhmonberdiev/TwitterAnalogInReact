import "./AppHeader.css";
const AppHeader = ({ allPosts, liked }) => {
  return (
    <div className="app-header d-flex">
      <h1>Twitter Todo List</h1>
      <h2>
        {allPosts} posts, {liked} like
      </h2>
    </div>
  );
};
export default AppHeader;
