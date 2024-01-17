<template>
  <div>
    <div class="developer-experience__area">
      <div class="experience__grid">
        <div class="experience__item" v-for="(item, i) in items" :key="i">
          <h2 class="exp-time">
            <span>
              <i class="fa-regular fa-calendar-days"></i>
            </span> {{ item.year }}
          </h2>
          <h3 class="exp-title">{{ item.title }}</h3>
          <h4 class="company">{{ item.subtitle }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        year: '2008 - 2012',
        title: 'High School "Nikola Tesla"',
        subtitle: 'Computer Technician',
        description: 'Owing to advancements in product other designer technologies, chatbots have increased into greater popularity in the past few years.'
      },
      {
        year: '2012-2016',
        title: 'ICT College',
        subtitle: 'Internet Technologies',
        description: 'Owing to advancements in product other designer technologies, chatbots have increased into greater popularity in the past few years.'
      },
      {
        year: '2016-2017',
        title: 'ICT College',
        subtitle: 'Internet Technologies (Master)',
        description: 'Owing to advancements in product other designer technologies, chatbots have increased into greater popularity in the past few years.'
      },
    ]
  })
}
</script>

<style lang="scss">
.experience {
  &__grid {
    display: grid;
    grid-gap: 40px 17%;
    position: relative;
    padding-inline-start: 55px;

    &::before {
      position: absolute;
      content: "";
      width: 100px;
      height: 100%;
      inset-inline-start: 0;
      bottom: 0;
      background-image: url('https://crowdytheme.com/html/info/info-demo/assets/imgs/shape/2.png');
      background-repeat: no-repeat;
      background-repeat: repeat-y;
    }

    &-2 {
      display: grid;
      grid-gap: 40px 80px;
      grid-template-columns: 1fr 1fr;
      margin-inline-start: 80px;
      position: relative;
      overflow: hidden;
    }
  }

  &__item {
    padding: 35px;
    background-color: #09101a;
    border-radius: 8px;
    width: 100%;

    &:nth-child(even) {
      margin-inline-start: auto;
    }

    &.have-timeline {
      padding: 30px 0;
      padding-inline-start: 90px;
      position: relative;

      &:before {
        content: url('https://crowdytheme.com/html/info/info-demo/assets/imgs/shape/dotted-line-light.png');
        position: absolute;
        inset-inline-start: 12px;
        top: 0;
      }

      &:after {
        content: url('/src/assets/timeline.png');
        position: absolute;
        inset-inline-start: 0;
        top: 27px;
        width: 25px;
        height: 25px;
        background-color: #151c25;
        border-radius: 50%;
      }
    }

    .exp {
      &-time {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.7;
        color: #55e6a5;
        margin-bottom: 10px;

        span {
          padding-inline-end: 5px;
        }
      }

      &-title {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 30px;
        color: #fff;
      }
    }

    .company {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5;
      color: #a2a2a2;
      margin-bottom: 20px;
      text-transform: capitalize;
    }
  }
}

</style>
