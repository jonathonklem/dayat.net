import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import SectionBlock from "../components/SectionBlock"
import logo from "../images/dayat-enterprises.png"
import dnScreenshot from "../images/donor-nexus.jpg"

const sections = [
  {
    heading:"Mobile Application Development",
    body:"Empower your business with the convenience and efficiency of a custom mobile application. Whether you're looking to enhance communication with your customers or streamline intra-organization interactions, we are here to bring your vision to life. With a user-friendly interface and seamless functionality, our mobile apps enable you to engage with customers like never before, while also fostering collaboration and efficiency within your organization. Let Dayat Technologies be your trusted partner in harnessing the power of mobile technology.",
    imageContainer: (
      <>
        <a href="/blog/atf-gun-db/" className="md:inline">
          <img className="mx-2 md:w-5/12 md:inline border-2 mb-4 rounded-xl border-gray-300" src="https://atfgundb.com/newscreen4.png" />
        </a>
        <a href="/blog/donor-nexus/" className="md:inline">
          <img className="mx-2 md:w-5/12 md:inline border-2 rounded-xl border-gray-300" src={dnScreenshot} />
        </a>
      </>
     
    )
  }, 
  {
    heading: "Enterprise Resource Management",
    body: "We excel at crafting tailored database applications and enterprise resource management (ERM) solutions designed to meet the unique needs of your business. Our team of skilled developers works closely with you to understand your specific requirements and challenges, ensuring that the final product aligns perfectly with your goals. Whether you need a custom database application to efficiently manage your data or an ERM system to optimize your business processes, we have the expertise and experience to deliver results that exceed your expectations. With our comprehensive solutions, you can streamline operations, improve productivity, and drive growth with confidence."
  },
  {
    heading: "Automation",
    body: "Are you tired of manual tasks consuming valuable time and resources in your business operations? We can develop tools to help you to seamlessly communicate with APIs and harness the power of data to streamline your processes. Say goodbye to tedious manual reporting and hello to efficient, data-driven decision-making. Even if you're already using several applications we can help you leverage the APIs of your existing tools so you can automate repetitive tasks, generate comprehensive reports, and gain actionable insights to drive your business forward. Let us help you unlock the full potential of automation and take your business to new heights."
  },
  {
    heading: "Technologies Used",
    body: (
      <>
        <i className="float-left text-8xl m-4 devicon-go-original-wordmark colored"></i>
        <i className="float-left text-8xl m-4 devicon-react-original colored"></i>
        <i className="float-left text-8xl m-4 devicon-amazonwebservices-plain-wordmark colored"></i>
        <i className="float-left text-8xl m-4 devicon-laravel-original colored"></i>
        <i className="float-left text-8xl m-4 devicon-cakephp-plain colored"></i>
        <i className="float-left text-8xl m-4 devicon-php-plain colored"></i>
        <i className="float-left text-8xl m-4 devicon-postgresql-plain colored"></i>
        <i className="float-left text-8xl m-4 devicon-mysql-original colored"></i>
        <i className="float-left text-8xl m-4 devicon-ionic-original colored"></i>
        <i className="float-left text-8xl m-4 devicon-apple-original colored"></i>
        <i className="float-left text-8xl m-4 devicon-android-plain colored"></i>
        <i className="block clear-both"></i>
      </>
    )
  },
  {
    heading: "Let's Build Something",
    body: (
      <a className="border-2 w-36 text-center border-white inline-block border-solid mx-auto p-4" href="mailto:info@dayat.net">Contact Us</a>
    )
  },
  {
    body: String.fromCharCode(169) + " 2024 Dayat Technologies, LLC.  All rights reserved."
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main className="font-sans max-w-4xl mx-auto mt-8 h-4/6">
        <img className="max-w-sm" src={logo} />
        <h1 className="mt-24 font-bold font-mont text-4xl tracking-widest px-12">
          Your Solution Specialist
        </h1>
        <p className="tracking-wider px-12 mt-8 text-lg leading-loose">Since 2012, Dayat Technologies has been providing businesses of all sizes with the service they need to utilize the technology necessary to compete in today's ever-complicating market.</p>
      </main>
      {
        sections.map((section, index) => {
          return (
            <SectionBlock
              heading={section.heading}
              body={section.body}
              imageContainer={section.imageContainer}
              rowNum={index}
            />
          )
        })  
      }

    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dayat Technologies</title>
