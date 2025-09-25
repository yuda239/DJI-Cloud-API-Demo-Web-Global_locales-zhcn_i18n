export default {
  // 通用
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    reset: 'Reset',
    submit: 'Submit',
    loading: 'Loading...',
    downloading: 'downloading',
    online: 'Online',
    offline: 'Offline',
    status: 'Status',
    actions: 'Actions',
    download: 'download',
    noData: 'No Data'
  },

  // 登录页面
  login: {
    title: 'Login',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    loginSuccess: 'Login successful',
    loginFailed: 'Login failed'
  },

  // 导航菜单
  nav: {
    members: 'Members',
    devices: 'Devices',
    firmwares: 'Firmwares',
    workspace: 'Workspace',
    media: 'Media Files',
    tasks: 'Tasks',
    flightArea: 'Flight Area',
    tsa: 'TSA',
    livestream: 'Livestream',
    annotations: 'Annotations',
    wayline: 'Flight Route Library',
    logout: 'Log Out',
    backToHome: 'Back to home'
  },

  // 设备管理
  devices: {
    aircraft: 'Aircraft',
    dock: 'Dock',
    nickname: 'Nickname',
    sn: 'SN',
    model: 'Model',
    firmwareVersion: 'Firmware Version',
    workspace: 'Workspace',
    joined: 'Joined',
    lastOnline: 'Last Online',
    deviceType: 'Device Type',
    callsign: 'Callsign'
  },

  // 成员管理
  members: {
    account: 'Account',
    userType: 'User Type',
    workspaceName: 'Workspace Name',
    mqttUsername: 'Mqtt Username',
    mqttPassword: 'Mqtt Password',
    createTime: 'Joined'
  },

  // 固件管理
  firmwares: {
    fileName: 'File Name',
    deviceName: 'Device Name',
    productVersion: 'Product Version',
    fileSize: 'File Size',
    releaseNote: 'Release Note',
    releasedTime: 'Released Time',
    firmwareStatus: 'Firmware Status',
    upload: 'Upload',
    all: 'All',
    disabled: 'Disabled',
    available: 'Available',
    model: 'Model',
    firmwareVersion: 'Firmware Version',
    creator: 'Creator',
    releaseDate: 'Release Date',
    status: 'Status',
    importFirmware: 'Import Firmware',
    searchVersion: 'Search Version',
    releaseNoteRequired: 'Release note is required',
    clickToUpload: 'Click to Upload',
    canChooseMultiple: 'Can choose multiple',
    file: 'File',
    selectDeviceModels: 'Please select which models this firmware belongs to'
  },

  // 媒体文件
  media: {
    title: 'Media Files',
    fileName: 'File Name',
    filePath: 'File Path',
    fileSize: 'FileSize',
    drone: 'Drone',
    payloadType: 'Payload Type',
    original: 'Original',
    created: 'Created',
    action: 'Action'
  },

  // 任务管理
  tasks: {
    title: 'Task Management',
    plannedActualTime: 'Planned/Actual Time',
    status: 'Status',
    taskName: 'Task Name',
    deviceName: 'Device Name',
    progress: 'Progress',
    result: 'Result',
    createTime: 'Create Time',
    executeTime: 'Execute Time',
    completeTime: 'Complete Time',
    planName: 'Plan Name',
    type: 'Task Type',
    flightRouteName: 'Flight Route Name',
    dockName: 'Dock Name',
    rthAltitude: 'RTH Altitude',
    lostAction: 'Lost Action',
    creator: 'Creator',
    mediaFileUpload: 'Media File Upload',
    action: 'Action',
    deleteConfirm: 'Are you sure you want to delete this task?',
    deleteSuccess: 'Task deleted successfully',
    suspendConfirm: 'Are you sure you want to suspend this task?',
    suspend: 'Suspend',
    suspendSuccess: 'Task suspended successfully',
    resumeConfirm: 'Are you sure you want to resume this task?',
    resume: 'Resume',
    resumeSuccess: 'Task resumed successfully',
    uploadNow: 'Upload Now',
    uploadMediaSuccess: 'Media file uploaded successfully',
    // 任务类型
    immediate: 'Immediate',
    timed: 'Timed',
    continuous: 'Continuous',
    // 失控动作
    returnToHome: 'Return to Home',
    hover: 'Hover',
    land: 'Land',
    // 任务状态
    toBePerformed: 'To be performed',
    inProgress: 'In progress',
    taskCompleted: 'Task completed',
    taskCanceled: 'Task canceled',
    taskFailed: 'Task failed',
    paused: 'Paused',
    // 媒体状态
    waitingToUpload: 'Waiting to upload',
    uploading: 'Uploading…',
    uploaded: 'Uploaded',
    noMediaFiles: 'No media files',
    // 创建计划
    planTimer: 'Plan Timer',
    date: 'Date',
    time: 'Time',
    startTime: 'Start Time',
    endTime: 'End Time',
    startTaskWhenBatteryReaches: 'Start task when battery level reaches',
    selectTime: 'Select time',
    selectDate: 'Select date',
    selectStartTime: 'Select start time',
    selectEndTime: 'Select end time',
    endTimeShouldBeLater: 'End time should be later than start time',
    overlappingTimePeriods: 'Overlapping time periods.',
    updateAt: 'Update at'
  },
  // 地图控件 +飞行区域
  flightArea: {
    circularGeoZone: 'Circular GEO Zone',
    polygonalGeoZone: 'Polygonal GEO Zone',
    circularTaskArea: 'Circular Task Area',
    polygonalTaskArea: 'Polygonal Task Area',
    name: 'Name',
    type: 'Type',
    status: 'Status',
    creator: 'Creator',
    createTime: 'Create Time',
    updateTime: 'Update Time',
    sync: 'Sync',
    syncStatus: 'Sync Status',
    deviceStatus: 'Device Status',
    title: 'Custom Flight Area',
    customFlightArea: 'Custom Flight Area',
    updateAt: 'Update at',
    disableConfirm: 'Is it determined to disable the current area?',
    disable: 'Disable',
    enableConfirm: 'Is it determined to enable the current area?',
    enable: 'Enable',
    deleteConfirm: 'Is it determined to delete the current area?',
    syncAcrossDevices: 'Sync Across Devices',
    syncingToDevices: 'Syncing to {count} devices',
    chooseSyncDevices: 'Choose Synchronous Devices',
    dockOffline: 'Dock offline',
    dataSynced: 'Data synced',
    toBeSynced: 'To be synced',
    noSynchronization: 'No synchronization',
    dockOfflineMessage: 'Dock({nickname}) is offline.',
    dockSynchronizing: 'The dock is synchronizing.',
    selectDocksToSync: 'Please select the docks that need to be synchronized.',
    devicesSynchronizing: 'The devices are synchronizing...',
    radiusError: 'The radius must be greater than {minRadius}m.',
    polygonPathError: 'The path of the polygon cannot be crossed.',
    droneFlightAreaInfo: 'Drone({sn}) flight area information',
    inFlightArea: 'In the flight area',
    nearFlightArea: 'Near the flight area',
    distanceFromArea: 'There are {distance} meters from the edge of the area({areaName}).'
  },

  // 设备设置
  deviceSettings: {
    nightLights: 'Night Lights',
    heightLimit: 'Height Limit',
    distanceLimit: 'Distance Limit',
    obstacleAvoidance: 'Obstacle Avoidance',
    horizontal: 'Horizontal',
    upside: 'Upside',
    downside: 'Downside',
    open: 'Open',
    close: 'Close',
    set: 'Set',
    unset: 'Unset'
  },

  // 错误信息
  errors: {
    serverError: 'Server error',
    networkError: 'Network error',
    unknownError: 'Unknown error',
    operationFailed: 'Operation failed',
    operationSuccess: 'Operation successful'
  },

  // 设备状态
  deviceStatus: {
    standby: 'Standby',
    preparing: 'Preparing',
    ready: 'Ready',
    manual: 'Manual',
    automatic: 'Automatic',
    waypoint: 'Waypoint',
    panoramic: 'Panoramic',
    activeTrack: 'Active Track',
    adsb: 'ADS-B',
    returnToHome: 'Return To Home',
    landing: 'Landing',
    forcedLanding: 'Forced Landing',
    threeBladesLanding: 'Three Blades Landing',
    upgrading: 'Upgrading',
    disconnected: 'Disconnected',
    idle: 'Idle',
    debugging: 'Debugging',
    remoteDebugging: 'Remote Debugging',
    working: 'Working'
  },

  // 分页
  pagination: {
    total: 'Total {total} items',
    pageSize: 'Page Size',
    current: 'Current Page',
    prev: 'Previous',
    next: 'Next'
  },

  // 航线管理
  wayline: {
    title: 'Flight Route Library',
    deleteConfirm: 'Are you sure you want to delete this wayline?',
    deleteSuccess: 'Wayline deleted successfully',
    uploadSuccess: 'Wayline {fileName} uploaded successfully'
  }
}
