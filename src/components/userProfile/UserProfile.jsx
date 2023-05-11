import React from "react";
import GetUserData from "@/components/userProfile/GetUserData";
import PostUserData from "@/components/userProfile/PostUserData";
import Section from "@/components/common/Section";

const UserProfile = () => {
  return (
    <>
      <Section
        name="contacto"
        title="Perfil"
        subtitle=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat molestiae dolore dolor nam aliquam cumque repellendus necessitatibus maiores minima repellat quam reiciendis facere voluptates sed beatae, et omnis consectetur deserunt."
      >
        <div className="container px-5 py-28 mx-auto flex flex-col items-center justify-between">
          <PostUserData />
          <GetUserData />
        </div>
      </Section>
    </>
  );
};

export default UserProfile;
