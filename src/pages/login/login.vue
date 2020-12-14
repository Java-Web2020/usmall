<template>
  <div class="url">
    <div class="login-box">
      <h1>Login</h1>
      <div class="form">
        <div class="item">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div class="item">
          <i class="fa fa-key" aria-hidden="true"></i>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <router-link  to="/index"><button>Login</button></router-link>
    </div>
  </div>
</template>
<script>
import img from '../../assets/img/1.jpg'
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style >
.url {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  background-image: url(../../assets/img/1.jpg);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.login-box {
  width: 30%;
  height: auto;
  margin: 0 auto;
  margin-top: 15%;
  text-align: center;
  background: #00000060;
  padding: 20px 50px;
}
.login-box h1 {
  color: #fff;
}
.login-box .form .item input {
  margin-top: 15px;
}
.login-box .form i {
  font-size: 18px;
  color: #fff;
}
.login-box .form .item input {
  width: 180px;
  font-size: 18px;
  border: 0;
  border-bottom: 2px solid#fff;
  padding: 5px 10px;
  background: #ffffff00;
  color: #fff;
}
.login-box button {
  margin-top: 15px;
  width: 180px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to right, #f30909 0%, #4013e6e1 100%);
  border: 0;
  border-radius: 15px;
}
</style>