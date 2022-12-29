<template>
  <div class="intro">
    <div class="intro__inner">
      <h1>About Me</h1>
      <p>
        Hi my name is Hellen, I am a student of the programming and pentest.
      </p>
      <div class="buttons">
        <a href="https://github.com/HellenWeb"><button style="margin-right: 10px" type="button" class="btn btn-dark">Github</button></a>
        <a href="https://t.me/YungHellen"><button type="button" class="btn btn-primary">Telegram</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout'
}
</script>

<style>
.intro {
  width: 100%;
}

.intro__inner {
  text-align: center;
  margin-top: 10%;
}

.intro__inner > h1 {
  font-size: 50px;
}
</style>
