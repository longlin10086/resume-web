import Header from "./components/Header";
import Page from "./components/page";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-hero bg-cover w-full h-full min-h-screen">
      <div className="h-full md:min-h-screen my-0">
        <div className="justify-center flex">
          <Header />
        </div>
        <div className="flex justify-center my-0 md:my-2 w-full min-h-[90vh]">
          <Page />
        </div>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;
