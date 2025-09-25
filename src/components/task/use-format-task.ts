import { DEFAULT_PLACEHOLDER } from '/@/utils/constants'
import { Task } from '/@/api/wayline'
import { TaskStatusColor, MediaStatusColorMap, MediaStatus, TaskType, TaskStatus, OutOfControlAction } from '/@/types/task'
import { isNil } from 'lodash'
import { useI18n } from 'vue-i18n'

export function useFormatTask () {
  const { t } = useI18n()

  function formatTaskType (task: Task) {
    const typeMap = {
      [TaskType.Immediate]: t('tasks.immediate'),
      [TaskType.Timed]: t('tasks.timed'),
      [TaskType.Condition]: t('tasks.continuous')
    }
    return typeMap[task.task_type] || DEFAULT_PLACEHOLDER
  }

  function formatTaskTime (time: string) {
    return time || DEFAULT_PLACEHOLDER
  }

  function formatLostAction (task: Task) {
    const actionMap = {
      [OutOfControlAction.ReturnToHome]: t('tasks.returnToHome'),
      [OutOfControlAction.Hover]: t('tasks.hover'),
      [OutOfControlAction.Land]: t('tasks.land')
    }
    return actionMap[task.out_of_control_action] || DEFAULT_PLACEHOLDER
  }

  function formatTaskStatus (task: Task) {
    const statusObj = {
      text: '',
      color: ''
    }
    const { status } = task
    const statusMap = {
      [TaskStatus.Wait]: t('tasks.toBePerformed'),
      [TaskStatus.Carrying]: t('tasks.inProgress'),
      [TaskStatus.Success]: t('tasks.taskCompleted'),
      [TaskStatus.CanCel]: t('tasks.taskCanceled'),
      [TaskStatus.Fail]: t('tasks.taskFailed'),
      [TaskStatus.Paused]: t('tasks.paused')
    }
    statusObj.text = statusMap[status] || DEFAULT_PLACEHOLDER
    statusObj.color = TaskStatusColor[status]
    return statusObj
  }

  function formatMediaTaskStatus (task: Task) {
    const statusObj = {
      text: '',
      color: '',
      number: '',
      status: MediaStatus.Empty,
    }
    const { media_count, uploaded_count, uploading } = task
    if (isNil(media_count) || isNaN(media_count)) {
      return statusObj
    }
    const expectedFileCount = media_count || 0
    const uploadedFileCount = uploaded_count || 0
    if (media_count === 0) {
      statusObj.text = t('tasks.noMediaFiles')
      statusObj.color = MediaStatusColorMap[MediaStatus.Empty]
    } else if (media_count === uploaded_count) {
      statusObj.text = t('tasks.uploaded')
      statusObj.color = MediaStatusColorMap[MediaStatus.Success]
      statusObj.number = `(${uploadedFileCount}/${expectedFileCount})`
      statusObj.status = MediaStatus.Success
    } else {
      if (uploading) {
        statusObj.text = t('tasks.uploading')
        statusObj.color = MediaStatusColorMap[MediaStatus.Uploading]
        statusObj.status = MediaStatus.Uploading
      } else {
        statusObj.text = t('tasks.waitingToUpload')
        statusObj.color = MediaStatusColorMap[MediaStatus.ToUpload]
        statusObj.status = MediaStatus.ToUpload
      }
      statusObj.number = `(${uploadedFileCount}/${expectedFileCount})`
    }
    return statusObj
  }

  return {
    formatTaskType,
    formatTaskTime,
    formatLostAction,
    formatTaskStatus,
    formatMediaTaskStatus,
  }
}
