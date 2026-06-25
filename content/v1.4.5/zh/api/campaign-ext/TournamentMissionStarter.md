---
title: "TournamentMissionStarter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentMissionStarter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMissionStarter

**命名空间:** SandBox.Tournaments
**模块:** SandBox.Tournaments
**类型:** `public static class TournamentMissionStarter`
**领域:** campaign-ext

## 概述

`TournamentMissionStarter` 位于 `SandBox.Tournaments`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
TournamentMissionStarter.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
