---
title: "MissionGauntletMainAgentControlModeView"
description: "MissionGauntletMainAgentControlModeView：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MissionView；公开成员 8 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs。"
---
# MissionGauntletMainAgentControlModeView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletMainAgentControlModeView : MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs`

## 概述

MissionGauntletMainAgentControlModeView 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionGauntletMainAgentControlModeView → MissionView。public/protected 成员共 8 个：7 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletMainAgentControlModeView 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Mission），继承链 MissionGauntletMainAgentControlModeView → MissionView。成员构成以方法为主（方法 7/8，属性 0/8），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentControlModeView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletMainAgentControlModeView` | `public MissionGauntletMainAgentControlModeView()` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | 方法 |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionGauntletAgentStatus](../MissionGauntletAgentStatus)
- [同命名空间 MissionGauntletBoundaryCrossingView](../MissionGauntletBoundaryCrossingView)
- [同命名空间 MissionGauntletCategoryLoadManager](../MissionGauntletCategoryLoadManager)
- [同命名空间 MissionGauntletCrosshair](../MissionGauntletCrosshair)
