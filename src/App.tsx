import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-2">
      <Outlet />
    </div>
  );
};

export default App;
