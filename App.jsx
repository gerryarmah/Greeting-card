import Header from "./Header";
import GreetingCard from "./GreetingCard";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center">
      <Header />
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <GreetingCard
          title="Happy Birthday!"
          message="Wishing you a fantastic day filled with joy!"
        />
        <GreetingCard
          title="Congratulations!"
          message="Great job on your achievement!"
        />
        <GreetingCard
          title="Thank You!"
          message="Thanks for your kindness and support!"
        />
      </div>
    </div>
  );
};

export default App;