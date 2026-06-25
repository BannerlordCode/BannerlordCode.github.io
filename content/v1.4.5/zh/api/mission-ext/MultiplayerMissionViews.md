---
title: "MultiplayerMissionViews"
description: "MultiplayerMissionViews 的自动生成类参考。"
---
# MultiplayerMissionViews

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionViews`
**Base:** 无
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerMissionViews.cs`

## 概述

`MultiplayerMissionViews` 位于 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTeamDeathmatchMission
`public static MissionView OpenTeamDeathmatchMission(Mission mission)`

**用途 / Purpose:** **用途 / Purpose:** 打开team deathmatch mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissionViews.OpenTeamDeathmatchMission(mission);
```

### OpenDuelMission
`public static MissionView OpenDuelMission(Mission mission)`

**用途 / Purpose:** **用途 / Purpose:** 打开duel mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissionViews.OpenDuelMission(mission);
```

### OpenSiegeMission
`public static MissionView OpenSiegeMission(Mission mission)`

**用途 / Purpose:** **用途 / Purpose:** 打开siege mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissionViews.OpenSiegeMission(mission);
```

### OpenBattle
`public static MissionView OpenBattle(Mission mission)`

**用途 / Purpose:** **用途 / Purpose:** 打开battle对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissionViews.OpenBattle(mission);
```

### OpenCaptain
`public static MissionView OpenCaptain(Mission mission)`

**用途 / Purpose:** **用途 / Purpose:** 打开captain对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissionViews.OpenCaptain(mission);
```

### OpenSkirmish
`public static MissionView OpenSkirmish(Mission mission)`

**用途 / Purpose:** **用途 / Purpose:** 打开skirmish对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerMissionViews.OpenSkirmish(mission);
```

## 使用示例

```csharp
MultiplayerMissionViews.OpenTeamDeathmatchMission(mission);
```

## 参见

- [本区域目录](../)