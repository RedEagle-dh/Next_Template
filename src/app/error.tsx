'use client';
import { Button } from "@nextui-org/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {


    return (
        <div className="text-center mt-24">

            <div className="text-3xl font-bold">
                <h1>Oh No! Something went wrong...</h1>
                <h3 className="mt-6 text-xl md:text-2xl">A {error.name} occured with {error.digest ? `the status ${error.digest} and` : ``} the following message: {error.message}</h3>
            </div>
            <Button className="mt-24" size="lg" color="success" onClick={() => reset()} variant="flat">
                Try again
            </Button>
        </div>
    )
}