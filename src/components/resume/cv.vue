<template>
  <div>
    <div class="iframe-container">
      <iframe
        allowtransparency="true"
        style="background: transparent"
        class="responsive-iframe"
        src="/src/assets/cv.pdf#view=FitH&zoom=FitH&toolbar=0">
      </iframe>
    </div>
  </div>
</template>

<style>
.iframe-container {
  position: relative;
  overflow: hidden;
  padding-top: 138.8%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
