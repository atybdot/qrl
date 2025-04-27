import Image from "next/image";
import OriginInput from "@/components/custom/originInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SelectForm } from "@/components/custom/FormControl";
export default function Home() {
  return (
    <section className="py-8 px-4 flex flex-col gap-4">
      <Label className="font-bold text-2xl ">Create new Link</Label>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
      <OriginInput className="flex-1 font-mono tracking-normal"/>
      <Button className="m-auto w-full sm:w-2/12" size={"default"}>New</Button>
      </div>
      <OriginInput className="flex-1 font-mono tracking-normal w-full"/>
    </section>
  );
}
