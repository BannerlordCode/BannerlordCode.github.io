<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TraitLevelingHelper`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TraitLevelingHelper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TraitLevelingHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`

## 概述

`TraitLevelingHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TraitLevelingHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### UpdateTraitXPAccordingToTraitLevels
`public static void UpdateTraitXPAccordingToTraitLevels()`

**用途 / Purpose:** 更新 `trait x p according to trait levels` 的状态或数据。

### OnBattleWon
`public static void OnBattleWon(MapEvent mapEvent, float contribution)`

**用途 / Purpose:** 当 `battle won` 事件触发时调用此方法。

### OnTroopsSacrificed
`public static void OnTroopsSacrificed()`

**用途 / Purpose:** 当 `troops sacrificed` 事件触发时调用此方法。

### OnLordExecuted
`public static void OnLordExecuted()`

**用途 / Purpose:** 当 `lord executed` 事件触发时调用此方法。

### OnVillageRaided
`public static void OnVillageRaided()`

**用途 / Purpose:** 当 `village raided` 事件触发时调用此方法。

### OnHostileAction
`public static void OnHostileAction(int amount)`

**用途 / Purpose:** 当 `hostile action` 事件触发时调用此方法。

### OnPartyTreatedWell
`public static void OnPartyTreatedWell()`

**用途 / Purpose:** 当 `party treated well` 事件触发时调用此方法。

### OnPartyStarved
`public static void OnPartyStarved()`

**用途 / Purpose:** 当 `party starved` 事件触发时调用此方法。

### OnIssueFailed
`public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 当 `issue failed` 事件触发时调用此方法。

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 当 `issue solved through quest` 事件触发时调用此方法。

### OnIssueSolvedThroughQuest
`public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)`

**用途 / Purpose:** 当 `issue solved through quest` 事件触发时调用此方法。

### OnIssueSolvedThroughAlternativeSolution
`public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 当 `issue solved through alternative solution` 事件触发时调用此方法。

### OnIssueSolvedThroughBetrayal
`public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int> effectedTraits)`

**用途 / Purpose:** 当 `issue solved through betrayal` 事件触发时调用此方法。

### OnLordFreed
`public static void OnLordFreed(Hero targetHero)`

**用途 / Purpose:** 当 `lord freed` 事件触发时调用此方法。

### OnPersuasionDefection
`public static void OnPersuasionDefection(Hero targetHero)`

**用途 / Purpose:** 当 `persuasion defection` 事件触发时调用此方法。

### OnSiegeAftermathApplied
`public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject effectedTraits)`

**用途 / Purpose:** 当 `siege aftermath applied` 事件触发时调用此方法。

### OnIncidentResolved
`public static void OnIncidentResolved(TraitObject trait, int xpValue)`

**用途 / Purpose:** 当 `incident resolved` 事件触发时调用此方法。

## 使用示例

```csharp
TraitLevelingHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)