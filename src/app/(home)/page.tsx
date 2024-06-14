import Label from "@/src/components/label/Label";

export default async function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h4 className="text-3xl">
                <Label name="Home" value="title" />
            </h4>
            <p>
                <Label name="Home" value="description" />
            </p>
        </div>
    );
}
