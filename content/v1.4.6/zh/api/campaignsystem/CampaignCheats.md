---
title: "CampaignCheats"
description: "CampaignCheats：TaleWorlds.CampaignSystem 的 public 类；公开成员 98 个（方法 88、属性 1、字段 9）。源文件 TaleWorlds.CampaignSystem/CampaignCheats.cs。"
---
# CampaignCheats

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class CampaignCheats`
**File:** `TaleWorlds.CampaignSystem/CampaignCheats.cs`

## 概述

CampaignCheats 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignCheats.cs。它是一个 public 类，继承链为 CampaignCheats。public/protected 成员共 98 个：88 方法、1 属性、9 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignCheats 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 CampaignCheats。成员构成以方法为主（方法 88/98，属性 1/98），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignCheats.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheckCheatUsage` | `public static bool CheckCheatUsage(ref string ErrorType)` | 方法 |
| `CheckParameters` | `public static bool CheckParameters(List<string>strings, int ParameterCount)` | 方法 |
| `CheckHelp` | `public static bool CheckHelp(List<string>strings)` | 方法 |
| `GetDefaultSettlement` | `public static Settlement GetDefaultSettlement` | 属性 |
| `List` | `public static List<string>GetSeparatedNames(List<string>strings, bool removeEmptySpaces = false)` | 方法 |
| `ConcatenateString` | `public static string ConcatenateString(List<string>strings)` | 方法 |
| `ImportMainHero` | `public static string ImportMainHero(List<string>strings)` | 方法 |
| `ExportMainHero` | `public static string ExportMainHero(List<string>strings)` | 方法 |
| `SetCraftingStamina` | `public static string SetCraftingStamina(List<string>strings)` | 方法 |
| `SetHeroCulture` | `public static string SetHeroCulture(List<string>strings)` | 方法 |
| `SetClanCulture` | `public static string SetClanCulture(List<string>strings)` | 方法 |
| `AddSkillXpToHero` | `public static string AddSkillXpToHero(List<string>strings)` | 方法 |
| `PrintPlayerTrait` | `public static string PrintPlayerTrait(List<string>strings)` | 方法 |
| `ShowSettlements` | `public static string ShowSettlements(List<string>strings)` | 方法 |
| `SetSkillsOfGivenHero` | `public static string SetSkillsOfGivenHero(List<string>strings)` | 方法 |
| `HideSettlements` | `public static string HideSettlements(List<string>strings)` | 方法 |
| `SetSkillMainHero` | `public static string SetSkillMainHero(List<string>strings)` | 方法 |
| `SetSkillCompanion` | `public static string SetSkillCompanion(List<string>strings)` | 方法 |
| `SetAllSkillsOfAllCompanions` | `public static string SetAllSkillsOfAllCompanions(List<string>strings)` | 方法 |
| `SetAllHeroSkills` | `public static string SetAllHeroSkills(List<string>strings)` | 方法 |
| `SetLoyaltyOfSettlement` | `public static string SetLoyaltyOfSettlement(List<string>strings)` | 方法 |
| `SetProsperityOfSettlement` | `public static string SetProsperityOfSettlement(List<string>strings)` | 方法 |
| `SetMilitiaOfSettlement` | `public static string SetMilitiaOfSettlement(List<string>strings)` | 方法 |
| `SetSecurityOfSettlement` | `public static string SetSecurityOfSettlement(List<string>strings)` | 方法 |
| `SetFoodOfSettlement` | `public static string SetFoodOfSettlement(List<string>strings)` | 方法 |
| `SetHearthOfSettlement` | `public static string SetHearthOfSettlement(List<string>strings)` | 方法 |
| `ShowHeroRelation` | `public static string ShowHeroRelation(List<string>strings)` | 方法 |
| `AddHeroRelation` | `public static string AddHeroRelation(List<string>strings)` | 方法 |
| `PrintMainPartyPosition` | `public static string PrintMainPartyPosition(List<string>strings)` | 方法 |
| `AddCraftingMaterials` | `public static string AddCraftingMaterials(List<string>strings)` | 方法 |
| `HealMainParty` | `public static string HealMainParty(List<string>strings)` | 方法 |
| `DeclareWar` | `public static string DeclareWar(List<string>strings)` | 方法 |
| `AddItemToPlayerParty` | `public static string AddItemToPlayerParty(List<string>strings)` | 方法 |
| `DeclarePeace` | `public static string DeclarePeace(List<string>strings)` | 方法 |
| `AddInfluence` | `public static string AddInfluence(List<string>strings)` | 方法 |
| `AddRenown` | `public static string AddRenown(List<string>strings)` | 方法 |
| `AddGoldToHero` | `public static string AddGoldToHero(List<string>strings)` | 方法 |
| `AddDevelopment` | `public static string AddDevelopment(List<string>strings)` | 方法 |
| `ActivateAllPolicies` | `public static string ActivateAllPolicies(List<string>strings)` | 方法 |
| `SetPlayerReputationTrait` | `public static string SetPlayerReputationTrait(List<string>strings)` | 方法 |
| `GiveSettlementToPlayer` | `public static string GiveSettlementToPlayer(List<string>strings)` | 方法 |
| `GiveSettlementToKingdom` | `public static string GiveSettlementToKingdom(List<string>strings)` | 方法 |
| `AddPowerToNotable` | `public static string AddPowerToNotable(List<string>strings)` | 方法 |
| `LeadYourFaction` | `public static string LeadYourFaction(List<string>strings)` | 方法 |
| `PrintHeroesSuitableForMarriage` | `public static string PrintHeroesSuitableForMarriage(List<string>strings)` | 方法 |
| `MarryPlayerWithHero` | `public static string MarryPlayerWithHero(List<string>strings)` | 方法 |
| `MarryHeroWithHero` | `public static string MarryHeroWithHero(List<string>strings)` | 方法 |
| `IsHeroSuitableForMarriageWithPlayer` | `public static string IsHeroSuitableForMarriageWithPlayer(List<string>strings)` | 方法 |
| `CreatePlayerKingdom` | `public static string CreatePlayerKingdom(List<string>strings)` | 方法 |
| `CreateRandomClan` | `public static string CreateRandomClan(List<string>strings)` | 方法 |
| `LeadKingdom` | `public static string LeadKingdom(List<string>strings)` | 方法 |
| `JoinKingdom` | `public static string JoinKingdom(List<string>strings)` | 方法 |
| `JoinKingdomAsMercenary` | `public static string JoinKingdomAsMercenary(List<string>strings)` | 方法 |
| `MakeTradeAgreement` | `public static string MakeTradeAgreement(List<string>strings)` | 方法 |
| `PrintCriminalRatings` | `public static string PrintCriminalRatings(List<string>strings)` | 方法 |
| `SetMainHeroAge` | `public static string SetMainHeroAge(List<string>strings)` | 方法 |
| `SetMainPartyAttackable` | `public static string SetMainPartyAttackable(List<string>strings)` | 方法 |
| `AddMoraleToParty` | `public static string AddMoraleToParty(List<string>strings)` | 方法 |
| `BoostCohesionOfArmy` | `public static string BoostCohesionOfArmy(List<string>strings)` | 方法 |
| `AddFocusPointCheat` | `public static string AddFocusPointCheat(List<string>strings)` | 方法 |
| `AddAttributePointsCheat` | `public static string AddAttributePointsCheat(List<string>strings)` | 方法 |
| `PrintSettlementsWithTournament` | `public static string PrintSettlementsWithTournament(List<string>strings)` | 方法 |
| `ConvertListToMultiLine` | `public static string ConvertListToMultiLine(List<string>strings)` | 方法 |
| `PrintAllIssues` | `public static string PrintAllIssues(List<string>strings)` | 方法 |
| `GiveWorkshopToPlayer` | `public static string GiveWorkshopToPlayer(List<string>strings)` | 方法 |
| `MakePregnant` | `public static string MakePregnant(List<string>strings)` | 方法 |
| `GenerateChild` | `public static Hero GenerateChild(Hero hero, bool isFemale, CultureObject culture)` | 方法 |
| `AddPrisonerToParty` | `public static string AddPrisonerToParty(List<string>strings)` | 方法 |
| `ClearSettlementDefense` | `public static string ClearSettlementDefense(List<string>strings)` | 方法 |
| `AddPrisonersXp` | `public static string AddPrisonersXp(List<string>strings)` | 方法 |
| `SetHeroTrait` | `public static string SetHeroTrait(List<string>strings)` | 方法 |
| `RemoveMilitiasFromSettlement` | `public static string RemoveMilitiasFromSettlement(List<string>strings)` | 方法 |
| `CancelQuestCheat` | `public static string CancelQuestCheat(List<string>strings)` | 方法 |
| `KickCompanionFromParty` | `public static string KickCompanionFromParty(List<string>strings)` | 方法 |
| `AddTroopsXp` | `public static string AddTroopsXp(List<string>strings)` | 方法 |
| `PrintGameplayStatistics` | `public static string PrintGameplayStatistics(List<string>strings)` | 方法 |
| `SetAllArmiesAndPartiesVisible` | `public static string SetAllArmiesAndPartiesVisible(List<string>strings)` | 方法 |
| `PrintStrengthOfLordParties` | `public static string PrintStrengthOfLordParties(List<string>strings)` | 方法 |
| `ToggleInformationRestrictions` | `public static string ToggleInformationRestrictions(List<string>strings)` | 方法 |
| `PrintStrengthOfFactions` | `public static string PrintStrengthOfFactions(List<string>strings)` | 方法 |
| `AddSupportersForMainHero` | `public static string AddSupportersForMainHero(List<string>strings)` | 方法 |
| `SetCampaignSpeed` | `public static string SetCampaignSpeed(List<string>strings)` | 方法 |
| `ShowHideouts` | `public static string ShowHideouts(List<string>strings)` | 方法 |
| `HideHideouts` | `public static string HideHideouts(List<string>strings)` | 方法 |
| `UnlockCraftingPieces` | `public static string UnlockCraftingPieces(List<string>strings)` | 方法 |
| `SetRebellionEnabled` | `public static string SetRebellionEnabled(List<string>strings)` | 方法 |
| `AddTroopsToParty` | `public static string AddTroopsToParty(List<string>strings)` | 方法 |
| `TryGetObject` | `public static bool TryGetObject<T>(string requestedId, out T obj, out string errorMessage, Func<T, bool>predicate = null) where T : MBObjectBase` | 方法 |
| `IsPartySuitableToUseCheat` | `public static bool IsPartySuitableToUseCheat(PartyBase party, bool ignoreMapEvents = false)` | 方法 |
| `Help` | `public const string Help` | 字段 |
| `EnterNumber` | `public const string EnterNumber` | 字段 |
| `EnterPositiveNumber` | `public const string EnterPositiveNumber` | 字段 |
| `CampaignNotStarted` | `public const string CampaignNotStarted` | 字段 |
| `CheatModeDisabled` | `public const string CheatModeDisabled` | 字段 |
| `MaxSkillValue` | `public const int MaxSkillValue` | 字段 |
| `OK` | `public const string OK` | 字段 |
| `CheatNameSeparator` | `public const string CheatNameSeparator` | 字段 |
| `ErrorType` | `public static string ErrorType` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
