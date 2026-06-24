<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IncidentEffect`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentEffect

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IncidentEffect`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Incidents/IncidentEffect.cs`

## 概述

`IncidentEffect` 位于 `TaleWorlds.CampaignSystem.Incidents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Incidents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Condition
`public bool Condition()`

**用途 / Purpose:** 处理 `condition` 相关逻辑。

### Consequence
`public List<TextObject> Consequence()`

**用途 / Purpose:** 处理 `consequence` 相关逻辑。

### GetHint
`public List<TextObject> GetHint()`

**用途 / Purpose:** 获取 `hint` 的当前值。

### WithChance
`public IncidentEffect WithChance(float chance)`

**用途 / Purpose:** 处理 `with chance` 相关逻辑。

### WithCustomInformation
`public IncidentEffect WithCustomInformation(Func<List<TextObject>> customInformation)`

**用途 / Purpose:** 处理 `with custom information` 相关逻辑。

### WithHint
`public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>> hint)`

**用途 / Purpose:** 处理 `with hint` 相关逻辑。

### GoldChange
`public static IncidentEffect GoldChange(Func<int> amountGetter)`

**用途 / Purpose:** 处理 `gold change` 相关逻辑。

### TraitChange
`public static IncidentEffect TraitChange(TraitObject trait, int amount)`

**用途 / Purpose:** 处理 `trait change` 相关逻辑。

### BuildingLevelChange
`public static IncidentEffect BuildingLevelChange(Func<Building> buildingGetter, Func<int> amountGetter)`

**用途 / Purpose:** 处理 `building level change` 相关逻辑。

### SiegeProgressChange
`public static IncidentEffect SiegeProgressChange(Func<float> amountGetter)`

**用途 / Purpose:** 处理 `siege progress change` 相关逻辑。

### WorkshopProfitabilityChange
`public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter, float percentage)`

**用途 / Purpose:** 处理 `workshop profitability change` 相关逻辑。

### SkillChange
`public static IncidentEffect SkillChange(SkillObject skill, float amount)`

**用途 / Purpose:** 处理 `skill change` 相关逻辑。

### MoraleChange
`public static IncidentEffect MoraleChange(float amount)`

**用途 / Purpose:** 处理 `morale change` 相关逻辑。

### HealthChance
`public static IncidentEffect HealthChance(int amount)`

**用途 / Purpose:** 处理 `health chance` 相关逻辑。

### RenownChange
`public static IncidentEffect RenownChange(float amount)`

**用途 / Purpose:** 处理 `renown change` 相关逻辑。

### CrimeRatingChange
`public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter, float amount)`

**用途 / Purpose:** 处理 `crime rating change` 相关逻辑。

### InfluenceChange
`public static IncidentEffect InfluenceChange(float amount)`

**用途 / Purpose:** 处理 `influence change` 相关逻辑。

### SettlementRelationChange
`public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter, int amount)`

**用途 / Purpose:** 设置 `tlement relation change` 的值或状态。

### TownBoundVillageRelationChange
`public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 处理 `town bound village relation change` 相关逻辑。

### TownBoundVillageHearthChange
`public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 处理 `town bound village hearth change` 相关逻辑。

### VillageHearthChange
`public static IncidentEffect VillageHearthChange(Func<Village> villageGetter, int amount)`

**用途 / Purpose:** 处理 `village hearth change` 相关逻辑。

### TownSecurityChange
`public static IncidentEffect TownSecurityChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 处理 `town security change` 相关逻辑。

### HeroRelationChange
`public static IncidentEffect HeroRelationChange(Func<Hero> heroGetter, int amount)`

**用途 / Purpose:** 处理 `hero relation change` 相关逻辑。

### TownProsperityChange
`public static IncidentEffect TownProsperityChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 处理 `town prosperity change` 相关逻辑。

### SettlementMilitiaChange
`public static IncidentEffect SettlementMilitiaChange(Func<Settlement> settlementGetter, int amount)`

**用途 / Purpose:** 设置 `tlement militia change` 的值或状态。

### InfestNearbyHideout
`public static IncidentEffect InfestNearbyHideout(Func<Settlement> settlementGetter)`

**用途 / Purpose:** 处理 `infest nearby hideout` 相关逻辑。

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(float percentage)`

**用途 / Purpose:** 处理 `wound troops randomly` 相关逻辑。

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter, bool specifyUnitTypeOnHint = true)`

**用途 / Purpose:** 处理 `wound troops randomly` 相关逻辑。

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage, float chanceOfDeathPerUnit)`

**用途 / Purpose:** 处理 `wound troops randomly with chance of death` 相关逻辑。

### BreachSiegeWall
`public static IncidentEffect BreachSiegeWall(int amount)`

**用途 / Purpose:** 处理 `breach siege wall` 相关逻辑。

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(int amount)`

**用途 / Purpose:** 处理 `wound troops randomly` 相关逻辑。

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount, float chanceOfDeathPerUnit)`

**用途 / Purpose:** 处理 `wound troops randomly with chance of death` 相关逻辑。

### WoundTroop
`public static IncidentEffect WoundTroop(Func<CharacterObject> characterGetter, int amount)`

**用途 / Purpose:** 处理 `wound troop` 相关逻辑。

### WoundTroopsRandomlyByChance
`public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit)`

**用途 / Purpose:** 处理 `wound troops randomly by chance` 相关逻辑。

### KillTroopsRandomlyOrderedByTier
`public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**用途 / Purpose:** 处理 `kill troops randomly ordered by tier` 相关逻辑。

### KillTroopsRandomly
`public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**用途 / Purpose:** 处理 `kill troops randomly` 相关逻辑。

### KillTroopsRandomlyByChance
`public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit)`

**用途 / Purpose:** 处理 `kill troops randomly by chance` 相关逻辑。

### KillTroop
`public static IncidentEffect KillTroop(Func<CharacterObject> characterGetter, int amount)`

**用途 / Purpose:** 处理 `kill troop` 相关逻辑。

### ChangeTroopAmount
`public static IncidentEffect ChangeTroopAmount(Func<CharacterObject> characterGetter, int amount)`

**用途 / Purpose:** 处理 `change troop amount` 相关逻辑。

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject, bool> upgradePredicate, int amount, Func<long> incidentSeedGetter)`

**用途 / Purpose:** 处理 `upgrade troop` 相关逻辑。

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject> upgradedCharacterGetter, int amount, Func<long> incidentSeedGetter)`

**用途 / Purpose:** 处理 `upgrade troop` 相关逻辑。

### RemovePrisonersRandomlyWithPredicate
`public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, int amount)`

**用途 / Purpose:** 从当前集合/状态中移除 `prisoners randomly with predicate`。

### ChangeItemsAmount
`public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>> itemsGetter, int amount)`

**用途 / Purpose:** 处理 `change items amount` 相关逻辑。

### ChangeItemAmount
`public static IncidentEffect ChangeItemAmount(Func<ItemObject> itemGetter, Func<int> amountGetter)`

**用途 / Purpose:** 处理 `change item amount` 相关逻辑。

### PartyExperienceChance
`public static IncidentEffect PartyExperienceChance(int amount)`

**用途 / Purpose:** 处理 `party experience chance` 相关逻辑。

### DisorganizeParty
`public static IncidentEffect DisorganizeParty()`

**用途 / Purpose:** 处理 `disorganize party` 相关逻辑。

### HealTroopsRandomly
`public static IncidentEffect HealTroopsRandomly(int amount)`

**用途 / Purpose:** 处理 `heal troops randomly` 相关逻辑。

### DemoteTroopsRandomlyWithPredicate
`public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, Func<CharacterObject, bool> demotionPredicate, int amount, bool specifyUnitTypeOnHint = true)`

**用途 / Purpose:** 处理 `demote troops randomly with predicate` 相关逻辑。

### Group
`public static IncidentEffect Group(params IncidentEffect effects)`

**用途 / Purpose:** 处理 `group` 相关逻辑。

### Select
`public static IncidentEffect Select(IncidentEffect effectOne, IncidentEffect effectTwo, float chanceOfFirstOne)`

**用途 / Purpose:** 处理 `select` 相关逻辑。

### Custom
`public static IncidentEffect Custom(Func<bool> condition, Func<List<TextObject>> consequence, Func<IncidentEffect, List<TextObject>> hint)`

**用途 / Purpose:** 处理 `custom` 相关逻辑。

## 使用示例

```csharp
var value = new IncidentEffect();
value.Condition();
```

## 参见

- [完整类目录](../catalog)