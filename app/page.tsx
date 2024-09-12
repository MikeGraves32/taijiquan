"use client";
import CourseGrid from "./components/CourseGrid/CourseGrid";
import Hero from "./components/Hero";
import useFetchCoursesData from "./hooks/useFetchCoursesData";

export default function Home() {
  const courses = useFetchCoursesData();
  console.log(courses);
  return (
    <>
      <Hero />
      <CourseGrid courseData={courses} />
    </>
  );
}
