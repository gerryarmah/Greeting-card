const GreetingCard = ({ title, message }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 m-4 w-80">
            <h2 className="text-2x1 font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600">{message}</p>
        </div>
    );
};

export default GreetingCard;