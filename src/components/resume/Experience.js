import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
            title="Senior Software Engineer"
            subTitle="Euphoric Thought Technologies"
            year="[ March 2024 - Present ]"
            result="Remote"
            des="As a Backend Developer at Aviso AI, I engineered scalable Python/Django APIs and RESTful services to power the platform’s AI-driven revenue operations, integrating real-time and periodic web scraping solutions to aggregate data into MongoDB and ElasticSearch for dynamic frontend analytics. Leveraged Machine Learning models to enhance data quality and predictive insights from scraped datasets, while implementing RAG (Retrieval-Augmented Generation) with OpenAI to automate report generation and contextual analysis. At Phyllo, as a Data Engineer, I designed PySpark ETL pipelines for batch/stream processing, stored optimized data in Amazon S3, and enabled real-time ingestion via RabbitMQ, later automating workflows with AirFlow. Enhanced these pipelines with ML-driven data enrichment and OpenAI integrations to classify unstructured data, improving decision-making for client-facing analytics."
          />
          <ResumeCard
            title="Assistant System Engineer"
            subTitle="Tata Consultancy Services (TCS)"
            year="[ Jan 2022 - Feb 2024 ]"
            result="Remote"
            des="Worked as a Python Developer,  Optimized data extraction, devised efficient Multithreading Techniques, and innovated a novel GCP-File-Uploader, all contributing to heightened efficiency and performance. Provided mentorship and shared expertise with junior team members for enhanced Performances. Additionally, I have collaborated with various clients to deliver high-quality solutions that meet their unique business needs and goals."
          />

          <ResumeCard
            title="Freelance Developer"
            subTitle=""
            year="[ Jan 2019 - Present ]"
            result="Remote"
            des="Developed and delivered full-stack projects from end-to-end, including design, development, database setup, testing, and maintenance, in accordance with client requirements and specifications. Consistently exceeded expectations by delivering high-quality, user-friendly, and scalable solutions on time and within budget."
          />

          <ResumeCard
            title="Project Intern"
            subTitle="CyberSapiens United LLP"
            year="[ Oct 2021 - Dec 2021 ]"
            result="Remote / Mangalore"
            des="Developed Python-Django based Cyber Fraud Prevention (CPF) Remote Tool for punishing Frauds."
          />

        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
