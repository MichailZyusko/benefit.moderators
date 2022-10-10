import { Link } from 'react-router-dom';
import { GrProductHunt } from 'react-icons/gr';
import { FaStore } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { MdLocalOffer } from 'react-icons/md';

type TProps = {
  productCount: number;
  storeCount: number;
  offersCount: number;
  categoriesCount: number;
};

export default function SideBarMenu({
  productCount = 0,
  storeCount = 0,
  offersCount = 0,
  categoriesCount = 0,
}: TProps) {
  return (
    <aside className="w-64 min-h-screen bg-gray-700" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-700 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link to="/products" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <GrProductHunt />
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{productCount}</span>
            </Link>
          </li>
          <li>
            <Link to="/stores" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <FaStore />
              <span className="flex-1 ml-3 whitespace-nowrap">Stores</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{storeCount}</span>
            </Link>
          </li>
          <li>
            <Link to="/offers" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdLocalOffer />
              <span className="flex-1 ml-3 whitespace-nowrap">Offers</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{offersCount}</span>
            </Link>
          </li>
          <li>
            <Link to="/categories" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BiCategory />
              <span className="flex-1 ml-3 whitespace-nowrap">Categories</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{categoriesCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
