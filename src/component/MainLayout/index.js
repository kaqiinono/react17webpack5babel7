import './index.scss';

const MainLayout = () => {
  return (
    <div className="main">
      <header>{process.env.NODE_ENV}</header>
      <nav>nav</nav>
      <section>section</section>
      <aside>aside</aside>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
