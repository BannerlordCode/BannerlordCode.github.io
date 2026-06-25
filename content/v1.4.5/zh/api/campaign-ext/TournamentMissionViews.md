---
title: "TournamentMissionViews"
description: "TournamentMissionViews 的自动生成类参考。"
---
# TournamentMissionViews

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class TournamentMissionViews`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.Tournaments/TournamentMissionViews.cs`

## 概述

`TournamentMissionViews` 位于 `SandBox.View.Missions.Tournaments`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Missions.Tournaments` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTournamentArcheryMission
`public static MissionView OpenTournamentArcheryMission(Mission mission)`

**用途 / Purpose:** 打开tournament archery mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionViews.OpenTournamentArcheryMission(mission);
```

### OpenTournamentFightMission
`public static MissionView OpenTournamentFightMission(Mission mission)`

**用途 / Purpose:** 打开tournament fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionViews.OpenTournamentFightMission(mission);
```

### OpenTournamentHorseRaceMission
`public static MissionView OpenTournamentHorseRaceMission(Mission mission)`

**用途 / Purpose:** 打开tournament horse race mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionViews.OpenTournamentHorseRaceMission(mission);
```

### OpenTournamentJoustingMission
`public static MissionView OpenTournamentJoustingMission(Mission mission)`

**用途 / Purpose:** 打开tournament jousting mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionViews.OpenTournamentJoustingMission(mission);
```

## 使用示例

```csharp
TournamentMissionViews.OpenTournamentArcheryMission(mission);
```

## 参见

- [本区域目录](../)