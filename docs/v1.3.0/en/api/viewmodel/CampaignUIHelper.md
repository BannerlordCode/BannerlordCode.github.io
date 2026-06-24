<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignUIHelper`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignUIHelper

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignUIHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

`CampaignUIHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CampaignUIHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTooltipForAccumulatingProperty
`public static List<TooltipProperty> GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `tooltip for accumulating property`.

### GetTooltipForAccumulatingPropertyWithResult
`public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `tooltip for accumulating property with result`.

### GetTooltipForgProperty
`public static List<TooltipProperty> GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `tooltip forg property`.

### GetTownWallsTooltip
`public static string GetTownWallsTooltip(Town town)`

**Purpose:** Gets the current value of `town walls tooltip`.

### GetVillageMilitiaTooltip
`public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)`

**Purpose:** Gets the current value of `village militia tooltip`.

### GetTownMilitiaTooltip
`public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)`

**Purpose:** Gets the current value of `town militia tooltip`.

### GetTownFoodTooltip
`public static List<TooltipProperty> GetTownFoodTooltip(Town town)`

**Purpose:** Gets the current value of `town food tooltip`.

### GetTownLoyaltyTooltip
`public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)`

**Purpose:** Gets the current value of `town loyalty tooltip`.

### GetTownProsperityTooltip
`public static List<TooltipProperty> GetTownProsperityTooltip(Town town)`

**Purpose:** Gets the current value of `town prosperity tooltip`.

### GetTownDailyProductionTooltip
`public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)`

**Purpose:** Gets the current value of `town daily production tooltip`.

### GetTownSecurityTooltip
`public static List<TooltipProperty> GetTownSecurityTooltip(Town town)`

**Purpose:** Gets the current value of `town security tooltip`.

### GetTownPatrolTooltip
`public static List<TooltipProperty> GetTownPatrolTooltip(Town town)`

**Purpose:** Gets the current value of `town patrol tooltip`.

### GetVillageProsperityTooltip
`public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)`

**Purpose:** Gets the current value of `village prosperity tooltip`.

### GetTownGarrisonTooltip
`public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)`

**Purpose:** Gets the current value of `town garrison tooltip`.

### GetPartyTroopSizeLimitTooltip
`public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)`

**Purpose:** Gets the current value of `party troop size limit tooltip`.

### GetPartyPrisonerSizeLimitTooltip
`public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)`

**Purpose:** Gets the current value of `party prisoner size limit tooltip`.

### GetUsedHorsesTooltip
`public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>> usedUpgradeHorsesHistory)`

**Purpose:** Gets the current value of `used horses tooltip`.

### GetArmyCohesionTooltip
`public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)`

**Purpose:** Gets the current value of `army cohesion tooltip`.

### GetArmyManCountTooltip
`public static List<TooltipProperty> GetArmyManCountTooltip(Army army)`

**Purpose:** Gets the current value of `army man count tooltip`.

### GetDaysUntilNoFood
`public static string GetDaysUntilNoFood(float totalFood, float foodChange)`

**Purpose:** Gets the current value of `days until no food`.

### GetSettlementPropertyTooltip
`public static List<TooltipProperty> GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `settlement property tooltip`.

### GetSettlementPropertyTooltipWithResult
`public static List<TooltipProperty> GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)`

**Purpose:** Gets the current value of `settlement property tooltip with result`.

### GetArmyFoodTooltip
`public static List<TooltipProperty> GetArmyFoodTooltip(Army army)`

**Purpose:** Gets the current value of `army food tooltip`.

### GetClanWealthStatusText
`public static string GetClanWealthStatusText(Clan clan)`

**Purpose:** Gets the current value of `clan wealth status text`.

### GetClanProsperityTooltip
`public static List<TooltipProperty> GetClanProsperityTooltip(Clan clan)`

**Purpose:** Gets the current value of `clan prosperity tooltip`.

### GetTruceOwnedSettlementsTooltip
`public static List<TooltipProperty> GetTruceOwnedSettlementsTooltip(List<Settlement> settlements, TextObject factionName, bool isTown)`

**Purpose:** Gets the current value of `truce owned settlements tooltip`.

### GetWarPrisonersTooltip
`public static List<TooltipProperty> GetWarPrisonersTooltip(List<Hero> capturedPrisoners, TextObject factionName)`

**Purpose:** Gets the current value of `war prisoners tooltip`.

### GetClanStrengthTooltip
`public static List<TooltipProperty> GetClanStrengthTooltip(Clan clan)`

**Purpose:** Gets the current value of `clan strength tooltip`.

### GetCrimeTooltip
`public static List<TooltipProperty> GetCrimeTooltip(Settlement settlement)`

**Purpose:** Gets the current value of `crime tooltip`.

### GetInfluenceTooltip
`public static List<TooltipProperty> GetInfluenceTooltip(Clan clan)`

**Purpose:** Gets the current value of `influence tooltip`.

### GetClanRenownTooltip
`public static List<TooltipProperty> GetClanRenownTooltip(Clan clan)`

**Purpose:** Gets the current value of `clan renown tooltip`.

### GetDenarTooltip
`public static TooltipTriggerVM GetDenarTooltip()`

**Purpose:** Gets the current value of `denar tooltip`.

### GetPartyMoraleTooltip
`public static List<TooltipProperty> GetPartyMoraleTooltip(MobileParty mainParty)`

**Purpose:** Gets the current value of `party morale tooltip`.

### GetPartyHealthTooltip
`public static List<TooltipProperty> GetPartyHealthTooltip(PartyBase party)`

**Purpose:** Gets the current value of `party health tooltip`.

### GetPlayerHitpointsTooltip
`public static List<TooltipProperty> GetPlayerHitpointsTooltip()`

**Purpose:** Gets the current value of `player hitpoints tooltip`.

### GetPartyFoodTooltip
`public static List<TooltipProperty> GetPartyFoodTooltip(MobileParty mainParty)`

**Purpose:** Gets the current value of `party food tooltip`.

### GetPartySpeedTooltip
`public static List<TooltipProperty> GetPartySpeedTooltip(bool considerArmySpeed)`

**Purpose:** Gets the current value of `party speed tooltip`.

### GetPartyWageTooltip
`public static List<TooltipProperty> GetPartyWageTooltip(MobileParty mobileParty)`

**Purpose:** Gets the current value of `party wage tooltip`.

### GetViewDistanceTooltip
`public static List<TooltipProperty> GetViewDistanceTooltip()`

**Purpose:** Gets the current value of `view distance tooltip`.

### GetMainPartyHealthTooltip
`public static List<TooltipProperty> GetMainPartyHealthTooltip()`

**Purpose:** Gets the current value of `main party health tooltip`.

### GetPartyInventoryCapacityTooltip
`public static List<TooltipProperty> GetPartyInventoryCapacityTooltip(MobileParty party)`

**Purpose:** Gets the current value of `party inventory capacity tooltip`.

### GetPartyInventoryWeightTooltip
`public static List<TooltipProperty> GetPartyInventoryWeightTooltip(MobileParty party)`

**Purpose:** Gets the current value of `party inventory weight tooltip`.

### GetPerkEffectText
`public static List<TooltipProperty> GetPerkEffectText(PerkObject perk, bool isActive)`

**Purpose:** Gets the current value of `perk effect text`.

### GetPerkRoleText
`public static TextObject GetPerkRoleText(PerkObject perk, bool getSecondary)`

**Purpose:** Gets the current value of `perk role text`.

### GetCombinedPerkRoleText
`public static TextObject GetCombinedPerkRoleText(PerkObject perk)`

**Purpose:** Gets the current value of `combined perk role text`.

### GetSiegeMachineTooltip
`public static List<TooltipProperty> GetSiegeMachineTooltip(SiegeEngineType engineType, bool showDescription = true, int hoursUntilCompletion = 0)`

**Purpose:** Gets the current value of `siege machine tooltip`.

### GetSiegeMachineName
`public static string GetSiegeMachineName(SiegeEngineType engineType)`

**Purpose:** Gets the current value of `siege machine name`.

### GetSiegeMachineNameWithDesctiption
`public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)`

**Purpose:** Gets the current value of `siege machine name with desctiption`.

### GetTroopConformityTooltip
`public static List<TooltipProperty> GetTroopConformityTooltip(TroopRosterElement troop)`

**Purpose:** Gets the current value of `troop conformity tooltip`.

### GetLearningRateTooltip
`public static List<TooltipProperty> GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill)`

**Purpose:** Gets the current value of `learning rate tooltip`.

### GetTroopXPTooltip
`public static List<TooltipProperty> GetTroopXPTooltip(TroopRosterElement troop)`

**Purpose:** Gets the current value of `troop x p tooltip`.

### GetLearningLimitTooltip
`public static List<TooltipProperty> GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill)`

**Purpose:** Gets the current value of `learning limit tooltip`.

### GetSettlementConsumptionTooltip
`public static List<TooltipProperty> GetSettlementConsumptionTooltip(Settlement settlement)`

**Purpose:** Gets the current value of `settlement consumption tooltip`.

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(CharacterObject character, bool isBig = false)`

**Purpose:** Gets the current value of `character tier data`.

### GetSettlementProductionTooltip
`public static List<TooltipProperty> GetSettlementProductionTooltip(Settlement settlement)`

**Purpose:** Gets the current value of `settlement production tooltip`.

### GetHintTextFromReasons
`public static string GetHintTextFromReasons(List<TextObject> reasons)`

**Purpose:** Gets the current value of `hint text from reasons`.

### MergeTextObjectsWithNewline
`public static string MergeTextObjectsWithNewline(List<TextObject> textObjects)`

**Purpose:** Handles logic related to `merge text objects with newline`.

### GetHoursAndDaysTextFromHourValue
`public static TextObject GetHoursAndDaysTextFromHourValue(int hours)`

**Purpose:** Gets the current value of `hours and days text from hour value`.

### GetTeleportationDelayText
`public static TextObject GetTeleportationDelayText(Hero hero, PartyBase target)`

**Purpose:** Gets the current value of `teleportation delay text`.

### GetTimeOfDayAndResetCameraTooltip
`public static List<TooltipProperty> GetTimeOfDayAndResetCameraTooltip()`

**Purpose:** Gets the current value of `time of day and reset camera tooltip`.

### GetTournamentChampionRewardsTooltip
`public static List<TooltipProperty> GetTournamentChampionRewardsTooltip(Hero hero, Town town)`

**Purpose:** Gets the current value of `tournament champion rewards tooltip`.

### GetCharacterTypeData
`public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character, bool isBig = false)`

**Purpose:** Gets the current value of `character type data`.

### GetHeroHealthTooltip
`public static List<TooltipProperty> GetHeroHealthTooltip(Hero hero)`

**Purpose:** Gets the current value of `hero health tooltip`.

### GetSiegeWallTooltip
`public static List<TooltipProperty> GetSiegeWallTooltip(int wallLevel, int wallHitpoints)`

**Purpose:** Gets the current value of `siege wall tooltip`.

### GetGovernorPerksTooltipForHero
`public static List<TooltipProperty> GetGovernorPerksTooltipForHero(Hero hero)`

**Purpose:** Gets the current value of `governor perks tooltip for hero`.

### GetGovernorSelectionConfirmationPopupTexts
`public static ValueTuple<TextObject, TextObject> GetGovernorSelectionConfirmationPopupTexts(Hero currentGovernor, Hero newGovernor, Settlement settlement)`

**Purpose:** Gets the current value of `governor selection confirmation popup texts`.

### GetHeroGovernorEffectsTooltip
`public static List<TooltipProperty> GetHeroGovernorEffectsTooltip(Hero hero, Settlement settlement)`

**Purpose:** Gets the current value of `hero governor effects tooltip`.

### GetEncounterPartyMoraleTooltip
`public static List<TooltipProperty> GetEncounterPartyMoraleTooltip(List<MobileParty> parties)`

**Purpose:** Gets the current value of `encounter party morale tooltip`.

### GetCraftingTemplatePieceUnlockProgressHint
`public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)`

**Purpose:** Gets the current value of `crafting template piece unlock progress hint`.

### GetWeaponFlagDetails
`public static List<ValueTuple<string, TextObject>> GetWeaponFlagDetails(WeaponFlags weaponFlags, CharacterObject character = null)`

**Purpose:** Gets the current value of `weapon flag details`.

### GetItemFlagDetails
`public static List<Tuple<string, TextObject>> GetItemFlagDetails(ItemFlags itemFlags)`

**Purpose:** Gets the current value of `item flag details`.

### GetItemUsageSetFlagDetails
`public static List<ValueTuple<string, TextObject>> GetItemUsageSetFlagDetails(ItemObject.ItemUsageSetFlags flags, CharacterObject character = null)`

**Purpose:** Gets the current value of `item usage set flag details`.

### GetFlagDetailsForWeapon
`public static List<ValueTuple<string, TextObject>> GetFlagDetailsForWeapon(WeaponComponentData weapon, ItemObject.ItemUsageSetFlags itemUsageFlags, CharacterObject character = null)`

**Purpose:** Gets the current value of `flag details for weapon`.

### GetFormattedItemPropertyText
`public static string GetFormattedItemPropertyText(float propertyValue, bool typeRequiresInteger)`

**Purpose:** Gets the current value of `formatted item property text`.

### GetCraftingHeroTooltip
`public static List<TooltipProperty> GetCraftingHeroTooltip(Hero hero, CraftingOrder order)`

**Purpose:** Gets the current value of `crafting hero tooltip`.

### GetOrderCannotBeCompletedReasonTooltip
`public static List<TooltipProperty> GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order, ItemObject item)`

**Purpose:** Gets the current value of `order cannot be completed reason tooltip`.

### GetCraftingOrderDisabledReasonTooltip
`public static List<TooltipProperty> GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck, CraftingOrder order)`

**Purpose:** Gets the current value of `crafting order disabled reason tooltip`.

### GetOrdersDisabledReasonTooltip
`public static List<TooltipProperty> GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM> craftingOrders, Hero heroToCheck)`

**Purpose:** Gets the current value of `orders disabled reason tooltip`.

### GetCraftingOrderMissingPropertyWarningText
`public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order, ItemObject craftedItem)`

**Purpose:** Gets the current value of `crafting order missing property warning text`.

### GetInventoryCharacterTooltip
`public static List<TooltipProperty> GetInventoryCharacterTooltip(Hero hero)`

**Purpose:** Gets the current value of `inventory character tooltip`.

### GetHeroOccupationName
`public static string GetHeroOccupationName(Hero hero)`

**Purpose:** Gets the current value of `hero occupation name`.

### GetCommaSeparatedText
`public static TextObject GetCommaSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**Purpose:** Gets the current value of `comma separated text`.

### GetCommaNewlineSeparatedText
`public static TextObject GetCommaNewlineSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**Purpose:** Gets the current value of `comma newline separated text`.

### GetHeroKingdomRank
`public static string GetHeroKingdomRank(Hero hero)`

**Purpose:** Gets the current value of `hero kingdom rank`.

### GetHeroRank
`public static string GetHeroRank(Hero hero)`

**Purpose:** Gets the current value of `hero rank`.

### IsSettlementInformationHidden
`public static bool IsSettlementInformationHidden(Settlement settlement, out TextObject disableReason)`

**Purpose:** Handles logic related to `is settlement information hidden`.

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**Purpose:** Handles logic related to `is hero information hidden`.

### GetPartyNameplateText
`public static string GetPartyNameplateText(MobileParty party, bool includeAttachedParties)`

**Purpose:** Gets the current value of `party nameplate text`.

### GetPartyNameplateText
`public static string GetPartyNameplateText(PartyBase party)`

**Purpose:** Gets the current value of `party nameplate text`.

### GetValueChangeText
`public static string GetValueChangeText(float originalValue, float valueChange, string valueFormat = "F0")`

**Purpose:** Gets the current value of `value change text`.

### GetUpgradeHint
`public static string GetUpgradeHint(int index, int numOfItems, int availableUpgrades, int upgradeCoinCost, bool hasRequiredPerk, PerkObject requiredPerk, CharacterObject character, TroopRosterElement troop, int partyGoldChangeAmount, bool areUpgradesDisabled)`

**Purpose:** Gets the current value of `upgrade hint`.

### GetStackModifierString
`public static string GetStackModifierString(TextObject allStackText, TextObject fiveStackText, bool canFiveStack)`

**Purpose:** Gets the current value of `stack modifier string`.

### ConvertToHexColor
`public static string ConvertToHexColor(uint color)`

**Purpose:** Handles logic related to `convert to hex color`.

### GetMapScreenActionIsEnabledWithReason
`public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)`

**Purpose:** Gets the current value of `map screen action is enabled with reason`.

### GetCanManageCurrentArmyWithReason
`public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)`

**Purpose:** Gets the current value of `can manage current army with reason`.

### GetClanSupportDisableReasonString
`public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isMainClanMercenary)`

**Purpose:** Gets the current value of `clan support disable reason string`.

### GetClanExpelDisableReasonString
`public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isTargetRulingClan, bool isMainClanMercenary)`

**Purpose:** Gets the current value of `clan expel disable reason string`.

### GetArmyDisbandDisableReasonString
`public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence, bool isArmyInAnyEvent, bool isPlayerClanMercenary, bool isPlayerInThisArmy)`

**Purpose:** Gets the current value of `army disband disable reason string`.

### GetCreateNewPartyReasonString
`public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots, bool haveAvailableHero)`

**Purpose:** Gets the current value of `create new party reason string`.

### GetCraftingDisableReasonString
`public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)`

**Purpose:** Gets the current value of `crafting disable reason string`.

### GetAddFocusHintString
`public static string GetAddFocusHintString(bool playerHasEnoughPoints, bool isMaxedSkill, int currentFocusAmount)`

**Purpose:** Gets the current value of `add focus hint string`.

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**Purpose:** Gets the current value of `skill effect text`.

### GetMobilePartyBehaviorText
`public static string GetMobilePartyBehaviorText(MobileParty party)`

**Purpose:** Gets the current value of `mobile party behavior text`.

### GetHeroBehaviorText
`public static string GetHeroBehaviorText(Hero hero, ITeleportationCampaignBehavior teleportationBehavior = null)`

**Purpose:** Gets the current value of `hero behavior text`.

### GetPartyLocationText
`public static string GetPartyLocationText(MobileParty mobileParty)`

**Purpose:** Gets the current value of `party location text`.

### GetTeleportingLeaderHero
`public static Hero GetTeleportingLeaderHero(MobileParty party, ITeleportationCampaignBehavior teleportationBehavior)`

**Purpose:** Gets the current value of `teleporting leader hero`.

### GetTeleportingGovernor
`public static Hero GetTeleportingGovernor(Settlement settlement, ITeleportationCampaignBehavior teleportationBehavior)`

**Purpose:** Gets the current value of `teleporting governor`.

### GetHeroRelationToHeroText
`public static TextObject GetHeroRelationToHeroText(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**Purpose:** Gets the current value of `hero relation to hero text`.

### GetAbbreviatedValueTextFromValue
`public static string GetAbbreviatedValueTextFromValue(int valueAmount)`

**Purpose:** Gets the current value of `abbreviated value text from value`.

### GetPartyDistanceByTimeText
`public static string GetPartyDistanceByTimeText(float distance, float speed)`

**Purpose:** Gets the current value of `party distance by time text`.

### GetPartyDistanceByTimeTextAbbreviated
`public static string GetPartyDistanceByTimeTextAbbreviated(float distance, float speed)`

**Purpose:** Gets the current value of `party distance by time text abbreviated`.

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**Purpose:** Gets the current value of `character code`.

### GetTraitNameText
`public static string GetTraitNameText(TraitObject traitObject, Hero hero)`

**Purpose:** Gets the current value of `trait name text`.

### GetTraitTooltipText
`public static string GetTraitTooltipText(TraitObject traitObject, int traitValue)`

**Purpose:** Gets the current value of `trait tooltip text`.

### GetTextForRole
`public static string GetTextForRole(PartyRole role)`

**Purpose:** Gets the current value of `text for role`.

### GetAttributeTypeSortIndex
`public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)`

**Purpose:** Gets the current value of `attribute type sort index`.

### GetSkillObjectTypeSortIndex
`public static int GetSkillObjectTypeSortIndex(SkillObject skill)`

**Purpose:** Gets the current value of `skill object type sort index`.

### GetSkillMeshId
`public static string GetSkillMeshId(SkillObject skill, bool useSmallestVariation = true)`

**Purpose:** Gets the current value of `skill mesh id`.

### GetIsNavalSkill
`public static bool GetIsNavalSkill(SkillObject skill)`

**Purpose:** Gets the current value of `is naval skill`.

### GetHeroCompareSortIndex
`public static int GetHeroCompareSortIndex(Hero x, Hero y)`

**Purpose:** Gets the current value of `hero compare sort index`.

### GetHeroClanRoleText
`public static string GetHeroClanRoleText(Hero hero, Clan clan)`

**Purpose:** Gets the current value of `hero clan role text`.

### GetItemObjectTypeSortIndex
`public static int GetItemObjectTypeSortIndex(ItemObject item)`

**Purpose:** Gets the current value of `item object type sort index`.

### GetItemLockStringID
`public static string GetItemLockStringID(EquipmentElement equipmentElement)`

**Purpose:** Gets the current value of `item lock string i d`.

### GetTroopLockStringID
`public static string GetTroopLockStringID(TroopRosterElement rosterElement)`

**Purpose:** Gets the current value of `troop lock string i d`.

### GetQuestStateOfHero
`public static List<ValueTuple<CampaignUIHelper.IssueQuestFlags, TextObject, TextObject>> GetQuestStateOfHero(Hero queriedHero)`

**Purpose:** Gets the current value of `quest state of hero`.

### GetQuestExplanationOfHero
`public static string GetQuestExplanationOfHero(CampaignUIHelper.IssueQuestFlags questType)`

**Purpose:** Gets the current value of `quest explanation of hero`.

### GetQuestsRelatedToHero
`public static List<QuestBase> GetQuestsRelatedToHero(Hero hero)`

**Purpose:** Gets the current value of `quests related to hero`.

### GetQuestsRelatedToParty
`public static List<QuestBase> GetQuestsRelatedToParty(MobileParty party)`

**Purpose:** Gets the current value of `quests related to party`.

### GetQuestsRelatedToSettlement
`public static List<ValueTuple<bool, QuestBase>> GetQuestsRelatedToSettlement(Settlement settlement)`

**Purpose:** Gets the current value of `quests related to settlement`.

### IsQuestRelatedToSettlement
`public static bool IsQuestRelatedToSettlement(QuestBase quest, Settlement settlement)`

**Purpose:** Handles logic related to `is quest related to settlement`.

### GetIssueType
`public static CampaignUIHelper.IssueQuestFlags GetIssueType(IssueBase issue)`

**Purpose:** Gets the current value of `issue type`.

### GetQuestType
`public static CampaignUIHelper.IssueQuestFlags GetQuestType(QuestBase quest, Hero queriedQuestGiver)`

**Purpose:** Gets the current value of `quest type`.

### GetHeroTraits
`public static IEnumerable<TraitObject> GetHeroTraits()`

**Purpose:** Gets the current value of `hero traits`.

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**Purpose:** Handles logic related to `is item usage applicable`.

### FloatToString
`public static string FloatToString(float x)`

**Purpose:** Handles logic related to `float to string`.

### IsStringApplicableForHeroName
`public static Tuple<bool, string> IsStringApplicableForHeroName(string name)`

**Purpose:** Handles logic related to `is string applicable for hero name`.

### IsStringApplicableForItemName
`public static Tuple<bool, TextObject> IsStringApplicableForItemName(string name)`

**Purpose:** Handles logic related to `is string applicable for item name`.

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**Purpose:** Gets the current value of `visual party leader`.

### GetChildrenAndGrandchildrenOfHero
`public static List<Hero> GetChildrenAndGrandchildrenOfHero(Hero hero)`

**Purpose:** Gets the current value of `children and grandchildren of hero`.

### Compare
`public int Compare(CharacterAttribute x, CharacterAttribute y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public int Compare(SkillObject x, SkillObject y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public int Compare(MobileParty x, MobileParty y)`

**Purpose:** Handles logic related to `compare`.

### Equals
`public bool Equals(ValueTuple<ItemCategory, int> x, ValueTuple<ItemCategory, int> y)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public int GetHashCode(ValueTuple<ItemCategory, int> obj)`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
CampaignUIHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)