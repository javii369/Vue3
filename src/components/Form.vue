<template>
  <div class="row">
    <div class="col-12 mb-4">
      <progress-bar :porcentaje="porcentaje" />
    </div>
    <div class="col-12 col-md-4">
      <form @submit.prevent="registerProject()">
        <div class="mb-3">
          <label for="form-label">Project</label>
          <input v-model.trim="project" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="form-label">Activity</label><br />
          <select v-model="type" class="form-select" required>
            <option disabled selected value="">Select a type</option>
            <option>Web Aplication with Vue.js</option>
            <option>Backent sevice Node.js</option>
            <option>App Movile with React Native</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-check-label"> Urgent </label> <br />
          <input v-model="checkbox" type="checkbox" form="form-check-input" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="col-12 col-md-8">
      <all-projects 
        :numProjects="numProjects" 
        :projects="projects" 
        :changeCompleted="changeCompleted"
        :changeState="changeState" 
        :clearProjects="clearProjects"
        />
    </div>
  </div>
</template>

<script>
import AllProjects from "./AllProjects.vue";
import ProgressBar from "./ProgressBar.vue";

export default {
  components: { ProgressBar, AllProjects },
  data: () => ({
    project: "",
    type: "",
    checkbox: false,
    completed: false,
    projects: [],
  }),
  methods: {
    registerProject() {
      //completado false
      const project = {
        project: this.project,
        type: this.type,
        checkbox: this.checkbox,
        completed: this.completed,
      };

      this.projects.push(project);
      this.saveData()

      this.project = "";
      this.type = "";
      this.checkbox = false;
      this.completed = false;
    },
    changeState(id) {
      this.projects[id].checkbox = !this.projects[id].checkbox;
      this.saveData()
    },
    changeCompleted(id) {
      this.projects[id].completed = !this.projects[id].completed;
    },
    saveData() {
      localStorage.setItem('projects', JSON.stringify(this.projects))
    },
    clearProjects() {
      this.projects = []
      localStorage.clear
    }
  },
  computed: {
    numProjects() {
      return this.projects.length;
    },
    porcentaje() {
      let complet = 0;

      this.projects.map((project) => {
        if (project.completed) complet++;
      });

      return (complet * 100) / this.numProjects || 0;
    },
  },
  mounted() {
    this.projects = JSON.parse(localStorage.getItem('projects')) || []
  }
};
</script>