import React from "react";
import UserCard from "./User";

const UserSection = () => {
  return (
    <div className="grid grid-cols-6 gap-2 p-6">
      <UserCard
        profilepicture="https://randomuser.me/api/portraits/men/32.jpg"
        occupation="Engineer "
        useremail="mike@gmail.com"
        username="Mike Smith"
      />
      <UserCard
        profilepicture="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg"
        occupation="Engineer "
        useremail="mike@gmail.com"
        username="Mike Smith"
      />
      <UserCard
        profilepicture="https://randomuser.me/api/portraits/men/32.jpg"
        occupation="Engineer "
        useremail="mike@gmail.com"
        username="Mike Smith"
      />
      <UserCard
        profilepicture="https://randomuser.me/api/portraits/men/32.jpg"
        occupation="Engineer "
        useremail="mike@gmail.com"
        username="Mike Smith"
      />
      <UserCard
        profilepicture="https://randomuser.me/api/portraits/men/32.jpg"
        occupation="Engineer "
        useremail="mike@gmail.com"
        username="Mike Smith"
      />
      <UserCard
        profilepicture="https://randomuser.me/api/portraits/men/32.jpg"
        occupation="Engineer "
        useremail="mike@gmail.com"
        username="Mike Smith"
      />
    </div>
  );
};

export default UserSection;
