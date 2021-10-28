import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilteredSearch = ({
  searchByAlbum,
  searchByEmail,
  searchByDate,
  searchByTag,
  onClick
}) => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
      <div class={searchByDate && searchByTag && `grid grid-cols-1 md:grid-cols-2 gap-4`}>
        <div
          class={`grid ${
            searchByAlbum && "grid-cols-2 gap-2"
          } border border-gray-200 p-2 rounded`}
        >
          {searchByAlbum && (
            <div class="flex border rounded bg-gray-100 items-center p-2 ">
              <svg
                class="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by Album"
                class="bg-gray-100 max-w-full focus:outline-none text-gray-700"
              />
            </div>
          )}
          {searchByEmail && (
            <div class="flex border rounded bg-gray-100 items-center p-2 ">
              <svg
                class="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by Email"
                class={`bg-gray-100 ${
                  searchByAlbum ? "max-w-full" : "w-full"
                } focus:outline-none text-gray-700`}
              />
            </div>
          )}
        </div>
        {searchByDate && searchByTag ? 
        <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
          {searchByDate && (
            <div class="flex border rounded bg-gray-100 items-center p-2 ">
              <DatePicker
                className="w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          )}
          {searchByTag && (
            <div class="flex border rounded bg-gray-100 items-center p-2 ">
              <svg
                class="fill-current text-gray-800 mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by TAG"
                class="bg-gray-100 max-w-full focus:outline-none text-gray-700"
              />
            </div>
          )}
        </div>
        : null}
      </div>
      <div class="flex justify-center">
        <button class="p-2 border w-1/4 rounded-md bg-gray-800 text-white" onClick={onClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilteredSearch;
