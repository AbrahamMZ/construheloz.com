<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.226837148293!2d-101.6658726857009!3d21.10352079059925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbfb2fd2d48c7%3A0x249f081aea6e0b7b!2sManuel%20M.%20Ponce%201108%2C%20Le%C3%B3n%20Moderno%2C%2037480%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses!2smx!4v1612549716165!5m2!1ses!2smx"
      width="100%"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
