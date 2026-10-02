---
title: "Core 核心 — 只放入口类"
description: "本目录**只收录模块加载的 2 个入口类**：`MBSubModuleBase` 和 `Module`。`Module` 是宿主（单例，`sealed`，不应被继承），`MBSubModuleBase` 才是你继承的那个。"
---
# Core 核心 — 只放入口类

**本目录**只收录模块加载的 2 个入口类**：`MBSubModuleBase` 和 `Module`。`Module` 是宿主（单例，`sealed`，不应被继承），`MBSubModuleBase` 才是你继承的那个。**

其余全部基础设施在 [Core-Extra](../core-extra/)：`TaleWorlds.Core`、`TaleWorlds.Library`、`TaleWorlds.DotNet`，包括 `Game`、`GameStateManager`、`ViewModel`、`AssemblyLoader`。

`Game` 在 1.4.5 里同时出现在 `core/` 和 `core-extra/`，v1.4.7 按命名空间只保留 `core-extra/` 一份。

## 什么时候该去另一个目录

| 你想做的事 | 去哪 |
| --- | --- |
| 继承并覆写入口类 | **本页** |
| 查战斗/战斗逻辑的其余全部 API | [Mission-Ext](../mission-ext/) |
| 查战役实体与状态 | [Campaign](../campaign/) |
| 查模块加载之外的运行时设施 | [Core-Extra](../core-extra/) |

反向链接：`Mission-Ext` 的索引页也指向本页。

## 本区页面（2）

[MBSubModuleBase](MBSubModuleBase) · [Module](Module)

## 相邻目录

[core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [module-system](../../architecture/module-system)
