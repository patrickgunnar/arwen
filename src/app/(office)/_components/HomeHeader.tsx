import Label from "@/src/components/label/Label";
import { LayoutDashboard } from "lucide-react";

export default function HomeHeader({
    username,
    orgsName,
}: {
    username: string;
    orgsName: string;
}) {
    return (
        <div className="flex gap-x-2 items-center justify-start pt-8 px-2 w-full">
            <div className="flex items-center justify-center bg-white border border-gray-400 text-muted-foreground rounded-md p-2">
                <LayoutDashboard className="h-9 w-9" />
            </div>
            <div>
                <h1 className="font-semibold text-lg">
                    <Label
                        name="System"
                        nested="Home Description"
                        value="pre-title"
                    />
                    , {username}
                </h1>
                <p className="text-sm text-muted-foreground">{orgsName}</p>
            </div>
        </div>
    );
}
