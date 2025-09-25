export default {
  // 通用
  common: {
    confirm: '确认',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    search: '搜索',
    reset: '重置',
    submit: '提交',
    loading: '加载中...',
    downloading: '下载中',
    online: '在线',
    offline: '离线',
    status: '状态',
    actions: '操作',
    download: '下载',
    noData: '暂无数据'
  },

  // 登录页面
  login: {
    title: '云端 API 演示',
    username: '用户名',
    password: '密码',
    loginButton: '登录',
    loginSuccess: '登录成功',
    loginFailed: '登录失败'
  },

  // 导航菜单
  nav: {
    members: '成员管理',
    devices: '设备管理',
    firmwares: '固件管理',
    workspace: '工作空间',
    media: '媒体文件',
    tasks: '任务管理',
    flightArea: '飞行区域',
    tsa: 'TSA',
    livestream: '直播',
    annotations: '标注',
    wayline: '航线库',
    logout: '退出登录',
    backToHome: '返回首页'
  },

  // 设备管理
  devices: {
    aircraft: '飞行器',
    dock: '机场',
    nickname: '设备昵称',
    sn: '序列号',
    model: '设备型号',
    firmwareVersion: '固件版本',
    workspace: '工作空间',
    joined: '加入时间',
    lastOnline: '最后在线',
    deviceType: '设备类型',
    callsign: '设备名称',
    name: '设备名称',
    status: '状态',
    deleteDevice: '删除设备',
    deleteConfirm: '确定要删除此设备吗？',
    deviceUpgrade: '设备升级',
    actions: '操作'
  },

  // 成员管理
  members: {
    account: '账户',
    userType: '用户类型',
    workspaceName: '工作空间名称',
    mqttUsername: 'MQTT用户名',
    mqttPassword: 'MQTT密码',
    createTime: '加入时间',
    joined: '加入时间',
    action: '操作'
  },

  // 固件管理
  firmwares: {
    fileName: '文件名',
    deviceName: '设备名称',
    productVersion: '产品版本',
    fileSize: '文件大小',
    releaseNote: '发布说明',
    releasedTime: '发布时间',
    firmwareStatus: '固件状态',
    upload: '上传',
    all: '全部',
    disabled: '已禁用',
    available: '可用',
    model: '型号',
    firmwareVersion: '固件版本',
    creator: '创建者',
    releaseDate: '发布日期',
    status: '状态',
    importFirmware: '导入固件文件',
    searchVersion: '搜索版本',
    releaseNoteRequired: '请输入发布说明',
    clickToUpload: '点击上传',
    canChooseMultiple: '可选择多个',
    file: '文件',
    selectDeviceModels: '请选择此固件适用的机型'
  },

  // 媒体文件
  media: {
    title: '媒体文件',
    fileName: '文件名',
    filePath: '文件路径',
    fileSize: '文件大小',
    drone: '飞行器',
    payloadType: '负载类型',
    original: '原始文件',
    created: '创建时间',
    action: '操作'
  },

  // 任务管理
  tasks: {
    title: '任务管理',
    plannedActualTime: '计划/实际时间',
    status: '状态',
    taskName: '任务名称',
    deviceName: '设备名称',
    progress: '进度',
    result: '结果',
    createTime: '创建时间',
    executeTime: '执行时间',
    completeTime: '完成时间',
    planName: '计划名称',
    type: '任务类型',
    flightRouteName: '航线名称',
    dockName: '机场名称',
    rthAltitude: '返航高度',
    lostAction: '失控动作',
    creator: '创建者',
    mediaFileUpload: '媒体文件上传',
    action: '操作',
    deleteConfirm: '确定要删除此任务吗？',
    deleteSuccess: '任务删除成功',
    suspendConfirm: '确定要挂起此任务吗？',
    suspend: '挂起',
    suspendSuccess: '任务挂起成功',
    resumeConfirm: '确定要恢复此任务吗？',
    resume: '恢复',
    resumeSuccess: '任务恢复成功',
    uploadNow: '立即上传',
    uploadMediaSuccess: '媒体文件上传成功',
    // 任务类型
    immediate: '立即执行',
    timed: '定时任务',
    continuous: '连续任务',
    // 失控动作
    returnToHome: '返回起飞点',
    hover: '悬停',
    land: '降落',
    // 任务状态
    toBePerformed: '待执行',
    inProgress: '执行中',
    taskCompleted: '任务完成',
    taskCanceled: '任务取消',
    taskFailed: '任务失败',
    paused: '已暂停',
    // 媒体状态
    waitingToUpload: '待上传',
    uploading: '上传中...',
    uploaded: '已上传',
    noMediaFiles: '无媒体文件',
    // 创建计划
    planTimer: '计划定时器',
    date: '日期',
    time: '时间',
    startTime: '开始时间',
    endTime: '结束时间',
    startTaskWhenBatteryReaches: '当电池电量达到时开始任务',
    selectTime: '选择时间',
    selectDate: '选择日期',
    selectStartTime: '选择开始时间',
    selectEndTime: '选择结束时间',
    endTimeShouldBeLater: '结束时间应晚于开始时间',
    overlappingTimePeriods: '时间段重叠。',
    updateAt: '更新于'
  },
  // 地图控件 + 飞行区域
  flightArea: {
    circularGeoZone: '圆形禁飞区',
    polygonalGeoZone: '多边形禁飞区',
    circularTaskArea: '圆形任务区域',
    polygonalTaskArea: '多边形任务区域',
    name: '名称',
    type: '类型',
    status: '状态',
    creator: '创建者',
    createTime: '创建时间',
    updateTime: '更新时间',
    sync: '同步',
    syncStatus: '同步状态',
    deviceStatus: '设备状态',
    title: '自定义飞行区域',
    customFlightArea: '自定义飞行区域',
    updateAt: '更新于',
    disableConfirm: '确定要禁用当前区域吗？',
    disable: '禁用',
    enableConfirm: '确定要启用当前区域吗？',
    enable: '启用',
    deleteConfirm: '确定要删除当前区域吗？',
    syncAcrossDevices: '跨设备同步',
    syncingToDevices: '正在同步到 {count} 个设备',
    chooseSyncDevices: '选择同步设备',
    dockOffline: '机场离线',
    dataSynced: '数据已同步',
    toBeSynced: '待同步',
    noSynchronization: '无同步',
    dockOfflineMessage: '机场({nickname})离线。',
    dockSynchronizing: '机场正在同步中。',
    selectDocksToSync: '请选择需要同步的机场。',
    devicesSynchronizing: '设备正在同步中...',
    radiusError: '半径必须大于 {minRadius} 米。',
    polygonPathError: '多边形路径不能交叉。',
    droneFlightAreaInfo: '无人机({sn})飞行区域信息',
    inFlightArea: '在飞行区域内',
    nearFlightArea: '靠近飞行区域',
    distanceFromArea: '距离区域({areaName})边缘 {distance} 米。'
  },

  // 设备设置
  deviceSettings: {
    nightLights: '夜航灯',
    heightLimit: '限高设置',
    distanceLimit: '限远设置',
    obstacleAvoidance: '避障设置',
    horizontal: '水平避障',
    upside: '上视避障',
    downside: '下视避障',
    open: '开启',
    close: '关闭',
    set: '已设置',
    unset: '未设置'
  },

  // 错误信息
  errors: {
    serverError: '服务器错误',
    networkError: '网络错误',
    unknownError: '未知错误',
    operationFailed: '操作失败',
    operationSuccess: '操作成功'
  },

  // 设备状态
  deviceStatus: {
    standby: '待机',
    preparing: '准备中',
    ready: '就绪',
    manual: '手动模式',
    automatic: '自动模式',
    waypoint: '航点模式',
    panoramic: '全景模式',
    activeTrack: '智能跟随',
    adsb: 'ADS-B',
    returnToHome: '返航',
    landing: '降落',
    forcedLanding: '强制降落',
    threeBladesLanding: '三桨降落',
    upgrading: '升级中',
    disconnected: '已断开',
    idle: '空闲',
    debugging: '调试中',
    remoteDebugging: '远程调试',
    working: '工作中'
  },

  // 分页
  pagination: {
    total: '共 {total} 条',
    pageSize: '每页条数',
    current: '当前页',
    prev: '上一页',
    next: '下一页'
  },

  // 航线管理
  wayline: {
    title: '航线库',
    deleteConfirm: '确定要删除此航线吗？',
    deleteSuccess: '航线删除成功',
    uploadSuccess: '航线 {fileName} 上传成功'
  },

  // TSA页面
  tsa: {
    myUsername: '我的用户名',
    dock: '机场',
    noDrone: '无飞机',
    onlineDevices: '在线设备'
  },

  // 图层页面
  layer: {
    annotations: '注释',
    mapElement: '地图元素',
    name: '名称',
    longitude: '经度',
    latitude: '纬度',
    color: '颜色',
    elementName: '元素名称',
    delete: '删除'
  },

  livestream: {
    agoraLive: 'Agora 直播',
    rtmpGbLive: 'RTMP/GB28181 直播',
    liveStreamingSourceSelection: '直播源选择',
    lens: '镜头',
    selectLiveType: '选择直播类型',
    selectDrone: '选择无人机',
    selectCamera: '选择相机',
    selectClarity: '选择清晰度',
    rtspNote: '请使用 VLC 媒体播放器播放 RTSP 直播流！！！',
    rtspParameter: 'RTSP 参数',
    switchLens: '切换镜头',
    play: '播放',
    stop: '停止',
    updateClarity: '更新清晰度',
    refreshLiveCapacity: '刷新直播能力',
    adaptive: '自适应',
    smooth: '流畅',
    standard: '标准',
    beforeStarting: '开始手动操作前，请选择发布模式和直播类型',
    selectVideoPublishMode: '选择视频发布模式',
    selectMode: '选择模式',
    selectLivestreamType: '选择直播类型',
    param: '参数',
    token: '令牌',
    channel: '频道',
    pleaseSelectPublishMode: '请选择发布模式！',
    pleaseSelectLivestreamType: '请选择直播类型！'
  },

  // 设备固件状态
  deviceFirmware: {
    confirmTitle: '确认将此固件设置为 {status} 吗？',
    yes: '是',
    no: '否'
  }
}
