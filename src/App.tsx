import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-5">
      <Outlet />
    </div>
  );
};

export default App;
