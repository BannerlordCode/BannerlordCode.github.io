---
title: "SandBoxUIHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxUIHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxUIHelper

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public static class SandBoxUIHelper`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## Overview

`SandBoxUIHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `SandBoxUIHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetExplainedNumberTooltip
`public static List<TooltipProperty> GetExplainedNumberTooltip(ref ExplainedNumber explanation)`

**Purpose:** Gets the current value of `explained number tooltip`.

### GetBattleLootAwardTooltip
`public static List<TooltipProperty> GetBattleLootAwardTooltip(float lootPercentage)`

**Purpose:** Gets the current value of `battle loot award tooltip`.

### GetFigureheadTooltip
`public static List<TooltipProperty> GetFigureheadTooltip(Figurehead figurehead)`

**Purpose:** Gets the current value of `figurehead tooltip`.

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**Purpose:** Gets the current value of `skill effect text`.

### GetRecruitNotificationText
`public static string GetRecruitNotificationText(int recruitmentAmount)`

**Purpose:** Gets the current value of `recruit notification text`.

### GetItemSoldNotificationText
`public static string GetItemSoldNotificationText(ItemRosterElement item, int itemAmount, bool fromHeroToSettlement)`

**Purpose:** Gets the current value of `item sold notification text`.

### GetShipSoldNotificationText
`public static string GetShipSoldNotificationText(Ship ship, int itemAmount, bool fromHeroToSettlement)`

**Purpose:** Gets the current value of `ship sold notification text`.

### GetTroopGivenToSettlementNotificationText
`public static string GetTroopGivenToSettlementNotificationText(int givenAmount)`

**Purpose:** Gets the current value of `troop given to settlement notification text`.

### GetSiegeEngineInProgressTooltip
`public static List<TooltipProperty> GetSiegeEngineInProgressTooltip(SiegeEngineConstructionProgress engineInProgress)`

**Purpose:** Gets the current value of `siege engine in progress tooltip`.

### GetSiegeEngineTooltip
`public static List<TooltipProperty> GetSiegeEngineTooltip(SiegeEngineType engine)`

**Purpose:** Gets the current value of `siege engine tooltip`.

### GetWallSectionTooltip
`public static List<TooltipProperty> GetWallSectionTooltip(Settlement settlement, int wallIndex)`

**Purpose:** Gets the current value of `wall section tooltip`.

### GetPrisonersSoldNotificationText
`public static string GetPrisonersSoldNotificationText(int soldPrisonerAmount)`

**Purpose:** Gets the current value of `prisoners sold notification text`.

### GetPartyHealthyCount
`public static int GetPartyHealthyCount(MobileParty party)`

**Purpose:** Gets the current value of `party healthy count`.

### GetPartyWoundedText
`public static string GetPartyWoundedText(int woundedAmount)`

**Purpose:** Gets the current value of `party wounded text`.

### GetPartyPrisonerText
`public static string GetPartyPrisonerText(int prisonerAmount)`

**Purpose:** Gets the current value of `party prisoner text`.

### GetAllWoundedMembersAmount
`public static int GetAllWoundedMembersAmount(MobileParty party)`

**Purpose:** Gets the current value of `all wounded members amount`.

### GetAllPrisonerMembersAmount
`public static int GetAllPrisonerMembersAmount(MobileParty party)`

**Purpose:** Gets the current value of `all prisoner members amount`.

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**Purpose:** Gets the current value of `character code`.

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**Purpose:** Handles logic related to `is hero information hidden`.

### GetMapEventVisualTypeFromMapEvent
`public static MapEventVisualTypes GetMapEventVisualTypeFromMapEvent(MapEvent mapEvent)`

**Purpose:** Gets the current value of `map event visual type from map event`.

### IsAgentInVisibilityRangeApproximate
`public static bool IsAgentInVisibilityRangeApproximate(Agent seerAgent, Agent seenAgent)`

**Purpose:** Handles logic related to `is agent in visibility range approximate`.

### CanAgentBeAlarmed
`public static bool CanAgentBeAlarmed(Agent agent)`

**Purpose:** Checks whether the current object can `agent be alarmed`.

## Usage Example

```csharp
SandBoxUIHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)