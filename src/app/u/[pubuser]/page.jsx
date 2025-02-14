export const dynamic = "force-dynamic";
import UserProfile from "../dashboard/[user]/Components/UserProfile";



const Page = ({ params }) => {
  return (
    <div>
      <UserProfile user={params.user} /> {/* এখানে ইউজারের নাম পাবেন */}
    </div>
  );
};

export default Page;
