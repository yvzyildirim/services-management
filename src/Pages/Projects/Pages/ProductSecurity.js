import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SelectBox } from "../../../Components/Forms/SelectBox";

import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3 } from "react-icons/bs";

const securityIssues = [
  {
    title: "Type Error",
    text: "Change your the memory size of Lambda function to 512MB",
    date: "21.12.2022 | 10:30 PM",
    status: "important",
  },
  {
    title: "Type Error",
    text: "Change your the memory size of Lambda function to 512MB",
    date: "21.12.2022 | 10:30 PM",
    status: "important",
  },
];
const sortBy = [
  { id: "1", value: "a-z" },
  { id: "2", value: "1-9" },
];

export const ProductSecurity = (data) => {
  const [sort, setSort] = useState(false);
  const [dates, setDates] = useState([
    new DateObject().set(),
    new DateObject().set(),
  ]);

  function handleSlect(e) {
    setSort(e.currentTarget.dataset.id);
  }
  return (
    <section className="relative bg-white w-full h-[calc(100vh-60px-4rem)] overflow-auto rounded-tl-3xl ">
      <div className="">
        <div className="flex px-4 py-6 justify-between items-center">
          <SelectBox label="Sort By" onSelect={handleSlect} values={sortBy} />
          <div className="relative flex items-center">
            <BsCalendar3 className="absolute  left-2" />
            <DatePicker
              value={dates}
              onChange={setDates}
              range
              inputClass="rounded-md border p-2 w-[240px] text-sm form-control form-control-lg pl-8"
              maxDate={new DateObject().add(0, "days")}
            />
          </div>
        </div>
      </div>
      <table className="min-w-full ">
        <thead className="bg-gray-50 ">
          <tr>
            <th
              scope="col"
              className="sticky top-0 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 bg-gray-100 "
            >
              Component
            </th>
            <th
              scope="col"
              className="sticky top-0  px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-gray-100"
            >
              Type
            </th>
            <th
              scope="col"
              className="sticky top-0  px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-gray-100"
            >
              Bestpractices
            </th>
            <th
              scope="col"
              className="sticky top-0  px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-gray-100"
            >
              Date
            </th>
            <th
              scope="col"
              className="sticky top-0  relative py-3.5 pl-3 pr-4 sm:pr-6 bg-gray-100"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {[...Array(18)].map((i, k) => (
            <tr key={k + 1}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                Component name
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                Lambda
              </td>
              <td className="px-3 py-4 text-sm text-gray-500">
                <span>
                  Change your the memory size of Lambda function to 512MB
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                12.04.2022
              </td>

              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <Link to="" className="text-indigo-600 hover:text-indigo-900">
                  Apply
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
