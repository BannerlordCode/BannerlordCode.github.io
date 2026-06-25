---
title: "DefaultTournamentModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTournamentModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`

## 概述

`DefaultTournamentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTournamentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateTournament
`public override TournamentGame CreateTournament(Town town)`

**用途 / Purpose:** 创建一个 `tournament` 实例或对象。

### GetTournamentStartChance
`public override float GetTournamentStartChance(Town town)`

**用途 / Purpose:** 获取 `tournament start chance` 的当前值。

### GetNumLeaderboardVictoriesAtGameStart
`public override int GetNumLeaderboardVictoriesAtGameStart()`

**用途 / Purpose:** 获取 `num leaderboard victories at game start` 的当前值。

### GetTournamentEndChance
`public override float GetTournamentEndChance(TournamentGame tournament)`

**用途 / Purpose:** 获取 `tournament end chance` 的当前值。

### GetTournamentSimulationScore
`public override float GetTournamentSimulationScore(CharacterObject character)`

**用途 / Purpose:** 获取 `tournament simulation score` 的当前值。

### GetRenownReward
`public override int GetRenownReward(Hero winner, Town town)`

**用途 / Purpose:** 获取 `renown reward` 的当前值。

### GetInfluenceReward
`public override int GetInfluenceReward(Hero winner, Town town)`

**用途 / Purpose:** 获取 `influence reward` 的当前值。

### GetSkillXpGainFromTournament
`public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)`

**用途 / Purpose:** 获取 `skill xp gain from tournament` 的当前值。

### GetParticipantArmor
`public override Equipment GetParticipantArmor(CharacterObject participant)`

**用途 / Purpose:** 获取 `participant armor` 的当前值。

### GetRegularRewardItems
`public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**用途 / Purpose:** 获取 `regular reward items` 的当前值。

### GetEliteRewardItems
`public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`

**用途 / Purpose:** 获取 `elite reward items` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTournamentModel>(new MyDefaultTournamentModel());
```

## 参见

- [完整类目录](../catalog)