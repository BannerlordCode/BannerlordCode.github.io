<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyPrecedenceComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyPrecedenceComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MobilePartyPrecedenceComparer : IComparer<MobileParty>`
**Base:** `IComparer<MobileParty>`
**Area:** campaign-ext

## Overview

`MobilePartyPrecedenceComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public static string GetTownPatrolTooltip(Town town)`

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MobilePartyPrecedenceComparer.GetTooltipForAccumulatingProperty("example", 0, explainedNumber);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
