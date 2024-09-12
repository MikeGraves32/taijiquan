"use client";
import CourseCard from "./components/CourseCard/CourseCard";
import Hero from "./components/Hero";
import useFetchCoursesData from "./hooks/useFetchCoursesData";

export default function Home() {
  const courses = useFetchCoursesData();
  console.log(courses);
  return (
    <>
      <Hero />
      <CourseCard
        key={0}
        title={courses[0]?.attributes?.title}
        description={courses[0]?.attributes?.description}
        courseId={courses[0]?.id}
      />
    </>
  );
}
