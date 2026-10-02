---
title: "CampaignUIHelper"
description: "CampaignUIHelper: a public class in TaleWorlds.CampaignSystem.ViewModelCollection; 157 exposed members (141 methods, 6 properties, 4 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs."
---
# CampaignUIHelper

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public static class CampaignUIHelper`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

CampaignUIHelper lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs. It is a public class; the inheritance chain is CampaignUIHelper. It exposes 157 public/protected members: 141 methods, 6 properties, 4 fields, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignUIHelper is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace matching the module directory; inheritance chain CampaignUIHelper. The surface is method-led (methods 141/157, properties 6/157), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<TooltipProperty>GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)` | method |
| `List` | `public static List<TooltipProperty>GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)` | method |
| `List` | `public static List<TooltipProperty>GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)` | method |
| `GetTownWallsTooltip` | `public static string GetTownWallsTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetVillageMilitiaTooltip(Village village)` | method |
| `List` | `public static List<TooltipProperty>GetTownMilitiaTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetTownFoodTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetTownLoyaltyTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetTownProsperityTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetTownDailyProductionTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetTownSecurityTooltip(Town town)` | method |
| `GetTownPatrolTooltip` | `public static string GetTownPatrolTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetVillageProsperityTooltip(Village village)` | method |
| `List` | `public static List<TooltipProperty>GetTownGarrisonTooltip(Town town)` | method |
| `List` | `public static List<TooltipProperty>GetPartyTroopSizeLimitTooltip(PartyBase party)` | method |
| `List` | `public static List<TooltipProperty>GetPartyPrisonerSizeLimitTooltip(PartyBase party)` | method |
| `List` | `public static List<TooltipProperty>GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>>usedUpgradeHorsesHistory)` | method |
| `List` | `public static List<TooltipProperty>GetArmyCohesionTooltip(Army army)` | method |
| `List` | `public static List<TooltipProperty>GetArmyManCountTooltip(Army army)` | method |
| `GetDaysUntilNoFood` | `public static string GetDaysUntilNoFood(float totalFood, float foodChange)` | method |
| `List` | `public static List<TooltipProperty>GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)` | method |
| `List` | `public static List<TooltipProperty>GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)` | method |
| `List` | `public static List<TooltipProperty>GetArmyFoodTooltip(Army army)` | method |
| `GetClanWealthStatusText` | `public static string GetClanWealthStatusText(Clan clan)` | method |
| `List` | `public static List<TooltipProperty>GetClanProsperityTooltip(Clan clan)` | method |
| `List` | `public static List<TooltipProperty>GetTruceOwnedSettlementsTooltip(List<Settlement>settlements, TextObject factionName, bool isTown)` | method |
| `List` | `public static List<TooltipProperty>GetWarPrisonersTooltip(List<Hero>capturedPrisoners, TextObject factionName)` | method |
| `List` | `public static List<TooltipProperty>GetNormalizedWarProgressTooltip(ExplainedNumber warProgress, ExplainedNumber otherFactionWarProgress, float maxValue, TextObject faction1Name, TextObject faction2Name)` | method |
| `List` | `public static List<TooltipProperty>GetClanStrengthTooltip(Clan clan)` | method |
| `List` | `public static List<TooltipProperty>GetCrimeTooltip(Settlement settlement)` | method |
| `List` | `public static List<TooltipProperty>GetInfluenceTooltip(Clan clan)` | method |
| `List` | `public static List<TooltipProperty>GetClanRenownTooltip(Clan clan)` | method |
| `GetDenarTooltip` | `public static TooltipTriggerVM GetDenarTooltip()` | method |
| `List` | `public static List<TooltipProperty>GetPartyMoraleTooltip(MobileParty mainParty)` | method |
| `List` | `public static List<TooltipProperty>GetPartyHealthTooltip(PartyBase party)` | method |
| `List` | `public static List<TooltipProperty>GetPlayerHitpointsTooltip()` | method |
| `List` | `public static List<TooltipProperty>GetPartyFoodTooltip(MobileParty mainParty)` | method |
| `List` | `public static List<TooltipProperty>GetPartySpeedTooltip(bool considerArmySpeed)` | method |
| `List` | `public static List<TooltipProperty>GetPartyWageTooltip(MobileParty mobileParty)` | method |
| `List` | `public static List<TooltipProperty>GetViewDistanceTooltip()` | method |
| `List` | `public static List<TooltipProperty>GetMainPartyHealthTooltip()` | method |
| `List` | `public static List<TooltipProperty>GetPartyInventoryCapacityTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)` | method |
| `List` | `public static List<TooltipProperty>GetPartyInventoryWeightTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)` | method |
| `List` | `public static List<TooltipProperty>GetPerkEffectText(PerkObject perk, bool isActive)` | method |
| `GetPerkRoleText` | `public static TextObject GetPerkRoleText(PerkObject perk, bool getSecondary)` | method |
| `GetCombinedPerkRoleText` | `public static TextObject GetCombinedPerkRoleText(PerkObject perk)` | method |
| `List` | `public static List<TooltipProperty>GetSiegeMachineTooltip(SiegeEngineType engineType, bool showDescription = true, int hoursUntilCompletion = 0)` | method |
| `GetSiegeMachineName` | `public static string GetSiegeMachineName(SiegeEngineType engineType)` | method |
| `GetSiegeMachineNameWithDesctiption` | `public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)` | method |
| `List` | `public static List<TooltipProperty>GetTroopConformityTooltip(TroopRosterElement troop)` | method |
| `List` | `public static List<TooltipProperty>GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, int skillValue, SkillObject skill)` | method |
| `List` | `public static List<TooltipProperty>GetTroopXPTooltip(TroopRosterElement troop)` | method |
| `List` | `public static List<TooltipProperty>GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, SkillObject skill)` | method |
| `List` | `public static List<TooltipProperty>GetSettlementConsumptionTooltip(Settlement settlement)` | method |
| `GetCharacterTierData` | `public static StringItemWithHintVM GetCharacterTierData(CharacterObject character, bool isBig = false)` | method |
| `List` | `public static List<TooltipProperty>GetSettlementProductionTooltip(Settlement settlement)` | method |
| `GetHintTextFromReasons` | `public static string GetHintTextFromReasons(List<TextObject>reasons)` | method |
| `MergeTextObjectsWithNewline` | `public static string MergeTextObjectsWithNewline(List<TextObject>textObjects)` | method |
| `GetHoursAndDaysTextFromHourValue` | `public static TextObject GetHoursAndDaysTextFromHourValue(int hours)` | method |
| `GetTeleportationDelayText` | `public static TextObject GetTeleportationDelayText(Hero hero, PartyBase target)` | method |
| `List` | `public static List<TooltipProperty>GetTimeOfDayAndResetCameraTooltip()` | method |
| `List` | `public static List<TooltipProperty>GetTournamentChampionRewardsTooltip(Hero hero, Town town)` | method |
| `GetCharacterTypeData` | `public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character, bool isBig = false)` | method |
| `List` | `public static List<TooltipProperty>GetHeroHealthTooltip(Hero hero)` | method |
| `List` | `public static List<TooltipProperty>GetSiegeWallTooltip(int wallLevel, int wallHitpoints)` | method |
| `List` | `public static List<TooltipProperty>GetGovernorPerksTooltipForHero(Hero hero)` | method |
| `TextObject>GetGovernorSelectionConfirmationPopupTexts` | `public static ValueTuple<TextObject, TextObject>GetGovernorSelectionConfirmationPopupTexts(Hero currentGovernor, Hero newGovernor, Settlement settlement)` | method |
| `List` | `public static List<TooltipProperty>GetHeroGovernorEffectsTooltip(Hero hero, Settlement settlement)` | method |
| `List` | `public static List<TooltipProperty>GetEncounterPartyMoraleTooltip(List<MobileParty>parties)` | method |
| `GetCraftingTemplatePieceUnlockProgressHint` | `public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)` | method |
| `TextObject>>GetWeaponFlagDetails` | `public static List<ValueTuple<string, TextObject>>GetWeaponFlagDetails(WeaponFlags weaponFlags, CharacterObject character = null)` | method |
| `TextObject>>GetItemFlagDetails` | `public static List<Tuple<string, TextObject>>GetItemFlagDetails(ItemFlags itemFlags)` | method |
| `TextObject>>GetItemUsageSetFlagDetails` | `public static List<ValueTuple<string, TextObject>>GetItemUsageSetFlagDetails(ItemObject.ItemUsageSetFlags flags, CharacterObject character = null)` | method |
| `TextObject>>GetFlagDetailsForWeapon` | `public static List<ValueTuple<string, TextObject>>GetFlagDetailsForWeapon(WeaponComponentData weapon, ItemObject.ItemUsageSetFlags itemUsageFlags, CharacterObject character = null)` | method |
| `GetFormattedItemPropertyText` | `public static string GetFormattedItemPropertyText(float propertyValue, bool typeRequiresInteger)` | method |
| `List` | `public static List<TooltipProperty>GetCraftingHeroTooltip(Hero hero, CraftingOrder order)` | method |
| `List` | `public static List<TooltipProperty>GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order, ItemObject item)` | method |
| `List` | `public static List<TooltipProperty>GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck, CraftingOrder order)` | method |
| `List` | `public static List<TooltipProperty>GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM>craftingOrders, Hero heroToCheck)` | method |
| `GetCraftingOrderMissingPropertyWarningText` | `public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order, ItemObject craftedItem)` | method |
| `List` | `public static List<TooltipProperty>GetInventoryCharacterTooltip(Hero hero)` | method |
| `GetHeroOccupationName` | `public static string GetHeroOccupationName(Hero hero)` | method |
| `GetCommaSeparatedText` | `public static TextObject GetCommaSeparatedText(TextObject label, IEnumerable<TextObject>texts)` | method |
| `GetCommaNewlineSeparatedText` | `public static TextObject GetCommaNewlineSeparatedText(TextObject label, IEnumerable<TextObject>texts)` | method |
| `GetHeroKingdomRank` | `public static string GetHeroKingdomRank(Hero hero)` | method |
| `GetHeroRank` | `public static string GetHeroRank(Hero hero)` | method |
| `List` | `public static List<TooltipProperty>GetSmithingDifficultyTooltip()` | method |
| `IsSettlementInformationHidden` | `public static bool IsSettlementInformationHidden(Settlement settlement, out TextObject disableReason)` | method |
| `IsHeroInformationHidden` | `public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)` | method |
| `GetPartyNameplateText` | `public static string GetPartyNameplateText(MobileParty party, bool includeAttachedParties)` | method |
| `GetPartyNameplateText` | `public static string GetPartyNameplateText(PartyBase party)` | method |
| `GetValueChangeText` | `public static string GetValueChangeText(float originalValue, float valueChange, string valueFormat = " ")` | method |
| `GetUpgradeHint` | `public static string GetUpgradeHint(int index, int numOfItems, int availableUpgrades, int upgradeCoinCost, bool hasRequiredPerk, PerkObject requiredPerk, CharacterObject character, TroopRosterElement troop, int partyGoldChangeAmount, bool areUpgradesDisabled)` | method |
| `GetStackModifierString` | `public static string GetStackModifierString(TextObject allStackText, TextObject fiveStackText, bool canFiveStack)` | method |
| `ConvertToHexColor` | `public static string ConvertToHexColor(uint color)` | method |
| `GetMapScreenActionIsEnabledWithReason` | `public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)` | method |
| `GetCanManageCurrentArmyWithReason` | `public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)` | method |
| `GetClanSupportDisableReasonString` | `public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isMainClanMercenary)` | method |
| `GetClanExpelDisableReasonString` | `public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isTargetRulingClan, bool isMainClanMercenary)` | method |
| `GetArmyDisbandDisableReasonString` | `public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence, bool isArmyInAnyEvent, bool isPlayerClanMercenary, bool isPlayerInThisArmy)` | method |
| `GetCreateNewPartyReasonString` | `public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots, bool haveAvailableHero)` | method |
| `GetCraftingDisableReasonString` | `public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)` | method |
| `GetAddFocusHintString` | `public static string GetAddFocusHintString(bool playerHasEnoughPoints, bool isMaxedSkill, int currentFocusAmount)` | method |
| `GetSkillEffectText` | `public static string GetSkillEffectText(SkillEffect effect, int skillLevel)` | method |
| `GetMobilePartyBehaviorText` | `public static string GetMobilePartyBehaviorText(MobileParty party)` | method |
| `GetHeroBehaviorText` | `public static string GetHeroBehaviorText(Hero hero, ITeleportationCampaignBehavior teleportationBehavior = null)` | method |
| `GetPartyLocationText` | `public static string GetPartyLocationText(MobileParty mobileParty)` | method |
| `GetTeleportingLeaderHero` | `public static Hero GetTeleportingLeaderHero(MobileParty party, ITeleportationCampaignBehavior teleportationBehavior)` | method |
| `GetTeleportingGovernor` | `public static Hero GetTeleportingGovernor(Settlement settlement, ITeleportationCampaignBehavior teleportationBehavior)` | method |
| `GetHeroRelationToHeroText` | `public static TextObject GetHeroRelationToHeroText(Hero queriedHero, Hero baseHero, bool uppercaseFirst)` | method |
| `GetAbbreviatedValueTextFromValue` | `public static string GetAbbreviatedValueTextFromValue(int valueAmount)` | method |
| `GetPartyDistanceByTimeText` | `public static string GetPartyDistanceByTimeText(float distance, float speed)` | method |
| `GetPartyDistanceByTimeTextAbbreviated` | `public static string GetPartyDistanceByTimeTextAbbreviated(float distance, float speed)` | method |
| `GetCharacterCode` | `public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)` | method |
| `GetTraitNameText` | `public static string GetTraitNameText(TraitObject traitObject, Hero hero)` | method |
| `GetTraitTooltipText` | `public static string GetTraitTooltipText(TraitObject traitObject, int traitValue)` | method |
| `GetTextForRole` | `public static string GetTextForRole(PartyRole role)` | method |
| `GetAttributeTypeSortIndex` | `public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)` | method |
| `GetSkillObjectTypeSortIndex` | `public static int GetSkillObjectTypeSortIndex(SkillObject skill)` | method |
| `GetSkillMeshId` | `public static string GetSkillMeshId(SkillObject skill, bool useSmallestVariation = true)` | method |
| `GetIsNavalSkill` | `public static bool GetIsNavalSkill(SkillObject skill)` | method |
| `GetHeroCompareSortIndex` | `public static int GetHeroCompareSortIndex(Hero x, Hero y)` | method |
| `GetHeroClanRoleText` | `public static string GetHeroClanRoleText(Hero hero, Clan clan)` | method |
| `GetItemObjectTypeSortIndex` | `public static int GetItemObjectTypeSortIndex(ItemObject item)` | method |
| `GetItemLockStringID` | `public static string GetItemLockStringID(EquipmentElement equipmentElement)` | method |
| `GetTroopLockStringID` | `public static string GetTroopLockStringID(TroopRosterElement rosterElement)` | method |
| `TextObject>>GetQuestStateOfHero` | `public static List<ValueTuple<CampaignUIHelper.IssueQuestFlags, TextObject, TextObject>>GetQuestStateOfHero(Hero queriedHero)` | method |
| `GetQuestExplanationOfHero` | `public static string GetQuestExplanationOfHero(CampaignUIHelper.IssueQuestFlags questType)` | method |
| `List` | `public static List<QuestBase>GetQuestsRelatedToHero(Hero hero)` | method |
| `List` | `public static List<QuestBase>GetQuestsRelatedToParty(MobileParty party)` | method |
| `QuestBase>>GetQuestsRelatedToSettlement` | `public static List<ValueTuple<bool, QuestBase>>GetQuestsRelatedToSettlement(Settlement settlement)` | method |
| `IsQuestRelatedToSettlement` | `public static bool IsQuestRelatedToSettlement(QuestBase quest, Settlement settlement)` | method |
| `GetIssueType` | `public static CampaignUIHelper.IssueQuestFlags GetIssueType(IssueBase issue)` | method |
| `GetQuestType` | `public static CampaignUIHelper.IssueQuestFlags GetQuestType(QuestBase quest, Hero queriedQuestGiver)` | method |
| `IEnumerable` | `public static IEnumerable<TraitObject>GetHeroTraits()` | method |
| `IsItemUsageApplicable` | `public static bool IsItemUsageApplicable(WeaponComponentData weapon)` | method |
| `FloatToString` | `public static string FloatToString(float x)` | method |
| `string>IsStringApplicableForHeroName` | `public static Tuple<bool, string>IsStringApplicableForHeroName(string name)` | method |
| `TextObject>IsStringApplicableForItemName` | `public static Tuple<bool, TextObject>IsStringApplicableForItemName(string name)` | method |
| `GetVisualPartyLeader` | `public static CharacterObject GetVisualPartyLeader(PartyBase party)` | method |
| `List` | `public static List<Hero>GetChildrenAndGrandchildrenOfHero(Hero hero)` | method |
| `CampaignUIHelper.IssueQuestFlags[]IssueQuestFlagsValues` | `public static readonly CampaignUIHelper.IssueQuestFlags[]IssueQuestFlagsValues` | field |
| `MobilePartyPrecedenceComparerInstance` | `public static readonly CampaignUIHelper.MobilePartyPrecedenceComparer MobilePartyPrecedenceComparerInstance` | field |
| `SkillObjectComparerInstance` | `public static readonly CampaignUIHelper.SkillObjectComparer SkillObjectComparerInstance` | field |
| `CharacterAttributeComparerInstance` | `public static readonly CampaignUIHelper.CharacterAttributeComparer CharacterAttributeComparerInstance` | field |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | property |
| `SortState` | `public enum SortState` | property |
| `IComparer` | `public class CharacterAttributeComparer : IComparer<CharacterAttribute>` | property |
| `IComparer` | `public class SkillObjectComparer : IComparer<SkillObject>` | property |
| `IComparer` | `public class MobilePartyPrecedenceComparer : IComparer<MobileParty>` | property |
| `int>>` | `public class ProductInputOutputEqualityComparer : IEqualityComparer<ValueTuple<ItemCategory, int>>` | property |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | nested type |
| `SortState` | `public enum SortState` | nested type |
| `IComparer` | `public class CharacterAttributeComparer : IComparer<CharacterAttribute>` | nested type |
| `IComparer` | `public class SkillObjectComparer : IComparer<SkillObject>` | nested type |
| `IComparer` | `public class MobilePartyPrecedenceComparer : IComparer<MobileParty>` | nested type |
| `int>>` | `public class ProductInputOutputEqualityComparer : IEqualityComparer<ValueTuple<ItemCategory, int>>` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionCampaignOptionData](../ActionCampaignOptionData)
- [same namespace BannerEditorVM](../BannerEditorVM)
- [same namespace BooleanCampaignOptionData](../BooleanCampaignOptionData)
- [same namespace CampaignOptionData](../CampaignOptionData)
