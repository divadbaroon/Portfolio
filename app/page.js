import Dashboard from "@/app/dashboard/page";
import Left from "@/app/dashboard/Left/page";
import View from "@/app/ui/dashboard/View/page";

export default function Home() {
  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="gap-4 flex md:mt-5 flex-col md:flex-row">
        <Left />
        <Dashboard />
        <View />
      </div>
    </div>
  );
}