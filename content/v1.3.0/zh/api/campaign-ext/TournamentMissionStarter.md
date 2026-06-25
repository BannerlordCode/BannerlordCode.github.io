---
title: "TournamentMissionStarter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentMissionStarter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMissionStarter

**Namespace:** SandBox.Tournaments
**Module:** SandBox.Tournaments
**Type:** `public static class TournamentMissionStarter`
**Base:** 无
**File:** `SandBox/Tournaments/TournamentMissionStarter.cs`

## 概述

`TournamentMissionStarter` 位于 `SandBox.Tournaments`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Tournaments` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTournamentArcheryMission
`public static Mission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament archery mission` 相关逻辑。

### OpenTournamentFightMission
`public static Mission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament fight mission` 相关逻辑。

### OpenTournamentHorseRaceMission
`public static Mission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament horse race mission` 相关逻辑。

### OpenTournamentJoustingMission
`public static Mission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament jousting mission` 相关逻辑。

### OpenBattleChallengeMission
`public static Mission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**用途 / Purpose:** 处理 `open battle challenge mission` 相关逻辑。

## 使用示例

```csharp
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## 参见

- [完整类目录](../catalog)