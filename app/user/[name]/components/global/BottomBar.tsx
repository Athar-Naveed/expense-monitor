import Link from "next/link";
import {sidebarPrimaryLinks} from "./sidebarLinks";
const BottomBar = ({name}: {name: string}) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-600">
        <div className="flex h-full max-w-lg mx-auto font-medium overflow-x-auto">
          {sidebarPrimaryLinks.map((link, index) => (
            <Link
              key={index}
              href={`/user/${name}/${link.path}`}
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <span className="text-black dark:text-white">
              {link.icon}
              </span>
              <span className="text-sm break-words text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default BottomBar;
