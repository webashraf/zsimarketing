export default function BookingForm() {
  return (
    <div className="flex items-center justify-center bg-gray-100/0 backdrop-blur-sm p-4 rounded-xl text-black ">
      <form className="bg-white p-3 rounded-xl shadow-md w-full max-w-5xl">
        {/* Horizontal Form Items */}
        <div className="flex flex-wrap   gap-4 lg:items-center items-start">
          {/* Choose Car */}
          <div className="flex-1">
            <select
              name="car"
              id="car"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-s focus:border-black focus:ring-black sm:text-sm px-3 py-2"
              required
            >
              <option value="">Select a car</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </div>

          {/* Pickup Location */}
          <div className="flex-1">
            <select
              id="pickupLocation"
              name="pickupLocation"
              className="mt-1 block border-gray-300 rounded-md shadow-s focus:border-black focus:ring-black sm:text-sm px-3 py-2 w-[150px]"
              required
            >
              <option value="">Pickup Location</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Barisal">Barisal</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>

          {/* Pickup Date */}
          <div className="flex-1">
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-s focus:border-black focus:ring-black sm:text-sm px-3 py-2"
              required
            />
          </div>

          {/* Drop Off Location */}
          <div className="flex-1">
            <select
              id="dropOffLocation"
              name="dropOffLocation"
              className="mt-1 block  border-gray-300 rounded-md shadow-s focus:border-black focus:ring-black sm:text-sm px-3 py-2 w-[160px]"
              required
            >
              <option value="">Drop-Off Location</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Barisal">Barisal</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>

          {/* Return Date */}
          <div className="flex-1">
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-s focus:border-[#ca8600] focus:ring-[#ca8600] sm:text-sm px-3 py-2"
              required
            />
          </div>

          {/* Book Button */}
          <div className="flex-shrink-0 block">
            <button
              type="submit"
              className="bg-[#ca8600] text-white py-2 px-6 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ca8600] focus:ring-offset-2"
            >
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
