---
title: "ViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewCreator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ViewCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ViewCreator`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreator.cs`

## 概述

`ViewCreator` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateCreditsScreen
`public static ScreenBase CreateCreditsScreen()`

**用途 / Purpose:** 创建一个 `credits screen` 实例或对象。

### CreateOptionsScreen
`public static ScreenBase CreateOptionsScreen(bool fromMainMenu)`

**用途 / Purpose:** 创建一个 `options screen` 实例或对象。

### CreateMBFaceGeneratorScreen
`public static ScreenBase CreateMBFaceGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer = false, IFaceGeneratorCustomFilter filter = null)`

**用途 / Purpose:** 创建一个 `m b face generator screen` 实例或对象。

### CreateMissionAgentStatusUIHandler
`public static MissionView CreateMissionAgentStatusUIHandler(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission agent status u i handler` 实例或对象。

### CreateMissionMainAgentEquipDropView
`public static MissionView CreateMissionMainAgentEquipDropView(Mission mission)`

**用途 / Purpose:** 创建一个 `mission main agent equip drop view` 实例或对象。

### CreateMissionSiegeEngineMarkerView
`public static MissionView CreateMissionSiegeEngineMarkerView(Mission mission)`

**用途 / Purpose:** 创建一个 `mission siege engine marker view` 实例或对象。

### CreateMissionMainAgentEquipmentController
`public static MissionView CreateMissionMainAgentEquipmentController(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission main agent equipment controller` 实例或对象。

### CreateMissionMainAgentCheerBarkControllerView
`public static MissionView CreateMissionMainAgentCheerBarkControllerView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission main agent cheer bark controller view` 实例或对象。

### CreateMissionAgentLockVisualizerView
`public static MissionView CreateMissionAgentLockVisualizerView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission agent lock visualizer view` 实例或对象。

### CreateOptionsUIHandler
`public static MissionView CreateOptionsUIHandler()`

**用途 / Purpose:** 创建一个 `options u i handler` 实例或对象。

### CreateSingleplayerMissionKillNotificationUIHandler
`public static MissionView CreateSingleplayerMissionKillNotificationUIHandler()`

**用途 / Purpose:** 创建一个 `singleplayer mission kill notification u i handler` 实例或对象。

### CreateMissionAgentLabelUIHandler
`public static MissionView CreateMissionAgentLabelUIHandler(Mission mission)`

**用途 / Purpose:** 创建一个 `mission agent label u i handler` 实例或对象。

### CreateMissionOrderUIHandler
`public static MissionView CreateMissionOrderUIHandler(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission order u i handler` 实例或对象。

### CreateMissionOrderOfBattleUIHandler
`public static MissionView CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)`

**用途 / Purpose:** 创建一个 `mission order of battle u i handler` 实例或对象。

### CreateMissionSpectatorControlView
`public static MissionView CreateMissionSpectatorControlView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission spectator control view` 实例或对象。

### CreateMissionBattleScoreUIHandler
`public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)`

**用途 / Purpose:** 创建一个 `mission battle score u i handler` 实例或对象。

### CreateMissionBoundaryCrossingView
`public static MissionView CreateMissionBoundaryCrossingView()`

**用途 / Purpose:** 创建一个 `mission boundary crossing view` 实例或对象。

### CreateMissionLeaveView
`public static MissionView CreateMissionLeaveView()`

**用途 / Purpose:** 创建一个 `mission leave view` 实例或对象。

### CreatePhotoModeView
`public static MissionView CreatePhotoModeView()`

**用途 / Purpose:** 创建一个 `photo mode view` 实例或对象。

### CreateMissionSingleplayerEscapeMenu
`public static MissionView CreateMissionSingleplayerEscapeMenu(bool isIronmanMode)`

**用途 / Purpose:** 创建一个 `mission singleplayer escape menu` 实例或对象。

### CreateOrderTroopPlacerView
`public static MissionView CreateOrderTroopPlacerView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `order troop placer view` 实例或对象。

### CreateMissionFormationMarkerUIHandler
`public static MissionView CreateMissionFormationMarkerUIHandler(Mission mission = null, bool areDistancesRelevant = true)`

**用途 / Purpose:** 创建一个 `mission formation marker u i handler` 实例或对象。

### CreateMissionHintView
`public static MissionView CreateMissionHintView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission hint view` 实例或对象。

### CreateMissionObjectiveView
`public static MissionView CreateMissionObjectiveView(Mission mission = null)`

**用途 / Purpose:** 创建一个 `mission objective view` 实例或对象。

## 使用示例

```csharp
ViewCreator.CreateCreditsScreen();
```

## 参见

- [完整类目录](../catalog)