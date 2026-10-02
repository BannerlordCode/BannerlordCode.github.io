---
title: "SandBoxViewCreator"
description: "SandBoxViewCreator：SandBox.View 的 public 类；公开成员 14 个（方法 14、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/SandBoxViewCreator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxViewCreator

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public static class SandBoxViewCreator`
**File:** `SandBox.View/SandBoxViewCreator.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxViewCreator 位于 SandBox.View 模块，源文件 SandBox.View/SandBoxViewCreator.cs。它是一个 public 类，继承链为 SandBoxViewCreator。public/protected 成员共 14 个：14 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxViewCreator 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View`，继承链 SandBoxViewCreator。成员构成以方法为主（方法 14/14，属性 0/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/SandBoxViewCreator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateSaveLoadScreen` | `public static ScreenBase CreateSaveLoadScreen(bool isSaving)` | 方法 |
| `CreateMissionCraftingView` | `public static MissionView CreateMissionCraftingView()` | 方法 |
| `CreateMissionNameMarkerUIHandler` | `public static MissionView CreateMissionNameMarkerUIHandler(Mission mission = null)` | 方法 |
| `CreateMissionConversationView` | `public static MissionView CreateMissionConversationView(Mission mission)` | 方法 |
| `CreateMissionBarterView` | `public static MissionView CreateMissionBarterView()` | 方法 |
| `CreateMissionAgentAlarmStateView` | `public static MissionView CreateMissionAgentAlarmStateView(Mission mission = null)` | 方法 |
| `CreateMissionMainAgentDetectionView` | `public static MissionView CreateMissionMainAgentDetectionView(Mission mission = null)` | 方法 |
| `CreateMissionStealthFailCounter` | `public static MissionView CreateMissionStealthFailCounter(Mission mission = null)` | 方法 |
| `CreateMissionTournamentView` | `public static MissionView CreateMissionTournamentView()` | 方法 |
| `CreateMissionQuestBarView` | `public static MissionView CreateMissionQuestBarView()` | 方法 |
| `CreateMapView` | `public static MapView CreateMapView<T>(params object[]parameters) where T : MapView` | 方法 |
| `CreateMenuView` | `public static MenuView CreateMenuView<T>(params object[]parameters) where T : MenuView` | 方法 |
| `CreateBoardGameView` | `public static MissionView CreateBoardGameView()` | 方法 |
| `CreateMissionArenaPracticeFightView` | `public static MissionView CreateMissionArenaPracticeFightView()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CampaignMusicHandler](../CampaignMusicHandler/)
- [同命名空间 IChangeableScreen](../IChangeableScreen/)
- [同命名空间 MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier/)
- [同命名空间 PreloadScreen](../PreloadScreen/)
