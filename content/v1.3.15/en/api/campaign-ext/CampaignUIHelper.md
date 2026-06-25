---
title: "CampaignUIHelper"
description: "Auto-generated class reference for CampaignUIHelper."
---
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

**Purpose:** Reads and returns the `tooltip for accumulating property` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTooltipForAccumulatingProperty("example", 0, explainedNumber);
```

### GetTooltipForAccumulatingPropertyWithResult
`public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `tooltip for accumulating property with result` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTooltipForAccumulatingPropertyWithResult("example", 0, explainedNumber);
```

### GetTooltipForgProperty
`public static List<TooltipProperty> GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `tooltip forg property` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTooltipForgProperty("example", 0, explainedNumber);
```

### GetTownWallsTooltip
`public static string GetTownWallsTooltip(Town town)`

**Purpose:** Reads and returns the `town walls tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownWallsTooltip(town);
```

### GetVillageMilitiaTooltip
`public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)`

**Purpose:** Reads and returns the `village militia tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetVillageMilitiaTooltip(village);
```

### GetTownMilitiaTooltip
`public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)`

**Purpose:** Reads and returns the `town militia tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownMilitiaTooltip(town);
```

### GetTownFoodTooltip
`public static List<TooltipProperty> GetTownFoodTooltip(Town town)`

**Purpose:** Reads and returns the `town food tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownFoodTooltip(town);
```

### GetTownLoyaltyTooltip
`public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)`

**Purpose:** Reads and returns the `town loyalty tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownLoyaltyTooltip(town);
```

### GetTownProsperityTooltip
`public static List<TooltipProperty> GetTownProsperityTooltip(Town town)`

**Purpose:** Reads and returns the `town prosperity tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownProsperityTooltip(town);
```

### GetTownDailyProductionTooltip
`public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)`

**Purpose:** Reads and returns the `town daily production tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownDailyProductionTooltip(town);
```

### GetTownSecurityTooltip
`public static List<TooltipProperty> GetTownSecurityTooltip(Town town)`

**Purpose:** Reads and returns the `town security tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownSecurityTooltip(town);
```

### GetTownPatrolTooltip
`public static string GetTownPatrolTooltip(Town town)`

**Purpose:** Reads and returns the `town patrol tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownPatrolTooltip(town);
```

### GetVillageProsperityTooltip
`public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)`

**Purpose:** Reads and returns the `village prosperity tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetVillageProsperityTooltip(village);
```

### GetTownGarrisonTooltip
`public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)`

**Purpose:** Reads and returns the `town garrison tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTownGarrisonTooltip(town);
```

### GetPartyTroopSizeLimitTooltip
`public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)`

**Purpose:** Reads and returns the `party troop size limit tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyTroopSizeLimitTooltip(party);
```

### GetPartyPrisonerSizeLimitTooltip
`public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)`

**Purpose:** Reads and returns the `party prisoner size limit tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyPrisonerSizeLimitTooltip(party);
```

### GetUsedHorsesTooltip
`public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>> usedUpgradeHorsesHistory)`

**Purpose:** Reads and returns the `used horses tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetUsedHorsesTooltip(list<Tuple<EquipmentElement, 0);
```

### GetArmyCohesionTooltip
`public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)`

**Purpose:** Reads and returns the `army cohesion tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetArmyCohesionTooltip(army);
```

### GetArmyManCountTooltip
`public static List<TooltipProperty> GetArmyManCountTooltip(Army army)`

**Purpose:** Reads and returns the `army man count tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetArmyManCountTooltip(army);
```

### GetDaysUntilNoFood
`public static string GetDaysUntilNoFood(float totalFood, float foodChange)`

**Purpose:** Reads and returns the `days until no food` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetDaysUntilNoFood(0, 0);
```

### GetSettlementPropertyTooltip
`public static List<TooltipProperty> GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `settlement property tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSettlementPropertyTooltip(settlement, "example", 0, explainedNumber);
```

### GetSettlementPropertyTooltipWithResult
`public static List<TooltipProperty> GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)`

**Purpose:** Reads and returns the `settlement property tooltip with result` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSettlementPropertyTooltipWithResult(settlement, "example", 0, explainedNumber);
```

### GetArmyFoodTooltip
`public static List<TooltipProperty> GetArmyFoodTooltip(Army army)`

**Purpose:** Reads and returns the `army food tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetArmyFoodTooltip(army);
```

### GetClanWealthStatusText
`public static string GetClanWealthStatusText(Clan clan)`

**Purpose:** Reads and returns the `clan wealth status text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetClanWealthStatusText(clan);
```

### GetClanProsperityTooltip
`public static List<TooltipProperty> GetClanProsperityTooltip(Clan clan)`

**Purpose:** Reads and returns the `clan prosperity tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetClanProsperityTooltip(clan);
```

### GetTruceOwnedSettlementsTooltip
`public static List<TooltipProperty> GetTruceOwnedSettlementsTooltip(List<Settlement> settlements, TextObject factionName, bool isTown)`

**Purpose:** Reads and returns the `truce owned settlements tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTruceOwnedSettlementsTooltip(settlements, factionName, false);
```

### GetWarPrisonersTooltip
`public static List<TooltipProperty> GetWarPrisonersTooltip(List<Hero> capturedPrisoners, TextObject factionName)`

**Purpose:** Reads and returns the `war prisoners tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetWarPrisonersTooltip(capturedPrisoners, factionName);
```

### GetNormalizedWarProgressTooltip
`public static List<TooltipProperty> GetNormalizedWarProgressTooltip(ExplainedNumber warProgress, ExplainedNumber otherFactionWarProgress, float maxValue, TextObject faction1Name, TextObject faction2Name)`

**Purpose:** Reads and returns the `normalized war progress tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetNormalizedWarProgressTooltip(warProgress, otherFactionWarProgress, 0, faction1Name, faction2Name);
```

### GetClanStrengthTooltip
`public static List<TooltipProperty> GetClanStrengthTooltip(Clan clan)`

**Purpose:** Reads and returns the `clan strength tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetClanStrengthTooltip(clan);
```

### GetCrimeTooltip
`public static List<TooltipProperty> GetCrimeTooltip(Settlement settlement)`

**Purpose:** Reads and returns the `crime tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCrimeTooltip(settlement);
```

### GetInfluenceTooltip
`public static List<TooltipProperty> GetInfluenceTooltip(Clan clan)`

**Purpose:** Reads and returns the `influence tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetInfluenceTooltip(clan);
```

### GetClanRenownTooltip
`public static List<TooltipProperty> GetClanRenownTooltip(Clan clan)`

**Purpose:** Reads and returns the `clan renown tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetClanRenownTooltip(clan);
```

### GetDenarTooltip
`public static TooltipTriggerVM GetDenarTooltip()`

**Purpose:** Reads and returns the `denar tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetDenarTooltip();
```

### GetPartyMoraleTooltip
`public static List<TooltipProperty> GetPartyMoraleTooltip(MobileParty mainParty)`

**Purpose:** Reads and returns the `party morale tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyMoraleTooltip(mainParty);
```

### GetPartyHealthTooltip
`public static List<TooltipProperty> GetPartyHealthTooltip(PartyBase party)`

**Purpose:** Reads and returns the `party health tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyHealthTooltip(party);
```

### GetPlayerHitpointsTooltip
`public static List<TooltipProperty> GetPlayerHitpointsTooltip()`

**Purpose:** Reads and returns the `player hitpoints tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPlayerHitpointsTooltip();
```

### GetPartyFoodTooltip
`public static List<TooltipProperty> GetPartyFoodTooltip(MobileParty mainParty)`

**Purpose:** Reads and returns the `party food tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyFoodTooltip(mainParty);
```

### GetPartySpeedTooltip
`public static List<TooltipProperty> GetPartySpeedTooltip(bool considerArmySpeed)`

**Purpose:** Reads and returns the `party speed tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartySpeedTooltip(false);
```

### GetPartyWageTooltip
`public static List<TooltipProperty> GetPartyWageTooltip(MobileParty mobileParty)`

**Purpose:** Reads and returns the `party wage tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyWageTooltip(mobileParty);
```

### GetViewDistanceTooltip
`public static List<TooltipProperty> GetViewDistanceTooltip()`

**Purpose:** Reads and returns the `view distance tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetViewDistanceTooltip();
```

### GetMainPartyHealthTooltip
`public static List<TooltipProperty> GetMainPartyHealthTooltip()`

**Purpose:** Reads and returns the `main party health tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetMainPartyHealthTooltip();
```

### GetPartyInventoryCapacityTooltip
`public static List<TooltipProperty> GetPartyInventoryCapacityTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)`

**Purpose:** Reads and returns the `party inventory capacity tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyInventoryCapacityTooltip(party, false, false);
```

### GetPartyInventoryWeightTooltip
`public static List<TooltipProperty> GetPartyInventoryWeightTooltip(MobileParty party, bool forceLand = false, bool forceSea = false)`

**Purpose:** Reads and returns the `party inventory weight tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyInventoryWeightTooltip(party, false, false);
```

### GetPerkEffectText
`public static List<TooltipProperty> GetPerkEffectText(PerkObject perk, bool isActive)`

**Purpose:** Reads and returns the `perk effect text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPerkEffectText(perk, false);
```

### GetPerkRoleText
`public static TextObject GetPerkRoleText(PerkObject perk, bool getSecondary)`

**Purpose:** Reads and returns the `perk role text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPerkRoleText(perk, false);
```

### GetCombinedPerkRoleText
`public static TextObject GetCombinedPerkRoleText(PerkObject perk)`

**Purpose:** Reads and returns the `combined perk role text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCombinedPerkRoleText(perk);
```

### GetSiegeMachineTooltip
`public static List<TooltipProperty> GetSiegeMachineTooltip(SiegeEngineType engineType, bool showDescription = true, int hoursUntilCompletion = 0)`

**Purpose:** Reads and returns the `siege machine tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSiegeMachineTooltip(engineType, false, 0);
```

### GetSiegeMachineName
`public static string GetSiegeMachineName(SiegeEngineType engineType)`

**Purpose:** Reads and returns the `siege machine name` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSiegeMachineName(engineType);
```

### GetSiegeMachineNameWithDesctiption
`public static string GetSiegeMachineNameWithDesctiption(SiegeEngineType engineType)`

**Purpose:** Reads and returns the `siege machine name with desctiption` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSiegeMachineNameWithDesctiption(engineType);
```

### GetTroopConformityTooltip
`public static List<TooltipProperty> GetTroopConformityTooltip(TroopRosterElement troop)`

**Purpose:** Reads and returns the `troop conformity tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTroopConformityTooltip(troop);
```

### GetLearningRateTooltip
`public static List<TooltipProperty> GetLearningRateTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, int skillValue, SkillObject skill)`

**Purpose:** Reads and returns the `learning rate tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetLearningRateTooltip(characterAttributes, 0, 0, skill);
```

### GetTroopXPTooltip
`public static List<TooltipProperty> GetTroopXPTooltip(TroopRosterElement troop)`

**Purpose:** Reads and returns the `troop x p tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTroopXPTooltip(troop);
```

### GetLearningLimitTooltip
`public static List<TooltipProperty> GetLearningLimitTooltip(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes, int focusValue, SkillObject skill)`

**Purpose:** Reads and returns the `learning limit tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetLearningLimitTooltip(characterAttributes, 0, skill);
```

### GetSettlementConsumptionTooltip
`public static List<TooltipProperty> GetSettlementConsumptionTooltip(Settlement settlement)`

**Purpose:** Reads and returns the `settlement consumption tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSettlementConsumptionTooltip(settlement);
```

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(CharacterObject character, bool isBig = false)`

**Purpose:** Reads and returns the `character tier data` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCharacterTierData(character, false);
```

### GetSettlementProductionTooltip
`public static List<TooltipProperty> GetSettlementProductionTooltip(Settlement settlement)`

**Purpose:** Reads and returns the `settlement production tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSettlementProductionTooltip(settlement);
```

### GetHintTextFromReasons
`public static string GetHintTextFromReasons(List<TextObject> reasons)`

**Purpose:** Reads and returns the `hint text from reasons` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHintTextFromReasons(reasons);
```

### MergeTextObjectsWithNewline
`public static string MergeTextObjectsWithNewline(List<TextObject> textObjects)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignUIHelper.MergeTextObjectsWithNewline(textObjects);
```

### GetHoursAndDaysTextFromHourValue
`public static TextObject GetHoursAndDaysTextFromHourValue(int hours)`

**Purpose:** Reads and returns the `hours and days text from hour value` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHoursAndDaysTextFromHourValue(0);
```

### GetTeleportationDelayText
`public static TextObject GetTeleportationDelayText(Hero hero, PartyBase target)`

**Purpose:** Reads and returns the `teleportation delay text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTeleportationDelayText(hero, target);
```

### GetTimeOfDayAndResetCameraTooltip
`public static List<TooltipProperty> GetTimeOfDayAndResetCameraTooltip()`

**Purpose:** Reads and returns the `time of day and reset camera tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTimeOfDayAndResetCameraTooltip();
```

### GetTournamentChampionRewardsTooltip
`public static List<TooltipProperty> GetTournamentChampionRewardsTooltip(Hero hero, Town town)`

**Purpose:** Reads and returns the `tournament champion rewards tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTournamentChampionRewardsTooltip(hero, town);
```

### GetCharacterTypeData
`public static StringItemWithHintVM GetCharacterTypeData(CharacterObject character, bool isBig = false)`

**Purpose:** Reads and returns the `character type data` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCharacterTypeData(character, false);
```

### GetHeroHealthTooltip
`public static List<TooltipProperty> GetHeroHealthTooltip(Hero hero)`

**Purpose:** Reads and returns the `hero health tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroHealthTooltip(hero);
```

### GetSiegeWallTooltip
`public static List<TooltipProperty> GetSiegeWallTooltip(int wallLevel, int wallHitpoints)`

**Purpose:** Reads and returns the `siege wall tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSiegeWallTooltip(0, 0);
```

### GetGovernorPerksTooltipForHero
`public static List<TooltipProperty> GetGovernorPerksTooltipForHero(Hero hero)`

**Purpose:** Reads and returns the `governor perks tooltip for hero` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetGovernorPerksTooltipForHero(hero);
```

### GetGovernorSelectionConfirmationPopupTexts
`public static ValueTuple<TextObject, TextObject> GetGovernorSelectionConfirmationPopupTexts(Hero currentGovernor, Hero newGovernor, Settlement settlement)`

**Purpose:** Reads and returns the `governor selection confirmation popup texts` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetGovernorSelectionConfirmationPopupTexts(currentGovernor, newGovernor, settlement);
```

### GetHeroGovernorEffectsTooltip
`public static List<TooltipProperty> GetHeroGovernorEffectsTooltip(Hero hero, Settlement settlement)`

**Purpose:** Reads and returns the `hero governor effects tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroGovernorEffectsTooltip(hero, settlement);
```

### GetEncounterPartyMoraleTooltip
`public static List<TooltipProperty> GetEncounterPartyMoraleTooltip(List<MobileParty> parties)`

**Purpose:** Reads and returns the `encounter party morale tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetEncounterPartyMoraleTooltip(parties);
```

### GetCraftingTemplatePieceUnlockProgressHint
`public static TextObject GetCraftingTemplatePieceUnlockProgressHint(float progress)`

**Purpose:** Reads and returns the `crafting template piece unlock progress hint` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCraftingTemplatePieceUnlockProgressHint(0);
```

### GetWeaponFlagDetails
`public static List<ValueTuple<string, TextObject>> GetWeaponFlagDetails(WeaponFlags weaponFlags, CharacterObject character = null)`

**Purpose:** Reads and returns the `weapon flag details` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetWeaponFlagDetails(weaponFlags, null);
```

### GetItemFlagDetails
`public static List<Tuple<string, TextObject>> GetItemFlagDetails(ItemFlags itemFlags)`

**Purpose:** Reads and returns the `item flag details` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetItemFlagDetails(itemFlags);
```

### GetItemUsageSetFlagDetails
`public static List<ValueTuple<string, TextObject>> GetItemUsageSetFlagDetails(ItemObject.ItemUsageSetFlags flags, CharacterObject character = null)`

**Purpose:** Reads and returns the `item usage set flag details` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetItemUsageSetFlagDetails(flags, null);
```

### GetFlagDetailsForWeapon
`public static List<ValueTuple<string, TextObject>> GetFlagDetailsForWeapon(WeaponComponentData weapon, ItemObject.ItemUsageSetFlags itemUsageFlags, CharacterObject character = null)`

**Purpose:** Reads and returns the `flag details for weapon` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetFlagDetailsForWeapon(weapon, itemUsageFlags, null);
```

### GetFormattedItemPropertyText
`public static string GetFormattedItemPropertyText(float propertyValue, bool typeRequiresInteger)`

**Purpose:** Reads and returns the `formatted item property text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetFormattedItemPropertyText(0, false);
```

### GetCraftingHeroTooltip
`public static List<TooltipProperty> GetCraftingHeroTooltip(Hero hero, CraftingOrder order)`

**Purpose:** Reads and returns the `crafting hero tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCraftingHeroTooltip(hero, order);
```

### GetOrderCannotBeCompletedReasonTooltip
`public static List<TooltipProperty> GetOrderCannotBeCompletedReasonTooltip(CraftingOrder order, ItemObject item)`

**Purpose:** Reads and returns the `order cannot be completed reason tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetOrderCannotBeCompletedReasonTooltip(order, item);
```

### GetCraftingOrderDisabledReasonTooltip
`public static List<TooltipProperty> GetCraftingOrderDisabledReasonTooltip(Hero heroToCheck, CraftingOrder order)`

**Purpose:** Reads and returns the `crafting order disabled reason tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCraftingOrderDisabledReasonTooltip(heroToCheck, order);
```

### GetOrdersDisabledReasonTooltip
`public static List<TooltipProperty> GetOrdersDisabledReasonTooltip(MBBindingList<CraftingOrderItemVM> craftingOrders, Hero heroToCheck)`

**Purpose:** Reads and returns the `orders disabled reason tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetOrdersDisabledReasonTooltip(craftingOrders, heroToCheck);
```

### GetCraftingOrderMissingPropertyWarningText
`public static string GetCraftingOrderMissingPropertyWarningText(CraftingOrder order, ItemObject craftedItem)`

**Purpose:** Reads and returns the `crafting order missing property warning text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCraftingOrderMissingPropertyWarningText(order, craftedItem);
```

### GetInventoryCharacterTooltip
`public static List<TooltipProperty> GetInventoryCharacterTooltip(Hero hero)`

**Purpose:** Reads and returns the `inventory character tooltip` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetInventoryCharacterTooltip(hero);
```

### GetHeroOccupationName
`public static string GetHeroOccupationName(Hero hero)`

**Purpose:** Reads and returns the `hero occupation name` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroOccupationName(hero);
```

### GetCommaSeparatedText
`public static TextObject GetCommaSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**Purpose:** Reads and returns the `comma separated text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCommaSeparatedText(label, texts);
```

### GetCommaNewlineSeparatedText
`public static TextObject GetCommaNewlineSeparatedText(TextObject label, IEnumerable<TextObject> texts)`

**Purpose:** Reads and returns the `comma newline separated text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCommaNewlineSeparatedText(label, texts);
```

### GetHeroKingdomRank
`public static string GetHeroKingdomRank(Hero hero)`

**Purpose:** Reads and returns the `hero kingdom rank` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroKingdomRank(hero);
```

### GetHeroRank
`public static string GetHeroRank(Hero hero)`

**Purpose:** Reads and returns the `hero rank` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroRank(hero);
```

### IsSettlementInformationHidden
`public static bool IsSettlementInformationHidden(Settlement settlement, out TextObject disableReason)`

**Purpose:** Determines whether the current object is in the `settlement information hidden` state or condition.

```csharp
// Static call; no instance required
CampaignUIHelper.IsSettlementInformationHidden(settlement, disableReason);
```

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**Purpose:** Determines whether the current object is in the `hero information hidden` state or condition.

```csharp
// Static call; no instance required
CampaignUIHelper.IsHeroInformationHidden(hero, disableReason);
```

### GetPartyNameplateText
`public static string GetPartyNameplateText(MobileParty party, bool includeAttachedParties)`

**Purpose:** Reads and returns the `party nameplate text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyNameplateText(party, false);
```

### GetPartyNameplateText
`public static string GetPartyNameplateText(PartyBase party)`

**Purpose:** Reads and returns the `party nameplate text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyNameplateText(party);
```

### GetValueChangeText
`public static string GetValueChangeText(float originalValue, float valueChange, string valueFormat = "F0")`

**Purpose:** Reads and returns the `value change text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetValueChangeText(0, 0, "example");
```

### GetUpgradeHint
`public static string GetUpgradeHint(int index, int numOfItems, int availableUpgrades, int upgradeCoinCost, bool hasRequiredPerk, PerkObject requiredPerk, CharacterObject character, TroopRosterElement troop, int partyGoldChangeAmount, bool areUpgradesDisabled)`

**Purpose:** Reads and returns the `upgrade hint` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetUpgradeHint(0, 0, 0, 0, false, requiredPerk, character, troop, 0, false);
```

### GetStackModifierString
`public static string GetStackModifierString(TextObject allStackText, TextObject fiveStackText, bool canFiveStack)`

**Purpose:** Reads and returns the `stack modifier string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetStackModifierString(allStackText, fiveStackText, false);
```

### ConvertToHexColor
`public static string ConvertToHexColor(uint color)`

**Purpose:** Converts `to hex color` into another representation or type.

```csharp
// Static call; no instance required
CampaignUIHelper.ConvertToHexColor(0);
```

### GetMapScreenActionIsEnabledWithReason
`public static bool GetMapScreenActionIsEnabledWithReason(out TextObject disabledReason)`

**Purpose:** Reads and returns the `map screen action is enabled with reason` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(disabledReason);
```

### GetCanManageCurrentArmyWithReason
`public static bool GetCanManageCurrentArmyWithReason(out TextObject disabledReason)`

**Purpose:** Reads and returns the `can manage current army with reason` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCanManageCurrentArmyWithReason(disabledReason);
```

### GetClanSupportDisableReasonString
`public static string GetClanSupportDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isMainClanMercenary)`

**Purpose:** Reads and returns the `clan support disable reason string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetClanSupportDisableReasonString(false, false, false);
```

### GetClanExpelDisableReasonString
`public static string GetClanExpelDisableReasonString(bool hasEnoughInfluence, bool isTargetMainClan, bool isTargetRulingClan, bool isMainClanMercenary)`

**Purpose:** Reads and returns the `clan expel disable reason string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetClanExpelDisableReasonString(false, false, false, false);
```

### GetArmyDisbandDisableReasonString
`public static string GetArmyDisbandDisableReasonString(bool hasEnoughInfluence, bool isArmyInAnyEvent, bool isPlayerClanMercenary, bool isPlayerInThisArmy)`

**Purpose:** Reads and returns the `army disband disable reason string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetArmyDisbandDisableReasonString(false, false, false, false);
```

### GetCreateNewPartyReasonString
`public static TextObject GetCreateNewPartyReasonString(bool haveEmptyPartySlots, bool haveAvailableHero)`

**Purpose:** Reads and returns the `create new party reason string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCreateNewPartyReasonString(false, false);
```

### GetCraftingDisableReasonString
`public static string GetCraftingDisableReasonString(bool playerHasEnoughMaterials)`

**Purpose:** Reads and returns the `crafting disable reason string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCraftingDisableReasonString(false);
```

### GetAddFocusHintString
`public static string GetAddFocusHintString(bool playerHasEnoughPoints, bool isMaxedSkill, int currentFocusAmount)`

**Purpose:** Reads and returns the `add focus hint string` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetAddFocusHintString(false, false, 0);
```

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**Purpose:** Reads and returns the `skill effect text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSkillEffectText(effect, 0);
```

### GetMobilePartyBehaviorText
`public static string GetMobilePartyBehaviorText(MobileParty party)`

**Purpose:** Reads and returns the `mobile party behavior text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetMobilePartyBehaviorText(party);
```

### GetHeroBehaviorText
`public static string GetHeroBehaviorText(Hero hero, ITeleportationCampaignBehavior teleportationBehavior = null)`

**Purpose:** Reads and returns the `hero behavior text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroBehaviorText(hero, null);
```

### GetPartyLocationText
`public static string GetPartyLocationText(MobileParty mobileParty)`

**Purpose:** Reads and returns the `party location text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyLocationText(mobileParty);
```

### GetTeleportingLeaderHero
`public static Hero GetTeleportingLeaderHero(MobileParty party, ITeleportationCampaignBehavior teleportationBehavior)`

**Purpose:** Reads and returns the `teleporting leader hero` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTeleportingLeaderHero(party, teleportationBehavior);
```

### GetTeleportingGovernor
`public static Hero GetTeleportingGovernor(Settlement settlement, ITeleportationCampaignBehavior teleportationBehavior)`

**Purpose:** Reads and returns the `teleporting governor` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTeleportingGovernor(settlement, teleportationBehavior);
```

### GetHeroRelationToHeroText
`public static TextObject GetHeroRelationToHeroText(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**Purpose:** Reads and returns the `hero relation to hero text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroRelationToHeroText(queriedHero, baseHero, false);
```

### GetAbbreviatedValueTextFromValue
`public static string GetAbbreviatedValueTextFromValue(int valueAmount)`

**Purpose:** Reads and returns the `abbreviated value text from value` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetAbbreviatedValueTextFromValue(0);
```

### GetPartyDistanceByTimeText
`public static string GetPartyDistanceByTimeText(float distance, float speed)`

**Purpose:** Reads and returns the `party distance by time text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyDistanceByTimeText(0, 0);
```

### GetPartyDistanceByTimeTextAbbreviated
`public static string GetPartyDistanceByTimeTextAbbreviated(float distance, float speed)`

**Purpose:** Reads and returns the `party distance by time text abbreviated` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetPartyDistanceByTimeTextAbbreviated(0, 0);
```

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**Purpose:** Reads and returns the `character code` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetCharacterCode(character, false);
```

### GetTraitNameText
`public static string GetTraitNameText(TraitObject traitObject, Hero hero)`

**Purpose:** Reads and returns the `trait name text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTraitNameText(traitObject, hero);
```

### GetTraitTooltipText
`public static string GetTraitTooltipText(TraitObject traitObject, int traitValue)`

**Purpose:** Reads and returns the `trait tooltip text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTraitTooltipText(traitObject, 0);
```

### GetTextForRole
`public static string GetTextForRole(PartyRole role)`

**Purpose:** Reads and returns the `text for role` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTextForRole(role);
```

### GetAttributeTypeSortIndex
`public static int GetAttributeTypeSortIndex(CharacterAttribute attribute)`

**Purpose:** Reads and returns the `attribute type sort index` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetAttributeTypeSortIndex(attribute);
```

### GetSkillObjectTypeSortIndex
`public static int GetSkillObjectTypeSortIndex(SkillObject skill)`

**Purpose:** Reads and returns the `skill object type sort index` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSkillObjectTypeSortIndex(skill);
```

### GetSkillMeshId
`public static string GetSkillMeshId(SkillObject skill, bool useSmallestVariation = true)`

**Purpose:** Reads and returns the `skill mesh id` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetSkillMeshId(skill, false);
```

### GetIsNavalSkill
`public static bool GetIsNavalSkill(SkillObject skill)`

**Purpose:** Reads and returns the `is naval skill` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetIsNavalSkill(skill);
```

### GetHeroCompareSortIndex
`public static int GetHeroCompareSortIndex(Hero x, Hero y)`

**Purpose:** Reads and returns the `hero compare sort index` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroCompareSortIndex(x, y);
```

### GetHeroClanRoleText
`public static string GetHeroClanRoleText(Hero hero, Clan clan)`

**Purpose:** Reads and returns the `hero clan role text` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroClanRoleText(hero, clan);
```

### GetItemObjectTypeSortIndex
`public static int GetItemObjectTypeSortIndex(ItemObject item)`

**Purpose:** Reads and returns the `item object type sort index` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetItemObjectTypeSortIndex(item);
```

### GetItemLockStringID
`public static string GetItemLockStringID(EquipmentElement equipmentElement)`

**Purpose:** Reads and returns the `item lock string i d` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetItemLockStringID(equipmentElement);
```

### GetTroopLockStringID
`public static string GetTroopLockStringID(TroopRosterElement rosterElement)`

**Purpose:** Reads and returns the `troop lock string i d` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetTroopLockStringID(rosterElement);
```

### GetQuestStateOfHero
`public static List<ValueTuple<CampaignUIHelper.IssueQuestFlags, TextObject, TextObject>> GetQuestStateOfHero(Hero queriedHero)`

**Purpose:** Reads and returns the `quest state of hero` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetQuestStateOfHero(queriedHero);
```

### GetQuestExplanationOfHero
`public static string GetQuestExplanationOfHero(CampaignUIHelper.IssueQuestFlags questType)`

**Purpose:** Reads and returns the `quest explanation of hero` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetQuestExplanationOfHero(questType);
```

### GetQuestsRelatedToHero
`public static List<QuestBase> GetQuestsRelatedToHero(Hero hero)`

**Purpose:** Reads and returns the `quests related to hero` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetQuestsRelatedToHero(hero);
```

### GetQuestsRelatedToParty
`public static List<QuestBase> GetQuestsRelatedToParty(MobileParty party)`

**Purpose:** Reads and returns the `quests related to party` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetQuestsRelatedToParty(party);
```

### GetQuestsRelatedToSettlement
`public static List<ValueTuple<bool, QuestBase>> GetQuestsRelatedToSettlement(Settlement settlement)`

**Purpose:** Reads and returns the `quests related to settlement` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetQuestsRelatedToSettlement(settlement);
```

### IsQuestRelatedToSettlement
`public static bool IsQuestRelatedToSettlement(QuestBase quest, Settlement settlement)`

**Purpose:** Determines whether the current object is in the `quest related to settlement` state or condition.

```csharp
// Static call; no instance required
CampaignUIHelper.IsQuestRelatedToSettlement(quest, settlement);
```

### GetIssueType
`public static CampaignUIHelper.IssueQuestFlags GetIssueType(IssueBase issue)`

**Purpose:** Reads and returns the `issue type` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetIssueType(issue);
```

### GetQuestType
`public static CampaignUIHelper.IssueQuestFlags GetQuestType(QuestBase quest, Hero queriedQuestGiver)`

**Purpose:** Reads and returns the `quest type` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetQuestType(quest, queriedQuestGiver);
```

### GetHeroTraits
`public static IEnumerable<TraitObject> GetHeroTraits()`

**Purpose:** Reads and returns the `hero traits` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetHeroTraits();
```

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**Purpose:** Determines whether the current object is in the `item usage applicable` state or condition.

```csharp
// Static call; no instance required
CampaignUIHelper.IsItemUsageApplicable(weapon);
```

### FloatToString
`public static string FloatToString(float x)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CampaignUIHelper.FloatToString(0);
```

### IsStringApplicableForHeroName
`public static Tuple<bool, string> IsStringApplicableForHeroName(string name)`

**Purpose:** Determines whether the current object is in the `string applicable for hero name` state or condition.

```csharp
// Static call; no instance required
CampaignUIHelper.IsStringApplicableForHeroName("example");
```

### IsStringApplicableForItemName
`public static Tuple<bool, TextObject> IsStringApplicableForItemName(string name)`

**Purpose:** Determines whether the current object is in the `string applicable for item name` state or condition.

```csharp
// Static call; no instance required
CampaignUIHelper.IsStringApplicableForItemName("example");
```

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**Purpose:** Reads and returns the `visual party leader` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetVisualPartyLeader(party);
```

### GetChildrenAndGrandchildrenOfHero
`public static List<Hero> GetChildrenAndGrandchildrenOfHero(Hero hero)`

**Purpose:** Reads and returns the `children and grandchildren of hero` value held by the current object.

```csharp
// Static call; no instance required
CampaignUIHelper.GetChildrenAndGrandchildrenOfHero(hero);
```

### Compare
`public int Compare(CharacterAttribute x, CharacterAttribute y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of CampaignUIHelper from the subsystem API first
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Compare(x, y);
```

### Compare
`public int Compare(SkillObject x, SkillObject y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of CampaignUIHelper from the subsystem API first
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Compare(x, y);
```

### Compare
`public int Compare(MobileParty x, MobileParty y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of CampaignUIHelper from the subsystem API first
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Compare(x, y);
```

### Equals
`public bool Equals(ValueTuple<ItemCategory, int> x, ValueTuple<ItemCategory, int> y)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of CampaignUIHelper from the subsystem API first
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.Equals(valueTuple<ItemCategory, 0, valueTuple<ItemCategory, 0);
```

### GetHashCode
`public int GetHashCode(ValueTuple<ItemCategory, int> obj)`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of CampaignUIHelper from the subsystem API first
CampaignUIHelper campaignUIHelper = ...;
var result = campaignUIHelper.GetHashCode(valueTuple<ItemCategory, 0);
```

## Usage Example

```csharp
CampaignUIHelper.Initialize();
```

## See Also

- [Area Index](../)