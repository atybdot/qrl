import { useId } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface Props {
  ref? : React.Ref<HTMLInputElement>
  className?: string
}
export default function Component({className,ref}:Props) {
  const id = useId()
  return (
    <div className={cn("*:not-first:mt-2 w-fit", className)}>
      <div className="flex rounded-md shadow-xs">
          <Select defaultValue="https://">
            <SelectTrigger
              id={id}
              className="bg-muted border-transparent shadow-none font-mono text-muted-foreground tracking-tight rounded-e-none"
            >
              <SelectValue placeholder="Select link protocol" />
            </SelectTrigger>
            <SelectContent className="font-mono">
              <SelectItem value="https://">https://</SelectItem>
              <SelectItem value="http://">http://</SelectItem>
            </SelectContent>
          </Select>
        <Input
          ref={ref}
          id={id}
          className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
          placeholder="example.com"
          type="text"
        />
      </div>
    </div>
  )
Component.name = "OriginInput"
}
