import ComponentPicView from "@/components/componetPicview/ComponentPicView"


function page() {
  return (
    <div className=" p-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ComponentPicView />
        <ComponentPicView />
        <ComponentPicView />
        <ComponentPicView />

      </div>
    </div>
  )
}

export default page