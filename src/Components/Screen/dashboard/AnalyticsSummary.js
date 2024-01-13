import React, { useEffect, useState } from "react";
import { AxisChart } from "../../Charts/AxisChart";
import { Switch } from "@headlessui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3 } from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const format = "MM/DD/YYYY";

export const AnalyticsSummary = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState([
    new DateObject().set({ day: 4, format }),
    new DateObject().set({ day: 25, format }),
  ]);

  useEffect(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setOpen(true);
  }, [dates]);

  return (
    <div className="card flex flex-col h-full box">
      <div className="flex justify-between items-stretch  ">
        <div className="flex justify-start items-stretch">
          <div className="flex items-center  border-r p-4">
            <div>
              <div className="text-primary text-xl  font-medium">$15,000</div>
              <div className="mt-0.5 text-slate-500">Today</div>
            </div>
          </div>
          <div className="flex items-center  border-r p-4">
            <div>
              <div className="text-primary text-xl  font-medium">$25,000</div>
              <div className="mt-0.5 text-slate-500">Weekly</div>
            </div>
          </div>
          <div className="flex items-center  border-r p-4">
            <div>
              <div className="text-primary text-xl  font-medium">$55,000</div>
              <div className="mt-0.5 text-slate-500">Monthly</div>
            </div>
          </div>
          <div className="flex items-center  border-r p-4">
            <div>
              <div className="text-primary text-xl  font-medium">$615,000</div>
              <div className="mt-0.5 text-slate-500">Yearly</div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center mr-8 ">
          <div className="relative flex items-center">
            <BsCalendar3 className="absolute  left-2" />
            <DatePicker
              value={dates}
              onChange={setDates}
              range
              format={format}
              inputClass="rounded-md border p-2 w-[240px] text-sm form-control form-control-lg pl-8"
              maxDate={new DateObject().add(0, "days")}
            />
          </div>
          <span
            className={
              "mr-1 ml-8 w-[80px] " + (!open ? "text-dark" : "text-gray-400")
            }
          >
            {open ? "Hide chart" : "Show chart"}
          </span>
          <Switch
            checked={open}
            onChange={setOpen}
            className={classNames(
              open ? "bg-gray-400" : "bg-gray-200",
              "relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 "
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                open ? "translate-x-7" : "translate-x-0",
                "pointer-events-none relative inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              )}
            >
              <span
                className={classNames(
                  open
                    ? "opacity-0 ease-out duration-100"
                    : "opacity-100 ease-in duration-200",
                  "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                )}
                aria-hidden="true"
              >
                <AiFillEyeInvisible />
              </span>
              <span
                className={classNames(
                  open
                    ? "opacity-100 ease-in duration-200"
                    : "opacity-0 ease-out duration-100",
                  "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                )}
                aria-hidden="true"
              >
                <AiFillEye />
              </span>
            </span>
          </Switch>
        </div>
      </div>

      <div
        className={
          open
            ? " transition-all  duration-1000 h-[320px] overflow-hidden border-t"
            : "transition-all duration-1000  h-0 overflow-hidden"
        }
      >
        <div className="p-4">
          <AxisChart
            exportData={false}
            data={data}
            type="line"
            style={{ height: "280px" }}
          />
        </div>
      </div>
    </div>
  );
};
