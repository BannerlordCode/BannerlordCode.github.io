<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FactionHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `find potential strength` 相关逻辑。

### GetEnemyKingdoms
`public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)`

**用途 / Purpose:** 获取 `enemy kingdoms` 的当前值。

### GetStances
`public static IEnumerable<StanceLink> GetStances(IFaction faction)`

**用途 / Purpose:** 获取 `stances` 的当前值。

### GetPowerRatioToEnemies
`public static float GetPowerRatioToEnemies(Kingdom kingdom)`

**用途 / Purpose:** 获取 `power ratio to enemies` 的当前值。

### IsClanNameApplicable
`public static Tuple<bool, string> IsClanNameApplicable(string name)`

**用途 / Purpose:** 处理 `is clan name applicable` 相关逻辑。

### IsKingdomNameApplicable
`public static Tuple<bool, string> IsKingdomNameApplicable(string name)`

**用途 / Purpose:** 处理 `is kingdom name applicable` 相关逻辑。

### GetPowerRatioToTributePayedKingdoms
`public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)`

**用途 / Purpose:** 获取 `power ratio to tribute payed kingdoms` 的当前值。

### CanClanBeGrantedFief
`public static bool CanClanBeGrantedFief(Clan clan)`

**用途 / Purpose:** 判断当前对象是否可以执行 `clan be granted fief`。

### CanPlayerEnterFaction
`public static bool CanPlayerEnterFaction(bool asVassal = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player enter faction`。

### GetTotalEnemyKingdomPower
`public static float GetTotalEnemyKingdomPower(Kingdom kingdom)`

**用途 / Purpose:** 获取 `total enemy kingdom power` 的当前值。

### GetTotalTributePayedKingdomsPower
`public static float GetTotalTributePayedKingdomsPower(Kingdom kingdom)`

**用途 / Purpose:** 获取 `total tribute payed kingdoms power` 的当前值。

### GetKingdomArmies
`public static IEnumerable<Army> GetKingdomArmies(IFaction mapFaction)`

**用途 / Purpose:** 获取 `kingdom armies` 的当前值。

### SettlementProsperityEffectOnGarrisonSizeConstant
`public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)`

**用途 / Purpose:** 设置 `tlement prosperity effect on garrison size constant` 的值或状态。

### SettlementFoodPotentialEffectOnGarrisonSizeConstant
`public static float SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)`

**用途 / Purpose:** 设置 `tlement food potential effect on garrison size constant` 的值或状态。

### OwnerClanEconomyEffectOnGarrisonSizeConstant
`public static float OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)`

**用途 / Purpose:** 处理 `owner clan economy effect on garrison size constant` 相关逻辑。

### FindIdealGarrisonStrengthPerWalledCenter
`public static float FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)`

**用途 / Purpose:** 处理 `find ideal garrison strength per walled center` 相关逻辑。

### FinishAllRelatedHostileActionsOfNobleToFaction
`public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)`

**用途 / Purpose:** 处理 `finish all related hostile actions of noble to faction` 相关逻辑。

### FinishAllRelatedHostileActionsOfFactionToFaction
`public static void FinishAllRelatedHostileActionsOfFactionToFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `finish all related hostile actions of faction to faction` 相关逻辑。

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Clan clan1, Clan clan2)`

**用途 / Purpose:** 处理 `finish all related hostile actions` 相关逻辑。

### FinishAllRelatedHostileActions
`public static void FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** 处理 `finish all related hostile actions` 相关逻辑。

### AdjustFactionStancesForClanJoiningKingdom
`public static void AdjustFactionStancesForClanJoiningKingdom(Clan joiningClan, Kingdom kingdomToJoin)`

**用途 / Purpose:** 处理 `adjust faction stances for clan joining kingdom` 相关逻辑。

### GetTermUsedByOtherFaction
`public static TextObject GetTermUsedByOtherFaction(IFaction faction, IFaction otherFaction, bool pejorative)`

**用途 / Purpose:** 获取 `term used by other faction` 的当前值。

### GetFormalNameForFactionCulture
`public static TextObject GetFormalNameForFactionCulture(CultureObject factionCulture)`

**用途 / Purpose:** 获取 `formal name for faction culture` 的当前值。

### GetInformalNameForFactionCulture
`public static TextObject GetInformalNameForFactionCulture(CultureObject factionCulture)`

**用途 / Purpose:** 获取 `informal name for faction culture` 的当前值。

### GetAdjectiveForFactionCulture
`public static TextObject GetAdjectiveForFactionCulture(CultureObject factionCulture)`

**用途 / Purpose:** 获取 `adjective for faction culture` 的当前值。

### GetAdjectiveForFaction
`public static TextObject GetAdjectiveForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `adjective for faction` 的当前值。

### GenerateClanNameforPlayer
`public static TextObject GenerateClanNameforPlayer()`

**用途 / Purpose:** 处理 `generate clan namefor player` 相关逻辑。

### GetDistanceToClosestNonAllyFortificationOfFaction
`public static float GetDistanceToClosestNonAllyFortificationOfFaction(IFaction faction)`

**用途 / Purpose:** 获取 `distance to closest non ally fortification of faction` 的当前值。

### GetMidSettlementOfFaction
`public static Settlement GetMidSettlementOfFaction(IFaction faction)`

**用途 / Purpose:** 获取 `mid settlement of faction` 的当前值。

### GetPossibleKingdomsToDeclareWar
`public static List<IFaction> GetPossibleKingdomsToDeclareWar(Kingdom kingdom)`

**用途 / Purpose:** 获取 `possible kingdoms to declare war` 的当前值。

### GetPossibleKingdomsToDeclarePeace
`public static List<IFaction> GetPossibleKingdomsToDeclarePeace(Kingdom kingdom)`

**用途 / Purpose:** 获取 `possible kingdoms to declare peace` 的当前值。

### GetAllyMinorFactions
`public static IEnumerable<Clan> GetAllyMinorFactions(CharacterObject otherCharacter)`

**用途 / Purpose:** 获取 `ally minor factions` 的当前值。

### ChooseHeirClanForFiefs
`public static Clan ChooseHeirClanForFiefs(Clan oldClan)`

**用途 / Purpose:** 处理 `choose heir clan for fiefs` 相关逻辑。

### CanPlayerOfferMercenaryService
`public static bool CanPlayerOfferMercenaryService(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player offer mercenary service`。

### CanPlayerOfferVassalage
`public static bool CanPlayerOfferVassalage(Kingdom offerKingdom, out List<IFaction> playerWars, out List<IFaction> warsOfFactionToJoin)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player offer vassalage`。

### IsMainClanMemberAvailableForRecall
`public static bool IsMainClanMemberAvailableForRecall(Hero hero, MobileParty targetParty, out TextObject explanation)`

**用途 / Purpose:** 处理 `is main clan member available for recall` 相关逻辑。

### IsMainClanMemberAvailableForPartyLeaderChange
`public static bool IsMainClanMemberAvailableForPartyLeaderChange(Hero hero, bool isSend, MobileParty targetParty, out TextObject explanation)`

**用途 / Purpose:** 处理 `is main clan member available for party leader change` 相关逻辑。

### IsMainClanMemberAvailableForSendingSettlement
`public static bool IsMainClanMemberAvailableForSendingSettlement(Hero hero, Settlement targetSettlement, out TextObject explanation)`

**用途 / Purpose:** 处理 `is main clan member available for sending settlement` 相关逻辑。

### IsMainClanMemberAvailableForSendingSettlementAsGovernor
`public static bool IsMainClanMemberAvailableForSendingSettlementAsGovernor(Hero hero, Settlement settlementOfGovernor, out TextObject explanation)`

**用途 / Purpose:** 处理 `is main clan member available for sending settlement as governor` 相关逻辑。

## 使用示例

```csharp
FactionHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)