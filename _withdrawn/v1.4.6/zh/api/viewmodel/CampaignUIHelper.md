---
title: "CampaignUIHelper"
description: "CampaignUIHelper：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类；公开成员 157 个（方法 141、属性 6、字段 4）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignUIHelper

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public static class CampaignUIHelper`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CampaignUIHelper 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs。它是一个 public 类，继承链为 CampaignUIHelper。public/protected 成员共 157 个：141 方法、6 属性、4 字段、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignUIHelper 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection`，继承链 CampaignUIHelper。成员构成以方法为主（方法 141/157，属性 6/157），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<TooltipProperty>GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)` | 方法 |
| `GetTownWallsTooltip` | `public static string GetTownWallsTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetVillageMilitiaTooltip(Village village)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownMilitiaTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownFoodTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownLoyaltyTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownProsperityTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownDailyProductionTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownSecurityTooltip(Town town)` | 方法 |
| `GetTownPatrolTooltip` | `public static string GetTownPatrolTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetVillageProsperityTooltip(Village village)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTownGarrisonTooltip(Town town)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyTroopSizeLimitTooltip(PartyBase party)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyPrisonerSizeLimitTooltip(PartyBase party)` | 方法 |
| `List` | `public static List<TooltipProperty>GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>>usedUpgradeHorsesHistory)` | 方法 |
| `List` | `public static List<TooltipProperty>GetArmyCohesionTooltip(Army army)` | 方法 |
| `List` | `public static List<TooltipProperty>GetArmyManCountTooltip(Army army)` | 方法 |
| `GetDaysUntilNoFood` | `public static string GetDaysUntilNoFood(float totalFood, float foodChange)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)` | 方法 |
| `List` | `public static List<TooltipProperty>GetArmyFoodTooltip(Army army)` | 方法 |
| `GetClanWealthStatusText` | `public static string GetClanWealthStatusText(Clan clan)` | 方法 |
| `List` | `public static List<TooltipProperty>GetClanProsperityTooltip(Clan clan)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTruceOwnedSettlementsTooltip(List<Settlement>settlements, TextObject factionName, bool isTown)` | 方法 |
| `List` | `public static List<TooltipProperty>GetWarPrisonersTooltip(List<Hero>capturedPrisoners, TextObject factionName)` | 方法 |
| `List` | `public static List<TooltipProperty>GetNormalizedWarProgressTooltip(ExplainedNumber warProgress, ExplainedNumber otherFactionWarProgress, float maxValue, TextObject faction1Name, TextObject faction2Name)` | 方法 |
| `List` | `public static List<TooltipProperty>GetClanStrengthTooltip(Clan clan)` | 方法 |
| `List` | `public static List<TooltipProperty>GetCrimeTooltip(Settlement settlement)` | 方法 |
| `List` | `public static List<TooltipProperty>GetInfluenceTooltip(Clan clan)` | 方法 |
| `List` | `public static List<TooltipProperty>GetClanRenownTooltip(Clan clan)` | 方法 |
| `GetDenarTooltip` | `public static TooltipTriggerVM GetDenarTooltip()` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyMoraleTooltip(MobileParty mainParty)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyHealthTooltip(PartyBase party)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPlayerHitpointsTooltip()` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyFoodTooltip(MobileParty mainParty)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartySpeedTooltip(bool considerArmySpeed)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyWageTooltip(MobileParty mobileParty)` | 方法 |
| `List` | `public static List<TooltipProperty>GetViewDistanceTooltip()` | 方法 |
| `List` | `public static List<TooltipProperty>GetMainPartyHealthTooltip()` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyInventoryCapacityTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPartyInventoryWeightTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)` | 方法 |
| `List` | `public static List<TooltipProperty>GetPerkEffectText(PerkObject perk, bool isActive)` | 方法 |
| `GetPerkRoleText` | `public static TextObject GetPerkRoleText(PerkObject perk, bool getSecondary)` | 方法 |
| `GetCombinedPerkRoleText` | `public static TextObject GetCombinedPerkRoleText(PerkObject perk)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSiegeMachineTooltip(SiegeEngineType engineType, bool showDescription = true, int hoursUntilCompletion = 0)` | 方法 |
| `GetSiegeMachineName` | `public static string GetSiegeMachineName(SiegeEngineType engineType)` | 方法 |
| `GetSiegeMachineNameWithDesctiption` | `public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTroopConformityTooltip(TroopRosterElement troop)` | 方法 |
| `List` | `public static List<TooltipProperty>GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, int skillValue, SkillObject skill)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTroopXPTooltip(TroopRosterElement troop)` | 方法 |
| `List` | `public static List<TooltipProperty>GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, SkillObject skill)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSettlementConsumptionTooltip(Settlement settlement)` | 方法 |
| `GetCharacterTierData` | `public static StringItemWithHintVM GetCharacterTierData(CharacterObject character, bool isBig = false)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSettlementProductionTooltip(Settlement settlement)` | 方法 |
| `GetHintTextFromReasons` | `public static string GetHintTextFromReasons(List<TextObject>reasons)` | 方法 |
| `MergeTextObjectsWithNewline` | `public static string MergeTextObjectsWithNewline(List<TextObject>textObjects)` | 方法 |
| `GetHoursAndDaysTextFromHourValue` | `public static TextObject GetHoursAndDaysTextFromHourValue(int hours)` | 方法 |
| `GetTeleportationDelayText` | `public static TextObject GetTeleportationDelayText(Hero hero, PartyBase target)` | 方法 |
| `List` | `public static List<TooltipProperty>GetTimeOfDayAndResetCameraTooltip()` | 方法 |
| `List` | `public static List<TooltipProperty>GetTournamentChampionRewardsTooltip(Hero hero, Town town)` | 方法 |
| `GetCharacterTypeData` | `public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character, bool isBig = false)` | 方法 |
| `List` | `public static List<TooltipProperty>GetHeroHealthTooltip(Hero hero)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSiegeWallTooltip(int wallLevel, int wallHitpoints)` | 方法 |
| `List` | `public static List<TooltipProperty>GetGovernorPerksTooltipForHero(Hero hero)` | 方法 |
| `TextObject>GetGovernorSelectionConfirmationPopupTexts` | `public static ValueTuple<TextObject, TextObject>GetGovernorSelectionConfirmationPopupTexts(Hero currentGovernor, Hero newGovernor, Settlement settlement)` | 方法 |
| `List` | `public static List<TooltipProperty>GetHeroGovernorEffectsTooltip(Hero hero, Settlement settlement)` | 方法 |
| `List` | `public static List<TooltipProperty>GetEncounterPartyMoraleTooltip(List<MobileParty>parties)` | 方法 |
| `GetCraftingTemplatePieceUnlockProgressHint` | `public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)` | 方法 |
| `TextObject>>GetWeaponFlagDetails` | `public static List<ValueTuple<string, TextObject>>GetWeaponFlagDetails(WeaponFlags weaponFlags, CharacterObject character = null)` | 方法 |
| `TextObject>>GetItemFlagDetails` | `public static List<Tuple<string, TextObject>>GetItemFlagDetails(ItemFlags itemFlags)` | 方法 |
| `TextObject>>GetItemUsageSetFlagDetails` | `public static List<ValueTuple<string, TextObject>>GetItemUsageSetFlagDetails(ItemObject.ItemUsageSetFlags flags, CharacterObject character = null)` | 方法 |
| `TextObject>>GetFlagDetailsForWeapon` | `public static List<ValueTuple<string, TextObject>>GetFlagDetailsForWeapon(WeaponComponentData weapon, ItemObject.ItemUsageSetFlags itemUsageFlags, CharacterObject character = null)` | 方法 |
| `GetFormattedItemPropertyText` | `public static string GetFormattedItemPropertyText(float propertyValue, bool typeRequiresInteger)` | 方法 |
| `List` | `public static List<TooltipProperty>GetCraftingHeroTooltip(Hero hero, CraftingOrder order)` | 方法 |
| `List` | `public static List<TooltipProperty>GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order, ItemObject item)` | 方法 |
| `List` | `public static List<TooltipProperty>GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck, CraftingOrder order)` | 方法 |
| `List` | `public static List<TooltipProperty>GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM>craftingOrders, Hero heroToCheck)` | 方法 |
| `GetCraftingOrderMissingPropertyWarningText` | `public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order, ItemObject craftedItem)` | 方法 |
| `List` | `public static List<TooltipProperty>GetInventoryCharacterTooltip(Hero hero)` | 方法 |
| `GetHeroOccupationName` | `public static string GetHeroOccupationName(Hero hero)` | 方法 |
| `GetCommaSeparatedText` | `public static TextObject GetCommaSeparatedText(TextObject label, IEnumerable<TextObject>texts)` | 方法 |
| `GetCommaNewlineSeparatedText` | `public static TextObject GetCommaNewlineSeparatedText(TextObject label, IEnumerable<TextObject>texts)` | 方法 |
| `GetHeroKingdomRank` | `public static string GetHeroKingdomRank(Hero hero)` | 方法 |
| `GetHeroRank` | `public static string GetHeroRank(Hero hero)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSmithingDifficultyTooltip()` | 方法 |
| `IsSettlementInformationHidden` | `public static bool IsSettlementInformationHidden(Settlement settlement, out TextObject disableReason)` | 方法 |
| `IsHeroInformationHidden` | `public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)` | 方法 |
| `GetPartyNameplateText` | `public static string GetPartyNameplateText(MobileParty party, bool includeAttachedParties)` | 方法 |
| `GetPartyNameplateText` | `public static string GetPartyNameplateText(PartyBase party)` | 方法 |
| `GetValueChangeText` | `public static string GetValueChangeText(float originalValue, float valueChange, string valueFormat = " ")` | 方法 |
| `GetUpgradeHint` | `public static string GetUpgradeHint(int index, int numOfItems, int availableUpgrades, int upgradeCoinCost, bool hasRequiredPerk, PerkObject requiredPerk, CharacterObject character, TroopRosterElement troop, int partyGoldChangeAmount, bool areUpgradesDisabled)` | 方法 |
| `GetStackModifierString` | `public static string GetStackModifierString(TextObject allStackText, TextObject fiveStackText, bool canFiveStack)` | 方法 |
| `ConvertToHexColor` | `public static string ConvertToHexColor(uint color)` | 方法 |
| `GetMapScreenActionIsEnabledWithReason` | `public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)` | 方法 |
| `GetCanManageCurrentArmyWithReason` | `public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)` | 方法 |
| `GetClanSupportDisableReasonString` | `public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isMainClanMercenary)` | 方法 |
| `GetClanExpelDisableReasonString` | `public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isTargetRulingClan, bool isMainClanMercenary)` | 方法 |
| `GetArmyDisbandDisableReasonString` | `public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence, bool isArmyInAnyEvent, bool isPlayerClanMercenary, bool isPlayerInThisArmy)` | 方法 |
| `GetCreateNewPartyReasonString` | `public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots, bool haveAvailableHero)` | 方法 |
| `GetCraftingDisableReasonString` | `public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)` | 方法 |
| `GetAddFocusHintString` | `public static string GetAddFocusHintString(bool playerHasEnoughPoints, bool isMaxedSkill, int currentFocusAmount)` | 方法 |
| `GetSkillEffectText` | `public static string GetSkillEffectText(SkillEffect effect, int skillLevel)` | 方法 |
| `GetMobilePartyBehaviorText` | `public static string GetMobilePartyBehaviorText(MobileParty party)` | 方法 |
| `GetHeroBehaviorText` | `public static string GetHeroBehaviorText(Hero hero, ITeleportationCampaignBehavior teleportationBehavior = null)` | 方法 |
| `GetPartyLocationText` | `public static string GetPartyLocationText(MobileParty mobileParty)` | 方法 |
| `GetTeleportingLeaderHero` | `public static Hero GetTeleportingLeaderHero(MobileParty party, ITeleportationCampaignBehavior teleportationBehavior)` | 方法 |
| `GetTeleportingGovernor` | `public static Hero GetTeleportingGovernor(Settlement settlement, ITeleportationCampaignBehavior teleportationBehavior)` | 方法 |
| `GetHeroRelationToHeroText` | `public static TextObject GetHeroRelationToHeroText(Hero queriedHero, Hero baseHero, bool uppercaseFirst)` | 方法 |
| `GetAbbreviatedValueTextFromValue` | `public static string GetAbbreviatedValueTextFromValue(int valueAmount)` | 方法 |
| `GetPartyDistanceByTimeText` | `public static string GetPartyDistanceByTimeText(float distance, float speed)` | 方法 |
| `GetPartyDistanceByTimeTextAbbreviated` | `public static string GetPartyDistanceByTimeTextAbbreviated(float distance, float speed)` | 方法 |
| `GetCharacterCode` | `public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)` | 方法 |
| `GetTraitNameText` | `public static string GetTraitNameText(TraitObject traitObject, Hero hero)` | 方法 |
| `GetTraitTooltipText` | `public static string GetTraitTooltipText(TraitObject traitObject, int traitValue)` | 方法 |
| `GetTextForRole` | `public static string GetTextForRole(PartyRole role)` | 方法 |
| `GetAttributeTypeSortIndex` | `public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)` | 方法 |
| `GetSkillObjectTypeSortIndex` | `public static int GetSkillObjectTypeSortIndex(SkillObject skill)` | 方法 |
| `GetSkillMeshId` | `public static string GetSkillMeshId(SkillObject skill, bool useSmallestVariation = true)` | 方法 |
| `GetIsNavalSkill` | `public static bool GetIsNavalSkill(SkillObject skill)` | 方法 |
| `GetHeroCompareSortIndex` | `public static int GetHeroCompareSortIndex(Hero x, Hero y)` | 方法 |
| `GetHeroClanRoleText` | `public static string GetHeroClanRoleText(Hero hero, Clan clan)` | 方法 |
| `GetItemObjectTypeSortIndex` | `public static int GetItemObjectTypeSortIndex(ItemObject item)` | 方法 |
| `GetItemLockStringID` | `public static string GetItemLockStringID(EquipmentElement equipmentElement)` | 方法 |
| `GetTroopLockStringID` | `public static string GetTroopLockStringID(TroopRosterElement rosterElement)` | 方法 |
| `TextObject>>GetQuestStateOfHero` | `public static List<ValueTuple<CampaignUIHelper.IssueQuestFlags, TextObject, TextObject>>GetQuestStateOfHero(Hero queriedHero)` | 方法 |
| `GetQuestExplanationOfHero` | `public static string GetQuestExplanationOfHero(CampaignUIHelper.IssueQuestFlags questType)` | 方法 |
| `List` | `public static List<QuestBase>GetQuestsRelatedToHero(Hero hero)` | 方法 |
| `List` | `public static List<QuestBase>GetQuestsRelatedToParty(MobileParty party)` | 方法 |
| `QuestBase>>GetQuestsRelatedToSettlement` | `public static List<ValueTuple<bool, QuestBase>>GetQuestsRelatedToSettlement(Settlement settlement)` | 方法 |
| `IsQuestRelatedToSettlement` | `public static bool IsQuestRelatedToSettlement(QuestBase quest, Settlement settlement)` | 方法 |
| `GetIssueType` | `public static CampaignUIHelper.IssueQuestFlags GetIssueType(IssueBase issue)` | 方法 |
| `GetQuestType` | `public static CampaignUIHelper.IssueQuestFlags GetQuestType(QuestBase quest, Hero queriedQuestGiver)` | 方法 |
| `IEnumerable` | `public static IEnumerable<TraitObject>GetHeroTraits()` | 方法 |
| `IsItemUsageApplicable` | `public static bool IsItemUsageApplicable(WeaponComponentData weapon)` | 方法 |
| `FloatToString` | `public static string FloatToString(float x)` | 方法 |
| `string>IsStringApplicableForHeroName` | `public static Tuple<bool, string>IsStringApplicableForHeroName(string name)` | 方法 |
| `TextObject>IsStringApplicableForItemName` | `public static Tuple<bool, TextObject>IsStringApplicableForItemName(string name)` | 方法 |
| `GetVisualPartyLeader` | `public static CharacterObject GetVisualPartyLeader(PartyBase party)` | 方法 |
| `List` | `public static List<Hero>GetChildrenAndGrandchildrenOfHero(Hero hero)` | 方法 |
| `CampaignUIHelper.IssueQuestFlags[]IssueQuestFlagsValues` | `public static readonly CampaignUIHelper.IssueQuestFlags[]IssueQuestFlagsValues` | 字段 |
| `MobilePartyPrecedenceComparerInstance` | `public static readonly CampaignUIHelper.MobilePartyPrecedenceComparer MobilePartyPrecedenceComparerInstance` | 字段 |
| `SkillObjectComparerInstance` | `public static readonly CampaignUIHelper.SkillObjectComparer SkillObjectComparerInstance` | 字段 |
| `CharacterAttributeComparerInstance` | `public static readonly CampaignUIHelper.CharacterAttributeComparer CharacterAttributeComparerInstance` | 字段 |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | 属性 |
| `SortState` | `public enum SortState` | 属性 |
| `IComparer` | `public class CharacterAttributeComparer : IComparer<CharacterAttribute>` | 属性 |
| `IComparer` | `public class SkillObjectComparer : IComparer<SkillObject>` | 属性 |
| `IComparer` | `public class MobilePartyPrecedenceComparer : IComparer<MobileParty>` | 属性 |
| `int>>` | `public class ProductInputOutputEqualityComparer : IEqualityComparer<ValueTuple<ItemCategory, int>>` | 属性 |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | 嵌套类型 |
| `SortState` | `public enum SortState` | 嵌套类型 |
| `IComparer` | `public class CharacterAttributeComparer : IComparer<CharacterAttribute>` | 嵌套类型 |
| `IComparer` | `public class SkillObjectComparer : IComparer<SkillObject>` | 嵌套类型 |
| `IComparer` | `public class MobilePartyPrecedenceComparer : IComparer<MobileParty>` | 嵌套类型 |
| `int>>` | `public class ProductInputOutputEqualityComparer : IEqualityComparer<ValueTuple<ItemCategory, int>>` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionCampaignOptionData](../ActionCampaignOptionData/)
- [同命名空间 BannerEditorVM](../BannerEditorVM/)
- [同命名空间 BooleanCampaignOptionData](../BooleanCampaignOptionData/)
- [同命名空间 CampaignOptionData](../CampaignOptionData/)
