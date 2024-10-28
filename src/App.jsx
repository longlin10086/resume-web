import Header from "./components/Header";
import Page from "./components/page";

function App() {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="justify-center flex">
        <Header />
      </div>
      <div className="flex justify-center my-2 w-full min-h-[90vh]">
        <Page />
      </div>
    </div>
  );
}

export default App;
