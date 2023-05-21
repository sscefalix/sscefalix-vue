<script setup lang="ts">

import InfoCard from "../InfoCard.vue";
import SkillCard from "../SkillCard.vue";
</script>

<template>
  <main>
    <section>
      <div class="hero">
        <div class="cards">
          <InfoCard name="Опыт программирования" value="2 Года" background="linear-gradient(45deg, #00C39A, #006a54)"
                    color="#fff"/>
          <InfoCard name="Выполнено заказов" value="7" background="linear-gradient(135deg, #FFC03C, #875b00)"
                    color="#15110B"/>
          <InfoCard name="Мой возраст" value="14 Лет" background="linear-gradient(215deg, #FE6D79, #8d1721)"
                    color="#fff"/>
        </div>
        <div class="info">
          <h2 class="title">Full-Stack Developer</h2>
          <p class="subtitle">Из России</p>
          <p class="desc"><code>Full-Stack</code> разработчик из <code>России</code>. Мне <code>14 лет</code>, моё имя
            <code>Дмитрий</code>. Занимаюсь программированием с <code>10 лет</code>, разрабатываю сайты с <code>12 лет(2
              Года)</code></p>
        </div>
      </div>
    </section>
    <section>
      <div class="skills">
        <SkillCard progress="70" name="VueJS" icon="fa-brands fa-vuejs" iconColor="mediumseagreen" progressColor="mediumseagreen" />
        <SkillCard progress="40" name="React" icon="fa-brands fa-react" iconColor="#64baff" progressColor="orange" />
        <SkillCard progress="90" name="Python" icon="fa-brands fa-python" iconColor="#8364ff" progressColor="mediumseagreen" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

.cards {
    max-width: 900px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
}

.info {
    width: 100%;
    max-width: 400px;
}

.title {
    font-size: 36px;
    font-weight: 600;
    line-height: calc(36px * 1.2);
}

.subtitle {
    font-size: 20px;
    color: lightgray;
    font-weight: 500;
}

.desc {
    color: lightgray;
    margin-top: 20px;
    line-height: calc(15px * 2);
}

.desc code {
    color: lightsteelblue;
    background-color: var(--card);
    padding: 4px;
    border-radius: 4px;
}

.skills {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

section {
  margin-bottom: 75px;
}

@media (max-width: 1172px) {
    .hero {
        flex-direction: column-reverse;
    }

    .cards {
        margin-top: 40px;
        max-width: unset;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        max-width: 800px;
    }

    .desc {
        text-align: center;
    }
}

@media (max-width: 768px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 512px) {
    .cards {
        grid-template-columns: repeat(1, 1fr);
    }

    .title {
        text-align: center;
    }
}
</style>