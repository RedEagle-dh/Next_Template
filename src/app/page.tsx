'use client';

import { useLoading } from "@/lib/context/LoadingContext";
import { Card, CardBody, CardFooter, Chip, CircularProgress, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Home() {

    const [ studentCount, setStudentCount ] = useState<{
        total_students: number;
        present_students: number;
    }>();

    const { startLoading, stopLoading } = useLoading();

    useEffect(() => {
        const fetchStudentCount = async () => {
            startLoading();
            const response = await fetch("http://localhost:8080/api/students/ratio", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setStudentCount(data[ 0 ]);
            stopLoading();
        }
        fetchStudentCount();
    }, []);

    return (
        <div className="m-4" role="group" aria-label="Student Attendance">
            <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500" role="figure" aria-label="Student Attendance Chart">
                <CardBody className="justify-center items-center pb-0">
                    <CircularProgress
                        classNames={{
                            svg: "w-36 h-36 drop-shadow-md",
                            indicator: "stroke-white",
                            track: "stroke-white/10",
                            value: "text-3xl font-semibold text-white",
                        }}
                        value={(studentCount?.present_students || 0) / (studentCount?.total_students || 1) * 100}
                        strokeWidth={4}
                        showValueLabel={true}
                        aria-label={`Current student attendance rate is ${(studentCount?.present_students || 0) / (studentCount?.total_students || 1) * 100}%`}
                    />
                </CardBody>
                <CardFooter className="justify-center items-center pt-0">
                    {!studentCount?.total_students && <Skeleton className="w-3/5 rounded-lg" aria-label="Loading student count">
                        <div className="h-6 w-full rounded-lg bg-default-300" role="presentation"></div>
                    </Skeleton>}
                    {
                        studentCount?.total_students && <Chip
                            classNames={{
                                base: "border-1 border-white/30",
                                content: "text-white/90 text-small font-semibold",
                            }}
                            variant="bordered"
                            aria-label={`${studentCount?.present_students} out of ${studentCount?.total_students} students are currently present`}
                        >
                            {studentCount?.present_students}/{studentCount?.total_students} Students
                        </Chip>
                    }
                </CardFooter>
            </Card>
        </div>

    )
}
