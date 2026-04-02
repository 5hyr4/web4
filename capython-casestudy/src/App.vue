<script setup>
import { ref } from "vue"

import NavBar from "./components/NavBar.vue"

const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "agency", label: "Agency" },
  { id: "team", label: "Team" },
  { id: "results", label: "Results" },
  { id: "capyskill", label: "Capyskill" }
]

import HeaderSection from "./components/HeaderSection.vue"
import OverviewSection from "./components/OverviewSection.vue"
import AgencySection from "./components/AgencySection.vue"
import TeamSection from "./components/TeamSection.vue"
import ResultsSection from "./components/ResultsSection.vue"
import CapyskillSection from "./components/CapyskillSection.vue"


const caseStudy = ref({
  projectName: "Stars of Hope",
  studentName: "Shyra Mhae Guillermo",

  overview: {
    description: "A fundraising gala focused on youth mental health awareness and support.",
    goal: "Raise funds and awareness for youth mental health services through various social media posts, websites, prints and video."
  },

  agency: {
    name: "Blume.co",
    role: "Social Media Strategy & Content Creation",
    client: "Montreal Children's Hospital Foundation",
    event: "Starry Night Gala"
  },

  team: [
    { name: "Clémentine Jasiak", role: "Graphic Design & Strategy" },
    { name: "Rachelle Villas", role: "Graphic & Web Design" },
    { name: "Shyra Mhae Guillermo", role: "Graphic Design" },
    { name: "Anélie Coustenoble", role: "Strategy & Web Design" },
    { name: "London Synette", role: "Social Media Specialist" }

  ],

  results: {
  description: "Final social media campaign and creative assets designed to promote the Starry Night Gala.",

  posts: [
  { id: 1, type: "image", src: "/src/assets/frame9.png" },
  { id: 2, type: "image", src: "/src/assets/frame8.png" },
  { id: 3, type: "image", src: "/src/assets/frame7.png" },
  { id: 4, type: "image", src: "/src/assets/frame6.png" },
  { id: 5, type: "image", src: "/src/assets/frame5.png" },
  { id: 6, type: "image", src: "/src/assets/frame4.png" },
  { id: 7, type: "image", src: "/src/assets/frame3.png" },
  { id: 8, type: "image", src: "/src/assets/frame2.png" },
  { id: 9, type: "image", src: "/src/assets/frame1.png" }
]},

  // posts: [
    //{
      //id: 1,
      //type: "image",
      //title: "Instagram Post – Event Announcement",
      //description: "Main promotional post introducing the gala theme.",
      //src: "https://placehold.co/300x300?text=Post+1"
    //},
    //{
      //id: 3,
     // type: "video",
     // title: "Reel – Awareness Video",
      //description: "Short emotional reel highlighting youth mental health.",
      //src: "https://www.w3schools.com/html/mov_bbb.mp4"
    //}
  //]
//},

  capyskill: {
    skill: "Teamwork",
    description: "Collaborated effectively with team members and communicated ideas clearly."
  },

  reflection: "This project helped me improve my collaboration and creative thinking skills while working on a real-world campaign."
})
</script>

<template>

  <NavBar :links="navLinks" />

  <HeaderSection 
    :title="caseStudy.projectName" 
    :name="caseStudy.studentName" 
  />

  <OverviewSection :overview="caseStudy.overview" />
  <AgencySection :agency="caseStudy.agency" />
  <TeamSection :team="caseStudy.team" />
  <ResultsSection :results="caseStudy.results" />
  <CapyskillSection :reflection="caseStudy.reflection" />
  </template>