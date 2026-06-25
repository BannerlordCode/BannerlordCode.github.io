---
title: "CampaignUIHelper"
description: "CampaignUIHelper 的自动生成类参考。"
---
# CampaignUIHelper

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignUIHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignUIHelper.cs`

## 概述

`CampaignUIHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CampaignUIHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Compare
`public int Compare(CharacterAttribute x, CharacterAttribute y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 CampaignUIHelper 实例
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Compare(x, y);
```

### Compare
`public int Compare(SkillObject x, SkillObject y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 CampaignUIHelper 实例
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Compare(x, y);
```

### Compare
`public int Compare(MobileParty x, MobileParty y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 CampaignUIHelper 实例
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Compare(x, y);
```

### Equals
`public bool Equals((ItemCategory, int) x, (ItemCategory, int) y)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 CampaignUIHelper 实例
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Equals((ItemCategory, 0, (ItemCategory, 0);
```

### GetHashCode
`public int GetHashCode((ItemCategory, int) obj)`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 CampaignUIHelper 实例
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.GetHashCode((ItemCategory, 0);
```

### GetTooltipForAccumulatingProperty
`public static List<TooltipProperty> GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tooltip for accumulating property 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTooltipForAccumulatingProperty("example", 0, explainedNumber);
```

### GetTooltipForAccumulatingPropertyWithResult
`public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tooltip for accumulating property with result 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTooltipForAccumulatingPropertyWithResult("example", 0, explainedNumber);
```

### GetTooltipForgProperty
`public static List<TooltipProperty> GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tooltip forg property 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTooltipForgProperty("example", 0, explainedNumber);
```

### GetTownWallsTooltip
`public static string GetTownWallsTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town walls tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownWallsTooltip(town);
```

### GetVillageMilitiaTooltip
`public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 village militia tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetVillageMilitiaTooltip(village);
```

### GetTownMilitiaTooltip
`public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town militia tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownMilitiaTooltip(town);
```

### GetTownFoodTooltip
`public static List<TooltipProperty> GetTownFoodTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town food tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownFoodTooltip(town);
```

### GetTownLoyaltyTooltip
`public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town loyalty tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownLoyaltyTooltip(town);
```

### GetTownProsperityTooltip
`public static List<TooltipProperty> GetTownProsperityTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town prosperity tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownProsperityTooltip(town);
```

### GetTownDailyProductionTooltip
`public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town daily production tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownDailyProductionTooltip(town);
```

### GetTownSecurityTooltip
`public static List<TooltipProperty> GetTownSecurityTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town security tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownSecurityTooltip(town);
```

### GetTownPatrolTooltip
`public static string GetTownPatrolTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town patrol tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownPatrolTooltip(town);
```

### GetVillageProsperityTooltip
`public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 village prosperity tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetVillageProsperityTooltip(village);
```

### GetTownGarrisonTooltip
`public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 town garrison tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTownGarrisonTooltip(town);
```

### GetPartyTroopSizeLimitTooltip
`public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party troop size limit tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyTroopSizeLimitTooltip(party);
```

### GetPartyPrisonerSizeLimitTooltip
`public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party prisoner size limit tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyPrisonerSizeLimitTooltip(party);
```

### GetUsedHorsesTooltip
`public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>> usedUpgradeHorsesHistory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 used horses tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetUsedHorsesTooltip(list<Tuple<EquipmentElement, 0);
```

### GetArmyCohesionTooltip
`public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 army cohesion tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetArmyCohesionTooltip(army);
```

### GetArmyManCountTooltip
`public static List<TooltipProperty> GetArmyManCountTooltip(Army army)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 army man count tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetArmyManCountTooltip(army);
```

### GetDaysUntilNoFood
`public static string GetDaysUntilNoFood(float totalFood, float foodChange)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 days until no food 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetDaysUntilNoFood(0, 0);
```

### GetSettlementPropertyTooltip
`public static List<TooltipProperty> GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement property tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSettlementPropertyTooltip(settlement, "example", 0, explainedNumber);
```

### GetSettlementPropertyTooltipWithResult
`public static List<TooltipProperty> GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement property tooltip with result 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSettlementPropertyTooltipWithResult(settlement, "example", 0, explainedNumber);
```

### GetArmyFoodTooltip
`public static List<TooltipProperty> GetArmyFoodTooltip(Army army)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 army food tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetArmyFoodTooltip(army);
```

### GetClanWealthStatusText
`public static string GetClanWealthStatusText(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan wealth status text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetClanWealthStatusText(clan);
```

### GetClanProsperityTooltip
`public static List<TooltipProperty> GetClanProsperityTooltip(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan prosperity tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetClanProsperityTooltip(clan);
```

### GetTruceOwnedSettlementsTooltip
`public static List<TooltipProperty> GetTruceOwnedSettlementsTooltip(List<Settlement> settlements, TextObject factionName, bool isTown)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 truce owned settlements tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTruceOwnedSettlementsTooltip(settlements, factionName, false);
```

### GetWarPrisonersTooltip
`public static List<TooltipProperty> GetWarPrisonersTooltip(List<Hero> capturedPrisoners, TextObject factionName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 war prisoners tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetWarPrisonersTooltip(capturedPrisoners, factionName);
```

### GetNormalizedWarProgressTooltip
`public static List<TooltipProperty> GetNormalizedWarProgressTooltip(ExplainedNumber warProgress, ExplainedNumber otherFactionWarProgress, float maxValue, TextObject faction1Name, TextObject faction2Name)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 normalized war progress tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetNormalizedWarProgressTooltip(warProgress, otherFactionWarProgress, 0, faction1Name, faction2Name);
```

### GetClanStrengthTooltip
`public static List<TooltipProperty> GetClanStrengthTooltip(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan strength tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetClanStrengthTooltip(clan);
```

### GetCrimeTooltip
`public static List<TooltipProperty> GetCrimeTooltip(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crime tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCrimeTooltip(settlement);
```

### GetInfluenceTooltip
`public static List<TooltipProperty> GetInfluenceTooltip(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetInfluenceTooltip(clan);
```

### GetClanRenownTooltip
`public static List<TooltipProperty> GetClanRenownTooltip(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan renown tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetClanRenownTooltip(clan);
```

### GetDenarTooltip
`public static TooltipTriggerVM GetDenarTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 denar tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetDenarTooltip();
```

### GetPartyMoraleTooltip
`public static List<TooltipProperty> GetPartyMoraleTooltip(MobileParty mainParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party morale tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyMoraleTooltip(mainParty);
```

### GetPartyHealthTooltip
`public static List<TooltipProperty> GetPartyHealthTooltip(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party health tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyHealthTooltip(party);
```

### GetPlayerHitpointsTooltip
`public static List<TooltipProperty> GetPlayerHitpointsTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player hitpoints tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPlayerHitpointsTooltip();
```

### GetPartyFoodTooltip
`public static List<TooltipProperty> GetPartyFoodTooltip(MobileParty mainParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party food tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyFoodTooltip(mainParty);
```

### GetPartySpeedTooltip
`public static List<TooltipProperty> GetPartySpeedTooltip(bool considerArmySpeed)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party speed tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartySpeedTooltip(false);
```

### GetPartyWageTooltip
`public static List<TooltipProperty> GetPartyWageTooltip(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party wage tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyWageTooltip(mobileParty);
```

### GetViewDistanceTooltip
`public static List<TooltipProperty> GetViewDistanceTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 view distance tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetViewDistanceTooltip();
```

### GetMainPartyHealthTooltip
`public static List<TooltipProperty> GetMainPartyHealthTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 main party health tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetMainPartyHealthTooltip();
```

### GetPartyInventoryCapacityTooltip
`public static List<TooltipProperty> GetPartyInventoryCapacityTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party inventory capacity tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyInventoryCapacityTooltip(party, false, false);
```

### GetPartyInventoryWeightTooltip
`public static List<TooltipProperty> GetPartyInventoryWeightTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party inventory weight tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyInventoryWeightTooltip(party, false, false);
```

### GetPerkEffectText
`public static List<TooltipProperty> GetPerkEffectText(PerkObject perk, bool isActive)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 perk effect text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPerkEffectText(perk, false);
```

### GetPerkRoleText
`public static TextObject GetPerkRoleText(PerkObject perk, bool getSecondary)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 perk role text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPerkRoleText(perk, false);
```

### GetCombinedPerkRoleText
`public static TextObject GetCombinedPerkRoleText(PerkObject perk)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 combined perk role text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCombinedPerkRoleText(perk);
```

### GetSiegeMachineTooltip
`public static List<TooltipProperty> GetSiegeMachineTooltip(SiegeEngineType engineType, bool showDescription = true, int hoursUntilCompletion = 0)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege machine tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSiegeMachineTooltip(engineType, false, 0);
```

### GetSiegeMachineName
`public static string GetSiegeMachineName(SiegeEngineType engineType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege machine name 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSiegeMachineName(engineType);
```

### GetSiegeMachineNameWithDesctiption
`public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege machine name with desctiption 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSiegeMachineNameWithDesctiption(engineType);
```

### GetTroopConformityTooltip
`public static List<TooltipProperty> GetTroopConformityTooltip(TroopRosterElement troop)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop conformity tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTroopConformityTooltip(troop);
```

### GetLearningRateTooltip
`public static List<TooltipProperty> GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 learning rate tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetLearningRateTooltip(characterAttributes, 0, 0, skill);
```

### GetTroopXPTooltip
`public static List<TooltipProperty> GetTroopXPTooltip(TroopRosterElement troop)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop x p tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTroopXPTooltip(troop);
```

### GetLearningLimitTooltip
`public static List<TooltipProperty> GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 learning limit tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetLearningLimitTooltip(characterAttributes, 0, skill);
```

### GetSettlementConsumptionTooltip
`public static List<TooltipProperty> GetSettlementConsumptionTooltip(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement consumption tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSettlementConsumptionTooltip(settlement);
```

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(CharacterObject character, bool isBig = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 character tier data 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCharacterTierData(character, false);
```

### GetSettlementProductionTooltip
`public static List<TooltipProperty> GetSettlementProductionTooltip(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 settlement production tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSettlementProductionTooltip(settlement);
```

### GetHintTextFromReasons
`public static string GetHintTextFromReasons(List<TextObject> reasons)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hint text from reasons 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHintTextFromReasons(reasons);
```

### MergeTextObjectsWithNewline
`public static string MergeTextObjectsWithNewline(List<TextObject> textObjects)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MergeTextObjectsWithNewline 对应的操作。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.MergeTextObjectsWithNewline(textObjects);
```

### GetHoursAndDaysTextFromHourValue
`public static TextObject GetHoursAndDaysTextFromHourValue(int hours)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hours and days text from hour value 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHoursAndDaysTextFromHourValue(0);
```

### GetTeleportationDelayText
`public static TextObject GetTeleportationDelayText(Hero hero, PartyBase target)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 teleportation delay text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTeleportationDelayText(hero, target);
```

### GetTimeOfDayAndResetCameraTooltip
`public static List<TooltipProperty> GetTimeOfDayAndResetCameraTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 time of day and reset camera tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTimeOfDayAndResetCameraTooltip();
```

### GetTournamentChampionRewardsTooltip
`public static List<TooltipProperty> GetTournamentChampionRewardsTooltip(Hero hero, Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tournament champion rewards tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTournamentChampionRewardsTooltip(hero, town);
```

### GetCharacterTypeData
`public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character, bool isBig = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 character type data 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCharacterTypeData(character, false);
```

### GetHeroHealthTooltip
`public static List<TooltipProperty> GetHeroHealthTooltip(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero health tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroHealthTooltip(hero);
```

### GetSiegeWallTooltip
`public static List<TooltipProperty> GetSiegeWallTooltip(int wallLevel, int wallHitpoints)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege wall tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSiegeWallTooltip(0, 0);
```

### GetGovernorPerksTooltipForHero
`public static List<TooltipProperty> GetGovernorPerksTooltipForHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 governor perks tooltip for hero 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetGovernorPerksTooltipForHero(hero);
```

### GetHeroGovernorEffectsTooltip
`public static List<TooltipProperty> GetHeroGovernorEffectsTooltip(Hero hero, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero governor effects tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroGovernorEffectsTooltip(hero, settlement);
```

### GetEncounterPartyMoraleTooltip
`public static List<TooltipProperty> GetEncounterPartyMoraleTooltip(List<MobileParty> parties)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 encounter party morale tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetEncounterPartyMoraleTooltip(parties);
```

### GetCraftingTemplatePieceUnlockProgressHint
`public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting template piece unlock progress hint 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCraftingTemplatePieceUnlockProgressHint(0);
```

### GetItemFlagDetails
`public static List<Tuple<string, TextObject>> GetItemFlagDetails(ItemFlags itemFlags)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item flag details 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetItemFlagDetails(itemFlags);
```

### GetFormattedItemPropertyText
`public static string GetFormattedItemPropertyText(float propertyValue, bool typeRequiresInteger)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 formatted item property text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetFormattedItemPropertyText(0, false);
```

### GetCraftingHeroTooltip
`public static List<TooltipProperty> GetCraftingHeroTooltip(Hero hero, CraftingOrder order)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting hero tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCraftingHeroTooltip(hero, order);
```

### GetOrderCannotBeCompletedReasonTooltip
`public static List<TooltipProperty> GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order, ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order cannot be completed reason tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetOrderCannotBeCompletedReasonTooltip(order, item);
```

### GetCraftingOrderDisabledReasonTooltip
`public static List<TooltipProperty> GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck, CraftingOrder order)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting order disabled reason tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCraftingOrderDisabledReasonTooltip(heroToCheck, order);
```

### GetOrdersDisabledReasonTooltip
`public static List<TooltipProperty> GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM> craftingOrders, Hero heroToCheck)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 orders disabled reason tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetOrdersDisabledReasonTooltip(craftingOrders, heroToCheck);
```

### GetCraftingOrderMissingPropertyWarningText
`public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order, ItemObject craftedItem)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting order missing property warning text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCraftingOrderMissingPropertyWarningText(order, craftedItem);
```

### GetInventoryCharacterTooltip
`public static List<TooltipProperty> GetInventoryCharacterTooltip(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 inventory character tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetInventoryCharacterTooltip(hero);
```

### GetHeroOccupationName
`public static string GetHeroOccupationName(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero occupation name 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroOccupationName(hero);
```

### GetCommaSeparatedText
`public static TextObject GetCommaSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 comma separated text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCommaSeparatedText(label, texts);
```

### GetCommaNewlineSeparatedText
`public static TextObject GetCommaNewlineSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 comma newline separated text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCommaNewlineSeparatedText(label, texts);
```

### GetHeroKingdomRank
`public static string GetHeroKingdomRank(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero kingdom rank 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroKingdomRank(hero);
```

### GetHeroRank
`public static string GetHeroRank(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero rank 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroRank(hero);
```

### GetSmithingDifficultyTooltip
`public static List<TooltipProperty> GetSmithingDifficultyTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 smithing difficulty tooltip 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSmithingDifficultyTooltip();
```

### IsSettlementInformationHidden
`public static bool IsSettlementInformationHidden(Settlement settlement, out TextObject disableReason)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 settlement information hidden 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.IsSettlementInformationHidden(settlement, disableReason);
```

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 hero information hidden 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.IsHeroInformationHidden(hero, disableReason);
```

### GetPartyNameplateText
`public static string GetPartyNameplateText(MobileParty party, bool includeAttachedParties)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party nameplate text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyNameplateText(party, false);
```

### GetPartyNameplateText
`public static string GetPartyNameplateText(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party nameplate text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyNameplateText(party);
```

### GetValueChangeText
`public static string GetValueChangeText(float originalValue, float valueChange, string valueFormat = "F0")`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value change text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetValueChangeText(0, 0, "example");
```

### GetUpgradeHint
`public static string GetUpgradeHint(int index, int numOfItems, int availableUpgrades, int upgradeCoinCost, bool hasRequiredPerk, PerkObject requiredPerk, CharacterObject character, TroopRosterElement troop, int partyGoldChangeAmount, bool areUpgradesDisabled)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 upgrade hint 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetUpgradeHint(0, 0, 0, 0, false, requiredPerk, character, troop, 0, false);
```

### GetStackModifierString
`public static string GetStackModifierString(TextObject allStackText, TextObject fiveStackText, bool canFiveStack)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 stack modifier string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetStackModifierString(allStackText, fiveStackText, false);
```

### ConvertToHexColor
`public static string ConvertToHexColor(uint color)`

**用途 / Purpose:** **用途 / Purpose:** 把to hex color转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.ConvertToHexColor(0);
```

### GetMapScreenActionIsEnabledWithReason
`public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 map screen action is enabled with reason 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(disabledReason);
```

### GetCanManageCurrentArmyWithReason
`public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 can manage current army with reason 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCanManageCurrentArmyWithReason(disabledReason);
```

### GetClanSupportDisableReasonString
`public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isMainClanMercenary)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan support disable reason string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetClanSupportDisableReasonString(false, false, false);
```

### GetClanExpelDisableReasonString
`public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isTargetRulingClan, bool isMainClanMercenary)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan expel disable reason string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetClanExpelDisableReasonString(false, false, false, false);
```

### GetArmyDisbandDisableReasonString
`public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence, bool isArmyInAnyEvent, bool isPlayerClanMercenary, bool isPlayerInThisArmy)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 army disband disable reason string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetArmyDisbandDisableReasonString(false, false, false, false);
```

### GetCreateNewPartyReasonString
`public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots, bool haveAvailableHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 create new party reason string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCreateNewPartyReasonString(false, false);
```

### GetCraftingDisableReasonString
`public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 crafting disable reason string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCraftingDisableReasonString(false);
```

### GetAddFocusHintString
`public static string GetAddFocusHintString(bool playerHasEnoughPoints, bool isMaxedSkill, int currentFocusAmount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 add focus hint string 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetAddFocusHintString(false, false, 0);
```

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill effect text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSkillEffectText(effect, 0);
```

### GetMobilePartyBehaviorText
`public static string GetMobilePartyBehaviorText(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mobile party behavior text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetMobilePartyBehaviorText(party);
```

### GetHeroBehaviorText
`public static string GetHeroBehaviorText(Hero hero, ITeleportationCampaignBehavior teleportationBehavior = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero behavior text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroBehaviorText(hero, null);
```

### GetPartyLocationText
`public static string GetPartyLocationText(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party location text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyLocationText(mobileParty);
```

### GetTeleportingLeaderHero
`public static Hero GetTeleportingLeaderHero(MobileParty party, ITeleportationCampaignBehavior teleportationBehavior)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 teleporting leader hero 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTeleportingLeaderHero(party, teleportationBehavior);
```

### GetTeleportingGovernor
`public static Hero GetTeleportingGovernor(Settlement settlement, ITeleportationCampaignBehavior teleportationBehavior)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 teleporting governor 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTeleportingGovernor(settlement, teleportationBehavior);
```

### GetHeroRelationToHeroText
`public static TextObject GetHeroRelationToHeroText(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero relation to hero text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroRelationToHeroText(queriedHero, baseHero, false);
```

### GetAbbreviatedValueTextFromValue
`public static string GetAbbreviatedValueTextFromValue(int valueAmount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 abbreviated value text from value 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetAbbreviatedValueTextFromValue(0);
```

### GetPartyDistanceByTimeText
`public static string GetPartyDistanceByTimeText(float distance, float speed)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party distance by time text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyDistanceByTimeText(0, 0);
```

### GetPartyDistanceByTimeTextAbbreviated
`public static string GetPartyDistanceByTimeTextAbbreviated(float distance, float speed)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party distance by time text abbreviated 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetPartyDistanceByTimeTextAbbreviated(0, 0);
```

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 character code 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetCharacterCode(character, false);
```

### GetTraitNameText
`public static string GetTraitNameText(TraitObject traitObject, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trait name text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTraitNameText(traitObject, hero);
```

### GetTraitTooltipText
`public static string GetTraitTooltipText(TraitObject traitObject, int traitValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trait tooltip text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTraitTooltipText(traitObject, 0);
```

### GetTextForRole
`public static string GetTextForRole(PartyRole role)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 text for role 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTextForRole(role);
```

### GetAttributeTypeSortIndex
`public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attribute type sort index 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetAttributeTypeSortIndex(attribute);
```

### GetSkillObjectTypeSortIndex
`public static int GetSkillObjectTypeSortIndex(SkillObject skill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill object type sort index 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSkillObjectTypeSortIndex(skill);
```

### GetSkillMeshId
`public static string GetSkillMeshId(SkillObject skill, bool useSmallestVariation = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill mesh id 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetSkillMeshId(skill, false);
```

### GetIsNavalSkill
`public static bool GetIsNavalSkill(SkillObject skill)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is naval skill 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetIsNavalSkill(skill);
```

### GetHeroCompareSortIndex
`public static int GetHeroCompareSortIndex(Hero x, Hero y)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero compare sort index 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroCompareSortIndex(x, y);
```

### GetHeroClanRoleText
`public static string GetHeroClanRoleText(Hero hero, Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero clan role text 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroClanRoleText(hero, clan);
```

### GetItemObjectTypeSortIndex
`public static int GetItemObjectTypeSortIndex(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item object type sort index 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetItemObjectTypeSortIndex(item);
```

### GetItemLockStringID
`public static string GetItemLockStringID(EquipmentElement equipmentElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item lock string i d 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetItemLockStringID(equipmentElement);
```

### GetTroopLockStringID
`public static string GetTroopLockStringID(TroopRosterElement rosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop lock string i d 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetTroopLockStringID(rosterElement);
```

### GetQuestExplanationOfHero
`public static string GetQuestExplanationOfHero(IssueQuestFlags questType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 quest explanation of hero 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetQuestExplanationOfHero(questType);
```

### GetQuestsRelatedToHero
`public static List<QuestBase> GetQuestsRelatedToHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 quests related to hero 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetQuestsRelatedToHero(hero);
```

### GetQuestsRelatedToParty
`public static List<QuestBase> GetQuestsRelatedToParty(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 quests related to party 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetQuestsRelatedToParty(party);
```

### IsQuestRelatedToSettlement
`public static bool IsQuestRelatedToSettlement(QuestBase quest, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 quest related to settlement 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.IsQuestRelatedToSettlement(quest, settlement);
```

### GetIssueType
`public static IssueQuestFlags GetIssueType(IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 issue type 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetIssueType(issue);
```

### GetQuestType
`public static IssueQuestFlags GetQuestType(QuestBase quest, Hero queriedQuestGiver)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 quest type 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetQuestType(quest, queriedQuestGiver);
```

### GetHeroTraits
`public static IEnumerable<TraitObject> GetHeroTraits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hero traits 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetHeroTraits();
```

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 item usage applicable 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.IsItemUsageApplicable(weapon);
```

### FloatToString
`public static string FloatToString(float x)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FloatToString 对应的操作。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.FloatToString(0);
```

### IsStringApplicableForHeroName
`public static Tuple<bool, string> IsStringApplicableForHeroName(string name)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 string applicable for hero name 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.IsStringApplicableForHeroName("example");
```

### IsStringApplicableForItemName
`public static Tuple<bool, TextObject> IsStringApplicableForItemName(string name)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 string applicable for item name 状态或条件。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.IsStringApplicableForItemName("example");
```

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual party leader 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetVisualPartyLeader(party);
```

### GetChildrenAndGrandchildrenOfHero
`public static List<Hero> GetChildrenAndGrandchildrenOfHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 children and grandchildren of hero 的结果。

```csharp
// 静态调用，不需要实例
CampaignUIHelper.GetChildrenAndGrandchildrenOfHero(hero);
```

## 使用示例

```csharp
CampaignUIHelper.Initialize();
```

## 参见

- [本区域目录](../)