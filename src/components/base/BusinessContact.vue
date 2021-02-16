<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-0"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: 'Manuel M. Ponce 1108 León Moderno 37480 León, Guanajuato',
        },
        {
          icon: 'mdi-phone',
          title: 'Phone',
          text: '<a href="tel:4776889478">(477)688-94-78</a>',
        },
        {
          icon: 'mdi-email-outline',
          title: 'Email',
          text:
            '<a href="mailto:administracion@construheloz.com.mx">administracion@construheloz.com.mx</a>',
        },
      ],
    }),
  }
</script>
