---
title: "CampaignUIHelper"
description: "Auto-generated class reference for CampaignUIHelper."
---
# CampaignUIHelper

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection
**Type:** `public static class CampaignUIHelper `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs

## Overview

Auto-generated stub for `CampaignUIHelper`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetTooltipForAccumulatingProperty
`public static List<TooltipProperty> GetTooltipForAccumulatingProperty(string propertyName,float currentValue,ExplainedNumber explainedNumber)`

### GetTooltipForAccumulatingPropertyWithResult
`public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName,float currentValue,ref ExplainedNumber explainedNumber)`

### GetTooltipForgProperty
`public static List<TooltipProperty> GetTooltipForgProperty(string propertyName,float currentValue,ExplainedNumber explainedNumber)`

### GetTownWallsTooltip
`public static string GetTownWallsTooltip(Town town)`

### GetVillageMilitiaTooltip
`public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)`

### GetTownMilitiaTooltip
`public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)`

### GetTownFoodTooltip
`public static List<TooltipProperty> GetTownFoodTooltip(Town town)`

### GetTownLoyaltyTooltip
`public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)`

### GetTownProsperityTooltip
`public static List<TooltipProperty> GetTownProsperityTooltip(Town town)`

### GetTownDailyProductionTooltip
`public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)`

### GetTownSecurityTooltip
`public static List<TooltipProperty> GetTownSecurityTooltip(Town town)`

### GetTownPatrolTooltip
`public static string GetTownPatrolTooltip(Town town)`

### GetVillageProsperityTooltip
`public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)`

### GetTownGarrisonTooltip
`public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)`

### GetPartyTroopSizeLimitTooltip
`public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)`

### GetPartySizeLimitWithDifferentLeader
`public static TextObject GetPartySizeLimitWithDifferentLeader(PartyBase party,Hero newLeader)`

### GetPartySizeLimitForLeader
`public static int GetPartySizeLimitForLeader(Hero leader)`

### GetPartyPrisonerSizeLimitTooltip
`public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)`

### GetUsedHorsesTooltip
`public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement,int>> usedUpgradeHorsesHistory)`

### GetArmyCohesionTooltip
`public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)`

### GetArmyManCountTooltip
`public static List<TooltipProperty> GetArmyManCountTooltip(Army army)`

### GetDaysUntilNoFood
`public static string GetDaysUntilNoFood(float totalFood,float foodChange)`

### GetSettlementPropertyTooltip
`public static List<TooltipProperty> GetSettlementPropertyTooltip(Settlement settlement,string valueName,float value,ExplainedNumber explainedNumber)`

### GetSettlementPropertyTooltipWithResult
`public static List<TooltipProperty> GetSettlementPropertyTooltipWithResult(Settlement settlement,string valueName,float value,ref ExplainedNumber explainedNumber)`

### GetArmyFoodTooltip
`public static List<TooltipProperty> GetArmyFoodTooltip(Army army)`

### GetClanWealthStatusText
`public static string GetClanWealthStatusText(Clan clan)`

### GetClanProsperityTooltip
`public static List<TooltipProperty> GetClanProsperityTooltip(Clan clan)`

### GetTruceOwnedSettlementsTooltip
`public static List<TooltipProperty> GetTruceOwnedSettlementsTooltip(List<Settlement> settlements,TextObject factionName,bool isTown)`

### GetWarPrisonersTooltip
`public static List<TooltipProperty> GetWarPrisonersTooltip(List<Hero> capturedPrisoners,TextObject factionName)`

### GetNormalizedWarProgressTooltip
`public static List<TooltipProperty> GetNormalizedWarProgressTooltip(ExplainedNumber warProgress,ExplainedNumber otherFactionWarProgress,float maxValue,TextObject faction1Name,TextObject faction2Name)`

### GetClanStrengthTooltip
`public static List<TooltipProperty> GetClanStrengthTooltip(Clan clan)`

### GetCrimeTooltip
`public static List<TooltipProperty> GetCrimeTooltip(Settlement settlement)`

### GetInfluenceTooltip
`public static List<TooltipProperty> GetInfluenceTooltip(Clan clan)`

### GetClanRenownTooltip
`public static List<TooltipProperty> GetClanRenownTooltip(Clan clan)`

### GetDenarTooltip
`public static TooltipTriggerVM GetDenarTooltip()`

### GetPartyMoraleTooltip
`public static List<TooltipProperty> GetPartyMoraleTooltip(MobileParty mainParty)`

### GetPartyHealthTooltip
`public static List<TooltipProperty> GetPartyHealthTooltip(PartyBase party)`

### GetPlayerHitpointsTooltip
`public static List<TooltipProperty> GetPlayerHitpointsTooltip()`

### GetPartyFoodTooltip
`public static List<TooltipProperty> GetPartyFoodTooltip(MobileParty mainParty)`

### GetPartySpeedTooltip
`public static List<TooltipProperty> GetPartySpeedTooltip(bool considerArmySpeed)`

### GetPartyWageTooltip
`public static List<TooltipProperty> GetPartyWageTooltip(MobileParty mobileParty)`

### GetViewDistanceTooltip
`public static List<TooltipProperty> GetViewDistanceTooltip()`

### GetMainPartyHealthTooltip
`public static List<TooltipProperty> GetMainPartyHealthTooltip()`

### GetPartyInventoryCapacityTooltip
`public static List<TooltipProperty> GetPartyInventoryCapacityTooltip(MobileParty party,bool forceLand = false,bool forceSea = false)`

### GetPartyInventoryWeightTooltip
`public static List<TooltipProperty> GetPartyInventoryWeightTooltip(MobileParty party,bool forceLand = false,bool forceSea = false)`

### GetPerkEffectText
`public static List<TooltipProperty> GetPerkEffectText(PerkObject perk,bool isActive)`

### GetPerkRoleText
`public static TextObject GetPerkRoleText(PerkObject perk,bool getSecondary)`

### GetCombinedPerkRoleText
`public static TextObject GetCombinedPerkRoleText(PerkObject perk)`

### GetPerkEnvironmentText
`public static TextObject GetPerkEnvironmentText(PerkObject perk,bool getSecondary)`

### GetSiegeMachineTooltip
`public static List<TooltipProperty> GetSiegeMachineTooltip(SiegeEngineType engineType,bool showDescription = true,int hoursUntilCompletion = 0)`

### GetSiegeMachineName
`public static string GetSiegeMachineName(SiegeEngineType engineType)`

### GetSiegeMachineNameWithDesctiption
`public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)`

### GetTroopConformityTooltip
`public static List<TooltipProperty> GetTroopConformityTooltip(TroopRosterElement troop)`

### GetLearningRateTooltip
`public static List<TooltipProperty> GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,int skillValue,SkillObject skill)`

### GetTroopXPTooltip
`public static List<TooltipProperty> GetTroopXPTooltip(TroopRosterElement troop)`

### GetLearningLimitTooltip
`public static List<TooltipProperty> GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,SkillObject skill)`

### GetSettlementConsumptionTooltip
`public static List<TooltipProperty> GetSettlementConsumptionTooltip(Settlement settlement)`

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(CharacterObject character,bool isBig = false)`

### GetSettlementProductionTooltip
`public static List<TooltipProperty> GetSettlementProductionTooltip(Settlement settlement)`

### GetHintTextFromReasons
`public static string GetHintTextFromReasons(List<TextObject> reasons)`

### MergeTextObjectsWithNewline
`public static string MergeTextObjectsWithNewline(List<TextObject> textObjects)`

### GetHoursAndDaysTextFromHourValue
`public static TextObject GetHoursAndDaysTextFromHourValue(int hours)`

### GetTeleportationDelayText
`public static TextObject GetTeleportationDelayText(Hero hero,PartyBase target)`

### GetTimeOfDayAndResetCameraTooltip
`public static List<TooltipProperty> GetTimeOfDayAndResetCameraTooltip()`

### GetTournamentChampionRewardsTooltip
`public static List<TooltipProperty> GetTournamentChampionRewardsTooltip(Hero hero,Town town)`

### GetCharacterTypeData
`public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character,bool isBig = false)`

### GetHeroHealthTooltip
`public static List<TooltipProperty> GetHeroHealthTooltip(Hero hero)`

### GetSiegeWallTooltip
`public static List<TooltipProperty> GetSiegeWallTooltip(int wallLevel,int wallHitpoints)`

### GetGovernorPerksTooltipForHero
`public static List<TooltipProperty> GetGovernorPerksTooltipForHero(Hero hero)`

### GetGovernorSelectionConfirmationPopupTexts
`public static ValueTuple<TextObject,TextObject> GetGovernorSelectionConfirmationPopupTexts(Hero currentGovernor,Hero newGovernor,Settlement settlement)`

### GetHeroGovernorEffectsTooltip
`public static List<TooltipProperty> GetHeroGovernorEffectsTooltip(Hero hero,Settlement settlement)`

### GetEncounterPartyMoraleTooltip
`public static List<TooltipProperty> GetEncounterPartyMoraleTooltip(List<MobileParty> parties)`

### GetCraftingTemplatePieceUnlockProgressHint
`public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)`

### GetWeaponFlagDetails
`public static List<ValueTuple<string,TextObject>> GetWeaponFlagDetails(WeaponFlags weaponFlags,CharacterObject character = null)`

### GetItemFlagDetails
`public static List<Tuple<string,TextObject>> GetItemFlagDetails(ItemFlags itemFlags)`

### GetItemUsageSetFlagDetails
`public static List<ValueTuple<string,TextObject>> GetItemUsageSetFlagDetails(ItemObject.ItemUsageSetFlags flags,CharacterObject character = null)`

### GetFlagDetailsForWeapon
`public static List<ValueTuple<string,TextObject>> GetFlagDetailsForWeapon(WeaponComponentData weapon,ItemObject.ItemUsageSetFlags itemUsageFlags,CharacterObject character = null)`

### GetFormattedItemPropertyText
`public static string GetFormattedItemPropertyText(float propertyValue,bool typeRequiresInteger)`

### GetCraftingHeroTooltip
`public static List<TooltipProperty> GetCraftingHeroTooltip(Hero hero,CraftingOrder order)`

### GetOrderCannotBeCompletedReasonTooltip
`public static List<TooltipProperty> GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order,ItemObject item)`

### GetCraftingOrderDisabledReasonTooltip
`public static List<TooltipProperty> GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck,CraftingOrder order)`

### GetOrdersDisabledReasonTooltip
`public static List<TooltipProperty> GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM> craftingOrders,Hero heroToCheck)`

### GetCraftingOrderMissingPropertyWarningText
`public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order,ItemObject craftedItem)`

### GetInventoryCharacterTooltip
`public static List<TooltipProperty> GetInventoryCharacterTooltip(Hero hero)`

### GetHeroOccupationName
`public static string GetHeroOccupationName(Hero hero)`

### GetCommaSeparatedText
`public static TextObject GetCommaSeparatedText(TextObject label,IEnumerable<TextObject> texts)`

### GetCommaNewlineSeparatedText
`public static TextObject GetCommaNewlineSeparatedText(TextObject label,IEnumerable<TextObject> texts)`

### GetHeroKingdomRank
`public static string GetHeroKingdomRank(Hero hero)`

### GetHeroRank
`public static string GetHeroRank(Hero hero)`

### GetSmithingDifficultyTooltip
`public static List<TooltipProperty> GetSmithingDifficultyTooltip()`

### IsSettlementInformationHidden
`public static bool IsSettlementInformationHidden(Settlement settlement,out TextObject disableReason)`

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero,out TextObject disableReason)`

### GetPartyNameplateText
`public static string GetPartyNameplateText(MobileParty party,bool includeAttachedParties)`

### GetValueChangeText
`public static string GetValueChangeText(float originalValue,float valueChange,string valueFormat = "F0")`

### GetUpgradeHint
`public static string GetUpgradeHint(int index,int numOfItems,int availableUpgrades,int upgradeCoinCost,bool hasRequiredPerk,PerkObject requiredPerk,CharacterObject character,TroopRosterElement troop,int partyGoldChangeAmount,bool areUpgradesDisabled)`

### GetStackModifierString
`public static string GetStackModifierString(TextObject allStackText,TextObject fiveStackText,bool canFiveStack)`

### ConvertToHexColor
`public static string ConvertToHexColor(uint color)`

### GetMapScreenActionIsEnabledWithReason
`public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)`

### GetCanManageCurrentArmyWithReason
`public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)`

### GetClanSupportDisableReasonString
`public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence,bool isTargetMainClan,bool isMainClanMercenary)`

### GetClanExpelDisableReasonString
`public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence,bool isTargetMainClan,bool isTargetRulingClan,bool isMainClanMercenary)`

### GetArmyDisbandDisableReasonString
`public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence,bool isArmyInAnyEvent,bool isPlayerClanMercenary,bool isPlayerInThisArmy)`

### GetCreateNewPartyReasonString
`public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots,bool haveAvailableHero)`

### GetCraftingDisableReasonString
`public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)`

### GetAddFocusHintString
`public static string GetAddFocusHintString(bool playerHasEnoughPoints,bool isMaxedSkill,int currentFocusAmount)`

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect,int skillLevel)`

### GetMobilePartyBehaviorText
`public static string GetMobilePartyBehaviorText(MobileParty party)`

### GetHeroBehaviorText
`public static string GetHeroBehaviorText(Hero hero,ITeleportationCampaignBehavior teleportationBehavior = null)`

### GetPartyLocationText
`public static string GetPartyLocationText(MobileParty mobileParty)`

### GetTeleportingLeaderHero
`public static Hero GetTeleportingLeaderHero(MobileParty party,ITeleportationCampaignBehavior teleportationBehavior)`

### GetTeleportingGovernor
`public static Hero GetTeleportingGovernor(Settlement settlement,ITeleportationCampaignBehavior teleportationBehavior)`

### GetHeroRelationToHeroText
`public static TextObject GetHeroRelationToHeroText(Hero queriedHero,Hero baseHero,bool uppercaseFirst)`

### GetAbbreviatedValueTextFromValue
`public static string GetAbbreviatedValueTextFromValue(int valueAmount)`

### GetPartyDistanceByTimeText
`public static string GetPartyDistanceByTimeText(float distance,float speed)`

### GetPartyDistanceByTimeTextAbbreviated
`public static string GetPartyDistanceByTimeTextAbbreviated(float distance,float speed)`

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character,bool useCivilian = false)`

### GetTraitNameText
`public static string GetTraitNameText(TraitObject traitObject,Hero hero)`

### GetTraitTooltipText
`public static string GetTraitTooltipText(TraitObject traitObject,int traitValue)`

### GetTraitEffectTooltip
`public static List<TooltipProperty> GetTraitEffectTooltip(TraitObject traitObject,int traitValue)`

### GetTextForRole
`public static string GetTextForRole(PartyRole role)`

### GetAttributeTypeSortIndex
`public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)`

### GetSkillObjectTypeSortIndex
`public static int GetSkillObjectTypeSortIndex(SkillObject skill)`

### GetSkillMeshId
`public static string GetSkillMeshId(SkillObject skill,bool useSmallestVariation = true)`

### GetIsNavalSkill
`public static bool GetIsNavalSkill(SkillObject skill)`

### GetHeroCompareSortIndex
`public static int GetHeroCompareSortIndex(Hero x,Hero y)`

### GetHeroClanRoleText
`public static string GetHeroClanRoleText(Hero hero,Clan clan)`

### GetItemObjectTypeSortIndex
`public static int GetItemObjectTypeSortIndex(ItemObject item)`

### GetItemLockStringID
`public static string GetItemLockStringID(EquipmentElement equipmentElement)`

### GetTroopLockStringID
`public static string GetTroopLockStringID(TroopRosterElement rosterElement)`

### GetQuestStateOfHero
`public static List<ValueTuple<CampaignUIHelper.IssueQuestFlags,TextObject,TextObject>> GetQuestStateOfHero(Hero queriedHero)`

### GetQuestExplanationOfHero
`public static string GetQuestExplanationOfHero(CampaignUIHelper.IssueQuestFlags questType)`

### GetQuestsRelatedToHero
`public static List<QuestBase> GetQuestsRelatedToHero(Hero hero)`

### GetQuestsRelatedToParty
`public static List<QuestBase> GetQuestsRelatedToParty(MobileParty party)`

### GetQuestsRelatedToSettlement
`public static List<ValueTuple<bool,QuestBase>> GetQuestsRelatedToSettlement(Settlement settlement)`

### IsQuestRelatedToSettlement
`public static bool IsQuestRelatedToSettlement(QuestBase quest,Settlement settlement)`

### GetIssueType
`public static CampaignUIHelper.IssueQuestFlags GetIssueType(IssueBase issue)`

### GetQuestType
`public static CampaignUIHelper.IssueQuestFlags GetQuestType(QuestBase quest,Hero queriedQuestGiver)`

### GetHeroTraits
`public static IEnumerable<TraitObject> GetHeroTraits()`

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

### FloatToString
`public static string FloatToString(float x)`

### IsStringApplicableForHeroName
`public static Tuple<bool,string> IsStringApplicableForHeroName(string name)`

### IsStringApplicableForItemName
`public static Tuple<bool,TextObject> IsStringApplicableForItemName(string name)`

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

### GetChildrenAndGrandchildrenOfHero
`public static List<Hero> GetChildrenAndGrandchildrenOfHero(Hero hero)`

## See Also

- [Section index](../)
