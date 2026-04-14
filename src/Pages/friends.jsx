import {use} from 'react';
import { Link } from "react-router-dom";


const friendsPromise = fetch("/friendsList.json").then(res => res.json())

const FriendsPage = () => {

   const Friends = use(friendsPromise)
   console.log(Friends, "Friends")

  return (
    <div className="max-w-5xl mx-auto mt-10">

      <h2 className="text-3xl text-center font-bold mb-6">
        Friends Section
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Friends.map(friend => (

          <Link to={`/friend/${friend.id}`} key={friend.id}> 
          <div
            key={friend.id}
            className="bg-white p-4 rounded-xl shadow text-center">
            <img
              src={friend.picture}
              className="w-16 h-16 rounded-full mx-auto"/>

            <h3 className="mt-2 font-bold text-xl">
              {friend.name}
            </h3>

            <p className="text-sm text-gray-500">
              {friend.days_since_contact}d ago
            </p>

            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-200 text-green-800 px-2 py-1 font-bold rounded-full text-xs ">
                {tag}
                </span>
                  ))}
               </div>

             <span
              className={`mt-3 inline-block px-3 py-1 text-xs rounded-full text-white ${
                friend.status === "Overdue"
                  ? "bg-red-500"
                  : friend.status === "Almost due"
                  ? "bg-yellow-600"
                  : "bg-green-800"
              }`} >
                 {friend.status}
            </span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;