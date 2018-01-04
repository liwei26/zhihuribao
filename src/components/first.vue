<template>
  <div class="content">
    <div class="header">
      <p>知乎日报</p>
    </div>

    <slide-show :slides="slides" :inv="slideSpeed"></slide-show>

    <p class="title">今日熱闻</p>
    <div class="news-content">
      <router-link :to="{path: '/detail'}">
        <div class="list" v-for="item in newsList">
          <div class="list-title">
            <p>{{item.title}}</p>
          </div>
          <div class="list-img">
            <img :src='item.src' alt="">
          </div>
        </div>
      </router-link>

    </div>

  </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  import axios from 'axios'
  export default {
    components: {
      slideShow
    },
    mounted() {
      axios.get('api/getSlides')
          .then((res) => {
            console.log(res)
            this.slides = res.data
          })
          .catch((error) => {
            console.log(error)
          })
      axios.get('api/getNewsList')
        .then((res) => {
          console.log(res)
          this.newsList = res.data.list
        })
        .catch((error) => {
          console.log(error)
        })
    },
    data () {
      return {
        slides: null,
        newsList: null
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    background: #f9f9f9;
    position: absolute;
    top: 0;
    left: 0;
  }
  .header{
    width: 100%;
    height: 100px;
    background: #008bed;
    color: #ffffff;
    display: flex;
    font-size: 32px;
    justify-content: center;
  }
  .header p {
    line-height: 100px;
  }
  .news-content{
    position: relative;
  }
  .title{
    display: flex;
    justify-content: flex-start;
    margin: 20px;
  }
  .list{
    height: 200px;
    display: flex;
    justify-content: space-between;
    margin:  2%;
    border-radius: 3%;
    background: #fff;
  }
  .list-title{
    font-size: 28px;
    margin: 3%;
    text-align: left;
  }
  .list-img{
    width: 30%;
    height: 80%;
    margin: 3%;
  }

</style>
