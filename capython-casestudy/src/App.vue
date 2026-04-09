<script setup>
import { ref } from "vue"

import NavBar from "./components/NavBar.vue"

const navLinks = [
  { id: "agency", label: "Agency" },
  { id: "event", label: "Event" },
  { id: "team", label: "Team" },
  { id: "results", label: "Results" },
  { id: "capyskill", label: "Capyskill" }
]

import HeaderSection from "./components/HeaderSection.vue"
import AgencySection from "./components/AgencySection.vue"
import EventSection from "./components/EventSection.vue"
import TeamSection from "./components/TeamSection.vue"
import ResultsSection from "./components/ResultsSection.vue"
import CapyskillSection from "./components/CapyskillSection.vue"


const caseStudy = ref({
  projectName: "Stars of Hope",
  studentName: "Shyra Mhae Guillermo",

  agency: {
    name: "Blume.co",
    role: "Social Media Strategy & Content Creation",
    description: "In this project our team was assigned to a Social Media Agency. Our agency, Blüme.co is inspired by floral elements offering a breath of fresh air to your online presence. At Blüme.co, we believe that digital communication should, above all, bring people together. Hence, our sloagan: Naturally together."
  },

  event: {
    description: "Our focus event is a Fundraising and Charity Event for Youth Mental Health.",
    goal: "Raise funds and awareness for youth mental health services through various social media posts, websites, prints and video.",
    concept: "The concept we chose is a premium 'Starry Night' themed charity gala named 'Stars of Hope'. The Cause: All funds raised during this glamorous night will directly support Le SPOT Montréal, one of Canada's largest ambulatory centers for teens in suicidal crisis. Our core demographic consists of High-Net-Worth Individuals (HNWIs) in the Greater Montreal Area, Active or retired professionals, aged 40 to 70."

  },

   team: [
     { name: "Clémentine Jasiak", role: "Graphic Design & Strategy" },
     { name: "Rachelle Villas", role: "Graphic & Web Design" },
     { name: "Anélie Coustenoble", role: "Strategy & Web Design" },
     { name: "London Synette", role: "Social Media Specialist" },
     { name: "Shyra Mhae Guillermo", role: "Graphic Design" },
     { name: "My Role", role: "For this project, I was tasked with making most of the social media posts. I made 8/9 of the square Instagram posts, a progress story post and a video Reel post. My process began by thinking of strategies that would make the posts impactful. I came up with a list of post ideas such as Teaser Content to build curiosity, Awareness & Education Posts to sensibilise the audience on the topic, ️Impact-Focused Posts to inform the audience what they're supporting, Behind-the-Scenes Content to keep the audience engaged with our content, Video Content to gain more engagement, Fundraising Thermometer / Progress Updates to give the audience updates on the money raised. The visual direction is based on the theme of the gala which is 'Starry Night', it includes a lot of blue and dreamy aspect." }

   ],

  results: {
  description: "Final social media campaign and creative assets designed to promote the Starry Night Gala.",

  posts: [
  { id: 1, type: "image", src: "/src/assets/frame9.png" },
  { id: 2, type: "image", src: "/src/assets/frame8.png" },
  { id: 3, type: "image", src: "/src/assets/frame7.png" },
  { id: 4, type: "image", src: "/src/assets/frame6.jpg" },
  { id: 5, type: "image", src: "/src/assets/frame5.png" },
  { id: 6, type: "image", src: "/src/assets/frame4.png" },
  { id: 7, type: "image", src: "/src/assets/frame3.png" },
  { id: 8, type: "image", src: "/src/assets/frame2.png" },
  { id: 9, type: "image", src: "/src/assets/frame1.jpg" }
],
video: {
    title: "Campaign Reel",
    url: "https://www.youtube.com/embed/PB4te1O21Ho"  }
},

  capyskill: {
    skill: "Capyskills: Collaborate Effectively NGE.3.3 Complete my part of the work",
    description: "For this Capyskill, I think I am a level 6: I can prioritize all team meetings, but when I cannot attend, I follow up after to see what I missed. I can complete my work to meet our team deadlines. I can bring my tasks to the team for feedback. My final contributions meet most requirements for our project. I can contribute to the creation of our final product for submission. By the end of the project, my goal was to reach level 8."
  },

  reflection: "I was present in the team meetings. I did let my team know in advance if I am not able to make it and asked what I missed. I managed to share the final posts on figma by march 3 at night. I think it would have been better to have finished a little earlier in the day for final revisions. I think if I managed my time a little better, I could have created works that I’m fully proud of and contributed a lot more. I tried my best to ask for feedback. But Ithink I could have en a little more insistent to ask for elaboration for improvements on my contributions and meeting requirements. I gave some feedback to my teammates when asked. However, it’s definitely still something I need to work on. I want to be more constructive and give advice that are helpful and contribute to their work. I think I’m lacking in this since I still feel unsure of the answers I give. I followed up with the first years to ensure they could complete the rest of the social media posts and answered their questions."
})
</script>

<template>

  <NavBar :links="navLinks" />

  <HeaderSection 
    :title="caseStudy.projectName" 
    :name="caseStudy.studentName" 
  />

  <AgencySection :agency="caseStudy.agency" />
  <EventSection :event="caseStudy.event" />
  <TeamSection :team="caseStudy.team" />
  <ResultsSection :results="caseStudy.results" />
  <CapyskillSection 
  :capyskill="caseStudy.capyskill"
  :reflection="caseStudy.reflection"
/>
  </template>