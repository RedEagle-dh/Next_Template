'use client';
import { useEffect } from "react";
import { Button } from "@nextui-org/button";

export default function NotFound() {
    useEffect(() => {
        // scroll to the top of the page
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="text-center mt-24">
            <p className="text-3xl font-bold">This page does not exist...</p>
            <Button className="mt-24" size="lg" color="success" onClick={() => {
                window.location.href = '/';
            }} variant="flat">
                Go back home
            </Button>
        </div>
    )
}