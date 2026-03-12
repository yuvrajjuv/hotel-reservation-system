import { useState } from "react";
import "./index.css";

function generateRooms() {
  const floors = [];

  for (let floor = 10; floor >= 1; floor--) {
    let rooms = [];
    let totalRooms = floor === 10 ? 7 : 10;

    for (let i = 1; i <= totalRooms; i++) {
      rooms.push(floor * 100 + i);
    }

    floors.push({ floor, rooms });
  }

  return floors;
}

function getFloor(room) {
  return Math.floor(room / 100);
}

function travelTime(r1, r2) {
  const f1 = getFloor(r1);
  const f2 = getFloor(r2);

  const vertical = Math.abs(f1 - f2) * 2;
  const horizontal = Math.abs((r1 % 100) - (r2 % 100));

  return vertical + horizontal;
}

function App() {

  const hotel = generateRooms();

  const [occupiedRooms, setOccupiedRooms] = useState([]);
  const [selectedCount, setSelectedCount] = useState(1);
  const [lastAllocated, setLastAllocated] = useState([]);
  const [lastTravelTime, setLastTravelTime] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  function getAvailableRooms() {
    return hotel.flatMap((f) => f.rooms).filter(r => !occupiedRooms.includes(r));
  }

  function allocateRooms() {

    const available = getAvailableRooms();

    let bestCluster = [];
    let minTime = Infinity;

    for (let i = 0; i < available.length; i++) {

      let cluster = [available[i]];

      for (let j = i + 1; j < available.length && cluster.length < selectedCount; j++) {
        cluster.push(available[j]);
      }

      if (cluster.length === selectedCount) {

        let time = 0;

        for (let k = 1; k < cluster.length; k++) {
          time += travelTime(cluster[k - 1], cluster[k]);
        }

        if (time < minTime) {
          minTime = time;
          bestCluster = cluster;
        }

      }
    }

    setOccupiedRooms([...occupiedRooms, ...bestCluster]);
    setLastAllocated(bestCluster);
    setLastTravelTime(minTime);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  function randomOccupancy() {

    const all = hotel.flatMap(f => f.rooms);
    let random = [];

    for (let i = 0; i < 20; i++) {

      let r = all[Math.floor(Math.random() * all.length)];

      if (!random.includes(r)) random.push(r);
    }

    setOccupiedRooms(random);
    setLastAllocated([]);
    setLastTravelTime(0);
  }

  function resetBooking() {

    setOccupiedRooms([]);
    setLastAllocated([]);
    setLastTravelTime(0);
  }

  const availableCount =
    hotel.flatMap(f => f.rooms).length - occupiedRooms.length;

  return (

    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')"
      }}
    >

      <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

      <div className="relative z-10 text-white p-10">

        {/* HEADER */}

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-yellow-400 mb-2 drop-shadow-xl">
            🏨 Hotel Reservation System
          </h1>

          <p className="text-lg text-gray-200 tracking-wide">
            Smart Room Allocation with Minimum Travel Time
          </p>

          <div className="w-40 h-1 bg-yellow-400 mx-auto mt-4 rounded"></div>

        </div>

        {/* ANALYTICS */}

        <div className="flex justify-center gap-10 mb-8 text-lg">

          <div>Available Rooms: {availableCount}</div>

          <div>Occupied Rooms: {occupiedRooms.length}</div>

          <div>Total Floors: 10</div>

        </div>

        {/* CONTROLS */}

        <div className="flex justify-center gap-4 mb-10 items-center bg-white/10 backdrop-blur-lg p-4 rounded-xl">

          <label>Rooms:</label>

          <input
            type="number"
            min="1"
            max="5"
            value={selectedCount}
            onChange={(e) => setSelectedCount(Number(e.target.value))}
            className="text-black p-2 rounded w-20"
          />

          <button
            onClick={allocateRooms}
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Book Best Rooms
          </button>

          <button
            onClick={randomOccupancy}
            className="bg-purple-600 px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Random Occupancy
          </button>

          <button
            onClick={resetBooking}
            className="bg-red-600 px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Reset
          </button>

        </div>

        {/* RESULT */}

        <div className="text-center mb-10">

          <p className="text-xl">

            Allocated Rooms:

            {lastAllocated.length
              ? " " + lastAllocated.join(" → ")
              : " None"}

          </p>

          <p className="text-green-400">

            Travel Time:

            {lastAllocated.length
              ? ` ${lastTravelTime} minutes`
              : " -"}

          </p>

        </div>

        {/* HOTEL GRID */}

        <div className="flex justify-center">

          <div className="space-y-6">

            {hotel.map(floor => (

              <div key={floor.floor}>

                <h2 className="text-yellow-300 mb-3">
                  Floor {floor.floor}
                </h2>

                <div className="grid grid-cols-10 gap-4 max-w-4xl">

                  {floor.rooms.map(room => {

                    const occupied = occupiedRooms.includes(room);
                    const newRoom = lastAllocated.includes(room);

                    return (

                      <div
                        key={room}
                        title={
                          newRoom
                            ? "Newly Allocated"
                            : occupied
                            ? "Occupied"
                            : "Available"
                        }
                        className={`p-4 text-center rounded-xl shadow-lg transition hover:scale-110
                        
                        ${
                          newRoom
                            ? "bg-yellow-400 text-black"
                            : occupied
                            ? "bg-red-500"
                            : "bg-green-500 text-black"
                        }`}
                      >
                        {room}
                      </div>

                    );

                  })}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* FOOTER */}

        <div className="text-center mt-16 text-sm text-gray-300">

          <p>Smart Room Allocation Algorithm</p>

          <p className="text-yellow-400 font-semibold mt-2">
            Developed by Yuvraj Malviya
          </p>

          <p className="text-gray-400 mt-1">
            React • Tailwind • Algorithm Optimization
          </p>

        </div>

      </div>

      {showPopup && (

        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-3 rounded-lg shadow-xl animate-bounce">
          Rooms Booked Successfully!
        </div>

      )}

    </div>
  );
}

export default App;