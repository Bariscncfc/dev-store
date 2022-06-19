import React from "react";
import { useQuery, gql } from "@apollo/client";


const GET_CATEGORIES = gql`
  query GetCategories {
    categories(where: {})
  }
`;


export default function CategoryList () {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>


  
    return (
      <div className="flex-2 ">
        <h3 className="font-montserrat font-semibold text-2xl text-center py-4">
          {this.props.info.title}
        </h3>

        <div class="w-full text-sm font-medium text-gray-900 bg-white border border-0 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {data.categories.map((title) => (
            <button
            aria-current="true"
            type="button"
            key={title.id}
            title={title}
            class="w-full px-4 py-2 text-xl font-montserrat text-center text-black border-b border-gray-400  hover:text-blue-700 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
          >
            {title}
          </button>
          ))}
        </div>
      </div>
    );
}
