import React, { useEffect } from "react";
import { AnalyticsSummary } from "../Components/Screen/dashboard/AnalyticsSummary";

import { Link } from "react-router-dom";

const lineChartData = [
  {
    name: "Cameralyze",
    data: [220, 182, 191, 234, 290, 330, 310],
  },
  {
    name: "Letgo",
    data: [20, 182, 121, 234, 133, 330, 432],
  },
  {
    name: "SmartCLoud",
    data: [111, 182, 191, 4321, 290, 123, 310],
  },
  {
    name: "Ligthers",
    data: [220, 222, 191, 234, 290, 444, 310],
  },
];

export const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <div className="h-full">
      <div className="py-2 px-10 pb-10 ">
        <nav
          aria-label="breadcrumb"
          className="mt-4 -intro-x mr-auto hidden sm:flex"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Cameralyze</li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        <div className="flex justify-between items-stretch mt-8">
          <div className="w-full ">
            <div className="w-12/12">
              <h2 className="text-lg h-6 font-medium truncate mr-5 ">
                General Report
              </h2>
              <div className="h-[calc(100%-3rem)] mt-5">
                <AnalyticsSummary data={lineChartData} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="box divide-y divide-gray-300 bg-white">
            <div className="p-4 ">
              <h2 className="text-lg h-6 font-medium truncate mr-5">
                Security Issues
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className=" flex flex-col ">
              <div className="intro-x">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Component
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Bestpractices
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {[...Array(8)].map((i, k) => (
                      <tr key={k + 1}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          Component name
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          Lambda
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <span>
                            Change your the memory size of Lambda function to
                            512MB
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          12.04.2022
                        </td>

                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            to=""
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Apply
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="box divide-y divide-gray-300 bg-white ">
            <div className="p-4  ">
              <h2 className="text-lg h-6 font-medium truncate mr-5">
                Best Practices
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className=" flex flex-col ">
              <div className="intro-x">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Component
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Bestpractices
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {[...Array(8)].map((i, k) => (
                      <tr key={k + 1}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          Component name
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          Lambda
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <span>
                            Change your the memory size of Lambda function to
                            512MB
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          12.04.2022
                        </td>

                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            to=""
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Apply
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
