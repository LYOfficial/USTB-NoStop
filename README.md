# USTB-NoStop
> USTB 某视频播放网站反复弹窗导致视频播放异常的解决方案
>

![](https://img.shields.io/github/license/LYOfficial/USTB-NoStop) [![Page Views Count](https://badges.toozhao.com/badges/01JCX4VH35GGFDHBBS9AQ9NEW6/blue.svg)](https://badges.toozhao.com/stats/01JCX4VH35GGFDHBBS9AQ9NEW6) ![](https://img.shields.io/github/stars/LYOfficial/USTB-NoStop)

**欢迎点击 “Star” 按钮来支持我们的编写。**

### 前言

USTB dxpx 网站视频播放经常会出现“播放异常点击继续播放”“加载异常需要刷新网页”等现象，使得在本来就不稳定的 USTB 校园网环境下看 dxpx 的视频异常困难，经常会出现如图所示重新播放后长时间加载失败的情况。

![](https://pic.awa.ms/f/2024/11/17/6739f1364e41e.png)

### 脚本介绍

在这个如此逆风的前提下，本脚本诞生了，用于关闭弹窗或者其他操作导致视频播放暂停的问题，脚本强行取消了暂停功能，保证了视频的稳定播放。对于网络浮动造成的播放异常，本脚本每五分钟会刷新一次页面，保证视频流媒体正常播放。

本脚本没有违反任何条例，未对视频进行加速处理、未对视频播放进度跳过、未出现作弊现象，仅通过脚本帮助视频正常播放，达到正常学习效果。

本脚本需要使用 Tampermonkey 扩展，下载 `NoStop.js` 后添加新脚本到 Tampermonkey 并启用，在相应网站正常播放视频后刷新一次即可使用。

![](https://pic.awa.ms/f/2024/11/17/6739f13786abc.png)

### 支持我们

脚本中可能会含有部分未完善的待开发功能残留代码，如果您感兴趣的话可以帮助我们完善或覆写这些内容，可以 fork 仓库并提交 pr ，感谢您的参与。
