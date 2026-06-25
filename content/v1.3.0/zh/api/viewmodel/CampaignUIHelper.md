---
title: "CampaignUIHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignUIHelper`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignUIHelper

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignUIHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## 概述

`CampaignUIHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CampaignUIHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTooltipForAccumulatingProperty
`public static List<TooltipProperty> GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `tooltip for accumulating property` 的当前值。

### GetTooltipForAccumulatingPropertyWithResult
`public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `tooltip for accumulating property with result` 的当前值。

### GetTooltipForgProperty
`public static List<TooltipProperty> GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `tooltip forg property` 的当前值。

### GetTownWallsTooltip
`public static string GetTownWallsTooltip(Town town)`

**用途 / Purpose:** 获取 `town walls tooltip` 的当前值。

### GetVillageMilitiaTooltip
`public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)`

**用途 / Purpose:** 获取 `village militia tooltip` 的当前值。

### GetTownMilitiaTooltip
`public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)`

**用途 / Purpose:** 获取 `town militia tooltip` 的当前值。

### GetTownFoodTooltip
`public static List<TooltipProperty> GetTownFoodTooltip(Town town)`

**用途 / Purpose:** 获取 `town food tooltip` 的当前值。

### GetTownLoyaltyTooltip
`public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)`

**用途 / Purpose:** 获取 `town loyalty tooltip` 的当前值。

### GetTownProsperityTooltip
`public static List<TooltipProperty> GetTownProsperityTooltip(Town town)`

**用途 / Purpose:** 获取 `town prosperity tooltip` 的当前值。

### GetTownDailyProductionTooltip
`public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)`

**用途 / Purpose:** 获取 `town daily production tooltip` 的当前值。

### GetTownSecurityTooltip
`public static List<TooltipProperty> GetTownSecurityTooltip(Town town)`

**用途 / Purpose:** 获取 `town security tooltip` 的当前值。

### GetTownPatrolTooltip
`public static List<TooltipProperty> GetTownPatrolTooltip(Town town)`

**用途 / Purpose:** 获取 `town patrol tooltip` 的当前值。

### GetVillageProsperityTooltip
`public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)`

**用途 / Purpose:** 获取 `village prosperity tooltip` 的当前值。

### GetTownGarrisonTooltip
`public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)`

**用途 / Purpose:** 获取 `town garrison tooltip` 的当前值。

### GetPartyTroopSizeLimitTooltip
`public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)`

**用途 / Purpose:** 获取 `party troop size limit tooltip` 的当前值。

### GetPartyPrisonerSizeLimitTooltip
`public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)`

**用途 / Purpose:** 获取 `party prisoner size limit tooltip` 的当前值。

### GetUsedHorsesTooltip
`public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>> usedUpgradeHorsesHistory)`

**用途 / Purpose:** 获取 `used horses tooltip` 的当前值。

### GetArmyCohesionTooltip
`public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)`

**用途 / Purpose:** 获取 `army cohesion tooltip` 的当前值。

### GetArmyManCountTooltip
`public static List<TooltipProperty> GetArmyManCountTooltip(Army army)`

**用途 / Purpose:** 获取 `army man count tooltip` 的当前值。

### GetDaysUntilNoFood
`public static string GetDaysUntilNoFood(float totalFood, float foodChange)`

**用途 / Purpose:** 获取 `days until no food` 的当前值。

### GetSettlementPropertyTooltip
`public static List<TooltipProperty> GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `settlement property tooltip` 的当前值。

### GetSettlementPropertyTooltipWithResult
`public static List<TooltipProperty> GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `settlement property tooltip with result` 的当前值。

### GetArmyFoodTooltip
`public static List<TooltipProperty> GetArmyFoodTooltip(Army army)`

**用途 / Purpose:** 获取 `army food tooltip` 的当前值。

### GetClanWealthStatusText
`public static string GetClanWealthStatusText(Clan clan)`

**用途 / Purpose:** 获取 `clan wealth status text` 的当前值。

### GetClanProsperityTooltip
`public static List<TooltipProperty> GetClanProsperityTooltip(Clan clan)`

**用途 / Purpose:** 获取 `clan prosperity tooltip` 的当前值。

### GetTruceOwnedSettlementsTooltip
`public static List<TooltipProperty> GetTruceOwnedSettlementsTooltip(List<Settlement> settlements, TextObject factionName, bool isTown)`

**用途 / Purpose:** 获取 `truce owned settlements tooltip` 的当前值。

### GetWarPrisonersTooltip
`public static List<TooltipProperty> GetWarPrisonersTooltip(List<Hero> capturedPrisoners, TextObject factionName)`

**用途 / Purpose:** 获取 `war prisoners tooltip` 的当前值。

### GetClanStrengthTooltip
`public static List<TooltipProperty> GetClanStrengthTooltip(Clan clan)`

**用途 / Purpose:** 获取 `clan strength tooltip` 的当前值。

### GetCrimeTooltip
`public static List<TooltipProperty> GetCrimeTooltip(Settlement settlement)`

**用途 / Purpose:** 获取 `crime tooltip` 的当前值。

### GetInfluenceTooltip
`public static List<TooltipProperty> GetInfluenceTooltip(Clan clan)`

**用途 / Purpose:** 获取 `influence tooltip` 的当前值。

### GetClanRenownTooltip
`public static List<TooltipProperty> GetClanRenownTooltip(Clan clan)`

**用途 / Purpose:** 获取 `clan renown tooltip` 的当前值。

### GetDenarTooltip
`public static TooltipTriggerVM GetDenarTooltip()`

**用途 / Purpose:** 获取 `denar tooltip` 的当前值。

### GetPartyMoraleTooltip
`public static List<TooltipProperty> GetPartyMoraleTooltip(MobileParty mainParty)`

**用途 / Purpose:** 获取 `party morale tooltip` 的当前值。

### GetPartyHealthTooltip
`public static List<TooltipProperty> GetPartyHealthTooltip(PartyBase party)`

**用途 / Purpose:** 获取 `party health tooltip` 的当前值。

### GetPlayerHitpointsTooltip
`public static List<TooltipProperty> GetPlayerHitpointsTooltip()`

**用途 / Purpose:** 获取 `player hitpoints tooltip` 的当前值。

### GetPartyFoodTooltip
`public static List<TooltipProperty> GetPartyFoodTooltip(MobileParty mainParty)`

**用途 / Purpose:** 获取 `party food tooltip` 的当前值。

### GetPartySpeedTooltip
`public static List<TooltipProperty> GetPartySpeedTooltip(bool considerArmySpeed)`

**用途 / Purpose:** 获取 `party speed tooltip` 的当前值。

### GetPartyWageTooltip
`public static List<TooltipProperty> GetPartyWageTooltip(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `party wage tooltip` 的当前值。

### GetViewDistanceTooltip
`public static List<TooltipProperty> GetViewDistanceTooltip()`

**用途 / Purpose:** 获取 `view distance tooltip` 的当前值。

### GetMainPartyHealthTooltip
`public static List<TooltipProperty> GetMainPartyHealthTooltip()`

**用途 / Purpose:** 获取 `main party health tooltip` 的当前值。

### GetPartyInventoryCapacityTooltip
`public static List<TooltipProperty> GetPartyInventoryCapacityTooltip(MobileParty party)`

**用途 / Purpose:** 获取 `party inventory capacity tooltip` 的当前值。

### GetPartyInventoryWeightTooltip
`public static List<TooltipProperty> GetPartyInventoryWeightTooltip(MobileParty party)`

**用途 / Purpose:** 获取 `party inventory weight tooltip` 的当前值。

### GetPerkEffectText
`public static List<TooltipProperty> GetPerkEffectText(PerkObject perk, bool isActive)`

**用途 / Purpose:** 获取 `perk effect text` 的当前值。

### GetPerkRoleText
`public static TextObject GetPerkRoleText(PerkObject perk, bool getSecondary)`

**用途 / Purpose:** 获取 `perk role text` 的当前值。

### GetCombinedPerkRoleText
`public static TextObject GetCombinedPerkRoleText(PerkObject perk)`

**用途 / Purpose:** 获取 `combined perk role text` 的当前值。

### GetSiegeMachineTooltip
`public static List<TooltipProperty> GetSiegeMachineTooltip(SiegeEngineType engineType, bool showDescription = true, int hoursUntilCompletion = 0)`

**用途 / Purpose:** 获取 `siege machine tooltip` 的当前值。

### GetSiegeMachineName
`public static string GetSiegeMachineName(SiegeEngineType engineType)`

**用途 / Purpose:** 获取 `siege machine name` 的当前值。

### GetSiegeMachineNameWithDesctiption
`public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)`

**用途 / Purpose:** 获取 `siege machine name with desctiption` 的当前值。

### GetTroopConformityTooltip
`public static List<TooltipProperty> GetTroopConformityTooltip(TroopRosterElement troop)`

**用途 / Purpose:** 获取 `troop conformity tooltip` 的当前值。

### GetLearningRateTooltip
`public static List<TooltipProperty> GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill)`

**用途 / Purpose:** 获取 `learning rate tooltip` 的当前值。

### GetTroopXPTooltip
`public static List<TooltipProperty> GetTroopXPTooltip(TroopRosterElement troop)`

**用途 / Purpose:** 获取 `troop x p tooltip` 的当前值。

### GetLearningLimitTooltip
`public static List<TooltipProperty> GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill)`

**用途 / Purpose:** 获取 `learning limit tooltip` 的当前值。

### GetSettlementConsumptionTooltip
`public static List<TooltipProperty> GetSettlementConsumptionTooltip(Settlement settlement)`

**用途 / Purpose:** 获取 `settlement consumption tooltip` 的当前值。

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(CharacterObject character, bool isBig = false)`

**用途 / Purpose:** 获取 `character tier data` 的当前值。

### GetSettlementProductionTooltip
`public static List<TooltipProperty> GetSettlementProductionTooltip(Settlement settlement)`

**用途 / Purpose:** 获取 `settlement production tooltip` 的当前值。

### GetHintTextFromReasons
`public static string GetHintTextFromReasons(List<TextObject> reasons)`

**用途 / Purpose:** 获取 `hint text from reasons` 的当前值。

### MergeTextObjectsWithNewline
`public static string MergeTextObjectsWithNewline(List<TextObject> textObjects)`

**用途 / Purpose:** 处理 `merge text objects with newline` 相关逻辑。

### GetHoursAndDaysTextFromHourValue
`public static TextObject GetHoursAndDaysTextFromHourValue(int hours)`

**用途 / Purpose:** 获取 `hours and days text from hour value` 的当前值。

### GetTeleportationDelayText
`public static TextObject GetTeleportationDelayText(Hero hero, PartyBase target)`

**用途 / Purpose:** 获取 `teleportation delay text` 的当前值。

### GetTimeOfDayAndResetCameraTooltip
`public static List<TooltipProperty> GetTimeOfDayAndResetCameraTooltip()`

**用途 / Purpose:** 获取 `time of day and reset camera tooltip` 的当前值。

### GetTournamentChampionRewardsTooltip
`public static List<TooltipProperty> GetTournamentChampionRewardsTooltip(Hero hero, Town town)`

**用途 / Purpose:** 获取 `tournament champion rewards tooltip` 的当前值。

### GetCharacterTypeData
`public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character, bool isBig = false)`

**用途 / Purpose:** 获取 `character type data` 的当前值。

### GetHeroHealthTooltip
`public static List<TooltipProperty> GetHeroHealthTooltip(Hero hero)`

**用途 / Purpose:** 获取 `hero health tooltip` 的当前值。

### GetSiegeWallTooltip
`public static List<TooltipProperty> GetSiegeWallTooltip(int wallLevel, int wallHitpoints)`

**用途 / Purpose:** 获取 `siege wall tooltip` 的当前值。

### GetGovernorPerksTooltipForHero
`public static List<TooltipProperty> GetGovernorPerksTooltipForHero(Hero hero)`

**用途 / Purpose:** 获取 `governor perks tooltip for hero` 的当前值。

### GetGovernorSelectionConfirmationPopupTexts
`public static ValueTuple<TextObject, TextObject> GetGovernorSelectionConfirmationPopupTexts(Hero currentGovernor, Hero newGovernor, Settlement settlement)`

**用途 / Purpose:** 获取 `governor selection confirmation popup texts` 的当前值。

### GetHeroGovernorEffectsTooltip
`public static List<TooltipProperty> GetHeroGovernorEffectsTooltip(Hero hero, Settlement settlement)`

**用途 / Purpose:** 获取 `hero governor effects tooltip` 的当前值。

### GetEncounterPartyMoraleTooltip
`public static List<TooltipProperty> GetEncounterPartyMoraleTooltip(List<MobileParty> parties)`

**用途 / Purpose:** 获取 `encounter party morale tooltip` 的当前值。

### GetCraftingTemplatePieceUnlockProgressHint
`public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)`

**用途 / Purpose:** 获取 `crafting template piece unlock progress hint` 的当前值。

### GetWeaponFlagDetails
`public static List<ValueTuple<string, TextObject>> GetWeaponFlagDetails(WeaponFlags weaponFlags, CharacterObject character = null)`

**用途 / Purpose:** 获取 `weapon flag details` 的当前值。

### GetItemFlagDetails
`public static List<Tuple<string, TextObject>> GetItemFlagDetails(ItemFlags itemFlags)`

**用途 / Purpose:** 获取 `item flag details` 的当前值。

### GetItemUsageSetFlagDetails
`public static List<ValueTuple<string, TextObject>> GetItemUsageSetFlagDetails(ItemObject.ItemUsageSetFlags flags, CharacterObject character = null)`

**用途 / Purpose:** 获取 `item usage set flag details` 的当前值。

### GetFlagDetailsForWeapon
`public static List<ValueTuple<string, TextObject>> GetFlagDetailsForWeapon(WeaponComponentData weapon, ItemObject.ItemUsageSetFlags itemUsageFlags, CharacterObject character = null)`

**用途 / Purpose:** 获取 `flag details for weapon` 的当前值。

### GetFormattedItemPropertyText
`public static string GetFormattedItemPropertyText(float propertyValue, bool typeRequiresInteger)`

**用途 / Purpose:** 获取 `formatted item property text` 的当前值。

### GetCraftingHeroTooltip
`public static List<TooltipProperty> GetCraftingHeroTooltip(Hero hero, CraftingOrder order)`

**用途 / Purpose:** 获取 `crafting hero tooltip` 的当前值。

### GetOrderCannotBeCompletedReasonTooltip
`public static List<TooltipProperty> GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order, ItemObject item)`

**用途 / Purpose:** 获取 `order cannot be completed reason tooltip` 的当前值。

### GetCraftingOrderDisabledReasonTooltip
`public static List<TooltipProperty> GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck, CraftingOrder order)`

**用途 / Purpose:** 获取 `crafting order disabled reason tooltip` 的当前值。

### GetOrdersDisabledReasonTooltip
`public static List<TooltipProperty> GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM> craftingOrders, Hero heroToCheck)`

**用途 / Purpose:** 获取 `orders disabled reason tooltip` 的当前值。

### GetCraftingOrderMissingPropertyWarningText
`public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order, ItemObject craftedItem)`

**用途 / Purpose:** 获取 `crafting order missing property warning text` 的当前值。

### GetInventoryCharacterTooltip
`public static List<TooltipProperty> GetInventoryCharacterTooltip(Hero hero)`

**用途 / Purpose:** 获取 `inventory character tooltip` 的当前值。

### GetHeroOccupationName
`public static string GetHeroOccupationName(Hero hero)`

**用途 / Purpose:** 获取 `hero occupation name` 的当前值。

### GetCommaSeparatedText
`public static TextObject GetCommaSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**用途 / Purpose:** 获取 `comma separated text` 的当前值。

### GetCommaNewlineSeparatedText
`public static TextObject GetCommaNewlineSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**用途 / Purpose:** 获取 `comma newline separated text` 的当前值。

### GetHeroKingdomRank
`public static string GetHeroKingdomRank(Hero hero)`

**用途 / Purpose:** 获取 `hero kingdom rank` 的当前值。

### GetHeroRank
`public static string GetHeroRank(Hero hero)`

**用途 / Purpose:** 获取 `hero rank` 的当前值。

### IsSettlementInformationHidden
`public static bool IsSettlementInformationHidden(Settlement settlement, out TextObject disableReason)`

**用途 / Purpose:** 处理 `is settlement information hidden` 相关逻辑。

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**用途 / Purpose:** 处理 `is hero information hidden` 相关逻辑。

### GetPartyNameplateText
`public static string GetPartyNameplateText(MobileParty party, bool includeAttachedParties)`

**用途 / Purpose:** 获取 `party nameplate text` 的当前值。

### GetPartyNameplateText
`public static string GetPartyNameplateText(PartyBase party)`

**用途 / Purpose:** 获取 `party nameplate text` 的当前值。

### GetValueChangeText
`public static string GetValueChangeText(float originalValue, float valueChange, string valueFormat = "F0")`

**用途 / Purpose:** 获取 `value change text` 的当前值。

### GetUpgradeHint
`public static string GetUpgradeHint(int index, int numOfItems, int availableUpgrades, int upgradeCoinCost, bool hasRequiredPerk, PerkObject requiredPerk, CharacterObject character, TroopRosterElement troop, int partyGoldChangeAmount, bool areUpgradesDisabled)`

**用途 / Purpose:** 获取 `upgrade hint` 的当前值。

### GetStackModifierString
`public static string GetStackModifierString(TextObject allStackText, TextObject fiveStackText, bool canFiveStack)`

**用途 / Purpose:** 获取 `stack modifier string` 的当前值。

### ConvertToHexColor
`public static string ConvertToHexColor(uint color)`

**用途 / Purpose:** 处理 `convert to hex color` 相关逻辑。

### GetMapScreenActionIsEnabledWithReason
`public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)`

**用途 / Purpose:** 获取 `map screen action is enabled with reason` 的当前值。

### GetCanManageCurrentArmyWithReason
`public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)`

**用途 / Purpose:** 获取 `can manage current army with reason` 的当前值。

### GetClanSupportDisableReasonString
`public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isMainClanMercenary)`

**用途 / Purpose:** 获取 `clan support disable reason string` 的当前值。

### GetClanExpelDisableReasonString
`public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isTargetRulingClan, bool isMainClanMercenary)`

**用途 / Purpose:** 获取 `clan expel disable reason string` 的当前值。

### GetArmyDisbandDisableReasonString
`public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence, bool isArmyInAnyEvent, bool isPlayerClanMercenary, bool isPlayerInThisArmy)`

**用途 / Purpose:** 获取 `army disband disable reason string` 的当前值。

### GetCreateNewPartyReasonString
`public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots, bool haveAvailableHero)`

**用途 / Purpose:** 获取 `create new party reason string` 的当前值。

### GetCraftingDisableReasonString
`public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)`

**用途 / Purpose:** 获取 `crafting disable reason string` 的当前值。

### GetAddFocusHintString
`public static string GetAddFocusHintString(bool playerHasEnoughPoints, bool isMaxedSkill, int currentFocusAmount)`

**用途 / Purpose:** 获取 `add focus hint string` 的当前值。

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**用途 / Purpose:** 获取 `skill effect text` 的当前值。

### GetMobilePartyBehaviorText
`public static string GetMobilePartyBehaviorText(MobileParty party)`

**用途 / Purpose:** 获取 `mobile party behavior text` 的当前值。

### GetHeroBehaviorText
`public static string GetHeroBehaviorText(Hero hero, ITeleportationCampaignBehavior teleportationBehavior = null)`

**用途 / Purpose:** 获取 `hero behavior text` 的当前值。

### GetPartyLocationText
`public static string GetPartyLocationText(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `party location text` 的当前值。

### GetTeleportingLeaderHero
`public static Hero GetTeleportingLeaderHero(MobileParty party, ITeleportationCampaignBehavior teleportationBehavior)`

**用途 / Purpose:** 获取 `teleporting leader hero` 的当前值。

### GetTeleportingGovernor
`public static Hero GetTeleportingGovernor(Settlement settlement, ITeleportationCampaignBehavior teleportationBehavior)`

**用途 / Purpose:** 获取 `teleporting governor` 的当前值。

### GetHeroRelationToHeroText
`public static TextObject GetHeroRelationToHeroText(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**用途 / Purpose:** 获取 `hero relation to hero text` 的当前值。

### GetAbbreviatedValueTextFromValue
`public static string GetAbbreviatedValueTextFromValue(int valueAmount)`

**用途 / Purpose:** 获取 `abbreviated value text from value` 的当前值。

### GetPartyDistanceByTimeText
`public static string GetPartyDistanceByTimeText(float distance, float speed)`

**用途 / Purpose:** 获取 `party distance by time text` 的当前值。

### GetPartyDistanceByTimeTextAbbreviated
`public static string GetPartyDistanceByTimeTextAbbreviated(float distance, float speed)`

**用途 / Purpose:** 获取 `party distance by time text abbreviated` 的当前值。

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**用途 / Purpose:** 获取 `character code` 的当前值。

### GetTraitNameText
`public static string GetTraitNameText(TraitObject traitObject, Hero hero)`

**用途 / Purpose:** 获取 `trait name text` 的当前值。

### GetTraitTooltipText
`public static string GetTraitTooltipText(TraitObject traitObject, int traitValue)`

**用途 / Purpose:** 获取 `trait tooltip text` 的当前值。

### GetTextForRole
`public static string GetTextForRole(PartyRole role)`

**用途 / Purpose:** 获取 `text for role` 的当前值。

### GetAttributeTypeSortIndex
`public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)`

**用途 / Purpose:** 获取 `attribute type sort index` 的当前值。

### GetSkillObjectTypeSortIndex
`public static int GetSkillObjectTypeSortIndex(SkillObject skill)`

**用途 / Purpose:** 获取 `skill object type sort index` 的当前值。

### GetSkillMeshId
`public static string GetSkillMeshId(SkillObject skill, bool useSmallestVariation = true)`

**用途 / Purpose:** 获取 `skill mesh id` 的当前值。

### GetIsNavalSkill
`public static bool GetIsNavalSkill(SkillObject skill)`

**用途 / Purpose:** 获取 `is naval skill` 的当前值。

### GetHeroCompareSortIndex
`public static int GetHeroCompareSortIndex(Hero x, Hero y)`

**用途 / Purpose:** 获取 `hero compare sort index` 的当前值。

### GetHeroClanRoleText
`public static string GetHeroClanRoleText(Hero hero, Clan clan)`

**用途 / Purpose:** 获取 `hero clan role text` 的当前值。

### GetItemObjectTypeSortIndex
`public static int GetItemObjectTypeSortIndex(ItemObject item)`

**用途 / Purpose:** 获取 `item object type sort index` 的当前值。

### GetItemLockStringID
`public static string GetItemLockStringID(EquipmentElement equipmentElement)`

**用途 / Purpose:** 获取 `item lock string i d` 的当前值。

### GetTroopLockStringID
`public static string GetTroopLockStringID(TroopRosterElement rosterElement)`

**用途 / Purpose:** 获取 `troop lock string i d` 的当前值。

### GetQuestStateOfHero
`public static List<ValueTuple<CampaignUIHelper.IssueQuestFlags, TextObject, TextObject>> GetQuestStateOfHero(Hero queriedHero)`

**用途 / Purpose:** 获取 `quest state of hero` 的当前值。

### GetQuestExplanationOfHero
`public static string GetQuestExplanationOfHero(CampaignUIHelper.IssueQuestFlags questType)`

**用途 / Purpose:** 获取 `quest explanation of hero` 的当前值。

### GetQuestsRelatedToHero
`public static List<QuestBase> GetQuestsRelatedToHero(Hero hero)`

**用途 / Purpose:** 获取 `quests related to hero` 的当前值。

### GetQuestsRelatedToParty
`public static List<QuestBase> GetQuestsRelatedToParty(MobileParty party)`

**用途 / Purpose:** 获取 `quests related to party` 的当前值。

### GetQuestsRelatedToSettlement
`public static List<ValueTuple<bool, QuestBase>> GetQuestsRelatedToSettlement(Settlement settlement)`

**用途 / Purpose:** 获取 `quests related to settlement` 的当前值。

### IsQuestRelatedToSettlement
`public static bool IsQuestRelatedToSettlement(QuestBase quest, Settlement settlement)`

**用途 / Purpose:** 处理 `is quest related to settlement` 相关逻辑。

### GetIssueType
`public static CampaignUIHelper.IssueQuestFlags GetIssueType(IssueBase issue)`

**用途 / Purpose:** 获取 `issue type` 的当前值。

### GetQuestType
`public static CampaignUIHelper.IssueQuestFlags GetQuestType(QuestBase quest, Hero queriedQuestGiver)`

**用途 / Purpose:** 获取 `quest type` 的当前值。

### GetHeroTraits
`public static IEnumerable<TraitObject> GetHeroTraits()`

**用途 / Purpose:** 获取 `hero traits` 的当前值。

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**用途 / Purpose:** 处理 `is item usage applicable` 相关逻辑。

### FloatToString
`public static string FloatToString(float x)`

**用途 / Purpose:** 处理 `float to string` 相关逻辑。

### IsStringApplicableForHeroName
`public static Tuple<bool, string> IsStringApplicableForHeroName(string name)`

**用途 / Purpose:** 处理 `is string applicable for hero name` 相关逻辑。

### IsStringApplicableForItemName
`public static Tuple<bool, TextObject> IsStringApplicableForItemName(string name)`

**用途 / Purpose:** 处理 `is string applicable for item name` 相关逻辑。

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**用途 / Purpose:** 获取 `visual party leader` 的当前值。

### GetChildrenAndGrandchildrenOfHero
`public static List<Hero> GetChildrenAndGrandchildrenOfHero(Hero hero)`

**用途 / Purpose:** 获取 `children and grandchildren of hero` 的当前值。

### Compare
`public int Compare(CharacterAttribute x, CharacterAttribute y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(SkillObject x, SkillObject y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(MobileParty x, MobileParty y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Equals
`public bool Equals(ValueTuple<ItemCategory, int> x, ValueTuple<ItemCategory, int> y)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public int GetHashCode(ValueTuple<ItemCategory, int> obj)`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
CampaignUIHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)