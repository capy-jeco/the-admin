import { Outlet } from "react-router-dom";

function CoreHRLayout() {

  return (
    <>
      <div className="flex flex-col w-full h-full pt-3 px-5 space-y-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-50">
        <div className="flex-1 text-lg w-full h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default CoreHRLayout;
