import React, { Component } from "react";

export default class CategoryList extends Component {
  render() {
    return (
      <div className="flex-2 ">
        <h1 className="font-montserrat font-semibold text-2xl text-center py-4">
          Kategoriler
        </h1>

        <div class="w-full text-sm font-medium text-gray-900 bg-white border border-0 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <button
            aria-current="true"
            type="button"
            class="w-full px-4 py-2 text-xl font-montserrat text-center text-black border-b border-gray-400  hover:text-blue-700 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
          >
            Futbol & Aksesuar
          </button>
          <button
            type="button"
            class="w-full px-4 py-2 text-xl font-montserrat text-center border-b border-gray-400  cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            Basketbol & Aksesuar
          </button>
          <button
            type="button"
            class="w-full px-4 py-2 text-xl font-montserrat text-center border-b border-gray-400 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            Voleybol & Aksesuar
          </button>
          <button
            type="button"
            class="w-full px-4 py-2 text-xl font-montserrat text-center border-b border-gray-400 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            Tenis & Aksesuar
          </button>
        </div>
      </div>
    );
  }
}
