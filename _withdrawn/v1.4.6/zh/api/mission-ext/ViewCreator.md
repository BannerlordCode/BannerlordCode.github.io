---
title: "ViewCreator"
description: "ViewCreator：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 24 个（方法 24、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ViewCreator

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ViewCreator`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ViewCreator 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs。它是一个 public 类，继承链为 ViewCreator。public/protected 成员共 24 个：24 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ViewCreator 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View`，继承链 ViewCreator。成员构成以方法为主（方法 24/24，属性 0/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateCreditsScreen` | `public static ScreenBase CreateCreditsScreen()` | 方法 |
| `CreateOptionsScreen` | `public static ScreenBase CreateOptionsScreen(bool fromMainMenu)` | 方法 |
| `CreateMBFaceGeneratorScreen` | `public static ScreenBase CreateMBFaceGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer = false, IFaceGeneratorCustomFilter filter = null)` | 方法 |
| `CreateMissionAgentStatusUIHandler` | `public static MissionView CreateMissionAgentStatusUIHandler(Mission mission = null)` | 方法 |
| `CreateMissionMainAgentEquipDropView` | `public static MissionView CreateMissionMainAgentEquipDropView(Mission mission)` | 方法 |
| `CreateMissionSiegeEngineMarkerView` | `public static MissionView CreateMissionSiegeEngineMarkerView(Mission mission)` | 方法 |
| `CreateMissionMainAgentEquipmentController` | `public static MissionView CreateMissionMainAgentEquipmentController(Mission mission = null)` | 方法 |
| `CreateMissionMainAgentCheerBarkControllerView` | `public static MissionView CreateMissionMainAgentCheerBarkControllerView(Mission mission = null)` | 方法 |
| `CreateMissionAgentLockVisualizerView` | `public static MissionView CreateMissionAgentLockVisualizerView(Mission mission = null)` | 方法 |
| `CreateOptionsUIHandler` | `public static MissionView CreateOptionsUIHandler()` | 方法 |
| `CreateSingleplayerMissionKillNotificationUIHandler` | `public static MissionView CreateSingleplayerMissionKillNotificationUIHandler()` | 方法 |
| `CreateMissionAgentLabelUIHandler` | `public static MissionView CreateMissionAgentLabelUIHandler(Mission mission)` | 方法 |
| `CreateMissionOrderUIHandler` | `public static MissionView CreateMissionOrderUIHandler(Mission mission = null)` | 方法 |
| `CreateMissionOrderOfBattleUIHandler` | `public static MissionView CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)` | 方法 |
| `CreateMissionSpectatorControlView` | `public static MissionView CreateMissionSpectatorControlView(Mission mission = null)` | 方法 |
| `CreateMissionBattleScoreUIHandler` | `public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)` | 方法 |
| `CreateMissionBoundaryCrossingView` | `public static MissionView CreateMissionBoundaryCrossingView()` | 方法 |
| `CreateMissionLeaveView` | `public static MissionView CreateMissionLeaveView()` | 方法 |
| `CreatePhotoModeView` | `public static MissionView CreatePhotoModeView()` | 方法 |
| `CreateMissionSingleplayerEscapeMenu` | `public static MissionView CreateMissionSingleplayerEscapeMenu(bool isIronmanMode)` | 方法 |
| `CreateOrderTroopPlacerView` | `public static MissionView CreateOrderTroopPlacerView(OrderController orderController)` | 方法 |
| `CreateMissionFormationMarkerUIHandler` | `public static MissionView CreateMissionFormationMarkerUIHandler(Mission mission = null)` | 方法 |
| `CreateMissionHintView` | `public static MissionView CreateMissionHintView(Mission mission = null)` | 方法 |
| `CreateMissionObjectiveView` | `public static MissionView CreateMissionObjectiveView(Mission mission = null)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AgentVisuals](../AgentVisuals/)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator/)
- [同命名空间 BannerVisual](../BannerVisual/)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator/)
