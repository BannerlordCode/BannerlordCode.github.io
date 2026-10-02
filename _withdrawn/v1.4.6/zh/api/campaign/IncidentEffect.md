---
title: "IncidentEffect"
description: "IncidentEffect：TaleWorlds.CampaignSystem.Incidents 的 public 类；公开成员 51 个（方法 51、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IncidentEffect

**Namespace:** `TaleWorlds.CampaignSystem.Incidents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class IncidentEffect`
**File:** `TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

IncidentEffect 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs。它是一个 public 类，继承链为 IncidentEffect。public/protected 成员共 51 个：51 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IncidentEffect 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Incidents`，继承链 IncidentEffect。成员构成以方法为主（方法 51/51，属性 0/51），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Condition` | `public bool Condition()` | 方法 |
| `List` | `public List<TextObject>Consequence()` | 方法 |
| `List` | `public List<TextObject>GetHint()` | 方法 |
| `WithChance` | `public IncidentEffect WithChance(float chance)` | 方法 |
| `WithCustomInformation` | `public IncidentEffect WithCustomInformation(Func<List<TextObject>>customInformation)` | 方法 |
| `WithHint` | `public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>>hint)` | 方法 |
| `GoldChange` | `public static IncidentEffect GoldChange(Func<int>amountGetter)` | 方法 |
| `TraitChange` | `public static IncidentEffect TraitChange(TraitObject trait, int amount)` | 方法 |
| `BuildingLevelChange` | `public static IncidentEffect BuildingLevelChange(Func<Building>buildingGetter, Func<int>amountGetter)` | 方法 |
| `SiegeProgressChange` | `public static IncidentEffect SiegeProgressChange(Func<float>amountGetter)` | 方法 |
| `WorkshopProfitabilityChange` | `public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop>workshopGetter, float percentage)` | 方法 |
| `SkillChange` | `public static IncidentEffect SkillChange(SkillObject skill, float amount)` | 方法 |
| `MoraleChange` | `public static IncidentEffect MoraleChange(float amount)` | 方法 |
| `HealthChance` | `public static IncidentEffect HealthChance(int amount)` | 方法 |
| `RenownChange` | `public static IncidentEffect RenownChange(float amount)` | 方法 |
| `CrimeRatingChange` | `public static IncidentEffect CrimeRatingChange(Func<IFaction>factionGetter, float amount)` | 方法 |
| `InfluenceChange` | `public static IncidentEffect InfluenceChange(float amount)` | 方法 |
| `SettlementRelationChange` | `public static IncidentEffect SettlementRelationChange(Func<Settlement>settlementGetter, int amount)` | 方法 |
| `TownBoundVillageRelationChange` | `public static IncidentEffect TownBoundVillageRelationChange(Func<Town>townGetter, int amount)` | 方法 |
| `TownBoundVillageHearthChange` | `public static IncidentEffect TownBoundVillageHearthChange(Func<Town>townGetter, int amount)` | 方法 |
| `VillageHearthChange` | `public static IncidentEffect VillageHearthChange(Func<Village>villageGetter, int amount)` | 方法 |
| `TownSecurityChange` | `public static IncidentEffect TownSecurityChange(Func<Town>townGetter, int amount)` | 方法 |
| `HeroRelationChange` | `public static IncidentEffect HeroRelationChange(Func<Hero>heroGetter, int amount)` | 方法 |
| `TownProsperityChange` | `public static IncidentEffect TownProsperityChange(Func<Town>townGetter, int amount)` | 方法 |
| `SettlementMilitiaChange` | `public static IncidentEffect SettlementMilitiaChange(Func<Settlement>settlementGetter, int amount)` | 方法 |
| `InfestNearbyHideout` | `public static IncidentEffect InfestNearbyHideout(Func<Settlement>settlementGetter)` | 方法 |
| `WoundTroopsRandomly` | `public static IncidentEffect WoundTroopsRandomly(float percentage)` | 方法 |
| `WoundTroopsRandomly` | `public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement, bool>predicate, Func<int>amountGetter, bool specifyUnitTypeOnHint = true)` | 方法 |
| `WoundTroopsRandomlyWithChanceOfDeath` | `public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage, float chanceOfDeathPerUnit)` | 方法 |
| `BreachSiegeWall` | `public static IncidentEffect BreachSiegeWall(int amount)` | 方法 |
| `WoundTroopsRandomly` | `public static IncidentEffect WoundTroopsRandomly(int amount)` | 方法 |
| `WoundTroopsRandomlyWithChanceOfDeath` | `public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount, float chanceOfDeathPerUnit)` | 方法 |
| `WoundTroop` | `public static IncidentEffect WoundTroop(Func<CharacterObject>characterGetter, int amount)` | 方法 |
| `WoundTroopsRandomlyByChance` | `public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit)` | 方法 |
| `KillTroopsRandomlyOrderedByTier` | `public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement, bool>predicate, Func<int>amountGetter)` | 方法 |
| `KillTroopsRandomly` | `public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement, bool>predicate, Func<int>amountGetter)` | 方法 |
| `KillTroopsRandomlyByChance` | `public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit)` | 方法 |
| `KillTroop` | `public static IncidentEffect KillTroop(Func<CharacterObject>characterGetter, int amount)` | 方法 |
| `ChangeTroopAmount` | `public static IncidentEffect ChangeTroopAmount(Func<CharacterObject>characterGetter, int amount)` | 方法 |
| `UpgradeTroop` | `public static IncidentEffect UpgradeTroop(Func<CharacterObject>characterGetter, Func<CharacterObject, bool>upgradePredicate, int amount, Func<long>incidentSeedGetter)` | 方法 |
| `UpgradeTroop` | `public static IncidentEffect UpgradeTroop(Func<CharacterObject>characterGetter, Func<CharacterObject>upgradedCharacterGetter, int amount, Func<long>incidentSeedGetter)` | 方法 |
| `RemovePrisonersRandomlyWithPredicate` | `public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement, bool>predicate, int amount)` | 方法 |
| `ChangeItemsAmount` | `public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>>itemsGetter, int amount)` | 方法 |
| `ChangeItemAmount` | `public static IncidentEffect ChangeItemAmount(Func<ItemObject>itemGetter, Func<int>amountGetter)` | 方法 |
| `PartyExperienceChance` | `public static IncidentEffect PartyExperienceChance(int amount)` | 方法 |
| `DisorganizeParty` | `public static IncidentEffect DisorganizeParty()` | 方法 |
| `HealTroopsRandomly` | `public static IncidentEffect HealTroopsRandomly(int amount)` | 方法 |
| `DemoteTroopsRandomlyWithPredicate` | `public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement, bool>predicate, Func<CharacterObject, bool>demotionPredicate, int amount, bool specifyUnitTypeOnHint = true)` | 方法 |
| `Group` | `public static IncidentEffect Group(params IncidentEffect[]effects)` | 方法 |
| `Select` | `public static IncidentEffect Select(IncidentEffect effectOne, IncidentEffect effectTwo, float chanceOfFirstOne)` | 方法 |
| `Custom` | `public static IncidentEffect Custom(Func<bool>condition, Func<List<TextObject>>consequence, Func<IncidentEffect, List<TextObject>>hint)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Incident](../Incident/)
