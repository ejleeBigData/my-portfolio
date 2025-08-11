import portfolioData from "./portfolio-data.json";
import Header from "./components/Header";

/*
강사님 https://portfolio-eta-sooty-iq9zxp898z.vercel.app/
*/

const App = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <Header profile={portfolioData.profile} />
      <footer className="">
        <p>© 2025 {portfolioData.profile.name} All right reserved.</p>
      </footer>
    </div>
  );
};

export default App;
