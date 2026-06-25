---
title: "FactionHelper"
description: "FactionHelper 的自动生成类参考。"
---
# FactionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class FactionHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## 概述

`FactionHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `FactionHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FindPotentialStrength
`public static float FindPotentialStrength(IFaction faction)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「potential strength」。

```csharp
// 静态调用，不需要实例
FactionHelper.FindPotentialStrength(faction);
```

### GetEnemyKingdoms
`public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「enemy kingdoms」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetEnemyKingdoms(faction);
```

### GetStances
`public static IEnumerable<StanceLink> GetStances(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「stances」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetStances(faction);
```

### GetPowerRatioToEnemies
`public static float GetPowerRatioToEnemies(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「power ratio to enemies」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetPowerRatioToEnemies(kingdom);
```

### IsClanNameApplicable
`public static Tuple<bool, string> IsClanNameApplicable(string name)`

**用途 / Purpose:** 判断当前对象是否处于 「clan name applicable」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionHelper.IsClanNameApplicable("example");
```

### IsKingdomNameApplicable
`public static Tuple<bool, string> IsKingdomNameApplicable(string name)`

**用途 / Purpose:** 判断当前对象是否处于 「kingdom name applicable」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionHelper.IsKingdomNameApplicable("example");
```

### GetPowerRatioToTributePayedKingdoms
`public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「power ratio to tribute payed kingdoms」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetPowerRatioToTributePayedKingdoms(kingdom);
```

### CanClanBeGrantedFief
`public static bool CanClanBeGrantedFief(Clan clan)`

**用途 / Purpose:** 检查当前对象是否满足 「clan be granted fief」 的前置条件。

```csharp
// 静态调用，不需要实例
FactionHelper.CanClanBeGrantedFief(clan);
```

### CanPlayerEnterFaction
`public static bool CanPlayerEnterFaction(bool asVassal = false)`

**用途 / Purpose:** 检查当前对象是否满足 「player enter faction」 的前置条件。

```csharp
// 静态调用，不需要实例
FactionHelper.CanPlayerEnterFaction(false);
```

### GetTotalEnemyKingdomPower
`public static float GetTotalEnemyKingdomPower(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「total enemy kingdom power」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetTotalEnemyKingdomPower(kingdom);
```

### GetTotalTributePayedKingdomsPower
`public static float GetTotalTributePayedKingdomsPower(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「total tribute payed kingdoms power」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetTotalTributePayedKingdomsPower(kingdom);
```

### GetKingdomArmies
`public static IEnumerable<Army> GetKingdomArmies(IFaction mapFaction)`

**用途 / Purpose:** 读取并返回当前对象中 「kingdom armies」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetKingdomArmies(mapFaction);
```

### SettlementProsperityEffectOnGarrisonSizeConstant
`public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)`

**用途 / Purpose:** 为 「tlement prosperity effect on garrison size constant」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FactionHelper.SettlementProsperityEffectOnGarrisonSizeConstant(town);
```

### SettlementFoodPotentialEffectOnGarrisonSizeConstant
`public static float SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)`

**用途 / Purpose:** 为 「tlement food potential effect on garrison size constant」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FactionHelper.SettlementFoodPotentialEffectOnGarrisonSizeConstant(settlement);
```

### OwnerClanEconomyEffectOnGarrisonSizeConstant
`public static float OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
FactionHelper.OwnerClanEconomyEffectOnGarrisonSizeConstant(clan);
```

### FindIdealGarrisonStrengthPerWalledCenter
`public static float FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「ideal garrison strength per walled center」。

```csharp
// 静态调用，不需要实例
FactionHelper.FindIdealGarrisonStrengthPerWalledCenter(kingdom, null);
```

### FinishAllRelatedHostileActionsOfNobleToFaction
`public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)`

**用途 / Purpose:** 结束「all related hostile actions of noble to faction」流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
FactionHelper.FinishAllRelatedHostileActionsOfNobleToFaction(noble, faction);
```

### FinishAllRelatedHostileActionsOfFactionToFaction
`public static void FinishAllRelatedHostileActionsOfFactionToFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 结束「all related hostile actions of faction to faction」流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
FactionHelper.FinishAllRelatedHostileActionsOfFactionToFaction(faction1, faction2);
```

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Clan clan1, Clan clan2)`

**用途 / Purpose:** 结束「all related hostile actions」流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
FactionHelper.FinishAllRelatedHostileActions(clan1, clan2);
```

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** 结束「all related hostile actions」流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
FactionHelper.FinishAllRelatedHostileActions(kingdom1, kingdom2);
```

### AdjustFactionStancesForClanJoiningKingdom
`public static void AdjustFactionStancesForClanJoiningKingdom(Clan joiningClan, Kingdom kingdomToJoin)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
FactionHelper.AdjustFactionStancesForClanJoiningKingdom(joiningClan, kingdomToJoin);
```

### GetTermUsedByOtherFaction
`public static TextObject GetTermUsedByOtherFaction(IFaction faction, IFaction otherFaction, bool pejorative)`

**用途 / Purpose:** 读取并返回当前对象中 「term used by other faction」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetTermUsedByOtherFaction(faction, otherFaction, false);
```

### GetFormalNameForFactionCulture
`public static TextObject GetFormalNameForFactionCulture(CultureObject factionCulture)`

**用途 / Purpose:** 读取并返回当前对象中 「formal name for faction culture」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetFormalNameForFactionCulture(factionCulture);
```

### GetInformalNameForFactionCulture
`public static TextObject GetInformalNameForFactionCulture(CultureObject factionCulture)`

**用途 / Purpose:** 读取并返回当前对象中 「informal name for faction culture」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetInformalNameForFactionCulture(factionCulture);
```

### GetAdjectiveForFactionCulture
`public static TextObject GetAdjectiveForFactionCulture(CultureObject factionCulture)`

**用途 / Purpose:** 读取并返回当前对象中 「adjective for faction culture」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetAdjectiveForFactionCulture(factionCulture);
```

### GetAdjectiveForFaction
`public static TextObject GetAdjectiveForFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「adjective for faction」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetAdjectiveForFaction(faction);
```

### GenerateClanNameforPlayer
`public static TextObject GenerateClanNameforPlayer()`

**用途 / Purpose:** 生成「clan namefor player」的实例、数据或表示。

```csharp
// 静态调用，不需要实例
FactionHelper.GenerateClanNameforPlayer();
```

### GetDistanceToClosestNonAllyFortificationOfFaction
`public static float GetDistanceToClosestNonAllyFortificationOfFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「distance to closest non ally fortification of faction」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetDistanceToClosestNonAllyFortificationOfFaction(faction);
```

### GetMidSettlementOfFaction
`public static Settlement GetMidSettlementOfFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「mid settlement of faction」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetMidSettlementOfFaction(faction);
```

### GetPossibleKingdomsToDeclareWar
`public static List<IFaction> GetPossibleKingdomsToDeclareWar(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「possible kingdoms to declare war」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetPossibleKingdomsToDeclareWar(kingdom);
```

### GetPossibleKingdomsToDeclarePeace
`public static List<IFaction> GetPossibleKingdomsToDeclarePeace(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「possible kingdoms to declare peace」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetPossibleKingdomsToDeclarePeace(kingdom);
```

### GetAllyMinorFactions
`public static IEnumerable<Clan> GetAllyMinorFactions(CharacterObject otherCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 「ally minor factions」 的结果。

```csharp
// 静态调用，不需要实例
FactionHelper.GetAllyMinorFactions(otherCharacter);
```

### ChooseHeirClanForFiefs
`public static Clan ChooseHeirClanForFiefs(Clan oldClan)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
FactionHelper.ChooseHeirClanForFiefs(oldClan);
```

### CanPlayerOfferMercenaryService
`public static bool CanPlayerOfferMercenaryService(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**用途 / Purpose:** 检查当前对象是否满足 「player offer mercenary service」 的前置条件。

```csharp
// 静态调用，不需要实例
FactionHelper.CanPlayerOfferMercenaryService(offerKingdom, playerWars, warsOfFactionToJoin);
```

### CanPlayerOfferVassalage
`public static bool CanPlayerOfferVassalage(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**用途 / Purpose:** 检查当前对象是否满足 「player offer vassalage」 的前置条件。

```csharp
// 静态调用，不需要实例
FactionHelper.CanPlayerOfferVassalage(offerKingdom, playerWars, warsOfFactionToJoin);
```

### IsMainClanMemberAvailableForRecall
`public static bool IsMainClanMemberAvailableForRecall(Hero hero, MobileParty targetParty, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否处于 「main clan member available for recall」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionHelper.IsMainClanMemberAvailableForRecall(hero, targetParty, explanation);
```

### IsMainClanMemberAvailableForPartyLeaderChange
`public static bool IsMainClanMemberAvailableForPartyLeaderChange(Hero hero, bool isSend, MobileParty targetParty, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否处于 「main clan member available for party leader change」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionHelper.IsMainClanMemberAvailableForPartyLeaderChange(hero, false, targetParty, explanation);
```

### IsMainClanMemberAvailableForSendingSettlement
`public static bool IsMainClanMemberAvailableForSendingSettlement(Hero hero, Settlement targetSettlement, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否处于 「main clan member available for sending settlement」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionHelper.IsMainClanMemberAvailableForSendingSettlement(hero, targetSettlement, explanation);
```

### IsMainClanMemberAvailableForSendingSettlementAsGovernor
`public static bool IsMainClanMemberAvailableForSendingSettlementAsGovernor(Hero hero, Settlement settlementOfGovernor, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否处于 「main clan member available for sending settlement as governor」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionHelper.IsMainClanMemberAvailableForSendingSettlementAsGovernor(hero, settlementOfGovernor, explanation);
```

## 使用示例

```csharp
FactionHelper.Initialize();
```

## 参见

- [本区域目录](../)