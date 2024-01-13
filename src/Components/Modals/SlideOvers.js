import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export const SlideOver = ({
  show,
  onClose,
  title,
  children,
  className,
  confirmButton,
  confirm,
}) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-[100] "
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden ">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-1000 "
            enterFrom="-translate-x-full"
            enterTo="-translate-x-0"
            leave="transform transition ease-in-out duration-1000 "
            leaveFrom="-translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-900/80   " />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 left-0 flex w-screen ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="-translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="-translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className={"pointer-events-auto z-40 " + className}>
                <div className="flex h-full flex-col bg-white  shadow-xl ">
                  <div className="px-4 h-16 w-full bg-primary flex justify-between items-center ">
                    <Dialog.Title className="text-lg font-medium text-white">
                      {title}
                    </Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="rounded-md  text-white "
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="relative height-[calc(100vh-4rem)] overflow-auto flex-1 ">
                    <div className=" inset-0 ">{children}</div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
