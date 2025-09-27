# 关于DJI Cloud API Demo 大疆上云API前端汉化翻译（简体中文）

发布日期：2025年4月10日

## 1.项目来源说明
大疆创新 DJI Cloud API Demo <br>地址：https://github.com/dji-sdk/Cloud-API-Demo-Web 、 https://github.com/dji-sdk/DJI-Cloud-API-Demo 的示例项目。<br>
该项目作为官方提供的云端集成参考实现，旨在辅助开发者理解API调用逻辑。并非生产级解决方案，可能存在未修复的安全隐患（如数据泄露、未授权访问等）。<br>
请避免在生产环境中直接使用Demo中的代码，若直接使用。<br>官方强烈建议您启动安全自查，或避免将基于该Demo的服务暴露于公网环境。
<br>
## 2.项目修改内容
### （1）临时绕过登录验证，便于直接查看
#### ① 禁用Token验证
- 在 `request.ts` 中注释掉了请求拦截器中的token添加逻辑
- 注释掉了401错误处理的自动跳转登录页面逻辑
#### ② 添加Mock响应处理
- 在响应拦截器中添加了mock数据返回逻辑，当后端服务不可用时自动返回成功响应
- 在错误拦截器中添加了兜底处理，确保所有请求都能正常返回
#### ③ 临时配置后端地址
- 将 `config.ts` 中的baseURL设置为临时地址
### 效果
现在可以直接访问各页面，无需登录验证。所有API请求都会返回mock成功响应，正常查看前端页面的UI和功能。
### 注意！！！
这些修改仅用于临时绕过登录验证进行前端开发和调试，在正式部署时需要恢复正常的认证逻辑。
### （2）引用i18n插件实现多国语言预备和国际化版本文本翻译的本地化
添加locale="{ emptyText: t('common.noData') }" 属性来汉化空状态文本

##3.免责声明与后续支持
因直接使用Demo代码导致的业务损失、数据风险或第三方纠纷，DJI将不承担任何责任。
如有疑问，请访问大疆开发者社区获取最新技术资源。

# DJI Cloud API

## What is the DJI Cloud API?

The launch of the Cloud API mainly solves the problem of developers reinventing the wheel. For developers who do not need in-depth customization of APP, they can directly use DJI Pilot2 to communicate with the third cloud platform, and developers can focus on the development and implementation of cloud service interfaces.

## Docker

If you don't want to install the development environment, you can try deploying with docker. [Click the link to download.](https://terra-sz-hc1pro-cloudapi.oss-cn-shenzhen.aliyuncs.com/c0af9fe0d7eb4f35a8fe5b695e4d0b96/docker/cloud_api_sample_docker.zip)

## Usage

For more documentation, please visit the [DJI Developer Documentation](https://developer.dji.com/doc/cloud-api-tutorial/cn/).

## Latest Release

Cloud API 1.10.0 was released on 7 April 2024. For more information, please visit the [Release Note](https://developer.dji.com/doc/cloud-api-tutorial/cn/).

## License

Cloud API is MIT-licensed. Please refer to the LICENSE file for more information.
