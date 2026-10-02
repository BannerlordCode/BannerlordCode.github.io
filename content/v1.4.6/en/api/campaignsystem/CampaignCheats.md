---
title: "CampaignCheats"
description: "CampaignCheats: a public class in TaleWorlds.CampaignSystem; 98 exposed members (88 methods, 1 properties, 9 fields). Source: TaleWorlds.CampaignSystem/CampaignCheats.cs."
---
# CampaignCheats

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class CampaignCheats`
**File:** `TaleWorlds.CampaignSystem/CampaignCheats.cs`

## Overview

CampaignCheats lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignCheats.cs. It is a public class; the inheritance chain is CampaignCheats. It exposes 98 public/protected members: 88 methods, 1 properties, 9 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignCheats is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain CampaignCheats. The surface is method-led (methods 88/98, properties 1/98), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignCheats.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheckCheatUsage` | `public static bool CheckCheatUsage(ref string ErrorType)` | method |
| `CheckParameters` | `public static bool CheckParameters(List<string>strings, int ParameterCount)` | method |
| `CheckHelp` | `public static bool CheckHelp(List<string>strings)` | method |
| `GetDefaultSettlement` | `public static Settlement GetDefaultSettlement` | property |
| `List` | `public static List<string>GetSeparatedNames(List<string>strings, bool removeEmptySpaces = false)` | method |
| `ConcatenateString` | `public static string ConcatenateString(List<string>strings)` | method |
| `ImportMainHero` | `public static string ImportMainHero(List<string>strings)` | method |
| `ExportMainHero` | `public static string ExportMainHero(List<string>strings)` | method |
| `SetCraftingStamina` | `public static string SetCraftingStamina(List<string>strings)` | method |
| `SetHeroCulture` | `public static string SetHeroCulture(List<string>strings)` | method |
| `SetClanCulture` | `public static string SetClanCulture(List<string>strings)` | method |
| `AddSkillXpToHero` | `public static string AddSkillXpToHero(List<string>strings)` | method |
| `PrintPlayerTrait` | `public static string PrintPlayerTrait(List<string>strings)` | method |
| `ShowSettlements` | `public static string ShowSettlements(List<string>strings)` | method |
| `SetSkillsOfGivenHero` | `public static string SetSkillsOfGivenHero(List<string>strings)` | method |
| `HideSettlements` | `public static string HideSettlements(List<string>strings)` | method |
| `SetSkillMainHero` | `public static string SetSkillMainHero(List<string>strings)` | method |
| `SetSkillCompanion` | `public static string SetSkillCompanion(List<string>strings)` | method |
| `SetAllSkillsOfAllCompanions` | `public static string SetAllSkillsOfAllCompanions(List<string>strings)` | method |
| `SetAllHeroSkills` | `public static string SetAllHeroSkills(List<string>strings)` | method |
| `SetLoyaltyOfSettlement` | `public static string SetLoyaltyOfSettlement(List<string>strings)` | method |
| `SetProsperityOfSettlement` | `public static string SetProsperityOfSettlement(List<string>strings)` | method |
| `SetMilitiaOfSettlement` | `public static string SetMilitiaOfSettlement(List<string>strings)` | method |
| `SetSecurityOfSettlement` | `public static string SetSecurityOfSettlement(List<string>strings)` | method |
| `SetFoodOfSettlement` | `public static string SetFoodOfSettlement(List<string>strings)` | method |
| `SetHearthOfSettlement` | `public static string SetHearthOfSettlement(List<string>strings)` | method |
| `ShowHeroRelation` | `public static string ShowHeroRelation(List<string>strings)` | method |
| `AddHeroRelation` | `public static string AddHeroRelation(List<string>strings)` | method |
| `PrintMainPartyPosition` | `public static string PrintMainPartyPosition(List<string>strings)` | method |
| `AddCraftingMaterials` | `public static string AddCraftingMaterials(List<string>strings)` | method |
| `HealMainParty` | `public static string HealMainParty(List<string>strings)` | method |
| `DeclareWar` | `public static string DeclareWar(List<string>strings)` | method |
| `AddItemToPlayerParty` | `public static string AddItemToPlayerParty(List<string>strings)` | method |
| `DeclarePeace` | `public static string DeclarePeace(List<string>strings)` | method |
| `AddInfluence` | `public static string AddInfluence(List<string>strings)` | method |
| `AddRenown` | `public static string AddRenown(List<string>strings)` | method |
| `AddGoldToHero` | `public static string AddGoldToHero(List<string>strings)` | method |
| `AddDevelopment` | `public static string AddDevelopment(List<string>strings)` | method |
| `ActivateAllPolicies` | `public static string ActivateAllPolicies(List<string>strings)` | method |
| `SetPlayerReputationTrait` | `public static string SetPlayerReputationTrait(List<string>strings)` | method |
| `GiveSettlementToPlayer` | `public static string GiveSettlementToPlayer(List<string>strings)` | method |
| `GiveSettlementToKingdom` | `public static string GiveSettlementToKingdom(List<string>strings)` | method |
| `AddPowerToNotable` | `public static string AddPowerToNotable(List<string>strings)` | method |
| `LeadYourFaction` | `public static string LeadYourFaction(List<string>strings)` | method |
| `PrintHeroesSuitableForMarriage` | `public static string PrintHeroesSuitableForMarriage(List<string>strings)` | method |
| `MarryPlayerWithHero` | `public static string MarryPlayerWithHero(List<string>strings)` | method |
| `MarryHeroWithHero` | `public static string MarryHeroWithHero(List<string>strings)` | method |
| `IsHeroSuitableForMarriageWithPlayer` | `public static string IsHeroSuitableForMarriageWithPlayer(List<string>strings)` | method |
| `CreatePlayerKingdom` | `public static string CreatePlayerKingdom(List<string>strings)` | method |
| `CreateRandomClan` | `public static string CreateRandomClan(List<string>strings)` | method |
| `LeadKingdom` | `public static string LeadKingdom(List<string>strings)` | method |
| `JoinKingdom` | `public static string JoinKingdom(List<string>strings)` | method |
| `JoinKingdomAsMercenary` | `public static string JoinKingdomAsMercenary(List<string>strings)` | method |
| `MakeTradeAgreement` | `public static string MakeTradeAgreement(List<string>strings)` | method |
| `PrintCriminalRatings` | `public static string PrintCriminalRatings(List<string>strings)` | method |
| `SetMainHeroAge` | `public static string SetMainHeroAge(List<string>strings)` | method |
| `SetMainPartyAttackable` | `public static string SetMainPartyAttackable(List<string>strings)` | method |
| `AddMoraleToParty` | `public static string AddMoraleToParty(List<string>strings)` | method |
| `BoostCohesionOfArmy` | `public static string BoostCohesionOfArmy(List<string>strings)` | method |
| `AddFocusPointCheat` | `public static string AddFocusPointCheat(List<string>strings)` | method |
| `AddAttributePointsCheat` | `public static string AddAttributePointsCheat(List<string>strings)` | method |
| `PrintSettlementsWithTournament` | `public static string PrintSettlementsWithTournament(List<string>strings)` | method |
| `ConvertListToMultiLine` | `public static string ConvertListToMultiLine(List<string>strings)` | method |
| `PrintAllIssues` | `public static string PrintAllIssues(List<string>strings)` | method |
| `GiveWorkshopToPlayer` | `public static string GiveWorkshopToPlayer(List<string>strings)` | method |
| `MakePregnant` | `public static string MakePregnant(List<string>strings)` | method |
| `GenerateChild` | `public static Hero GenerateChild(Hero hero, bool isFemale, CultureObject culture)` | method |
| `AddPrisonerToParty` | `public static string AddPrisonerToParty(List<string>strings)` | method |
| `ClearSettlementDefense` | `public static string ClearSettlementDefense(List<string>strings)` | method |
| `AddPrisonersXp` | `public static string AddPrisonersXp(List<string>strings)` | method |
| `SetHeroTrait` | `public static string SetHeroTrait(List<string>strings)` | method |
| `RemoveMilitiasFromSettlement` | `public static string RemoveMilitiasFromSettlement(List<string>strings)` | method |
| `CancelQuestCheat` | `public static string CancelQuestCheat(List<string>strings)` | method |
| `KickCompanionFromParty` | `public static string KickCompanionFromParty(List<string>strings)` | method |
| `AddTroopsXp` | `public static string AddTroopsXp(List<string>strings)` | method |
| `PrintGameplayStatistics` | `public static string PrintGameplayStatistics(List<string>strings)` | method |
| `SetAllArmiesAndPartiesVisible` | `public static string SetAllArmiesAndPartiesVisible(List<string>strings)` | method |
| `PrintStrengthOfLordParties` | `public static string PrintStrengthOfLordParties(List<string>strings)` | method |
| `ToggleInformationRestrictions` | `public static string ToggleInformationRestrictions(List<string>strings)` | method |
| `PrintStrengthOfFactions` | `public static string PrintStrengthOfFactions(List<string>strings)` | method |
| `AddSupportersForMainHero` | `public static string AddSupportersForMainHero(List<string>strings)` | method |
| `SetCampaignSpeed` | `public static string SetCampaignSpeed(List<string>strings)` | method |
| `ShowHideouts` | `public static string ShowHideouts(List<string>strings)` | method |
| `HideHideouts` | `public static string HideHideouts(List<string>strings)` | method |
| `UnlockCraftingPieces` | `public static string UnlockCraftingPieces(List<string>strings)` | method |
| `SetRebellionEnabled` | `public static string SetRebellionEnabled(List<string>strings)` | method |
| `AddTroopsToParty` | `public static string AddTroopsToParty(List<string>strings)` | method |
| `TryGetObject` | `public static bool TryGetObject<T>(string requestedId, out T obj, out string errorMessage, Func<T, bool>predicate = null) where T : MBObjectBase` | method |
| `IsPartySuitableToUseCheat` | `public static bool IsPartySuitableToUseCheat(PartyBase party, bool ignoreMapEvents = false)` | method |
| `Help` | `public const string Help` | field |
| `EnterNumber` | `public const string EnterNumber` | field |
| `EnterPositiveNumber` | `public const string EnterPositiveNumber` | field |
| `CampaignNotStarted` | `public const string CampaignNotStarted` | field |
| `CheatModeDisabled` | `public const string CheatModeDisabled` | field |
| `MaxSkillValue` | `public const int MaxSkillValue` | field |
| `OK` | `public const string OK` | field |
| `CheatNameSeparator` | `public const string CheatNameSeparator` | field |
| `ErrorType` | `public static string ErrorType` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
