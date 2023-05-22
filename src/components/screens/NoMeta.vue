<script setup lang="ts">

</script>

<template>
  <main>
    <section>
      <h1 class="title">Пожалуйста, не задавайте мета-вопросов в чате!</h1>
      <p class="subtitle"><b>Мета-вопрос</b> — это вопрос, который подразумевает другие вопросы, например:</p>
      <div class="meta__list">
        <div class="meta">Можно ли задать вопрос?</div>
        <div class="meta">Есть кто разбирается в N?</div>
        <div class="meta">А кто-нибудь тут проходил курс от Яндекса на курсере? Есть вопрос по анализу текста…</div>
        <div class="meta">Ребят, есть вопросик по %framework_name%</div>
        <div class="meta">Кто может помочь?</div>
      </div>
      <div class="questions">
        <details class="question">
          <summary>— «Понятно, но что плохого в этих вопросах и почему мне не стоит их задавать?»</summary>
          <pre>
— Они тратят время! И ваше, и других людей, которые пытаются вам помочь! Вы стараетесь быть вежливым, не
переходя сразу к своей проблеме, как люди делают при личной встрече. Но чат — это совсем другое. Люди печатают
намного медленнее, чем говорят. Вместо проявления вежливости, вы заставляете другого человека ждать, пока
сформулируете вопрос, что приводит к потере производительности.

То же самое относится к таким сообщениям: «Здравствуйте», «Привет. Ты здесь?», «Есть минутка?», «Пинг». Просто
задавайте вопрос!

К тому же, когда вы задаете вопрос сразу, открывается возможность асинхронного взаимодействия. Если собеседник
недоступен, а вы уйдёте до того как он вернется, он по-прежнему может ответить на вопрос, вместо того, чтобы
смотреть на ваш «Привет» и думать, что же случилось.
        </pre>
        </details>
      </div>

    </section>
  </main>
</template>

<style scoped>

.title {
  font-size: 48px;
  font-weight: 700;
}
.subtitle {
  font-size: 24px;
  font-weight: 400;
  color: lightgray;
}
.meta__list {
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  margin-top: 20px;
}
.meta {
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--color);
  background-color: #363636;
}


.questions {
  margin-top: 40px;
}
.question {
    width: 100%;
    border: 1px solid #484848;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
}

.question summary {
    font-weight: bold;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    cursor: pointer;
}

.question[open] {
    padding: 0.5em;
}

.question[open] summary {
    border-bottom: 1px solid #484848;
    margin-bottom: 0.5em;
}

</style>