---
title: "ViewCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewCreator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ViewCreator

**命名空间:** TaleWorlds.MountAndBlade.View
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class ViewCreator`
**领域:** mission-ext

## 概述

`ViewCreator` 位于 `TaleWorlds.MountAndBlade.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ViewCreator.CreateCreditsScreen();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
