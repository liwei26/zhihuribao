<template>
  <div class="content">
    <div class="back">
      <router-link :to="{path:'/first'}">
        <img src="../assets/back.png" alt="返回">
      </router-link>
    </div>
    <div class="detail=content" v-for="item in detailList">
      <div class="detail-img">
        <img :src='item.src'>
        <div class="desc">
          <p>{{item.desc}}</p>
        </div>
      </div>
      <div class="main-content">
        <div class="detail-title">
          <p>{{item.title}}</p>
        </div>
        <div class="author">
          <img :src='item.img' >
          <span>{{item.name +'，'}}</span>
          <p class="sign">{{item.sign}}</p>
        </div>
        <div class="detail-text">
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    mounted() {
      axios.get('api/getdetailList')
        .then((res) => {
          console.log(res)
          this.detailList = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    data() {
      return{
        detailList: null
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    background: #f9f9f9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .back{
    width: 100%;
    height: 100px;
    background: #008bed;
    color: #ffffff;
    display: flex;
    font-size: 32px;
    justify-content: flex-start;
  }
  .back img {
    width: 50px;
    margin: 25px;
  }
  .detail-img{
    position: relative;
    width: 100%;
    height: 300px;
  }
  .detail-img img{
    width: 750px;
    height: 300px;
  }
  .desc{
    position: absolute;
    bottom: 30px;
    height: 30px;
    margin: 5%;
    color: #ffffff;
    font-size: 32px;
  }
  .main-content{
    width: 90%;
    margin: 5%;
  }
  .detail-title{
       width: 100%;
       display: flex;
       justify-content: flex-start;
       align-content: center;
       font-size: 32px;
     }
  .detail-title p, .author span{
    font-weight: bold;
  }
  .author{
    width: 100%;
    height: 50px;
    margin: 3% 0;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .author span , .author p{
    margin: 0 1%;
    line-height: 50px;
    font-size: 28px;
    color: #000000;
  }

  .author p{
    display: block;
    color: #333333;
  }
  .author img{
    width: 50px;
    border-radius: 50%;
  }
  .detail-text{
    width: 100%;
    font-size: 28px;
    color: #000000;
    text-align: left;
  }
  .detail-text p{

  }

</style>
