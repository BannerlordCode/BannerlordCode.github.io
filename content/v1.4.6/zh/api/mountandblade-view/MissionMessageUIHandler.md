---
title: "MissionMessageUIHandler"
description: "MissionMessageUIHandler：TaleWorlds.MountAndBlade.View 的 public 类，继承 MissionView；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionMessageUIHandler.cs。"
---
# MissionMessageUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionMessageUIHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionMessageUIHandler.cs`

## 概述

MissionMessageUIHandler 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionMessageUIHandler.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionMessageUIHandler → MissionView → MissionBehavior。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMessageUIHandler 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer），继承链 MissionMessageUIHandler → MissionView → MissionBehavior。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 MissionBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionMessageUIHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ShowMessage` | `public void ShowMessage(string str, float duration, bool hasPriority = true)` | 方法 |
| `DeleteMessage` | `public void DeleteMessage(string str)` | 方法 |
| `DeleteCurrentMessage` | `public void DeleteCurrentMessage()` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionView](../MissionView)
- [同命名空间 BarterView](../BarterView)
- [同命名空间 BoardGameView](../BoardGameView)
- [同命名空间 DeploymentMissionView](../DeploymentMissionView)
- [同命名空间 DeploymentView](../DeploymentView)
