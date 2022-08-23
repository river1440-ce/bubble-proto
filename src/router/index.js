import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/components/page/Home.vue";
import About from "/src/components/page/About.vue";
import User from "/src/components/page/User.vue";
import Job from "/src/components/ui/Job.vue";
import Activity from "/src/components/ui/Activity.vue";
import Project from "/src/components/ui/Project.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },{
    path: "/user/:name",  // <-- notice the colon
    name: "User",
    component: User,
    props: true,
  },
  {
    path: "/job",
    name: "Job",
    component: Job,
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;