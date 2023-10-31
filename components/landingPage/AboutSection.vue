<template>
  <app-section class="section--about">
    <app-cols>
      <img
        class="app-cols__img"
        src="/stu-climbing.png"
        alt="Stu passing rope down to help a climber below him"
        height="400px"
        width="400px"
        loading="lazy"
      />
      <div>
        <p>
          Behind Crag Stories is Stu Serrechia. Former librarian turned outdoor
          instructor, Stu has seen how stories help to shape the way we see
          ourselves and the world.
        </p>
        <p>
          As a qualified climbing instructor and developing walking guide, he
          can help you find new stories to add to your own, at climbing walls,
          crags and hills.
        </p>
        <app-list
          title="If climbing is what you're looking for, Stu can offer..."
          :items="climbingDetails"
        />
        <app-list
          title="For hillwalking, as a developing guide, Stu can..."
          :items="walkingDetails"
        />
      </div>
    </app-cols>
    <div>
      <div
        style="
          display: flex;
          align-items: center;
          flex-direction: column;
          max-width: 70ch;
          margin: 0 auto;
          text-align: center;
        "
      >
        <p style="margin-bottom: 1rem">
          Stu lives in Yorkshire, with the Dales and Moors on his doorstep, and
          the Peak and Lakes not much farther.
        </p>
        <app-cta>
          <template #cta
            ><a :href="contactDetails.email" target="_blank"
              >Get in touch &#10141;</a
            >
          </template>
        </app-cta>
      </div>
    </div>
  </app-section>
</template>

<script>
import { contactDetails } from '~/constants/constants'
import AppSection from '~/components/layout/AppSection.vue'
import AppCols from '~/components/layout/AppCols.vue'
import AppList from '~/components/ui/AppList.vue'
import AppCta from '~/components/ui/AppCta.vue'

export default {
  name: 'IntroSection',
  components: {
    AppSection,
    AppCols,
    AppList,
    AppCta,
  },
  data() {
    return {
      contactDetails,
      climbingDetails: [
        { text: 'Indoor and outdoor climbing options' },
        { text: 'Content to suit your needs' },
        { text: 'A flexible approach to timings and locations' },
        { text: 'One off experiences or developmental sessions' },
        { text: 'Sessions on skills, techniques, fear, confidence and more' },
      ],
      walkingDetails: [
        { text: 'Assist you with planning your hikes' },
        {
          text: 'Accompany you to support in making hill days happen effectively ',
        },
        { text: 'Share his experience of mountain terrain and scrambling' },
      ],
    }
  },
}
</script>
