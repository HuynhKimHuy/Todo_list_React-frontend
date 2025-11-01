import { FilterType } from "@/lib/data"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Filter } from "lucide-react"
function StastsAndFillter({ completedTaskCount = 0, acitveTaskcount = 0, filter , setFillter }) {
    return (
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">

            {/* Phần thống kế */}
            <div className="flex gap-3">
                <Badge
                    variant="secondary"
                    className=" bg-white/50 text-accent-foreground border-infor/20 "
                >
                    {acitveTaskcount} {FilterType.active}
                </Badge>

                <Badge
                    variant="secondary"
                    className=" bg-white/50 text-success border-success/20 "
                >
                    {completedTaskCount} {FilterType.complete}
                </Badge>
            </div>

            {/* phần fillter */}
            <div className="flex flex-col gap-2 sm:flex-row">
                {
                    Object.keys(FilterType).map((type) => {
                        return <Button

                            key={type}
                            variant={filter === type ? "gradient" : "ghost"}
                            size="sm"
                            className="capitalize"
                            onClick={() => setFillter(type)}>
                            <Filter className="size-4" />
                            {FilterType[type]}

                        </Button>


                    })
                }
            </div>
        </div>
    )
}

export default StastsAndFillter