---
title: "SandBoxMission"
description: "SandBoxMission 的自动生成类参考。"
---
# SandBoxMission

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxMission`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/SandBoxMission.cs`

## 概述

`SandBoxMission` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTournamentArcheryMission
`public static IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament archery mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentFightMission
`public static IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament fight mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMission.OpenTournamentFightMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentHorseRaceMission
`public static IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament horse race mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMission.OpenTournamentHorseRaceMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentJoustingMission
`public static IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament jousting mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMission.OpenTournamentJoustingMission("example", tournamentGame, settlement, culture, false);
```

### OpenBattleChallengeMission
`public static IMission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**用途 / Purpose:** 打开battle challenge mission对应的资源或界面。

```csharp
// 静态调用，不需要实例
SandBoxMission.OpenBattleChallengeMission("example", priorityCharsAttacker, priorityCharsDefender);
```

## 使用示例

```csharp
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## 参见

- [本区域目录](../)