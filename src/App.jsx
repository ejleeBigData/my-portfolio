import portfolioData from "./portfolio-data.json";
import Header from "./components/Header";

/*
강사님 https://portfolio-eta-sooty-iq9zxp898z.vercel.app/
*/

const App = () => {
  return (
    <div className="min-h-screen">
      <Header profile={portfolioData.profile} />
      <footer className="py-8 px-4 text-center">
        <p className="text-sm">
          © 2025 {portfolioData.profile.name} All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
