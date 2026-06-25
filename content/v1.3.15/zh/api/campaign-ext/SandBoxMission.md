---
title: "SandBoxMission"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxMission`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SandBoxMission

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class SandBoxMission`
**领域:** campaign-ext

## 概述

`SandBoxMission` 位于 `TaleWorlds.CampaignSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenTournamentArcheryMission
`public static IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament archery mission` 相关逻辑。

### OpenTournamentFightMission
`public static IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament fight mission` 相关逻辑。

### OpenTournamentHorseRaceMission
`public static IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament horse race mission` 相关逻辑。

### OpenTournamentJoustingMission
`public static IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament jousting mission` 相关逻辑。

### OpenBattleChallengeMission
`public static IMission OpenBattleChallengeMission(string scene, IList<Hero> priorityCharsAttacker, IList<Hero> priorityCharsDefender)`

**用途 / Purpose:** 处理 `open battle challenge mission` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
SandBoxMission.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
