<template>
<div>
  <span class="status-tag pointer">
    <a-popconfirm
      :title="getTitle()"
      :ok-text="t('deviceFirmware.yes')"
      :cancel-text="t('deviceFirmware.no')"
      placement="left"
      @confirm="onFirmwareStatusClick(firmware)"
    >
      <a-tag :color="firmware.firmware_status ? commonColor.NORMAL : commonColor.FAIL"
          :class="firmware.firmware_status ? 'border-corner ' : 'status-disable border-corner'">
        {{ getText(firmware.firmware_status) }}
      </a-tag>
    </a-popconfirm>
  </span>
</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { changeFirmareStatus } from '/@/api/manage'
import { ELocalStorageKey } from '/@/types'
import { Firmware, FirmwareStatusEnum } from '/@/types/device-firmware'
import { commonColor } from '/@/utils/color'

const { t } = useI18n()

const props = defineProps<{
  firmware: Firmware
}>()

const workspaceId: string = localStorage.getItem(ELocalStorageKey.WorkspaceId)!

function getTitle () {
  return t('deviceFirmware.confirmTitle', { status: getText(!props.firmware.firmware_status) })
}

function getText (status: boolean) {
  return status ? FirmwareStatusEnum.TRUE : FirmwareStatusEnum.FALSE
}

function onFirmwareStatusClick (record: Firmware) {
  changeFirmareStatus(workspaceId, record.firmware_id, { status: !record.firmware_status }).then((res) => {
    if (res.code === 0) {
      record.firmware_status = !record.firmware_status
    }
  })
}

</script>

<style lang="scss" scoped>
  .status-disable{
    opacity: 0.4;
  }
  .border-corner {
    border-radius: 3px;
  }
  .pointer {
    cursor: pointer;
  }
</style>
