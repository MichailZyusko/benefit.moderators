import SideBarMenu from './components/SideBarMenu';
import Router from './routes';

function App() {
  return (
    <div>
      <SideBarMenu productCount={0} storeCount={0} offersCount={0} categoriesCount={0} />
      <Router />
    </div>
  );
}

export default App;
