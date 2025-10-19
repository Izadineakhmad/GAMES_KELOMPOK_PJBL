import Heroes from "@/ui/dashboard/Heroes";
import LayoutUser from "@/ui/layout/users/LayoutUsers";
import Gallery from "@/ui/dashboard/Gallery";
import Region from "@/ui/dashboard/Region";

function Index() {
  return (
    <LayoutUser>
      <Heroes/>
      <div className="bg-light-sand py-8">
        <Gallery />
        <Region />
      </div>
    </LayoutUser>
  );
}

export default Index;