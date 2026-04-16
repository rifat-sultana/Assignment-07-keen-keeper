import {use} from 'react';
import { useParams } from "react-router-dom";
import SnoozeImage from "../assets/Snooze.png";
import ArchiveImage from "../assets/Archive.png";
import TrashImage from "../assets/Trash.png";
import CallImage from "../assets/PhoneCall.png";
import TextImage from "../assets/text.png";
import VideoImage from "../assets/video.png";
import { useTimeline } from "../context/useTimeline";
import { toast } from "react-toastify";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";


const friendsPromise = fetch("/friendsList.json").then(res => res.json())

const FriendDetailsPage = () => {

const {id} = useParams();
  console.log(id,"id")

const Friends = use(friendsPromise);
   console.log(Friends, "Friends");

const connectedFriend = Friends.find((friend) => friend.id == parseInt(id));
   console.log (connectedFriend, 'connectedFriend')



const FriendDetails = ({ friend }) => {
  const { addEvent } = useTimeline();

const handleAction = (type) => {
    addEvent(type, friend.name);

    // toastify  use.......
    toast.success(`${type} added for ${friend.name}`);
      }



const [loading, setLoading] = useState(true);
      
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
          }, 800);
      }, []);

if (loading) {
  return <Loading />;
}



  return (
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-d gap-6">

      {/* 🔵 LEFT SIDE */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">

        <img
          src={connectedFriend.picture}
          className="w-24 h-24 rounded-full mx-auto"/>

        <h2 className="mt-3 text-2xl font-bold">{connectedFriend.name}</h2>

      
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-bold rounded-full text-white ${
            connectedFriend.status === "Overdue"
              ? "bg-red-500"
              : connectedFriend.status === "Almost due"
              ? "bg-yellow-500"
              : "bg-green-600"
          }`}>
          {connectedFriend.status}
        </span>

        
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {connectedFriend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-200 text-green-700 font-bold px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* bio */}
        <p className="mt-3 text-sm text-gray-500 italic">
          {connectedFriend.bio}
        </p>

        {/* email */}
        <p className="text-sm font-bold text-gray-500 mt-1">
          {connectedFriend.email}
        </p>

        {/* buttons */}
        <div className="mt-6 space-y-2 items-center">
          <button className="w-full border px-4 py-2 rounded flex justify-center items-center gap-2 hover:bg-gray-200 transition">
            <img src={SnoozeImage } alt ="SnoozeImage"  className="w-5 h-5"/> 
           <span> Snooze 2 Weeks </span> 
          </button>

          <button className="w-full border px-4 py-2 rounded flex justify-center items-center gap-2 hover:bg-gray-200 transition">
             <img src={ArchiveImage } alt ="ArchiveImage" className="w-5 h-5" /> 
            <span>  Archive </span>
          </button>

          <button className="w-full border px-4 py-2 rounded text-red-500 flex justify-center items-center gap-2 hover:bg-gray-200 transition">
            <img src={TrashImage } alt ="TrashImage" className="w-5 h-5"/> 
            <span> Delete </span> 
          </button>

        </div>
      </div>

      {/* 🔵 RIGHT SIDE */}
      <div className="md:col-span-2 space-y-6">

        {/* 🔹 Stats */}
        <div className="grid grid-cols-3 gap-4">

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold">
              {connectedFriend.days_since_contact}
            </h3>
            <p className="text-sm text-gray-500">
              Days Since Contact
            </p>

          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold">
              {connectedFriend.goal}
            </h3>
            <p className="text-sm text-gray-500">
              Goal (Days)
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold">
              {connectedFriend.next_due_date}
            </h3>
            <p className="text-sm text-gray-500">
              Next Due
            </p>
          </div>
        </div>

        <div className="bg-white p-3 md:p-6 rounded-xl shadow">
          <div className="flex justify-between shadow-2xl">
            <h3 className="font-bold text-2xl">Relationship Goal</h3>
            <button className="text-md border shadow-lg bg-gray-100 px-2 py-1  rounded">
              Edit
            </button>
          </div>
          <p className="text-gray-500 mt-2">
            Connect every {connectedFriend.goal} days
          </p>
        </div>

        {/* 🔹 Quick Check-in */}
        <div className="bg-white p-4 md:p-8 rounded-xl shadow">
          <h3 className="font-bold text-2xl mb-3">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">

          <button 
           onClick={() => handleAction("Call")}
          className="shadow-lg bg-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img src={CallImage} className="w-6 h-6" />
            <span className="text-sm font-medium">Call</span>
              </button>

            <button 
             onClick={() => handleAction("Text")}
            className="shadow-lg bg-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition"> 
              <img src={TextImage } alt ="TextImage"  className="w-6 h-6"/> 
              <span className="text-sm font-medium">Text</span>
              </button>

            <button 
            onClick={() => handleAction("Video")}
            className="shadow-lg bg-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition"> 
              <img src={VideoImage } alt ="VideoImage" className="w-6 h-6"   /> 
               <span className="text-sm font-medium">Video</span>
               </button>
          </div>
        </div>

      </div>
    </div>
  );
};

return <FriendDetails friend={connectedFriend} />;

};

export default FriendDetailsPage;