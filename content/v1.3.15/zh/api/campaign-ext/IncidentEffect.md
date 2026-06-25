---
title: "IncidentEffect"
description: "IncidentEffect 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 Condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 IncidentEffect 实例
IncidentEffect incidentEffect = ...;
var result = incidentEffect.Condition();
```

### Consequence
`public List<TextObject> Consequence()`

**用途 / Purpose:** 调用 Consequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 IncidentEffect 实例
IncidentEffect incidentEffect = ...;
var result = incidentEffect.Consequence();
```

### GetHint
`public List<TextObject> GetHint()`

**用途 / Purpose:** 读取并返回当前对象中 hint 的结果。

```csharp
// 先通过子系统 API 拿到 IncidentEffect 实例
IncidentEffect incidentEffect = ...;
var result = incidentEffect.GetHint();
```

### WithChance
`public IncidentEffect WithChance(float chance)`

**用途 / Purpose:** 调用 WithChance 对应的操作。

```csharp
// 先通过子系统 API 拿到 IncidentEffect 实例
IncidentEffect incidentEffect = ...;
var result = incidentEffect.WithChance(0);
```

### WithCustomInformation
`public IncidentEffect WithCustomInformation(Func<List<TextObject>> customInformation)`

**用途 / Purpose:** 调用 WithCustomInformation 对应的操作。

```csharp
// 先通过子系统 API 拿到 IncidentEffect 实例
IncidentEffect incidentEffect = ...;
var result = incidentEffect.WithCustomInformation(customInformation);
```

### WithHint
`public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>> hint)`

**用途 / Purpose:** 调用 WithHint 对应的操作。

```csharp
// 先通过子系统 API 拿到 IncidentEffect 实例
IncidentEffect incidentEffect = ...;
var result = incidentEffect.WithHint(func<IncidentEffect, hint);
```

### GoldChange
`public static IncidentEffect GoldChange(Func<int> amountGetter)`

**用途 / Purpose:** 调用 GoldChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.GoldChange(amountGetter);
```

### TraitChange
`public static IncidentEffect TraitChange(TraitObject trait, int amount)`

**用途 / Purpose:** 调用 TraitChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.TraitChange(trait, 0);
```

### BuildingLevelChange
`public static IncidentEffect BuildingLevelChange(Func<Building> buildingGetter, Func<int> amountGetter)`

**用途 / Purpose:** 组装并返回ing level change的构建结果。

```csharp
// 静态调用，不需要实例
IncidentEffect.BuildingLevelChange(buildingGetter, amountGetter);
```

### SiegeProgressChange
`public static IncidentEffect SiegeProgressChange(Func<float> amountGetter)`

**用途 / Purpose:** 调用 SiegeProgressChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.SiegeProgressChange(amountGetter);
```

### WorkshopProfitabilityChange
`public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter, float percentage)`

**用途 / Purpose:** 调用 WorkshopProfitabilityChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WorkshopProfitabilityChange(workshopGetter, 0);
```

### SkillChange
`public static IncidentEffect SkillChange(SkillObject skill, float amount)`

**用途 / Purpose:** 调用 SkillChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.SkillChange(skill, 0);
```

### MoraleChange
`public static IncidentEffect MoraleChange(float amount)`

**用途 / Purpose:** 调用 MoraleChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.MoraleChange(0);
```

### HealthChance
`public static IncidentEffect HealthChance(int amount)`

**用途 / Purpose:** 调用 HealthChance 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.HealthChance(0);
```

### RenownChange
`public static IncidentEffect RenownChange(float amount)`

**用途 / Purpose:** 调用 RenownChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.RenownChange(0);
```

### CrimeRatingChange
`public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter, float amount)`

**用途 / Purpose:** 调用 CrimeRatingChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.CrimeRatingChange(factionGetter, 0);
```

### InfluenceChange
`public static IncidentEffect InfluenceChange(float amount)`

**用途 / Purpose:** 调用 InfluenceChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.InfluenceChange(0);
```

### SettlementRelationChange
`public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter, int amount)`

**用途 / Purpose:** 为 tlement relation change 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
IncidentEffect.SettlementRelationChange(settlementGetter, 0);
```

### TownBoundVillageRelationChange
`public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 调用 TownBoundVillageRelationChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.TownBoundVillageRelationChange(townGetter, 0);
```

### TownBoundVillageHearthChange
`public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 调用 TownBoundVillageHearthChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.TownBoundVillageHearthChange(townGetter, 0);
```

### VillageHearthChange
`public static IncidentEffect VillageHearthChange(Func<Village> villageGetter, int amount)`

**用途 / Purpose:** 调用 VillageHearthChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.VillageHearthChange(villageGetter, 0);
```

### TownSecurityChange
`public static IncidentEffect TownSecurityChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 调用 TownSecurityChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.TownSecurityChange(townGetter, 0);
```

### HeroRelationChange
`public static IncidentEffect HeroRelationChange(Func<Hero> heroGetter, int amount)`

**用途 / Purpose:** 调用 HeroRelationChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.HeroRelationChange(heroGetter, 0);
```

### TownProsperityChange
`public static IncidentEffect TownProsperityChange(Func<Town> townGetter, int amount)`

**用途 / Purpose:** 调用 TownProsperityChange 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.TownProsperityChange(townGetter, 0);
```

### SettlementMilitiaChange
`public static IncidentEffect SettlementMilitiaChange(Func<Settlement> settlementGetter, int amount)`

**用途 / Purpose:** 为 tlement militia change 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
IncidentEffect.SettlementMilitiaChange(settlementGetter, 0);
```

### InfestNearbyHideout
`public static IncidentEffect InfestNearbyHideout(Func<Settlement> settlementGetter)`

**用途 / Purpose:** 调用 InfestNearbyHideout 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.InfestNearbyHideout(settlementGetter);
```

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(float percentage)`

**用途 / Purpose:** 调用 WoundTroopsRandomly 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroopsRandomly(0);
```

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter, bool specifyUnitTypeOnHint = true)`

**用途 / Purpose:** 调用 WoundTroopsRandomly 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroopsRandomly(func<TroopRosterElement, false, amountGetter, false);
```

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(float percentage, float chanceOfDeathPerUnit)`

**用途 / Purpose:** 调用 WoundTroopsRandomlyWithChanceOfDeath 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroopsRandomlyWithChanceOfDeath(0, 0);
```

### BreachSiegeWall
`public static IncidentEffect BreachSiegeWall(int amount)`

**用途 / Purpose:** 调用 BreachSiegeWall 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.BreachSiegeWall(0);
```

### WoundTroopsRandomly
`public static IncidentEffect WoundTroopsRandomly(int amount)`

**用途 / Purpose:** 调用 WoundTroopsRandomly 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroopsRandomly(0);
```

### WoundTroopsRandomlyWithChanceOfDeath
`public static IncidentEffect WoundTroopsRandomlyWithChanceOfDeath(int amount, float chanceOfDeathPerUnit)`

**用途 / Purpose:** 调用 WoundTroopsRandomlyWithChanceOfDeath 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroopsRandomlyWithChanceOfDeath(0, 0);
```

### WoundTroop
`public static IncidentEffect WoundTroop(Func<CharacterObject> characterGetter, int amount)`

**用途 / Purpose:** 调用 WoundTroop 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroop(characterGetter, 0);
```

### WoundTroopsRandomlyByChance
`public static IncidentEffect WoundTroopsRandomlyByChance(float chancePerUnit)`

**用途 / Purpose:** 调用 WoundTroopsRandomlyByChance 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.WoundTroopsRandomlyByChance(0);
```

### KillTroopsRandomlyOrderedByTier
`public static IncidentEffect KillTroopsRandomlyOrderedByTier(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**用途 / Purpose:** 调用 KillTroopsRandomlyOrderedByTier 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.KillTroopsRandomlyOrderedByTier(func<TroopRosterElement, false, amountGetter);
```

### KillTroopsRandomly
`public static IncidentEffect KillTroopsRandomly(Func<TroopRosterElement, bool> predicate, Func<int> amountGetter)`

**用途 / Purpose:** 调用 KillTroopsRandomly 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.KillTroopsRandomly(func<TroopRosterElement, false, amountGetter);
```

### KillTroopsRandomlyByChance
`public static IncidentEffect KillTroopsRandomlyByChance(float chancePerUnit)`

**用途 / Purpose:** 调用 KillTroopsRandomlyByChance 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.KillTroopsRandomlyByChance(0);
```

### KillTroop
`public static IncidentEffect KillTroop(Func<CharacterObject> characterGetter, int amount)`

**用途 / Purpose:** 调用 KillTroop 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.KillTroop(characterGetter, 0);
```

### ChangeTroopAmount
`public static IncidentEffect ChangeTroopAmount(Func<CharacterObject> characterGetter, int amount)`

**用途 / Purpose:** 调用 ChangeTroopAmount 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.ChangeTroopAmount(characterGetter, 0);
```

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject, bool> upgradePredicate, int amount, Func<long> incidentSeedGetter)`

**用途 / Purpose:** 调用 UpgradeTroop 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.UpgradeTroop(characterGetter, func<CharacterObject, false, 0, incidentSeedGetter);
```

### UpgradeTroop
`public static IncidentEffect UpgradeTroop(Func<CharacterObject> characterGetter, Func<CharacterObject> upgradedCharacterGetter, int amount, Func<long> incidentSeedGetter)`

**用途 / Purpose:** 调用 UpgradeTroop 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.UpgradeTroop(characterGetter, upgradedCharacterGetter, 0, incidentSeedGetter);
```

### RemovePrisonersRandomlyWithPredicate
`public static IncidentEffect RemovePrisonersRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, int amount)`

**用途 / Purpose:** 从当前容器或状态中移除 prisoners randomly with predicate。

```csharp
// 静态调用，不需要实例
IncidentEffect.RemovePrisonersRandomlyWithPredicate(func<TroopRosterElement, false, 0);
```

### ChangeItemsAmount
`public static IncidentEffect ChangeItemsAmount(Func<List<ItemObject>> itemsGetter, int amount)`

**用途 / Purpose:** 调用 ChangeItemsAmount 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.ChangeItemsAmount(itemsGetter, 0);
```

### ChangeItemAmount
`public static IncidentEffect ChangeItemAmount(Func<ItemObject> itemGetter, Func<int> amountGetter)`

**用途 / Purpose:** 调用 ChangeItemAmount 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.ChangeItemAmount(itemGetter, amountGetter);
```

### PartyExperienceChance
`public static IncidentEffect PartyExperienceChance(int amount)`

**用途 / Purpose:** 调用 PartyExperienceChance 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.PartyExperienceChance(0);
```

### DisorganizeParty
`public static IncidentEffect DisorganizeParty()`

**用途 / Purpose:** 调用 DisorganizeParty 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.DisorganizeParty();
```

### HealTroopsRandomly
`public static IncidentEffect HealTroopsRandomly(int amount)`

**用途 / Purpose:** 调用 HealTroopsRandomly 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.HealTroopsRandomly(0);
```

### DemoteTroopsRandomlyWithPredicate
`public static IncidentEffect DemoteTroopsRandomlyWithPredicate(Func<TroopRosterElement, bool> predicate, Func<CharacterObject, bool> demotionPredicate, int amount, bool specifyUnitTypeOnHint = true)`

**用途 / Purpose:** 调用 DemoteTroopsRandomlyWithPredicate 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.DemoteTroopsRandomlyWithPredicate(func<TroopRosterElement, false, func<CharacterObject, false, 0, false);
```

### Group
`public static IncidentEffect Group(params IncidentEffect effects)`

**用途 / Purpose:** 调用 Group 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.Group(effects);
```

### Select
`public static IncidentEffect Select(IncidentEffect effectOne, IncidentEffect effectTwo, float chanceOfFirstOne)`

**用途 / Purpose:** 调用 Select 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.Select(effectOne, effectTwo, 0);
```

### Custom
`public static IncidentEffect Custom(Func<bool> condition, Func<List<TextObject>> consequence, Func<IncidentEffect, List<TextObject>> hint)`

**用途 / Purpose:** 调用 Custom 对应的操作。

```csharp
// 静态调用，不需要实例
IncidentEffect.Custom(condition, consequence, func<IncidentEffect, hint);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
IncidentEffect incidentEffect = ...;
incidentEffect.Condition();
```

## 参见

- [本区域目录](../)