<template>
  <div class="flex-row flex-align-center">
    <div class="shape" :class="type" :style="isCircle ? 'border-radius: 50%;' : ''"></div>
    <div class="ml5" v-if="!hideTitle">{{ getFlightAreaTitle() }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { EFlightAreaType, EGeometryType } from '../../types/flight-area'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  type: EFlightAreaType,
  isCircle: boolean,
  hideTitle?: boolean
}>()

const { t } = useI18n()

const getFlightAreaTitle = () => {
  if (props.type === EFlightAreaType.NFZ) {
    return props.isCircle ? t('flightArea.circularGeoZone') : t('flightArea.polygonalGeoZone')
  } else {
    return props.isCircle ? t('flightArea.circularTaskArea') : t('flightArea.polygonalTaskArea')
  }
}

</script>

<style lang="scss">
  .nfz {
    border-color: red;
  }
  .dfence {
    border-color: $tag-green;
  }
  .shape {
    width: 16px;
    height: 16px;
    border-width: 3px;
    border-style: solid;
  }
</style>
