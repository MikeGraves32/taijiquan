"use client";
import React from "react";
import useFetchCoursesData from "../hooks/useFetchCoursesData";
import CourseGrid from "@/app/components/CourseGrid/CourseGrid";
import CourseHeader from "@/app/components/CourseHeader";

const CoursePage = () => {
  const courses = useFetchCoursesData();

  return (
    <div>
      <CourseHeader
        href={"/"}
        title={"Courses"}
        description="Choose froom our many courses on Taijiquan Principles!"
      />
      <CourseGrid courseData={courses} />
    </div>
  );
};

export default CoursePage;
