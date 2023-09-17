<template>
  <div class="row my-3">
    <div class="col-6">
      <h3>All Projects: {{ project }}</h3>
    </div>
    <div class="col-7 text-end">
      <button @click="clearProjects" class="btn btn-warning">Delete Projects</button>
    </div>
  </div>
  <div class="table-responsive">
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Project</th>
          <th>Type</th>
          <th>Urgent</th>
          <th>Completed</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(project, index) in projects" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ project.project }}</td>
          <td>{{ project.type }}</td>
          <td @click="changeState(index)" :class="project.checkbox ? 'bg-success' : 'bg-danger'">
            {{ project.checkbox ? "SI" : "NO" }}
          </td>
          <td @click="changeCompleted(index)" :class="project.completed ? 'bg-success' : 'bg-danger'">
            {{ project.completed ? "DONE" : "INCOMPLETE" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['numProject', 'projects', 'changeState', 'changeCompleted', 'clearProjects'],
}
</script>