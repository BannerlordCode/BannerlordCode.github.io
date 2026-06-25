---
title: "ViewCreator"
description: "ViewCreator 的自动生成类参考。"
---
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

**用途 / Purpose:** 构建一个新的 credits screen 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateCreditsScreen();
```

### CreateOptionsScreen
`public static ScreenBase CreateOptionsScreen(bool fromMainMenu)`

**用途 / Purpose:** 构建一个新的 options screen 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateOptionsScreen(false);
```

### CreateMBFaceGeneratorScreen
`public static ScreenBase CreateMBFaceGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer = false, IFaceGeneratorCustomFilter filter = null)`

**用途 / Purpose:** 构建一个新的 m b face generator screen 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMBFaceGeneratorScreen(character, false, null);
```

### CreateMissionAgentStatusUIHandler
`public static MissionView CreateMissionAgentStatusUIHandler(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission agent status u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionAgentStatusUIHandler(null);
```

### CreateMissionMainAgentEquipDropView
`public static MissionView CreateMissionMainAgentEquipDropView(Mission mission)`

**用途 / Purpose:** 构建一个新的 mission main agent equip drop view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionMainAgentEquipDropView(mission);
```

### CreateMissionSiegeEngineMarkerView
`public static MissionView CreateMissionSiegeEngineMarkerView(Mission mission)`

**用途 / Purpose:** 构建一个新的 mission siege engine marker view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionSiegeEngineMarkerView(mission);
```

### CreateMissionMainAgentEquipmentController
`public static MissionView CreateMissionMainAgentEquipmentController(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission main agent equipment controller 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionMainAgentEquipmentController(null);
```

### CreateMissionMainAgentCheerBarkControllerView
`public static MissionView CreateMissionMainAgentCheerBarkControllerView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission main agent cheer bark controller view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionMainAgentCheerBarkControllerView(null);
```

### CreateMissionAgentLockVisualizerView
`public static MissionView CreateMissionAgentLockVisualizerView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission agent lock visualizer view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionAgentLockVisualizerView(null);
```

### CreateOptionsUIHandler
`public static MissionView CreateOptionsUIHandler()`

**用途 / Purpose:** 构建一个新的 options u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateOptionsUIHandler();
```

### CreateSingleplayerMissionKillNotificationUIHandler
`public static MissionView CreateSingleplayerMissionKillNotificationUIHandler()`

**用途 / Purpose:** 构建一个新的 singleplayer mission kill notification u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateSingleplayerMissionKillNotificationUIHandler();
```

### CreateMissionAgentLabelUIHandler
`public static MissionView CreateMissionAgentLabelUIHandler(Mission mission)`

**用途 / Purpose:** 构建一个新的 mission agent label u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionAgentLabelUIHandler(mission);
```

### CreateMissionOrderUIHandler
`public static MissionView CreateMissionOrderUIHandler(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission order u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionOrderUIHandler(null);
```

### CreateMissionOrderOfBattleUIHandler
`public static MissionView CreateMissionOrderOfBattleUIHandler(Mission mission, OrderOfBattleVM dataSource)`

**用途 / Purpose:** 构建一个新的 mission order of battle u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionOrderOfBattleUIHandler(mission, dataSource);
```

### CreateMissionSpectatorControlView
`public static MissionView CreateMissionSpectatorControlView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission spectator control view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionSpectatorControlView(null);
```

### CreateMissionBattleScoreUIHandler
`public static MissionView CreateMissionBattleScoreUIHandler(Mission mission, ScoreboardBaseVM dataSource)`

**用途 / Purpose:** 构建一个新的 mission battle score u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionBattleScoreUIHandler(mission, dataSource);
```

### CreateMissionBoundaryCrossingView
`public static MissionView CreateMissionBoundaryCrossingView()`

**用途 / Purpose:** 构建一个新的 mission boundary crossing view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionBoundaryCrossingView();
```

### CreateMissionLeaveView
`public static MissionView CreateMissionLeaveView()`

**用途 / Purpose:** 构建一个新的 mission leave view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionLeaveView();
```

### CreatePhotoModeView
`public static MissionView CreatePhotoModeView()`

**用途 / Purpose:** 构建一个新的 photo mode view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreatePhotoModeView();
```

### CreateMissionSingleplayerEscapeMenu
`public static MissionView CreateMissionSingleplayerEscapeMenu(bool isIronmanMode)`

**用途 / Purpose:** 构建一个新的 mission singleplayer escape menu 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionSingleplayerEscapeMenu(false);
```

### CreateOrderTroopPlacerView
`public static MissionView CreateOrderTroopPlacerView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 order troop placer view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateOrderTroopPlacerView(null);
```

### CreateMissionFormationMarkerUIHandler
`public static MissionView CreateMissionFormationMarkerUIHandler(Mission mission = null, bool areDistancesRelevant = true)`

**用途 / Purpose:** 构建一个新的 mission formation marker u i handler 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionFormationMarkerUIHandler(null, false);
```

### CreateMissionHintView
`public static MissionView CreateMissionHintView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission hint view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionHintView(null);
```

### CreateMissionObjectiveView
`public static MissionView CreateMissionObjectiveView(Mission mission = null)`

**用途 / Purpose:** 构建一个新的 mission objective view 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ViewCreator.CreateMissionObjectiveView(null);
```

## 使用示例

```csharp
ViewCreator.CreateCreditsScreen();
```

## 参见

- [本区域目录](../)