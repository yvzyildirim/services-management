import React, { useContext, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import activeMenuBottom from "../../Assets/images/menu-radius-bottom.svg";
import activeMenuTop from "../../Assets/images/menu-radius-top.svg";
import bridgeWhite from "../../Assets/images/card-bridge-white.svg";
import { ProjectOverview } from "../../Components/Screen/products/ProjectOverview";
import { SlideOver } from "../../Components/Modals/SlideOvers";
import { CreateProjectModal } from "../../Components/Screen/products/CreateProjectForm";
import { Authorization } from "../../Layouts/PrivateLayout";
import { API_URL } from "../../Api/ApiUrls";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LoadingContex } from "../../Routes/PlatformRoutes";
import { MdDashboardCustomize } from "react-icons/md";

export const CreateProjectSlideOver = React.createContext([]);

export const Projects = () => {
  const projectList = [
    {
      projectId: "1",
      projectName: "Dummy",
      components: [
        {
          name: "Lambda Name",
          size: "18mb",
          runTime: "23",
          functions: [
            {
              id: "1",
              type: "lambda",
              name: "function 1",
              codeSize: "1",
              runtime: "1",
              identification: "a",
            },
            {
              id: "2",
              type: "lambda",
              name: "function 1",
              codeSize: "1",
              runtime: "1",
              identification: "a",
            },
          ],
        },
      ],
    },
    {
      projectId: "2",
      projectName: "Dummy 2",
      components: [
        {
          name: "Lambda Name",
          size: "18mb",
          runTime: "23",
          type: "lambda",
        },
        {
          name: "Lambda Name",
          size: "18mb",
          runTime: "23",
          type: "lambda",
        },
      ],
    },
  ];
  const lambdaList = {
    functions: [
      {
        identification: "1",
        type: "lambda",
        name: "function 1",
        codeSize: "1",
        runtime: "1",
      },
      {
        identification: "2",
        type: "lambda",
        name: "function 1",
        codeSize: "1",
        runtime: "1",
      },
    ],
  };
  const [show, setShow] = useState(false);
  const open = { show, setShow };

  const [activeProject, setActiveProject] = useState();
  const activeProjectComponents = projectList.find(
    (x) => x.projectId === activeProject
  )?.components;
  const location = useLocation();
  const path = location.pathname;
  const { load, setLoad } = useContext(LoadingContex);
  const activeNav = "font-semibold bg-white h-full text-primary rounded-t-xl";
  const passiveNav = "text-gray-100";

  useEffect(() => {
    setActiveProject(projectList[0]?.projectId);
  }, []);

  function handleProject(e) {
    const id = e.currentTarget.id;
    setActiveProject(id);
  }

  function modalOpen() {
    setShow(true);
  }
  function modalClose() {
    setShow(false);
  }

  return (
    <CreateProjectSlideOver.Provider value={open}>
      <div className="flex bg-gray-800 justify-between items-stretch h-full ">
        <SlideOver
          className="w-[70%]"
          show={show}
          onClose={modalClose}
          title="Create New Project"
          children={<CreateProjectModal lambdaList={lambdaList} />}
        />
        <div className="w-2/12  h-[calc(100vh-4rem)] bg-gray-800 z-20  rounded-tl-[60px] ">
          <div className=" w-full h-full ">
            <div className="flex  h-16 justify-between items-center py-4 px-6 ">
              <h2 className="text-sm text-white  font-medium truncate">
                Projects
              </h2>
              <button onClick={modalOpen} className="rounded-full text-white  ">
                <BsPlusLg className="text-md" />
              </button>
            </div>
            <div className="flex flex-col pl-4 relative h-[calc(100vh-8rem)] overflow-auto">
              {projectList.map((i, k) => (
                <div className="relative" key={k + 1}>
                  <button
                    id={i.projectId}
                    className={
                      i.projectId === activeProject
                        ? "px-4 py-4 w-full flex justify-start items-center bg-white text-primary rounded-tl-full  rounded-bl-full relative"
                        : "px-4 py-4 w-full flex justify-start items-center  text-white rounded-md relative  "
                    }
                    onClick={handleProject}
                  >
                    <div className="w-4  mr-2">
                      {i.projectId === activeProject && (
                        <FiArrowRight className=" text-xs " />
                      )}
                    </div>
                    {i.projectId === activeProject && (
                      <>
                        <img
                          className="w-7 h-7 absolute right-0 -bottom-[26px]"
                          src={activeMenuBottom}
                          alt="menu-active"
                        />
                        <img
                          className="w-7 h-7 absolute right-0 -top-[26px]"
                          src={activeMenuTop}
                          alt="menu-active"
                        />
                      </>
                    )}
                    <div className="block break-all text-left">
                      {i.projectName}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/12 bg-gray-800 pr-6">
          <div className="h-full w-full  relative ">
            <ProjectOverview activeProject={activeProject} data={projectList} />
            <img
              className="w-6  h-6 absolute right-[-24px] -bottom-0"
              src={bridgeWhite}
              alt="menu-active"
            />
          </div>
        </div>
        {activeProjectComponents?.length > 0 ? (
          <div className="w-8/12 intro-x  h-[calc(100vh-4rem)] bg-gray-800 ">
            <div className="h-[60px] flex justify-between items-center  text-white">
              <div className="flex h-full pt-4">
                <Link
                  className={
                    "flex justify-center items-center px-6 text-md " +
                    (path === "/project/dashboard" ? activeNav : passiveNav)
                  }
                  to="/project/dashboard"
                >
                  Overwiew
                </Link>
                <Link
                  className={
                    "flex justify-center items-center px-6 text-md " +
                    (path === "/project/security-issues"
                      ? activeNav
                      : passiveNav)
                  }
                  to="/project/security-issues"
                >
                  Secrity issues
                </Link>
                <Link
                  className={
                    "flex justify-center items-center px-6 text-md " +
                    (path === "/project/best-practices"
                      ? activeNav
                      : passiveNav)
                  }
                  to="/project/best-practices"
                >
                  Best practices
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        ) : (
          <div className="w-8/12 intro-y h-[calc(100vh-4rem)] flex flex-col justify-between bg-gray-800 ">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="bg-white rounded-full h-32 w-32 flex justify-center items-center">
                <MdDashboardCustomize className="text-7xl text-primary" />
              </div>
              <h3 className="text-white text-xl font-semibold py-4">
                what is there for you
              </h3>
              <ul className="text-white leading-6">
                <li>1. Cloud üzerindeki fonksiyon maliyetlerini yönet.</li>
                <li>
                  2. Güvenlik uyarılarını uygulayarak güvenli bir yapı oluştur.
                </li>
                <li>3. Best practicesleri uygulayarak maliyetleri üşü.</li>
                <li>
                  4. Karmaşık yapıları projelendirerek anlaşılır hale getir..
                </li>
              </ul>
            </div>
            <div className="bg-white w-full h-20 flex justify-start items-center rounded-tl-[40px]">
              <div className="text-lg pl-8 text+gry-400">Project Dashboard</div>
            </div>
          </div>
        )}
      </div>
    </CreateProjectSlideOver.Provider>
  );
};
