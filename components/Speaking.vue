<template>
  <div>
    <h1>{{title}}</h1>
    <div class="confs">
      <div class="conf" v-for="c in confs">
        <h3>
          {{c.title}}
        </h3>
        <div>
          {{c.description}}
        </div>
        <div class="separator"></div>
        <div>
          Attendees: <strong>{{c.attendees}}</strong></div> 
      </div>
    </div>
    
  </div>
</template>
<script>
import { conferences } from './conferences';

export default {
  name: 'speaking',
  computed: {
    confs() {
      return conferences;
    }
  },
  data() {
    return { title: 'Speaking' };
  }
}
</script>
<style>
  .confs {
    display: flex;
    flex-wrap: wrap;
  }

  .conf {
    text-align: center;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px grey;
    margin: 5px;
    padding: 10px;
  }

  .separator {
    flex-grow: 1;
  }
</style>



