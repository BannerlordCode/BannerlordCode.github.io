---
title: "Mission 任务系统 — 只放入口类"
description: "本目录**只收录 5 个模组作者真正会继承的入口类**，是刻意做小的'入口桶'，不是完整 API 面。"
---
# Mission 任务系统 — 只放入口类

**本目录**只收录 5 个模组作者真正会继承的入口类**，是刻意做小的"入口桶"，不是完整 API 面。**

完整的 `TaleWorlds.MountAndBlade` 类型面在 [Mission-Ext](../mission-ext/)。如果这里没有你要找的东西，**不要在这里继续找** —— 直接去 Mission-Ext。

这 5 个类型是从 `mission-ext/` 里按名称挑出来的（不是按命名空间规则），目的只有一个：让 1.4.5 的 `api/mission/Mission` 这类 URL 在跨版本对比里继续对得上。

## 什么时候该去另一个目录

| 你想做的事 | 去哪 |
| --- | --- |
| 继承并覆写入口类 | **本页** |
| 查战斗/战斗逻辑的其余全部 API | [Mission-Ext](../mission-ext/) |
| 查战役实体与状态 | [Campaign](../campaign/) |
| 查模块加载之外的运行时设施 | [Core-Extra](../core-extra/) |

反向链接：`Mission-Ext` 的索引页也指向本页。

## 本区页面（4）

[Agent](Agent) · [Mission](Mission) · [MissionBehavior](MissionBehavior)
[MissionState](MissionState)

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [module-system](../../architecture/module-system)
