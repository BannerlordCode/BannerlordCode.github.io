---
title: "TournamentMissionStarter"
description: "TournamentMissionStarter 的自动生成类参考。"
---
# TournamentMissionStarter

**Namespace:** SandBox.Tournaments
**Module:** SandBox.Tournaments
**Type:** `public static class TournamentMissionStarter`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments/TournamentMissionStarter.cs`

## 概述

`TournamentMissionStarter` 位于 `SandBox.Tournaments`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Tournaments` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTournamentArcheryMission
`public static Mission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** **用途 / Purpose:** 打开tournament archery mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentFightMission
`public static Mission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** **用途 / Purpose:** 打开tournament fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionStarter.OpenTournamentFightMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentHorseRaceMission
`public static Mission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** **用途 / Purpose:** 打开tournament horse race mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionStarter.OpenTournamentHorseRaceMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentJoustingMission
`public static Mission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** **用途 / Purpose:** 打开tournament jousting mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionStarter.OpenTournamentJoustingMission("example", tournamentGame, settlement, culture, false);
```

### OpenBattleChallengeMission
`public static Mission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**用途 / Purpose:** **用途 / Purpose:** 打开battle challenge mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
TournamentMissionStarter.OpenBattleChallengeMission("example", priorityCharsAttacker, priorityCharsDefender);
```

## 使用示例

```csharp
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## 参见

- [本区域目录](../)