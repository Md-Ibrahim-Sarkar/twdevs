import ComponentPicView from "@/components/componetPicview/ComponentPicView";
import UserProfile from "./Components/UserProfile";

const ProfilePage = async ({ params }) => {
  const { user } = await params
  return (
    <div >
      <div className=" p-4">

        <UserProfile />
      </div>
    </div>
  );
}

export default ProfilePage;
