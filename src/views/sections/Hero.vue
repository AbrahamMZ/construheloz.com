<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/hero-1.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.2)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title="EXPERTOS EN OBRAS NUEVAS, REMODELACIONES Y ACONDICIONAMIENTOS"
          />

          <base-heading
            size="text-h2"
            title="BIENVENIDO A"
            weight="medium"
          />
          <base-img
            :src="require('@/assets/logo.svg')"
            contain
            max-width="500"
            width="100%"
          />

          <base-body>
            Somos una empresa de construccion enfocada en responder a las
            necesidades de nuestros clientes teanto en el sector publico como
            privado en la ejecucion de sus proyectos.
          </base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <base-btn
              :href="require('@/assets/pdf/presentacion.pdf')"
              target="_blank"
            >
              DESCUBRE MAS
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
