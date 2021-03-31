<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <div v-for="(item, index) in list" :ref="setItemRef" :key=index></div>
  <div @click="printLog">打印log</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    },
    printLog() {
      console.log('hahahah', this.itemRefs)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}
</script>
