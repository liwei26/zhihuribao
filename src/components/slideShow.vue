<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <router-link :to="{path: 'detail'}">
        <a href="">
          <img v-if="isShow" :src="slides[nowIndex].src" >
        </a>
      </router-link>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for = "(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{ index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
          this.$emit('onchange', index)
        }, 20)
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv()
    }
  }
</script>

<style scoped>
  .slide-show {
    position: relative;
    margin: 0 15px 15px 0;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 20px;
    height: 50px;
    text-align: left;
    padding-left: 15px;
    font-size: 36px;
  }
  .slide-img {
    width: 100%;
    height: 500px;
  }
  .slide-img img {
    width: 100%;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }
</style>
