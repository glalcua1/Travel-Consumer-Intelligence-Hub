const DestinationCard = ({ destination, onSelect }) => {
  return (
    <div
      className="card p-6 cursor-pointer transform hover:scale-105 transition-transform duration-200"
      onClick={() => onSelect(destination.name)}
    >
      <div className="text-4xl mb-4 text-center">{destination.image}</div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
        {destination.name}
      </h4>
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-600 mr-2">Growth:</span>
        <span className="text-sm font-semibold text-green-600">
          {destination.trend}
        </span>
      </div>
    </div>
  )
}

export default DestinationCard 